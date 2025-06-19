import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { insertApplicationSchema, insertDonationSchema } from "@shared/schema";

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2025-05-28.basil" })
  : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // Application submission endpoint
  app.post("/api/applications", async (req, res) => {
    try {
      const validatedData = insertApplicationSchema.parse(req.body);
      const application = await storage.createApplication(validatedData);
      res.json({ success: true, application });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid application data", 
        error: error.message 
      });
    }
  });

  // Get applications endpoint (for admin)
  app.get("/api/applications", async (req, res) => {
    try {
      const applications = await storage.getApplications();
      res.json({ success: true, applications });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Error fetching applications", 
        error: error.message 
      });
    }
  });

  // Stripe payment intent creation for donations
  app.post("/api/create-payment-intent", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ 
        success: false, 
        message: "Payment processing is currently unavailable. Please contact us directly to make a donation." 
      });
    }

    try {
      const { amount, email, name } = req.body;
      
      if (!amount || amount < 1) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid donation amount" 
        });
      }

      // Create donation record
      const donation = await storage.createDonation({
        amount: Math.round(amount * 100), // Store in cents
        email,
        name
      });

      // Create Stripe payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        metadata: {
          donationId: donation.id.toString()
        }
      });

      // Update donation with Stripe payment intent ID
      await storage.updateDonationStatus(
        donation.id, 
        "processing", 
        paymentIntent.id
      );

      res.json({ 
        success: true,
        clientSecret: paymentIntent.client_secret,
        donationId: donation.id
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false,
        message: "Error creating payment intent: " + error.message 
      });
    }
  });

  // Webhook endpoint for Stripe events
  app.post("/api/stripe-webhook", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ 
        success: false, 
        message: "Payment processing is currently unavailable." 
      });
    }

    try {
      const sig = req.headers['stripe-signature'];
      
      if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
        return res.status(400).send('Missing signature');
      }

      const event = stripe.webhooks.constructEvent(
        req.body, 
        sig, 
        process.env.STRIPE_WEBHOOK_SECRET
      );

      if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const donationId = paymentIntent.metadata.donationId;
        
        if (donationId) {
          await storage.updateDonationStatus(
            parseInt(donationId), 
            "completed"
          );
        }
      }

      res.json({ received: true });
    } catch (error: any) {
      res.status(400).json({ 
        success: false,
        message: "Webhook error: " + error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

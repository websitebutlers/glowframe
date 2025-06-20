import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { DONATION_AMOUNTS } from "@/lib/constants";
import { Video, Lightbulb, Mic, Monitor, Wrench } from "lucide-react";

const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

function EquipmentContactForm() {
  return (
    <div className="text-center space-y-4">
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdVY8OItflFgs9aT2pBy820n1taEZYAvYo8ZrsvjA6SsrX3FA/viewform?vc=0&c=0&w=1&flr=0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button className="w-full bg-glow-gold text-black hover:bg-yellow-400 font-bold">
          Contact Us About Equipment
        </Button>
      </a>
      <p className="text-xs text-gray-400">
        Opens in a new window • Secure Google Form
      </p>
    </div>
  );
}

interface CheckoutFormProps {
  amount: number;
  donorInfo: { name: string; email: string };
}

function CheckoutForm({ amount, donorInfo }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/get-involved`,
      },
    });

    if (result.error) {
      toast({
        title: "Payment Failed",
        description: result.error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Complete Your Donation</h3>
        <p className="text-gray-300">
          ${amount} donation from {donorInfo.name}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <PaymentElement />
        <Button 
          type="submit" 
          disabled={!stripe}
          className="w-full bg-glow-gold text-black hover:bg-yellow-400 font-bold"
          size="lg"
        >
          Complete Donation
        </Button>
      </form>
    </div>
  );
}

export default function DonationSection() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = useMutation({
    mutationFn: async (data: { amount: number; name: string; email: string }) => {
      // Donation functionality temporarily disabled
      throw new Error("Donation processing is currently being set up. Please contact us directly to make a donation.");
    },
    onSuccess: (data) => {
      setClientSecret(data.clientSecret);
      toast({
        title: "Payment Initialized",
        description: "Please complete your payment details below.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Donation Setup In Progress",
        description: "Donation processing is currently being set up. Please contact us directly to make a donation.",
        variant: "destructive",
      });
    },
  });

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonationStart = () => {
    if (!stripePromise) {
      toast({
        title: "Payment Processing Unavailable",
        description: "Online donations are currently unavailable. Please contact us directly to make a donation.",
        variant: "destructive",
      });
      return;
    }

    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount of $1 or more.",
        variant: "destructive",
      });
      return;
    }

    if (!donorName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }

    if (!donorEmail.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    createPaymentIntent.mutate({
      amount,
      name: donorName.trim(),
      email: donorEmail.trim(),
    });
  };

  if (clientSecret && stripePromise) {
    return (
      <section id="donate" className="py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <Card className="bg-black border-gray-800">
              <CardContent className="pt-6">
                <CheckoutForm 
                  amount={selectedAmount || parseFloat(customAmount)} 
                  donorInfo={{ name: donorName, email: donorEmail }}
                />
              </CardContent>
            </Card>
          </Elements>
        </div>
      </section>
    );
  }

  return (
    <section id="donate" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us empower the next generation of filmmakers and AV professionals. Your support makes real impact possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Make a Donation</CardTitle>
              <p className="text-gray-300">
                Your financial support helps us provide equipment, facilities, and expert instruction to young adults who need it most.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {DONATION_AMOUNTS.map((donation) => (
                  <button
                    key={donation.value}
                    onClick={() => handleAmountSelect(donation.value)}
                    className={`w-full flex items-center justify-between p-4 border rounded transition-colors duration-200 ${
                      selectedAmount === donation.value
                        ? 'border-glow-gold bg-glow-gold/10'
                        : 'border-gray-700 hover:border-glow-gold'
                    }`}
                  >
                    <span className="font-semibold">${donation.value}</span>
                    <span className="text-sm text-gray-300">{donation.description}</span>
                  </button>
                ))}
              </div>

              <Separator className="bg-gray-700" />

              <div>
                <Label htmlFor="custom-amount" className="text-sm font-medium mb-2 block">
                  Custom Amount
                </Label>
                <Input
                  id="custom-amount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="bg-black border-gray-700 focus:border-electric-blue"
                />
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-4">
                <div>
                  <Label htmlFor="donor-name" className="text-sm font-medium mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="donor-name"
                    type="text"
                    placeholder="Enter your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="bg-black border-gray-700 focus:border-electric-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="donor-email" className="text-sm font-medium mb-2 block">
                    Your Email
                  </Label>
                  <Input
                    id="donor-email"
                    type="email"
                    placeholder="Enter your email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="bg-black border-gray-700 focus:border-electric-blue"
                  />
                </div>
              </div>

              <Button
                onClick={handleDonationStart}
                disabled={createPaymentIntent.isPending}
                className="w-full bg-glow-gold text-black hover:bg-yellow-400 font-bold"
                size="lg"
              >
                {createPaymentIntent.isPending ? "Processing..." : "Donate Now"}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Equipment Donations & Contact</CardTitle>
              <p className="text-gray-300">
                We also accept donations of AV and video equipment. Your generous contributions help us equip aspiring filmmakers with the tools they need.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Video className="text-glow-gold mr-4 h-6 w-6" />
                  <span>Cameras & Lenses</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="text-glow-gold mr-4 h-6 w-6" />
                  <span>Lighting Equipment</span>
                </div>
                <div className="flex items-center">
                  <Mic className="text-glow-gold mr-4 h-6 w-6" />
                  <span>Audio Equipment</span>
                </div>
                <div className="flex items-center">
                  <Monitor className="text-glow-gold mr-4 h-6 w-6" />
                  <span>Computers & Editing Software</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="text-glow-gold mr-4 h-6 w-6" />
                  <span>Production Tools & Accessories</span>
                </div>
              </div>

              <EquipmentContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
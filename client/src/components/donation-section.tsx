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

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface CheckoutFormProps {
  amount: number;
  donorInfo: { name: string; email: string };
}

function CheckoutForm({ amount, donorInfo }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}#donate`,
      },
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Thank You!",
        description: "Your donation has been processed successfully.",
      });
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Complete Your Donation</h3>
        <p className="text-gray-300">
          ${amount} donation from {donorInfo.name}
        </p>
      </div>
      
      <PaymentElement />
      
      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-glow-gold text-black hover:bg-yellow-400 font-bold"
        size="lg"
      >
        {isProcessing ? "Processing..." : `Donate $${amount}`}
      </Button>
    </form>
  );
}

export default function DonationSection() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  const createPaymentIntent = useMutation({
    mutationFn: async (data: { amount: number; name: string; email: string }) => {
      const response = await apiRequest("POST", "/api/create-payment-intent", data);
      return response.json();
    },
    onSuccess: (data) => {
      setClientSecret(data.clientSecret);
      setShowPayment(true);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleDonationStart = () => {
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

    if (!donorEmail.trim() || !donorEmail.includes("@")) {
      toast({
        title: "Valid Email Required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    createPaymentIntent.mutate({
      amount,
      name: donorName,
      email: donorEmail
    });
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  if (showPayment && clientSecret) {
    return (
      <section id="donate" className="py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-black border-gray-800">
            <CardContent className="p-8">
              <Elements 
                stripe={stripePromise} 
                options={{ 
                  clientSecret,
                  appearance: {
                    theme: 'night',
                    variables: {
                      colorPrimary: '#FFD700',
                    }
                  }
                }}
              >
                <CheckoutForm 
                  amount={selectedAmount || parseFloat(customAmount)} 
                  donorInfo={{ name: donorName, email: donorEmail }}
                />
              </Elements>
            </CardContent>
          </Card>
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
                {createPaymentIntent.isPending ? "Processing..." : "Continue to Payment"}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Equipment Donations</CardTitle>
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

              <Button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="secondary"
                className="w-full bg-electric-blue text-black hover:bg-blue-400 font-bold"
                size="lg"
              >
                Contact Us About Equipment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

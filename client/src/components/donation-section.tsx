import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DONATION_AMOUNTS } from "@/lib/constants";
import { Video, Lightbulb, Mic, Monitor, Wrench } from "lucide-react";



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



export default function DonationSection() {

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
                  <div
                    key={donation.value}
                    className="w-full flex items-center justify-between p-4 border border-gray-700 rounded"
                  >
                    <span className="font-semibold">${donation.value}</span>
                    <span className="text-sm text-gray-300">{donation.description}</span>
                  </div>
                ))}
              </div>

              <div className="text-center text-gray-300">
                <p className="text-sm">
                  Click "Donate Now" to choose your amount and complete your donation securely through Stripe.
                </p>
              </div>

              <a
                href="https://buy.stripe.com/eVa00H5pr96kaS46oo"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  className="w-full bg-glow-gold text-black hover:bg-yellow-400 font-bold"
                  size="lg"
                >
                  Donate Now
                </Button>
              </a>
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
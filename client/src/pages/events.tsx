import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us for workshops, screenings, and community events that bring together aspiring filmmakers and industry professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border border-gray-800 bg-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-glow-gold text-black">Upcoming</Badge>
                    <div className="text-right">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">Date TBA</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Time TBA</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Content Creation for Business Workshop</CardTitle>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Location TBA</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Discover the secrets to creating high-quality, impactful content tailored for business success. Whether you're a beginner or have some experience, this event will empower you with hands-on knowledge from the best in the industry.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Limited Spots Available</span>
                    </div>
                    <Button className="bg-glow-gold text-black hover:bg-yellow-400">
                      Register Interest
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-glow-gold text-black">Upcoming</Badge>
                    <div className="text-right">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">Date TBA</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Time TBA</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Special Events Audio Production</CardTitle>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Location TBA</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Gain expert insights into live audio and event production from industry veteran Chris Grimsley. Whether you're planning a corporate gathering, concert, or special event, this workshop will provide the technical skills and insider knowledge to make it a success.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Limited Spots Available</span>
                    </div>
                    <Button className="bg-glow-gold text-black hover:bg-yellow-400">
                      Register Interest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="bg-gray-900 border-gray-800 p-8 inline-block">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-6 max-w-md">
                    More workshops and events are being planned. Join our mailing list to be the first to know about upcoming dates and registration.
                  </p>
                  <Button className="bg-electric-blue text-black hover:bg-blue-400 font-bold">
                    Join Mailing List
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, Headphones, Camera, Users, Lightbulb } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Educational materials, industry insights, and practical tools to support your journey in film and AV production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-800 bg-card hover:border-glow-gold transition-colors duration-300">
                <CardHeader>
                  <FileText className="text-glow-gold mb-4 h-8 w-8" />
                  <CardTitle className="text-2xl font-bold">Industry Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Comprehensive guides covering essential topics in film production, from pre-production planning to post-production workflows.
                  </p>
                  <Button variant="link" className="text-electric-blue hover:text-blue-300 p-0">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-card hover:border-glow-gold transition-colors duration-300">
                <CardHeader>
                  <Video className="text-glow-gold mb-4 h-8 w-8" />
                  <CardTitle className="text-2xl font-bold">Tutorial Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Step-by-step video tutorials covering equipment operation, filming techniques, and post-production skills.
                  </p>
                  <Button variant="link" className="text-electric-blue hover:text-blue-300 p-0">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-card hover:border-glow-gold transition-colors duration-300">
                <CardHeader>
                  <Headphones className="text-glow-gold mb-4 h-8 w-8" />
                  <CardTitle className="text-2xl font-bold">Audio Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Learn about sound design, live audio mixing, and recording techniques for various production environments.
                  </p>
                  <Button variant="link" className="text-electric-blue hover:text-blue-300 p-0">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-card hover:border-glow-gold transition-colors duration-300">
                <CardHeader>
                  <Camera className="text-glow-gold mb-4 h-8 w-8" />
                  <CardTitle className="text-2xl font-bold">Equipment Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Detailed specifications and best practices for cameras, lighting equipment, and other production tools.
                  </p>
                  <Button variant="link" className="text-electric-blue hover:text-blue-300 p-0">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-card hover:border-glow-gold transition-colors duration-300">
                <CardHeader>
                  <Users className="text-glow-gold mb-4 h-8 w-8" />
                  <CardTitle className="text-2xl font-bold">Career Pathways</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Explore different career opportunities in film and AV industries, with insights from working professionals.
                  </p>
                  <Button variant="link" className="text-electric-blue hover:text-blue-300 p-0">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-card hover:border-glow-gold transition-colors duration-300">
                <CardHeader>
                  <Lightbulb className="text-glow-gold mb-4 h-8 w-8" />
                  <CardTitle className="text-2xl font-bold">Creative Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Inspiration and practical advice for developing your creative vision and storytelling skills.
                  </p>
                  <Button variant="link" className="text-electric-blue hover:text-blue-300 p-0">
                    Coming Soon
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
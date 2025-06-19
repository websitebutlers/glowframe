import { Users, Handshake, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommunitySection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with like-minded creatives, learn from industry professionals, and grow your skills in a supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-black border-gray-800 text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-glow-gold rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-black" />
              </div>
              <CardTitle className="text-xl">Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Connect with fellow creatives, mentors, and industry professionals who share your passion for film and AV production.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800 text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-black" />
              </div>
              <CardTitle className="text-xl">Collaborate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Work on real projects, share resources, and build lasting partnerships that advance your creative career.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800 text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-black" />
              </div>
              <CardTitle className="text-xl">Achieve</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Celebrate successes, showcase your work, and gain recognition within Arizona's growing creative community.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Express Your Interest</CardTitle>
              <p className="text-gray-300 text-center">
                Ready to join our apprenticeship program? Let us know about your interests and goals in the film and AV industry.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="text-center space-y-6">
                <p className="text-gray-300">
                  Complete our interest form to learn more about apprenticeship opportunities and stay connected with our community.
                </p>
                
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdVY8OItflFgs9aT2pBy820n1taEZYAvYo8ZrsvjA6SsrX3FA/viewform?vc=0&c=0&w=1&flr=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    className="bg-electric-blue text-black px-8 py-4 text-lg font-bold hover:bg-blue-400 transition-colors duration-200"
                    size="lg"
                  >
                    Join Our Community
                  </Button>
                </a>
                
                <p className="text-sm text-gray-400">
                  Opens in a new window • Secure Google Form
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
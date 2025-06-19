import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { WORKSHOP_CATEGORIES, PREVIOUS_WORKSHOPS } from "@/lib/constants";

export default function ProgramsSection() {

  return (
    <section id="programs" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Workshops & Programs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build your resume by working on feature films, TV shows, podcasts, and live concerts, all while gaining valuable insights and mentorship from seasoned experts.
          </p>
        </div>

        {/* Previous Workshops Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-electric-blue">Our Workshop History</h3>
            <div className="h-px bg-gradient-to-r from-electric-blue to-transparent flex-1 ml-8"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the professional workshops we've hosted featuring industry experts and real-world training opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PREVIOUS_WORKSHOPS.map((workshop) => (
              <Card key={workshop.id} className="border border-gray-800 bg-card hover:border-electric-blue transition-colors duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-electric-blue/20 text-electric-blue border border-electric-blue/30">
                      Completed
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{workshop.title}</CardTitle>
                  <p className="text-electric-blue font-semibold text-sm">{workshop.completedDate}</p>
                  <p className="text-glow-gold font-medium text-sm">{workshop.instructor}</p>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {workshop.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    <span className="bg-gray-800 px-2 py-1 rounded">📍 {workshop.location}</span>
                    {workshop.maxStudents && (
                      <span className="bg-gray-800 px-2 py-1 rounded">👥 Max {workshop.maxStudents}</span>
                    )}
                    {workshop.partner && (
                      <span className="bg-gray-800 px-2 py-1 rounded">🤝 {workshop.partner}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="bg-gray-900 border-gray-800 p-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Stay Connected for Future Workshops</h3>
              <p className="text-gray-300 mb-6">
                While we don't have upcoming workshops scheduled at this time, join our community to be the first to know about new opportunities and training programs.
              </p>
              <Link href="/get-involved">
                <Button
                  className="bg-glow-gold text-black px-8 py-4 text-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
                  size="lg"
                >
                  Get Involved
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              The Glow-Frame Initiative is a 501(c)(3) non-profit organization dedicated to empowering young adults from underserved communities in Arizona by providing them with real-world experience in the film and AV industries.
            </p>
            
            
            <Link href="/programs">
              <Button className="bg-glow-gold text-black px-6 py-3 font-bold hover:bg-yellow-400 transition-colors duration-200">
                Learn More About Our Programs
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Diverse group of young filmmakers collaborating on a project in a modern studio */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Young diverse filmmakers collaborating" 
              className="rounded-lg shadow-lg object-cover h-48"
            />
            {/* Professional film equipment including cameras and lighting gear */}
            <img 
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional film equipment setup" 
              className="rounded-lg shadow-lg object-cover h-48"
            />
            {/* Film production behind the scenes with crew working */}
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Film production behind the scenes" 
              className="rounded-lg shadow-lg object-cover h-48"
            />
            {/* Modern video editing suite with multiple monitors */}
            <img 
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Video editing suite setup" 
              className="rounded-lg shadow-lg object-cover h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

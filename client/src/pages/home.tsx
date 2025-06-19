import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Footer from "@/components/footer";
import DonationSection from "@/components/donation-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Professional video camera setup with dramatic lighting in a film studio */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/operator-using-camera-on-the-set-2025-03-18-22-13-17-utc.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="border-4 border-white p-8 mb-8 inline-block">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider">GLOW FRAME</h1>
            <div className="text-xl md:text-2xl tracking-widest mt-2">INITIATIVE</div>
          </div>
          
          <p className="md:text-2xl mb-2 text-shadow text-[32px] font-bold">Empowering the Next Generation</p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 tracking-wide">Film. Recording. Arts. Music. Education.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button
                className="bg-glow-gold text-black px-8 py-4 text-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
                size="lg"
              >
                Explore Programs
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button
                variant="outline"
                className="border-2 border-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-black transition-colors duration-200"
                size="lg"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Mission Statement */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/IMG_6436.jpeg')"
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed text-gray-300 mb-8">The Glow-Frame Initiative is a 501(c)(3) nonprofit organization dedicated to empowering individuals from underserved communities through real-world training in the film and audiovisual industries. We offer programs for emerging creatives as well as specialized initiatives for veterans. Our comprehensive apprenticeship model provides hands-on experience on active film sets and live events. Guided by our FRAME pillars—Film, Recording Arts, Music, and Education—we blend technical skill-building with artistic development to prepare participants for creative, sustainable careers.</p>
          <Link href="/about">
            <Button
              variant="link"
              className="text-electric-blue hover:text-blue-300 text-lg font-semibold"
            >
              Learn More About Us →
            </Button>
          </Link>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-800 hover:border-glow-gold transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Learn</h3>
              <p className="text-gray-300 mb-6">
                Master film and AV production through hands-on workshops and expert instruction.
              </p>
              <Link href="/programs">
                <Button className="bg-glow-gold text-black hover:bg-yellow-400">
                  View Programs
                </Button>
              </Link>
            </div>
            
            <div className="text-center p-6 border border-gray-800 hover:border-electric-blue transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Connect</h3>
              <p className="text-gray-300 mb-6">
                Join a community of aspiring filmmakers and industry professionals.
              </p>
              <Link href="/community">
                <Button className="bg-electric-blue text-black hover:bg-blue-400">
                  Join Community
                </Button>
              </Link>
            </div>
            
            <div className="text-center p-6 border border-gray-800 hover:border-white transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Create</h3>
              <p className="text-gray-300 mb-6">
                Build your portfolio working on real film sets and live events.
              </p>
              <Link href="/get-involved">
                <Button variant="outline" className="border-white hover:bg-white hover:text-black">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <DonationSection />
      
      <Footer />
    </div>
  );
}

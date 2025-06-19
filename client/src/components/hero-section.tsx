import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
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
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-shadow">
          Empowering young adults from underserved communities in Arizona with real-world experience in film and AV industries
        </p>
        
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
  );
}

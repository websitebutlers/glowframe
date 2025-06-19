import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import businessman_pointing_at_digital_information_board_2025_04_05_04_11_46_utc from "@assets/businessman-pointing-at-digital-information-board-2025-04-05-04-11-46-utc.jpg";

export default function AboutSection() {

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-300">The Glow-Frame Initiative is a 501(c)(3) nonprofit organization dedicated to empowering individuals from underserved communities through real-world training in the film and audiovisual industries.</p>
            <p className="text-lg mb-6 leading-relaxed text-gray-300">We offer programs for emerging creatives as well as specialized initiatives for veterans. Our comprehensive apprenticeship model provides hands-on experience on active film sets and live events.</p>
            <p className="text-lg mb-8 leading-relaxed text-gray-300">Guided by our FRAME pillars—Film, Recording Arts, Music, and Education—we blend technical skill-building with artistic development to prepare participants for creative, sustainable careers.</p>
            <Link href="/programs">
              <Button className="bg-glow-gold text-black px-6 py-3 font-bold hover:bg-yellow-400 transition-colors duration-200">
                Learn More About Our Programs
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Audio production collaboration in professional studio */}
            <img 
              src="/images/collaborating-in-music-studio-with-audio-equipment-2025-03-16-05-21-25-utc.jpg" 
              alt="Audio production collaboration in professional studio" 
              className="rounded-lg shadow-lg w-full object-contain bg-gray-900"
            />
            {/* Professional camera operator setting up equipment */}
            <img 
              src="/images/operator-setting-his-camera-before-shooting-2025-03-18-22-10-20-utc.jpg" 
              alt="Professional camera operator setting up equipment" 
              className="rounded-lg shadow-lg w-full object-contain bg-gray-900"
            />
            {/* Live event camera crew capturing production */}
            <img 
              src="/images/cameramen-capturing-moments-at-a-live-event-2025-02-10-06-55-51-utc.jpg" 
              alt="Live event camera crew capturing production" 
              className="rounded-lg shadow-lg w-full object-contain bg-gray-900"
            />
            {/* Live theater concert show sound and video control */}
            <img 
              src="/images/live-theater-concert-show-sound-video-music-contro-2025-01-10-06-01-03-utc.jpg" 
              alt="Live theater concert show sound and video control" 
              className="rounded-lg shadow-lg w-full object-contain bg-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

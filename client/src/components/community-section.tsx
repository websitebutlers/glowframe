import { Users, Handshake, Trophy } from "lucide-react";

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fostering a diverse and inclusive workforce in Arizona's film and AV sectors, promoting economic growth and authentic storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-glow-gold text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Diverse Talent</h3>
            <p className="text-gray-300">
              Empowering young adults from underserved communities with opportunities in film and AV industries.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-electric-blue text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Industry Partnerships</h3>
            <p className="text-gray-300">
              Building connections with industry professionals and organizations to create real opportunities.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-gray-300">
              Celebrating the achievements of our participants as they advance in their creative careers.
            </p>
          </div>
        </div>

        <div className="bg-black p-8 rounded-lg border border-gray-800">
          {/* Theater performers collaborating on production */}
          <img 
            src="/images/two-performers-sitting-on-floor-in-theater-2025-03-10-05-13-22-utc.jpg" 
            alt="Theater performers collaborating on production" 
            className="w-full object-contain bg-gray-900 rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold mb-4">Building Tomorrow's Storytellers</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our participants work on feature films, TV shows, podcasts, and live concerts, gaining valuable insights and mentorship from seasoned experts while building their professional portfolios.
          </p>
        </div>
      </div>
    </section>
  );
}

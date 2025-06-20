import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import businessman_pointing_at_digital_information_board_2025_04_05_04_11_46_utc from "@assets/Media/Site Images/businessman-pointing-at-digital-information-board-2025-04-05-04-11-46-utc.jpg";

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

        {/* Leadership Team Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Meet the dedicated professionals guiding the Glow-Frame Initiative's mission to empower emerging talent in Arizona's creative industries.</p>
          </div>

          {/* Board Members */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-glow-gold">Board Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Christopher Grimsley</h3>
                <p className="text-electric-blue font-semibold mb-2">President</p>
                <p className="text-gray-300 text-sm">Organizational leadership driving mission achievement</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Brytwauna Tang</h3>
                <p className="text-electric-blue font-semibold mb-2">Treasurer</p>
                <p className="text-gray-300 text-sm">Financial stewardship ensuring responsible resource management</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Annette Daniels</h3>
                <p className="text-electric-blue font-semibold mb-2">Executive Director</p>
                <p className="text-gray-300 text-sm">Strategic leadership ensuring organizational excellence and growth</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Janet Lyons</h3>
                <p className="text-electric-blue font-semibold mb-2">Director of Philanthropy</p>
                <p className="text-gray-300 text-sm">Building partnerships and funding opportunities for program expansion</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Niki Christian</h3>
                <p className="text-electric-blue font-semibold mb-2">Director of Communications</p>
                <p className="text-gray-300 text-sm">Strategic communications and community engagement</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Raquel Battle</h3>
                <p className="text-electric-blue font-semibold mb-2">Outreach & Event Coordinator</p>
                <p className="text-gray-300 text-sm">Community engagement and event management excellence</p>
              </div>
            </div>
          </div>

          {/* Staff */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-electric-blue">Staff</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Daaron Battle</h3>
                <p className="text-white font-semibold mb-2">Director of Community Programming</p>
                <p className="text-gray-300 text-sm">Developing and managing community-focused educational initiatives</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">John Diaz</h3>
                <p className="text-white font-semibold mb-2">Content Specialist/Instructor</p>
                <p className="text-gray-300 text-sm">Expert instruction and curriculum development for hands-on learning</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Christina Williams</h3>
                <p className="text-white font-semibold mb-2">Youth & Community Advisory Coordinator</p>
                <p className="text-gray-300 text-sm">Multitalented advocate connecting community needs with program solutions</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Reuben "Fleek" Anderson</h3>
                <p className="text-white font-semibold mb-2">Director of Marketing</p>
                <p className="text-gray-300 text-sm">Strategic marketing and brand development for organizational growth</p>
              </div>
            </div>
          </div>

          {/* Founders */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-glow-gold">Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Irin "Iroc" Daniels</h3>
                <p className="text-glow-gold font-semibold mb-2">Co-Founder / Director of Programming</p>
                <p className="text-gray-300 text-sm">Visionary leader driving creative empowerment in underserved communities</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Joeseph "Soulman" Valiente</h3>
                <p className="text-glow-gold font-semibold mb-2">Co-Founder</p>
                <p className="text-gray-300 text-sm">Creative force bringing authentic industry experience to our programs</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

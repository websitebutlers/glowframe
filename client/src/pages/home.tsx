import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Footer from "@/components/footer";
import businessman_pointing_at_digital_information_board_2025_04_05_04_11_46_utc from "@assets/Media/Site Images/businessman-pointing-at-digital-information-board-2025-04-05-04-11-46-utc.jpg";

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
            backgroundImage: "url('/images/selective-focus-of-multicultural-young-actor-and-a-2024-11-10-13-08-28-utc.jpg')"
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
            backgroundImage: "url('/images/operator-using-camera-on-the-set-2025-03-18-22-13-17-utc.jpg')"
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

      {/* Creative Solutions Workshop Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">
              Hands-On Filmmaking Workshop in Phoenix
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-300 text-lg leading-relaxed">
              The Glow-Frame Initiative recently partnered with Creative Solutions, the parent company of Teradek, SmallHD, and Wooden Camera, to host a hands-on filmmaking class in Phoenix, Arizona. The workshop brought together local filmmakers and emerging creatives to learn the full camera pipeline using ARRI systems alongside Teradek and SmallHD equipment.
            </p>

            {/* Video/Link Content */}
            <div className="space-y-4">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden border-2 border-glow-gold">
                {/* Frame.io doesn't support direct embedding, so we'll create an attractive CTA */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/operator-using-camera-on-the-set-2025-03-18-22-13-17-utc.jpg')"
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">▶</div>
                      <p className="text-xl font-semibold">Watch Workshop Highlights</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://f.io/PKdchYXz"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full bg-glow-gold text-black px-8 py-4 text-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
                  size="lg"
                >
                  Watch on Frame.io →
                </Button>
              </a>
            </div>

            {/* Paragraph 2 */}
            <p className="text-white font-semibold text-lg leading-relaxed">
              Special thanks to our partners at Arizona Camera Rentals — Tran and Adien — for leading the class and sharing their expertise. Their hands-on instruction gave our students real-world experience with ARRI cameras, Teradek transmitters, and SmallHD monitors. We're grateful for their partnership and continued support in helping us train the next generation of filmmakers here in Phoenix.
            </p>
          </div>
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

      {/* Facade Film Practicum Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Content */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-electric-blue shadow-2xl">
                <iframe
                  src="https://player.vimeo.com/video/1117636861?h=ae3b8714fb&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Facade - Glow-Frame Initiative Film Practicum"
                ></iframe>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Apprenticeship Film: <span className="text-electric-blue">Facade</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  The Glow-Frame Initiative recently completed production on a learning film practicum titled <span className="text-white font-semibold">Facade</span> — an immersive, hands-on project designed to train the next generation of filmmakers.
                </p>
                <p>
                  The production featured <span className="text-white font-semibold">18 apprentices</span> who received real-world training and on-the-spot learning as they worked across every department, including camera, lighting, sound, and production design. The project also included over <span className="text-white font-semibold">25 first-time actors</span>, many of whom were introduced to the filmmaking process for the very first time.
                </p>
                <p>
                  Through this initiative, Glow-Frame continues to create meaningful opportunities for emerging creatives to gain professional experience and develop the skills needed for successful careers in film and media production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Static Images Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img 
                src={businessman_pointing_at_digital_information_board_2025_04_05_04_11_46_utc}
                alt="Businessman pointing at digital information board" 
                className="rounded-lg shadow-lg max-w-full h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/IMG_6436.jpeg"
                alt="Film production behind the scenes"
                className="rounded-lg shadow-lg max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

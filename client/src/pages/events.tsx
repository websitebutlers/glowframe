import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

function MailingListForm() {
  return (
    <div className="text-center space-y-4">
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdDXuIQXUE9DUWWwovqC8JdzrWEERCSei1nDCU5zREbOsYRIQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button className="w-full bg-electric-blue text-black hover:bg-blue-400 font-bold">
          Join Mailing List
        </Button>
      </a>
      <p className="text-xs text-gray-400">
        Opens in a new window • Secure Google Form
      </p>
    </div>
  );
}

export default function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        {/* News Section */}
        <section className="relative py-24 bg-gray-900">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/news/DS4.jpg')",
              filter: "blur(8px)",
              opacity: 0.3
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-gold">Latest News</h2>
            </div>

            <Card className="border border-gray-800 bg-black/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      Darrell Cunningham Interviews WNBA Star Bridget Pettis
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Glow-Frame Initiative recently partnered with Darrell Cunningham for an inspiring on-site interview with WNBA star Bridget Pettis. Apprentices from the Glow-Frame Initiative worked behind the scenes, gaining real-world, hands-on training in every aspect of production—from camera operation and audio to lighting and set management.
                      </p>
                      <p>
                        This experience embodies Glow-Frame's mission to provide practical, workforce-ready education for aspiring filmmakers and AV professionals. By working alongside industry leaders like Darrell Cunningham and Bridget Pettis, our apprentices continue to build the skills and confidence needed to excel in the field.
                      </p>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/images/news/DS1.jpg"
                      alt="Darrell Cunningham interviewing Bridget Pettis - Scene 1"
                      className="rounded-lg shadow-lg w-full h-96 md:h-[30rem] object-cover"
                    />
                    <img
                      src="/images/news/DS21.jpg"
                      alt="Darrell Cunningham interviewing Bridget Pettis - Scene 2"
                      className="rounded-lg shadow-lg w-full h-96 md:h-[30rem] object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us for workshops, screenings, and community events that bring together aspiring filmmakers and industry professionals.
              </p>
            </div>

            {/* Featured Anniversary Event */}
            <div className="mb-16">
              <Card className="border-4 border-glow-gold bg-black overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-96 lg:h-auto">
                    <img
                      src="/images/news/1.jpeg"
                      alt="Glow Frame Anniversary Celebration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-glow-gold text-black text-lg px-4 py-2">Featured Event</Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <div className="mb-4">
                        <span className="text-glow-gold text-sm font-bold tracking-wider">DECEMBER 9, 2025</span>
                      </div>
                      <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                        Glow Frame One Year Anniversary Celebration
                      </CardTitle>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-3 text-electric-blue" />
                          <span>The Pemberton House, Downtown Phoenix</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3 text-electric-blue" />
                          <span>Evening Event - Screenings Throughout</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        An evening dedicated to film, conversation, and creative excellence. Join us as we celebrate one year of hands-on training, workforce development, and industry access for emerging creatives and veterans.
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-electric-blue">Event Highlights:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-glow-gold mr-2">•</span>
                            <span><strong>Film Screenings:</strong> Facade & The Darrell Show (Pilot)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-glow-gold mr-2">•</span>
                            <span><strong>Apprentice Graduation:</strong> Recognizing achievements across all departments</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-glow-gold mr-2">•</span>
                            <span><strong>Awards Experience:</strong> Celebrating creative excellence</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-glow-gold mr-2">•</span>
                            <span><strong>Exclusive Auction:</strong> VIP experiences and unique opportunities</span>
                          </li>
                        </ul>
                      </div>

                      <a
                        href="https://secure.givelively.org/event/glow-frame-initiative/glow-frame-live-award-show-film-night"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full"
                      >
                        <Button className="w-full bg-glow-gold text-black hover:bg-yellow-400 text-lg font-bold py-6">
                          Get Tickets Now
                        </Button>
                      </a>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>

            {/* Anniversary Event Details */}
            <div className="mb-16 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Event Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Facade Screening */}
                <Card className="border border-gray-800 bg-card">
                  <CardHeader className="p-0">
                    <div className="mb-4">
                      <img
                        src="/images/news/IMG_6444.jpg"
                        alt="Facade Film"
                        className="rounded-t-lg w-full aspect-[3/4] object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle className="text-2xl font-bold text-electric-blue">Facade</CardTitle>
                    <p className="text-gray-300">
                      A psychological thriller following a burned out call center representative who uncovers that his company's best selling supplement is, in fact, a bioengineered weapon of mass destruction.
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      Screenings will run throughout the evening.
                    </p>
                  </CardContent>
                </Card>

                {/* The Darrell Show */}
                <Card className="border border-gray-800 bg-card">
                  <CardHeader className="p-0">
                    <div className="mb-4">
                      <img
                        src="/images/news/1000003611.jpeg"
                        alt="The Darrell Show"
                        className="rounded-t-lg w-full aspect-[3/4] object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle className="text-2xl font-bold text-electric-blue">The Darrell Show (Pilot)</CardTitle>
                    <p className="text-gray-300">
                      A reflective conversation with WNBA champion turned community leader Bridget Pettis, examining her path from professional sports to community impact.
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      Screenings will run throughout the evening.
                    </p>
                  </CardContent>
                </Card>

                {/* Graduation & Awards */}
                <Card className="border border-gray-800 bg-card">
                  <CardHeader className="p-0">
                    <div className="mb-4">
                      <img
                        src="/images/news/1.jpeg"
                        alt="Awards Celebration"
                        className="rounded-t-lg w-full aspect-[3/4] object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle className="text-2xl font-bold text-electric-blue">Apprentice Graduation & Awards</CardTitle>
                    <p className="text-gray-300">
                      We will recognize our Frame Apprentices for their accomplishments across camera, lighting, sound, production, and creative operations.
                    </p>
                    <p className="text-gray-300">
                      This evening also marks the Glow Frame Initiative's One Year Anniversary, highlighting a full year of hands-on training, workforce development, and industry access for emerging creatives and veterans.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Auction Section */}
              <Card className="border border-glow-gold bg-gradient-to-br from-gray-900 to-black">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-4 text-glow-gold">Glow Frame Experience Auction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    The event will include an exclusive auction featuring unique opportunities. All proceeds support Glow Frame's film and live production training programs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                      <h5 className="font-bold mb-2 text-electric-blue">VIP Jimmy Kimmel Live Tickets</h5>
                      <p className="text-sm text-gray-300">Experience a taping of Jimmy Kimmel Live with VIP access</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                      <h5 className="font-bold mb-2 text-electric-blue">Walk-On Role</h5>
                      <p className="text-sm text-gray-300">Appear in a future Glow Frame production</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                      <h5 className="font-bold mb-2 text-electric-blue">Studio Session with Darrell Cunningham</h5>
                      <p className="text-sm text-gray-300">One-on-one studio time with television host Darrell Cunningham</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                      <h5 className="font-bold mb-2 text-electric-blue">Day on Set with Director Iroc</h5>
                      <p className="text-sm text-gray-300">Shadow director Irin "Iroc" Daniels on set</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800 md:col-span-2">
                      <h5 className="font-bold mb-2 text-electric-blue">Reynolds Ranch Cabin Getaway</h5>
                      <p className="text-sm text-gray-300">Weekend retreat at Reynolds Ranch Cabin</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Other Upcoming Events */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Other Upcoming Workshops</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border border-gray-800 bg-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-electric-blue text-black">Coming Soon</Badge>
                    <div className="text-right">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">Date TBA</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Time TBA</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Content Creation for Business Workshop</CardTitle>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Location TBA</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Discover the secrets to creating high-quality, impactful content tailored for business success. Whether you're a beginner or have some experience, this event will empower you with hands-on knowledge from the best in the industry.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Limited Spots Available</span>
                    </div>
                    <Button className="bg-glow-gold text-black hover:bg-yellow-400">
                      Register Interest
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-electric-blue text-black">Coming Soon</Badge>
                    <div className="text-right">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">Date TBA</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Time TBA</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Special Events Audio Production</CardTitle>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Location TBA</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Gain expert insights into live audio and event production from industry veteran Chris Grimsley. Whether you're planning a corporate gathering, concert, or special event, this workshop will provide the technical skills and insider knowledge to make it a success.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Limited Spots Available</span>
                    </div>
                    <Button className="bg-glow-gold text-black hover:bg-yellow-400">
                      Register Interest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="bg-gray-900 border-gray-800 p-8 inline-block max-w-md mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-6">
                    More workshops and events are being planned. Join our mailing list to be the first to know about upcoming dates and registration.
                  </p>
                  <MailingListForm />
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
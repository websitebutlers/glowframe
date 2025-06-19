import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ApplicationSection() {
  return (
    <section id="apply" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-gray-300">
            Looking to connect with emerging talent? Partner with Glow Frame Initiative to access a diverse pipeline of skilled professionals ready to contribute to your productions and grow Arizona's creative economy.
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Industry Partnership Application</CardTitle>
            <p className="text-gray-300">
              Join our network of industry partners and help shape the future of Arizona's creative workforce. Connect with our trained professionals aged 16-24 who bring fresh perspectives, technical skills, and hands-on experience from real film sets and live events.
            </p>
            
            {/* Privacy Disclaimer */}
            <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded-lg">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 mt-0.5 text-electric-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-2">Your Privacy Matters</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Glow Frame Initiative values your privacy and is committed to protecting your personal information. 
                    The data you provide is used solely for our internal contact records and program administration. 
                    We never share your information with third-party sources for any reason. Your information 
                    remains confidential and is used only to support your participation in our programs and to 
                    keep you informed about relevant opportunities.
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="text-center space-y-6">
              <p className="text-gray-300 mb-8">
                Ready to partner with us or join our program? Complete our comprehensive application to get started with the Glow Frame Initiative.
              </p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVY8OItflFgs9aT2pBy820n1taEZYAvYo8ZrsvjA6SsrX3FA/viewform?vc=0&c=0&w=1&flr=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  className="bg-glow-gold text-black px-8 py-4 text-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
                  size="lg"
                >
                  Complete Application Form
                </Button>
              </a>
              
              <p className="text-sm text-gray-400 mt-4">
                Opens in a new window • Secure Google Form
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
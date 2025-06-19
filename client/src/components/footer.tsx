import { SPONSORS } from "@/lib/constants";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="border-2 border-white px-4 py-2 inline-block mb-6">
              <span className="text-lg font-bold tracking-wider">GLOW FRAME</span>
              <div className="text-xs tracking-widest">INITIATIVE</div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering young adults from underserved communities in Arizona with real-world experience in film and AV industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-glow-gold transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-glow-gold transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-glow-gold transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-glow-gold transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("#programs")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Workshops
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#apply")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Apprenticeship
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#programs")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Content Creation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#programs")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Audio Production
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#programs")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  AV Staging
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Organization</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#community")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#community")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#community")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("#apply")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Apply
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#community")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#donate")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Donate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#community")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Partner
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-glow-gold transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="mb-8">
            <h4 className="text-lg font-bold mb-4">Our Sponsors</h4>
            <p className="text-gray-300 mb-4">We thank our amazing sponsors for making our programs possible:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-400">
              {SPONSORS.map((sponsor, index) => (
                <span key={index}>{sponsor}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Glow Frame Initiative. All rights reserved. 501(c)(3) Non-Profit Organization.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-glow-gold text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-glow-gold text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection("#contact")}
                className="text-gray-400 hover:text-glow-gold text-sm transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

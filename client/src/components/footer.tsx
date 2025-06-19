import { SPONSORS } from "@/lib/constants";
import { Link } from "wouter";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {

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
                <Link href="/programs" className="hover:text-glow-gold transition-colors duration-200">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-glow-gold transition-colors duration-200">
                  Apprenticeship
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-glow-gold transition-colors duration-200">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-glow-gold transition-colors duration-200">
                  Audio Production
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-glow-gold transition-colors duration-200">
                  AV Staging
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Organization</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-glow-gold transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-glow-gold transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-glow-gold transition-colors duration-200">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-glow-gold transition-colors duration-200">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-glow-gold transition-colors duration-200">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/get-involved" className="hover:text-glow-gold transition-colors duration-200">
                  Apply
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-glow-gold transition-colors duration-200">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-glow-gold transition-colors duration-200">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-glow-gold transition-colors duration-200">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-glow-gold transition-colors duration-200">
                  Contact
                </Link>
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
              <Link 
                href="/get-involved"
                className="text-gray-400 hover:text-glow-gold text-sm transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

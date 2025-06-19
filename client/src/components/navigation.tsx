import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/community", label: "Community" },
    { href: "/resources", label: "Resources" },
    { href: "/events", label: "News/Events" },
    { href: "/get-involved", label: "Get Involved" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="border-2 border-white px-4 py-2 hover:border-glow-gold transition-colors duration-200">
                <span className="text-xl font-bold tracking-wider">GLOW FRAME</span>
                <div className="text-xs tracking-widest">INITIATIVE</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    location === item.href 
                      ? 'text-glow-gold' 
                      : 'text-white hover:text-glow-gold'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/get-involved">
                <Button className="bg-glow-gold text-black hover:bg-yellow-400 font-bold">
                  Donate
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-glow-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    location === item.href 
                      ? 'text-glow-gold' 
                      : 'text-white hover:text-glow-gold'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/get-involved" onClick={() => setIsOpen(false)}>
                <Button className="bg-glow-gold text-black hover:bg-yellow-400 font-bold w-full mt-4">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

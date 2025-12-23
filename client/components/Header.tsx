import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/mad-logo.webp" 
              alt="MAD Engineers" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition">
              About
            </a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Services
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Contact
            </a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            <a href="#about" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
              About
            </a>
            <a href="#services" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
              Services
            </a>
            <a href="#contact" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
              Contact
            </a>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

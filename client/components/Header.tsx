import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <svg
              viewBox="0 0 200 100"
              className="h-12 w-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="100" y="50" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#3B82F6">
                MAD
              </text>
              <text x="100" y="75" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" textAnchor="middle" fill="#3B82F6">
                Engineers
              </text>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Home
            </a>
            <a href="#solutions" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Solutions
            </a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Services
            </a>
            <a href="#case-studies" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Case Studies
            </a>
            <div className="relative group">
              <button className="text-slate-700 hover:text-blue-600 font-medium transition flex items-center gap-1">
                Company
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="#about" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 first:rounded-t-lg">
                  About Us
                </a>
                <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-blue-50">
                  Careers
                </a>
                <a href="#contact" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 last:rounded-b-lg">
                  Contact
                </a>
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition">
              Schedule Consultation
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
            <a href="#home" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
              Home
            </a>
            <a href="#solutions" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
              Solutions
            </a>
            <a href="#services" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
              Services
            </a>
            <a href="#case-studies" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
              Case Studies
            </a>
            <button
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className="w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md flex items-center justify-between"
            >
              Company
              <ChevronDown size={16} className={companyDropdownOpen ? "rotate-180" : ""} />
            </button>
            {companyDropdownOpen && (
              <div className="pl-4">
                <a href="#about" className="block px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md text-sm">
                  About Us
                </a>
                <a href="#" className="block px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md text-sm">
                  Careers
                </a>
                <a href="#contact" className="block px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md text-sm">
                  Contact
                </a>
              </div>
            )}
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Schedule Consultation
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

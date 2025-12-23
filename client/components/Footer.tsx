import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                viewBox="0 0 200 100"
                className="h-8 w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="100" y="50" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">
                  MAD
                </text>
              </svg>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering innovative software solutions that transform enterprises through technology, consulting, and expert partnerships.
            </p>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Our Company</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-white transition text-sm">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition text-sm">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition text-sm">Services</a></li>
              <li><a href="#case-studies" className="text-slate-400 hover:text-white transition text-sm">Portfolio</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition text-sm">Partners</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition text-sm">Documentation</a></li>
              <li><a href="#case-studies" className="text-slate-400 hover:text-white transition text-sm">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition text-sm">FAQs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition text-sm">Support</a></li>
            </ul>
          </div>

          {/* Latest Updates */}
          <div>
            <h4 className="font-semibold text-white mb-6">Latest Updates</h4>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">
                <p className="font-medium text-white mb-1">New AI Solutions</p>
                <p className="text-xs">Launched advanced AI integration services</p>
              </li>
              <li className="text-sm text-slate-400 pt-2 border-t border-slate-700">
                <p className="font-medium text-white mb-1">Global Expansion</p>
                <p className="text-xs">Now serving clients in 26 countries</p>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Email</p>
                  <a href="mailto:hello@madengineers.com" className="text-sm hover:text-white transition">hello@madengineers.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-sm hover:text-white transition">+1 (234) 567-890</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Address</p>
                  <span className="text-sm">Tech Street, Innovation Hub, Global</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © 2025 MAD Engineers. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="/mad-logo.webp" 
              alt="MAD Engineers" 
              className="h-12 w-auto mb-4 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering innovative software solutions that transform businesses through technology.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Portfolio</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                <a href="mailto:hello@madengineers.com" className="hover:text-white transition">hello@madengineers.com</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © 2024 MAD Engineers. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

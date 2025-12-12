import React from 'react';
import { Facebook, Twitter } from 'lucide-react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Coffee className="text-amber-600 w-6 h-6" />
              <h3 className="text-xl font-bold text-gray-900">Brew Haven Café</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Brewed to Perfection, Served with Love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-amber-600 transition-colors ">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-600 hover:text-amber-600 transition-colors ">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-amber-600 transition-colors ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors ">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-600 hover:text-amber-600 transition-colors ">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-amber-600 transition-colors ">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-amber-600 transition-colors ">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="#facebook" 
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#twitter" 
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#instagram" 
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Coffee className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Brew Haven Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

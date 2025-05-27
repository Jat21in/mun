import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JGU MUN</h3>
            <p className="mb-4 text-gray-300">
              The Jindal Global University Model United Nations Conference is an annual event that brings together students from around the world for debate, diplomacy, and global engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#committees" className="text-gray-300 hover:text-white transition-colors duration-300">Committees</a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-white transition-colors duration-300">Schedule</a>
              </li>
              <li>
                <a href="#registration" className="text-gray-300 hover:text-white transition-colors duration-300">Registration</a>
              </li>
              <li>
                <a href="#faculty" className="text-gray-300 hover:text-white transition-colors duration-300">Faculty & Secretariat</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Background Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Rules of Procedure</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Position Paper Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">MUN Preparation Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Conference Policies</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Accommodation Details</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Jindal Global University, Sonipat-Narela Road, Sonipat, Haryana - 131001, India
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <a href="mailto:jgumun@jgu.edu.in" className="text-gray-300 hover:text-white transition-colors duration-300">
                  jgumun@jgu.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Jindal Global University Model United Nations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
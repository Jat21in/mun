import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Committees", href: "#committees" },
    { name: "Schedule", href: "#schedule" },
    { name: "Registration", href: "#registration" },
    { name: "Faculty", href: "#faculty" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-end pl-10 md:pl-16">
            <span
              className={`text-xl md:text-2xl font-bold ${
                scrolled ? "text-red-600 hover:text-white" : "text-white hover:text-red-400"
              }`}
            >
              <span className="text-red-600">CU</span> MUN 2025
            </span>
            <span
              className={`ml-2 text-sm md:text-base font-semibold transition-colors duration-300 ${
                scrolled ? "text-red-600 hover:text-white" : "text-white hover:text-red-400"
              }`}
            >
              Conference 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  scrolled ? "text-red-400 hover:text-red-600" : "text-white hover:text-red-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? "text-red-600" : "text-white"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 transition-all duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-red-600 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

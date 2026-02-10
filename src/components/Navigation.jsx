import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <svg
              className="w-8 h-8 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-2xl font-bold text-gray-900">Nutritius</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-green-500 transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            <Link to="/about"
              className="text-gray-900 hover:text-green-500 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>

            <Link to="/services"
              className="text-gray-900 hover:text-green-500 transition-colors duration-200 font-medium"
            >
              Services
            </Link>

            <Link to="/blogs"
              className="text-gray-900 hover:text-green-500 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-gray-900 hover:text-green-500 transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>

            <button className="bg-green-500 text-white px-6 py-2.5  hover:bg-green-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-md hover:shadow-lg rounded-xl">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="font-semibold">APPOINTMENT</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-green-500 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <a
                href="#about-us"
                className="text-gray-900 hover:text-green-500 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>

              <a
                href="#services"
                className="text-gray-900 hover:text-green-500 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>

              {/* <a
                href="#blog"
                className="text-gray-900 hover:text-green-500 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a> */}

               <Link to="/blogs"
              className="text-gray-900 hover:text-green-500 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>

              <Link
                to="/contact"
                className="text-gray-900 hover:text-green-500 transition-colors font-medium "
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

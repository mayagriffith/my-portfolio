import React, { useState, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5';

const Navbar = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    const sections = ['home', 'about', 'projects', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 text-black fixed z-40 w-full">
      <div className="container mx-auto flex justify-center items-center">
        {/* Always show on larger screens */}
        <ul className="hidden md:flex space-x-40">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className={`text-lg hover:text-pink-500 ${activeSection === 'home' ? 'font-bold' : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-lg hover:text-pink-500 ${activeSection === 'about' ? 'font-bold' : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-lg hover:text-pink-500 ${activeSection === 'projects' ? 'font-bold' : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-lg hover:text-pink-500 ${activeSection === 'contact' ? 'font-bold' : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Hamburger menu visible on small screens */}
        <div className="md:hidden">
          <IoMenuOutline className="text-3xl cursor-pointer" onClick={toggleMobileMenu} />
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  scrollToSection('home');
                }}
                className={`text-lg hover:text-pink-500 ${activeSection === 'home' ? 'font-bold' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  scrollToSection('about');
                }}
                className={`text-lg hover:text-pink-500 ${activeSection === 'about' ? 'font-bold' : ''}`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  scrollToSection('projects');
                }}
                className={`text-lg hover:text-pink-500 ${activeSection === 'projects' ? 'font-bold' : ''}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  scrollToSection('contact');
                }}
                className={`text-lg hover:text-pink-500 ${activeSection === 'contact' ? 'font-bold' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
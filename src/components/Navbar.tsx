
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

/**
 * Navigation component with responsive mobile menu
 * 
 * This component renders a fixed navbar at the top of the page with
 * links to different sections of the portfolio.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-md dark:bg-gray-900/70' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a 
            href="#home" 
            className="text-xl font-serif font-medium cursor-pointer transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="gradient-text">Portfolio</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-medium text-sm hover:text-primary capitalize relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-gray-500 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md dark:bg-gray-900/95 shadow-md">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="font-medium text-sm hover:text-primary capitalize py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

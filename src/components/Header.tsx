
import React, { useState } from 'react';
import { Eye, Menu, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Eye className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-semibold">ETHER-EYE</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>
          
          <Link to="/login" className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90">
            Login
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background shadow-md py-4 animation-slide-down">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

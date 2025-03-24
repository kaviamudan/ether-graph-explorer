
import React, { useState } from 'react';
import { Eye, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <span className="text-xl font-semibold">ETHER-EYE</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Explorer
          </a>
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Anomalies
          </a>
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Documentation
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>
          
          <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

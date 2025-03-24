
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 mb-8 text-center text-muted-foreground animation-fade">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="border-t border-border pt-8">
          <p className="text-sm">
            ETHER-EYE © {new Date().getFullYear()} — Blockchain Analysis Platform
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-xs">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

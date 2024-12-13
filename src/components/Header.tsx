import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.petvise.ai/Branding/logo%2Bhorizontatext.svg"
              alt="PetVise"
              className="h-8"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/pet-breed-guides" 
              className="text-textDark hover:text-primary transition-colors"
            >
              Breed Guides
            </Link>
            <a 
              href="https://onelink.to/ne9s7r"
              className="bg-[#1A1A1A] text-white px-6 py-2 rounded-[58px] hover:bg-[#333] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the App
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

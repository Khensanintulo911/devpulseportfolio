import { useState } from "react";

interface NavigationProps {
  onEditProfile: () => void;
}

export default function Navigation({ onEditProfile }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DP</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Dev Pulse</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={onEditProfile}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
            >
              <i className="fas fa-edit mr-2"></i>
              Update Profile
            </button>
          </div>

          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-800 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-gray-800 transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-800 transition-colors text-left"
              >
                Contact
              </button>
              <button 
                onClick={onEditProfile}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-left flex items-center"
              >
                <i className="fas fa-edit mr-2"></i>
                Update Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

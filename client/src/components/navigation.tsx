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
    <nav className="fixed top-0 w-full glass-effect backdrop-blur-md border-b border-white/20 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-glow">
              <span className="text-white font-bold text-sm">DP</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dev Pulse</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-cyan-600 transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </button>
            <button 
              onClick={onEditProfile}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center hover:scale-105 font-medium"
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
                className="text-slate-600 hover:text-dev-blue transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-600 hover:text-dev-blue transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-dev-blue transition-colors text-left"
              >
                Contact
              </button>
              <button 
                onClick={onEditProfile}
                className="bg-dev-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-left flex items-center"
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-sm">DP</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Dev Pulse</span>
          </div>
          
          <p className="text-slate-300 mb-4">
            🚀 Engineering Innovation Through Code - Bridging Traditional Engineering with Modern Software Development
          </p>
          <p className="text-slate-400 text-sm mb-8">
            📍 Based in Gauteng, Alberton 1458 | 🌍 Open to Remote & On-site Opportunities
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/Khensanintulo911" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="#" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a 
              href="#" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © {currentYear} Dev Pulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

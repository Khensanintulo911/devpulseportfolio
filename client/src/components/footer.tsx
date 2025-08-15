export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DP</span>
            </div>
            <span className="font-bold text-xl">Dev Pulse</span>
          </div>
          
          <p className="text-gray-300 mb-4">
            Engineering Innovation Through Code - Bridging Traditional Engineering with Modern Software Development
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Based in Gauteng, Alberton 1458 | Open to Remote & On-site Opportunities
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

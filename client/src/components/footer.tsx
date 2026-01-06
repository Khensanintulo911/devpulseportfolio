import { Github, Linkedin, MessageSquare, Mail, Rocket } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6 text-white">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Rocket className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl">Dev Pulse</span>
              </div>
              <p className="max-w-md leading-relaxed">
                Engineering innovation through code. Bridging traditional engineering 
                thinking with modern full-stack development.
              </p>
            </div>
            
            <div className="flex flex-col md:items-end">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Find me on</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Khensanintulo911" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/khensani-ntulo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/27763456789" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a href="mailto:khensanintulo@gmail.com" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} Khensani Daniel Ntulo. Built with React & Express.
            </p>
            <p className="text-xs text-slate-500">
              Gauteng, Alberton • Remote & On-site
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

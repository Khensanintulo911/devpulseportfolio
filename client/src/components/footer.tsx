import { Github, Linkedin, MessageSquare, Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-white font-bold text-lg tracking-tight">
              Khensani Daniel Ntulo
            </h3>
            <p className="text-xs md:text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer with a Mining Engineering background from the University of the Witwatersrand. Building reliable, high-performance web systems and solving real-world operational problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Software Systems
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-white transition-colors text-blue-400">
                  Analytics & BI Models
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  The Journey & Grit
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience & Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Hire
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Khensanintulo911"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/khensani-ntulo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/27834913597"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:danielntulo@gmail.com"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+27834913597"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Gauteng, Alberton 1458 · South Africa
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Khensani Daniel Ntulo. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

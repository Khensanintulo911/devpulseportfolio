import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onOpenCvModal?: () => void;
}

export default function Navigation({ onOpenCvModal }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (typeof window !== "undefined" && (localStorage.getItem("theme") as "light" | "dark")) || "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm" 
          : "bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-left group flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Khensani Ntulo
          </span>
          <span className="hidden sm:inline-block text-xs font-medium text-slate-400 dark:text-slate-500">
            / Full-Stack Engineer
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button 
            onClick={() => scrollToSection("projects")} 
            className="hover:text-primary dark:hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all"
          >
            Software Systems
          </button>
          <button 
            onClick={() => scrollToSection("analytics")} 
            className="hover:text-primary dark:hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all text-blue-600 dark:text-blue-400 font-semibold"
          >
            Analytics & BI
          </button>
          <button 
            onClick={() => scrollToSection("journey")} 
            className="hover:text-primary dark:hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all"
          >
            The Journey & Grit
          </button>
          <button 
            onClick={() => scrollToSection("capabilities")} 
            className="hover:text-primary dark:hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all"
          >
            Technical Stack
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="hover:text-primary dark:hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>

          {onOpenCvModal && (
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl text-xs font-semibold border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Button>
          )}

          <Button
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="rounded-xl px-4 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-primary py-2"
            >
              Software Systems
            </button>
            <button
              onClick={() => scrollToSection("analytics")}
              className="text-left font-medium text-blue-600 dark:text-blue-400 font-semibold hover:text-primary py-2"
            >
              Analytics & BI
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-primary py-2"
            >
              The Journey & Grit
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-primary py-2"
            >
              Technical Stack
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-primary py-2"
            >
              Background & Tutoring
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-primary py-2"
            >
              Contact
            </button>

            {onOpenCvModal && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full justify-center gap-2 rounded-xl text-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Full CV / Resume
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

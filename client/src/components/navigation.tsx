import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
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

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">Dev Pulse</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection("projects")} className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors font-medium">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors font-medium">Contact</button>
            
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <button className="text-slate-600 dark:text-slate-400" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection("about")} className="text-slate-600 dark:text-slate-400 hover:text-primary text-left font-medium">About</button>
              <button onClick={() => scrollToSection("projects")} className="text-slate-600 dark:text-slate-400 hover:text-primary text-left font-medium">Projects</button>
              <button onClick={() => scrollToSection("contact")} className="text-slate-600 dark:text-slate-400 hover:text-primary text-left font-medium">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

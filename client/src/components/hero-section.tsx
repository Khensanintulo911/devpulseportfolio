import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-16">
      {/* Dark wash for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
      
      <div className="container relative z-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-primary">Khensani Daniel Ntulo</span> 👋
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-8">
          Aspiring Full-Stack Developer | Python • Django • JavaScript/TypeScript
          <br />
          <span className="text-lg text-slate-400 mt-2 block italic">
            "Every bug fixed is a step forward!"
          </span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild size="lg" className="rounded-full">
            <a href="#projects">View My Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/Khensanintulo911" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" data-testid="link-github">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/khensani-ntulo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" data-testid="link-linkedin">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:khensanintulo@gmail.com" className="text-slate-400 hover:text-white transition-colors" data-testid="link-email">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

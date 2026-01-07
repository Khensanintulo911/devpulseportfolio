import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import profilePic from '../../../attached_assets/1000056003_1767776269029.jpg';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Dark wash gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900 z-10" />
      
      <div className="container relative z-20 px-4 text-center">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 p-0 relative z-10 mx-auto overflow-hidden bg-slate-800">
            <img 
              src={profilePic} 
              alt="Khensani 'Kay' Ntulo" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl z-0 animate-pulse" />
        </div>

        <div className="inline-block px-4 py-1.5 mb-6 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold tracking-wider uppercase animate-fade-in">
          Available for Opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Hi, I'm <span className="text-primary bg-clip-text">Khensani "Kay"</span> 👋
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          DevPulse is my personal mission to showcase my journey as a young and upcoming developer, documenting everything I learn as I grow. More than just a portfolio, it represents my willingness to be part of something greater and life-changing. 🚀
          <br />
          <span className="text-slate-400 font-medium mt-4 block">Python • Django • JavaScript/TypeScript</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button asChild size="lg" className="rounded-2xl h-12 px-8 font-bold shadow-lg shadow-primary/20 animate-bounce">
            <a href="#projects">Explore Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl h-12 px-8 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 font-bold">
            <a href="#contact">Collaborate With Me</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="rounded-2xl h-12 px-8 font-bold">
            <a href="/resume.pdf" target="_blank">Download CV</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="https://github.com/Khensanintulo911" target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]" data-testid="link-github">
            <Github className="w-5 h-5" /> <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/khensani-ntulo" target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]" data-testid="link-linkedin">
            <Linkedin className="w-5 h-5" /> <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          <a href="https://wa.me/27834913597" target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]" data-testid="link-whatsapp">
            <MessageSquare className="w-5 h-5" /> <span className="hidden sm:inline font-medium">WhatsApp</span>
          </a>
          <a href="tel:+27834913597" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]" data-testid="link-phone">
            <Phone className="w-5 h-5" /> <span className="hidden sm:inline font-medium">083 491 3597</span>
          </a>
          <a href="mailto:danielntulo@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]" data-testid="link-email">
            <Mail className="w-5 h-5" /> <span className="hidden sm:inline font-medium">danielntulo@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

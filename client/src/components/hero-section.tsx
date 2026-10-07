import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare, Phone, ArrowDown, FileText, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenCvModal?: () => void;
}

export default function HeroSection({ onOpenCvModal }: HeroSectionProps) {
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
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
    >
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed availability line */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Data Science Practitioner @ IQbusiness</span>
              <span aria-hidden="true">·</span>
              <span>Coursera Data Analytics</span>
              <span aria-hidden="true">·</span>
              <span>Full-Stack Engineer</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Engineering Rigor. <br />
                <span className="text-blue-600 dark:text-blue-400">Data & Full-Stack Execution.</span>
              </h1>
              <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300">
                I'm <span className="text-slate-900 dark:text-white font-bold">Khensani Daniel Ntulo</span> ("Kay") — bridging mining engineering problem-solving with full-stack software development and enterprise data science.
              </p>
            </div>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Currently working with <strong>IQbusiness</strong> in the <strong>Data Science Learnership Programme (NQF Level 5)</strong> and enrolled in the <strong>Coursera Data Analytics Program</strong>. I specialize in <strong>Power BI & Advanced Spreadsheets</strong> (DAX, Power Query, Data Modeling) alongside full-stack engineering with <strong>React</strong>, <strong>TypeScript</strong>, <strong>Python</strong>, and <strong>SQL</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="rounded-xl px-6 h-12 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Explore Featured Systems</span>
                <ArrowDown className="w-4 h-4" />
              </Button>

              {onOpenCvModal && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onOpenCvModal}
                  className="rounded-xl px-6 h-12 text-sm font-semibold border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>View Full CV</span>
                </Button>
              )}

              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="rounded-xl px-5 h-12 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
              </Button>
            </div>

            {/* Clean Direct Channels Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
              <a
                href="https://github.com/Khensanintulo911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/khensani-ntulo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/27834913597"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:danielntulo@gmail.com"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>danielntulo@gmail.com</span>
              </a>
              <a
                href="tel:+27834913597"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+27 83 491 3597</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame with Profile Image & Proof Indicators */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              {/* Card Container */}
              <div className="rounded-3xl p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4">
                  <img
                    src="/assets/profile-800.webp"
                    srcSet="/assets/profile-400.webp 400w, /assets/profile-800.webp 800w"
                    sizes="(max-width: 640px) 400px, 800px"
                    alt="Khensani Daniel Ntulo"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Overlay Tag on photo bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold block">
                      IQbusiness Data Science · Coursera
                    </span>
                    <span className="text-base font-bold text-white block">
                      HyperionDev · Wits Mining Foundation
                    </span>
                  </div>
                </div>

                {/* Proof Metrics Cluster */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                    <span className="text-lg font-bold text-slate-900 dark:text-white font-mono block">5+</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">Deployed Systems</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                    <span className="text-lg font-bold text-slate-900 dark:text-white font-mono block">NQF 5</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">Data Science @ IQ</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                    <span className="text-lg font-bold text-slate-900 dark:text-white font-mono block">100+</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">Hours Tutored</span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Statement */}
              <div className="mt-4 p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Active Workplace Learnership:</strong> Currently expanding enterprise data analysis, programming for data, and reporting with IQbusiness alongside the Coursera Data Analytics specialization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

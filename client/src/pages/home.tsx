import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import AnalyticsSection from "@/components/analytics-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ResumeModal from "@/components/resume-modal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen selection:bg-blue-500 selection:text-white">
      <Navigation onOpenCvModal={() => setIsResumeModalOpen(true)} />
      <main>
        <HeroSection onOpenCvModal={() => setIsResumeModalOpen(true)} />
        <ProjectsSection />
        <AnalyticsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

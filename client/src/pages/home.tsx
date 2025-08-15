import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ProfileModal from "@/components/profile-modal";
import { useState } from "react";

export default function Home() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <div className="font-inter bg-slate-50 text-slate-700">
      <Navigation onEditProfile={() => setIsProfileModalOpen(true)} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import type { Profile } from "@shared/schema";
import { GraduationCap, Code, Rocket, MapPin, Briefcase } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function AboutSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ['/api/profile'],
  });

  const skills = profile?.skills ? JSON.parse(profile.skills) as string[] : [];
  const education = profile?.education ? JSON.parse(profile.education) as string[] : [];

  const skillProficiency: Record<string, number> = {
    "Python (Django, Flask)": 75,
    "JavaScript (TypeScript, React)": 70,
    "Express.js & Node.js": 65,
    "Drizzle ORM & SQL": 60,
    "HTML/CSS": 85,
    "Git/GitHub": 75,
    "MATLAB & AutoCAD": 50
  };

  const experience = [
    {
      company: "MM All Electronics (Samsung Repair Center)",
      role: "Software Developer & IT Support",
      period: "Full-time, Permanent",
      description: "Maintained mission-critical business systems to ensure zero downtime. Developed and deployed custom solutions like the All Electronics Hub to streamline repair tracking and internal operations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Professional Journey</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="prose prose-slate dark:prose-invert lg:prose-lg">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {profile?.bio || "Aspiring professional with a unique blend of engineering background and emerging software development skills."}
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                      <h4 className="font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                      <p className="text-primary text-sm font-semibold mb-2">{exp.company}</p>
                      <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">{exp.period}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Technology Skills
                </h3>
                <div className="space-y-4">
                  {(skills.length > 0 ? skills : Object.keys(skillProficiency)).map((skill) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-700 dark:text-slate-200">{skill}</span>
                        <span className="text-slate-500">{skillProficiency[skill] || 60}%</span>
                      </div>
                      <Progress value={skillProficiency[skill] || 60} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education & Certifications
                </h3>
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                  {education.length > 0 ? education.map((item, idx) => (
                    <div key={idx} className="pl-8 relative">
                      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'} border-4 border-white dark:border-slate-900`} />
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{item}</h4>
                    </div>
                  )) : (
                    <>
                      <div className="pl-8 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900" />
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">National Diploma in Mechanical Engineering</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Tshwane University of Technology</p>
                      </div>
                      <div className="pl-8 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-900" />
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Software Development Fundamentals</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Self-Taught / Various Certifications</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{profile?.location || 'Gauteng, South Africa'}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <Rocket className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">Remote & On-site Ready</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3">
              <Rocket className="w-8 h-8 text-primary" />
              Learning Journey & Progression
            </h3>
            <div className="relative max-w-4xl mx-auto pl-10 border-l-2 border-primary/20 space-y-12">
              <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Current Focus: Advanced Web Development</h4>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">In Progress</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Mastering TypeScript, React, and Express.js while documenting every commit and milestone.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">#TypeScript</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">#CI/CD</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">#PRs</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-sm">
                  <Code className="w-4 h-4 text-slate-500" />
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 text-slate-700 dark:text-slate-300">Project Launch: All Electronics Hub</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Successfully deployed a mission-critical repair tracking system for MM All Electronics.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-sm">
                  <Briefcase className="w-4 h-4 text-slate-500" />
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-slate-700 dark:text-slate-300 text-lg mb-1">Career Transition: Engineering to Software</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Leveraging Mechanical Engineering analytical skills to solve complex software problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

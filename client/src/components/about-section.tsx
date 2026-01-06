import { useQuery } from "@tanstack/react-query";
import type { Profile } from "@shared/schema";
import { GraduationCap, Code, Rocket, MapPin } from "lucide-react";

export default function AboutSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ['/api/profile'],
  });

  const skills = profile?.skills ? JSON.parse(profile.skills) as string[] : [];
  const education = profile?.education ? JSON.parse(profile.education) as string[] : [];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="prose prose-slate dark:prose-invert lg:prose-lg">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {profile?.bio || "Aspiring professional with a unique blend of engineering background and emerging software development skills. My journey from Mining Engineering at Wits University to full-stack development represents the evolution of traditional engineering into the digital age."}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I recently completed the HyperionDev Software Engineering Bootcamp and I'm now part of their Graduate Program, refining my skills for real-world impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{profile?.location || 'Gauteng, South Africa'}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <Rocket className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">HyperionDev Graduate</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Technical Journey
                </h3>
                <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                  {education.map((item, idx) => (
                    <div key={idx} className="pl-8 relative">
                      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'} border-4 border-white dark:border-slate-900`} />
                      <h4 className="font-bold text-slate-900 dark:text-white">{item}</h4>
                    </div>
                  ))}
                  {education.length === 0 && (
                    <>
                      <div className="pl-8 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900" />
                        <h4 className="font-bold text-slate-900 dark:text-white">HyperionDev Graduate Program</h4>
                        <p className="text-slate-500 dark:text-slate-400">Current • Job Search & Mentorship</p>
                      </div>
                      <div className="pl-8 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900" />
                        <h4 className="font-bold text-slate-900 dark:text-white">Software Engineering Bootcamp</h4>
                        <p className="text-slate-500 dark:text-slate-400">Completed • HyperionDev</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm">
                      {skill}
                    </span>
                  ))}
                  {skills.length === 0 && (
                    <>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm">Python (Django)</span>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm">TypeScript</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

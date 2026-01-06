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
    "Python (Django, Flask)": 90,
    "JavaScript (TypeScript, React)": 88,
    "Android Dev (Java, Kotlin)": 85,
    "HTML/CSS": 95,
    "SQL (PostgreSQL, MySQL, SQLite)": 82,
    "Cloud Infrastructure & Security": 75,
    "Git/GitHub": 85,
    "MATLAB & AutoCAD": 70
  };

  const experience = [
    {
      company: "MM All Electronics (Samsung Repair Center)",
      role: "Software Developer & IT Support",
      period: "Full-time, Permanent",
      description: "Designed, developed, and maintained custom business solutions including the All Electronics Hub. Built Android applications, managed cloud infrastructure, and provided IT support."
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
                  Skill Proficiency
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-700 dark:text-slate-200">{skill}</span>
                        <span className="text-slate-500">{skillProficiency[skill] || 80}%</span>
                      </div>
                      <Progress value={skillProficiency[skill] || 80} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education & Certifications
                </h3>
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                  {education.map((item, idx) => (
                    <div key={idx} className="pl-8 relative">
                      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'} border-4 border-white dark:border-slate-900`} />
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{item}</h4>
                    </div>
                  ))}
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
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import type { Profile } from "@shared/schema";
import { GraduationCap, Code, Rocket, MapPin, Briefcase, BarChart3, TrendingUp, Heart, Target, Users, BookOpen, PenTool } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

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
    "Mining Software & Data Analysis": 50
  };

  const experience = [
    {
      company: "MM All Electronics (Samsung Repair Center)",
      role: "Software Developer & IT Support",
      period: "Full-time, Permanent",
      description: "Maintained mission-critical business systems to ensure zero downtime. Developed and deployed custom solutions like the All Electronics Hub to streamline repair tracking and internal operations."
    }
  ];

  const learningData = [
    { month: 'Aug', skills: 20 },
    { month: 'Sep', skills: 35 },
    { month: 'Oct', skills: 45 },
    { month: 'Nov', skills: 65 },
    { month: 'Dec', skills: 80 },
    { month: 'Jan', skills: 95 },
  ];

  const radarData = [
    { subject: 'Frontend', A: 85, fullMark: 100 },
    { subject: 'Backend', A: 75, fullMark: 100 },
    { subject: 'Database', A: 65, fullMark: 100 },
    { subject: 'DevOps', A: 60, fullMark: 100 },
    { subject: 'Python', A: 90, fullMark: 100 },
    { subject: 'Analysis', A: 80, fullMark: 100 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Professional Journey</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-12">
              <div className="prose prose-slate dark:prose-invert lg:prose-lg">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic border-l-4 border-primary pl-4 bg-primary/5 py-4 rounded-r-xl">
                  "I don’t just write code; I solve problems. Whether it’s debugging a script, drafting a mechanical component, or helping a student pass a difficult module, my goal is always to find the most elegant solution to the challenge at hand."
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mt-6">
                  {profile?.bio || "Aspiring professional with a unique blend of mining engineering background and emerging software development skills."}
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education & Certifications
                </h3>
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                  {education.length > 0 ? (
                    education.map((item, idx) => (
                      <div key={idx} className="pl-8 relative">
                        <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${idx === 0 ? 'bg-primary border-4 border-white dark:border-slate-900 shadow-sm' : 'bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-900'}`} />
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{item}</h4>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="pl-8 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow-sm" />
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Software Development Bootcamp</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">HyperionDev</p>
                      </div>
                      <div className="pl-8 relative">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-900" />
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">National Diploma in Mining Engineering</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Tshwane University of Technology</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Mentorship & Excellence
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1"><BookOpen className="w-4 h-4 text-primary" /></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Technical Tutoring:</strong> Supported UNISA students in Mechanics, AutoCAD, and Engineering Drawing.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1"><Users className="w-4 h-4 text-primary" /></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Giving Back:</strong> Actively guiding high schoolers through university applications and career choices.</p>
                  </li>
                </ul>
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

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              The Journey to Tech: Resilience & Growth
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase className="w-24 h-24 text-slate-900 dark:text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  From Survival to Strategy
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  My path wasn't linear. Every chapter reinforced my problem-solving mindset and dedication to continuous improvement.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                    <p className="text-xs font-bold text-primary uppercase mb-1">Service & Operations</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Learned discipline and efficiency at Tsebo and Ribs & Burgers.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-primary/20">
                    <p className="text-xs font-bold text-primary uppercase mb-1">Overcoming Barriers</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Pivoted through financial exclusion using academic strengths to fund my way forward.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <PenTool className="w-24 h-24 text-slate-900 dark:text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  The Technical Bridge
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Using experience with AutoCAD and Engineering Drawing as a bridge to software development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-2xl font-bold text-primary">Resilience</div>
                    <div className="text-[10px] uppercase tracking-tighter text-slate-500">Core Trait</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-2xl font-bold text-primary">Grit</div>
                    <div className="text-[10px] uppercase tracking-tighter text-slate-500">Industry Required</div>
                  </div>
                </div>
                <p className="mt-6 text-sm italic text-slate-500 text-center">
                  "If you can explain Engineering Drawing to a student, you can explain a technical bug to a stakeholder."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="w-24 h-24 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                AI-First Philosophy
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                I see AI not as a threat, but as a powerful **guide and mentor** that fast-tracks my learning and enhances productivity. By utilizing advanced AI tools, I can:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Fast-track technical learning and comprehension
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Optimize and refactor code with precision
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Bridge the gap between engineering theory and code
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Learning Velocity
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={learningData}>
                    <defs>
                      <linearGradient id="colorSkills" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis hide tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area type="monotone" dataKey="skills" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSkills)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Skill Distribution
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 12}} />
                    <Radar name="Kay" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
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
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Mastering TypeScript, React, and Express.js while documenting every commit and milestone.</p>
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
                  <h4 className="font-bold text-slate-700 dark:text-slate-300 text-lg mb-1">Career Transition: Mining to Software</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Leveraging Mining Engineering analytical skills to solve complex software problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import type { Profile } from "@shared/schema";
import { 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Target, 
  Award,
  Terminal,
  Cpu,
  Database
} from "lucide-react";

export default function AboutSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ['/api/profile'],
  });

  return (
    <div className="space-y-0">
      {/* 1. The Journey & Resilience Section */}
      <section id="journey" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Background, Resilience & Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Journey to Tech: Resilience, Grit & Engineering
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              My path to software development wasn't linear, but every chapter reinforced my problem-solving mindset and dedication to continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: The 4 Core Pillars */}
            <div className="lg:col-span-8 space-y-8">
              {/* Pillar 1 */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="text-blue-600 font-mono text-base">01.</span>
                  <h3>From Survival to Strategy</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Before diving into code, I spent years navigating various industries to fund my studies and make ends meet. From maintaining high operational standards in facility cleaning and warehouse maintenance at <strong>Tsebo</strong> to delivering fast-paced service under intense pressure at <strong>Ribs & Burgers</strong>, I learned the invaluable discipline of reliability, operational endurance, and team coordination.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="text-blue-600 font-mono text-base">02.</span>
                  <h3>Overcoming Barriers & The Pivot</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Facing financial exclusion after two rigorous years in Mining Engineering at the University of the Witwatersrand was a pivotal crossroads. Instead of stopping, I channeled my mathematical strengths and self-discipline to fund my way forward, enrolling in the intensive <strong>HyperionDev Software Engineering Bootcamp</strong> and advancing directly into the competitive Graduate Program.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="text-blue-600 font-mono text-base">03.</span>
                  <h3>The Engineering Bridge: CAD & Spatial Thinking</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  My background in <strong>AutoCAD</strong>, <strong>Engineering Drawing (EGD)</strong>, and <strong>Applied Mechanics</strong> provides a natural bridge to software engineering. Breaking down complex 3D mechanical components mirrors decomposing scalable micro-components and database architectures. If you can draft precise engineering blueprints, you can architect structured, maintainable code.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="text-blue-600 font-mono text-base">04.</span>
                  <h3>Mentorship, Communication & Giving Back</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Parallel to my engineering work, I actively tutor tertiary UNISA students through difficult modules including Mechanics, Mathematics, and AutoCAD. I also guide high school matriculants through university applications and career choices. Clear technical communication with struggling students translates directly into communicating bugs, tradeoffs, and system specs clearly to cross-functional teams.
                </p>
              </div>

              {/* Pillar 5: Current Horizon */}
              <div className="p-6 md:p-8 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-3">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="text-blue-600 font-mono text-base">05.</span>
                  <h3>Data Science at IQbusiness & Power BI / Spreadsheets Specialization</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently selected for and working on the <strong>IQbusiness Data Science Learnership Programme</strong> in Sandton, completing the accredited <strong>Data Science Practitioner (NQF Level 5)</strong> qualification. In parallel with the <strong>Coursera Data Analytics Program</strong>, I specialize in <strong>Microsoft Power BI</strong> (interactive dashboards, DAX measures, Power Query ETL), <strong>Advanced Spreadsheets</strong> (Excel modeling, dynamic arrays, Pivot tables), and relational SQL data modeling to deliver actionable business intelligence.
                </p>
              </div>
            </div>

            {/* Right Column: Key Philosophy Quote & Snapshot Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-blue-600 text-white shadow-lg space-y-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-blue-200 block">
                  Governing Principle
                </span>
                <blockquote className="text-lg font-medium leading-snug">
                  "I don’t just write code; I solve problems. Whether debugging a script, drafting a mechanical component, or helping a student pass a difficult module, my goal is always to find the most elegant solution to the challenge at hand."
                </blockquote>
                <div className="pt-4 border-t border-blue-500/80 text-xs text-blue-100 font-medium">
                  — Khensani Daniel Ntulo
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Core Soft & Strategic Strengths
                </h4>
                <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Unshakable work ethic proven across frontline industries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Analytical mathematical decomposition (Wits Engineering)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Stakeholder communication honed via university tutoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Rapid full-stack shipping velocity (React & Python)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Capabilities Matrix */}
      <section id="capabilities" className="py-24 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Engineering Matrix
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Stack & Domain Competencies
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">
              A concrete breakdown of technologies I build with daily, categorized by architectural layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Frontend */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Frontend Web</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Modern responsive client applications with component-driven architectures.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="font-medium">React & JSX</span>
                  <span className="text-slate-400 font-mono text-[11px]">Primary</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">TypeScript & ES6+</span>
                  <span className="text-slate-400 font-mono text-[11px]">Typed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Tailwind CSS & Vite</span>
                  <span className="text-slate-400 font-mono text-[11px]">Styling</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">HTML5 Semantic & ARIA</span>
                  <span className="text-slate-400 font-mono text-[11px]">Access</span>
                </div>
              </div>
            </div>

            {/* Column 2: Backend */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Backend & APIs</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Reliable server-side logic, routing, data processing, and authentication.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Python (Django, Flask)</span>
                  <span className="text-slate-400 font-mono text-[11px]">Frameworks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Node.js & Express</span>
                  <span className="text-slate-400 font-mono text-[11px]">Runtime</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">RESTful API Design</span>
                  <span className="text-slate-400 font-mono text-[11px]">Protocols</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Auth & Session Flow</span>
                  <span className="text-slate-400 font-mono text-[11px]">Security</span>
                </div>
              </div>
            </div>

            {/* Column 3: Data Analytics & BI */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">BI & Data Analytics</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Executive dashboards, data modeling, automated ETL, and operational reporting.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Microsoft Power BI</span>
                  <span className="text-slate-400 font-mono text-[11px]">DAX / Measures</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Advanced Spreadsheets</span>
                  <span className="text-slate-400 font-mono text-[11px]">Excel / Sheets</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Power Query & ETL</span>
                  <span className="text-slate-400 font-mono text-[11px]">Cleaning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">SQL & Data Modeling</span>
                  <span className="text-slate-400 font-mono text-[11px]">Star Schema</span>
                </div>
              </div>
            </div>

            {/* Column 4: Engineering & Tools */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Engineering Tools</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Technical modeling, version control, and development environments.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Git & GitHub</span>
                  <span className="text-slate-400 font-mono text-[11px]">VCS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">AutoCAD & EGD</span>
                  <span className="text-slate-400 font-mono text-[11px]">Drafting</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">MATLAB & Math</span>
                  <span className="text-slate-400 font-mono text-[11px]">Calculus</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Linux & Bash</span>
                  <span className="text-slate-400 font-mono text-[11px]">Shell</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Practical Experience & Education Timeline */}
      <section id="experience" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Work Experience */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Experience & Track Record
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Work Experience
                </h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 md:p-8 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                      Data Science Practitioner (Learnership Programme)
                    </h4>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">Current (12 Months)</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    IQbusiness · Rivonia, Sandton (NQF Level 5 Qualification)
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Selected for the prestigious 12-month learnership programme combining accredited training with practical enterprise workplace experience. Focus areas include <strong>Data Analysis & Visualisation</strong>, <strong>Programming for Data</strong>, <strong>Data Management & Reporting</strong>, and <strong>Analytical Problem-Solving</strong>.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-500 font-mono">
                    <span>Data Analysis</span>
                    <span>·</span>
                    <span>Data Visualization</span>
                    <span>·</span>
                    <span>Python for Data</span>
                    <span>·</span>
                    <span>Reporting</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                      Software Developer & IT Systems Specialist
                    </h4>
                    <span className="text-xs font-mono text-slate-500">Contract (5 Months)</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    MM All Electronics · Samsung Authorized Repair Center
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Maintained mission-critical business systems to ensure zero downtime. Designed and deployed custom business solutions, including the All Electronics Admin Hub, to streamline real-time repair tracking and coordinate internal technician assignments.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-500 font-mono">
                    <span>React</span>
                    <span>·</span>
                    <span>Python Backend</span>
                    <span>·</span>
                    <span>PostgreSQL</span>
                    <span>·</span>
                    <span>Internal IT Support</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                      Technical Tutor & STEM Academic Mentor
                    </h4>
                    <span className="text-xs font-mono text-slate-500">2021 – Present</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Independent Tutoring Practice
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Mentored 1st and 2nd-year UNISA engineering students in Mechanics, Mathematics, and AutoCAD. Guided high school matric candidates in Mathematics, Physical Sciences, and Engineering Graphics & Design (EGD), helping dozens transition into university.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-500 font-mono">
                    <span>AutoCAD</span>
                    <span>·</span>
                    <span>Mechanics</span>
                    <span>·</span>
                    <span>Calculus</span>
                    <span>·</span>
                    <span>EGD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Education & Certifications */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Academic Credentials
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Education & Qualifications
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      Data Science Learnership
                    </span>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">Current</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Data Science Practitioner (NQF Level 5)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    IQbusiness (Rivonia, Sandton) · Practical workplace experience & accredited data science training.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      Online Specialization
                    </span>
                    <span className="text-xs font-mono text-slate-400">Enrolled</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Professional Data Analytics Program
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Coursera · Data cleaning, analysis, SQL, visualization, and data-driven business decision making.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Bootcamp & Graduate Program
                    </span>
                    <span className="text-xs font-mono text-slate-400">Graduate</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    HyperionDev Software Engineering Bootcamp
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Full-Stack development, data structures, algorithms, CI/CD, and system design.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      University Education
                    </span>
                    <span className="text-xs font-mono text-slate-400">2 Yrs Completed</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    BSc Mining Engineering
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    University of the Witwatersrand (Wits) · Advanced Mathematics, Physics & CAD.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Secondary Education
                    </span>
                    <span className="text-xs font-mono text-slate-400">Matric</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    National Senior Certificate (NSC)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Eden Ridge High School · Distinction track in Mathematics & Physical Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

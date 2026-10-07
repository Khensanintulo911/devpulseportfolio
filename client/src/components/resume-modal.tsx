import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Printer, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Code, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
        <div className="p-8 md:p-10 text-slate-900 dark:text-slate-100">
          {/* Header Action Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                Curriculum Vitae
              </span>
              <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight mt-1">
                Khensani Daniel Ntulo
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Full-Stack Software Developer & Data Science Practitioner · IQbusiness Learnership · Mining Engineering Foundation
              </DialogDescription>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                className="gap-2 rounded-xl text-xs font-medium border-slate-300 dark:border-slate-700"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print CV</span>
              </Button>
              <Button
                size="sm"
                asChild
                className="gap-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a href="mailto:danielntulo@gmail.com?subject=Job%20Opportunity%20-%20Khensani%20Ntulo">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reach Out</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Gauteng, Alberton 1458 (Remote/On-site)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <a href="mailto:danielntulo@gmail.com" className="hover:underline">danielntulo@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <a href="tel:+27834913597" className="hover:underline">+27 83 491 3597</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Professional Profile
            </h4>
            <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Disciplined and analytical software developer and Data Science Practitioner currently participating in the <strong>IQbusiness Data Science Learnership Programme (NQF Level 5)</strong> and enrolled in the <strong>Coursera Data Analytics Program</strong>. Developed a strong mathematical and computational foundation over two years in Mining Engineering at the University of the Witwatersrand, complemented by full-stack software training from HyperionDev. Proven experience building real-world enterprise applications, including the MM All Electronics business operations & repair tracking platform, as well as production systems using React, TypeScript, Python, Express.js, and PostgreSQL. Demonstrates exceptional grit, dedication to continuous improvement, and the ability to articulate complex technical ideas clearly through extensive experience tutoring UNISA university students in Mechanics and Engineering Drawing.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-600" />
              Technical Core Competencies
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-semibold block text-slate-900 dark:text-white mb-1">Business Intelligence & Analytics</span>
                <span className="text-slate-600 dark:text-slate-400 text-xs">
                  Microsoft Power BI (DAX, Power Query, Data Modeling), Advanced Spreadsheets (Excel / Google Sheets, Pivot Tables, XLOOKUP), SQL for BI, Star Schema, KPI Scorecards, Executive Reporting
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-semibold block text-slate-900 dark:text-white mb-1">Frontend Engineering</span>
                <span className="text-slate-600 dark:text-slate-400 text-xs">
                  React, TypeScript, JavaScript (ES6+), Vite, Tailwind CSS, HTML5, CSS3, Responsive Design, State Management
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-semibold block text-slate-900 dark:text-white mb-1">Backend & API Architecture</span>
                <span className="text-slate-600 dark:text-slate-400 text-xs">
                  Python (Django, Flask), Express.js, Node.js, RESTful APIs, Session & Token Authentication, Server-side logic
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-semibold block text-slate-900 dark:text-white mb-1">Database & Engineering Tools</span>
                <span className="text-slate-600 dark:text-slate-400 text-xs">
                  PostgreSQL, SQLite, Drizzle ORM, SQL, Git/GitHub, AutoCAD, MATLAB, Engineering Drawing (EGD), Linux
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Practical Experience & Milestones
            </h4>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-600 pl-4 py-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="font-bold text-slate-900 dark:text-white text-base">
                    Data Science Practitioner (Learnership Programme)
                  </h5>
                  <span className="text-xs text-blue-600 font-mono font-semibold">Current (12 Months)</span>
                </div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  IQbusiness · Rivonia, Sandton (NQF Level 5 Qualification)
                </p>
                <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Engaged in accredited enterprise training and practical workplace assignments in Data Science and Analytics.</li>
                  <li>Applying programming for data, data cleaning, automated reporting, and visual dashboard generation.</li>
                  <li>Solving analytical problems combining business intelligence with statistical and machine learning foundations.</li>
                </ul>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-4 py-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="font-bold text-slate-900 dark:text-white text-base">
                    Software Developer & IT Systems Specialist
                  </h5>
                  <span className="text-xs text-slate-500 font-mono">Contract (5 Months)</span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  MM All Electronics (Samsung Authorized Repair Service Center)
                </p>
                <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Designed and deployed custom "Admin Hub" operations platform to coordinate technicians and live repair statuses.</li>
                  <li>Maintained business systems to achieve uninterrupted uptime for customer service intake and status lookup.</li>
                  <li>Streamlined parts inventory reporting and customer progress notifications, drastically reducing manual call volume.</li>
                </ul>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-4 py-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="font-bold text-slate-900 dark:text-white text-base">
                    Technical Tutor & Academic Mentor
                  </h5>
                  <span className="text-xs text-slate-500 font-mono">Independent</span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  UNISA Tertiary Students & High School Scholars
                </p>
                <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Tutored 1st and 2nd-year UNISA engineering students in Mechanics, AutoCAD, and Engineering Drawing.</li>
                  <li>Instructed high school candidates in Mathematics, Physical Science, and Engineering Graphics & Design (EGD).</li>
                  <li>Mentored matriculants on university application strategies and STEM career pathing.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Education & Professional Certifications
            </h4>
            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Data Science Practitioner (NQF Level 5)</h5>
                    <p className="text-xs text-slate-500">IQbusiness (Rivonia, Sandton) · 12-Month Accredited Learnership Programme</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Current</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Professional Data Analytics Program</h5>
                    <p className="text-xs text-slate-500">Coursera · Data Cleaning, Analysis, Visualization, SQL & Business Intelligence</p>
                  </div>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Enrolled</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Software Engineering Bootcamp & Graduate Program</h5>
                    <p className="text-xs text-slate-500">HyperionDev · Full-Stack Development, Data Structures, Algorithms & Mentorship</p>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Graduate</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">BSc in Mining Engineering (2 Years Completed)</h5>
                    <p className="text-xs text-slate-500">University of the Witwatersrand (Wits) · Mechanics, Mathematics & CAD</p>
                  </div>
                  <span className="text-xs text-slate-500">Foundation</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">National Senior Certificate (Matric)</h5>
                    <p className="text-xs text-slate-500">Eden Ridge High School · Mathematics, Physical Sciences & EGD Focus</p>
                  </div>
                  <span className="text-xs text-slate-500">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

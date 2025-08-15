import { useQuery } from "@tanstack/react-query";
import type { Profile } from "@shared/schema";

export default function AboutSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ['/api/profile'],
  });

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dev-slate mb-12">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Developer workspace with computer setup" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dev-blue/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-slate-600 leading-relaxed">
                  {profile?.bio || "I'm the founder of Dev Pulse - a technology brand focused on building innovative solutions that bridge engineering and software development. My journey from Mining Engineering at Wits University to full-stack development represents the evolution of traditional engineering into the digital age."}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Currently completing the HyperionDev Graduate Program, I bring a unique perspective that combines analytical problem-solving from engineering with modern software development practices. This hybrid approach enables me to create comprehensive applications that solve complex real-world challenges.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-xl text-dev-slate mb-4">Technical Journey</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-dev-blue rounded-full"></div>
                    <span className="text-slate-600">BSc Mining Engineering (2019-2021) - Wits University</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-dev-cyan rounded-full"></div>
                    <span className="text-slate-600">HyperionDev Software Engineering Bootcamp - Completed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">HyperionDev Graduate Program - Current</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-xl text-dev-slate mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">Python/Django</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">JavaScript/React</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">Vue.js</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">Node.js/Express</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">PostgreSQL/MySQL</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">MATLAB/AutoCAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

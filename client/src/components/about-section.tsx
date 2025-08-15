import { useQuery } from "@tanstack/react-query";
import type { Profile } from "@shared/schema";

export default function AboutSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ['/api/profile'],
  });

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">About Dev Pulse</h2>
          
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
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl my-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">📍 {profile?.location || 'Gauteng, Alberton 1458'}</h4>
                      <p className="text-sm text-slate-600">Open to Remote & On-site Opportunities</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-rocket text-white text-sm"></i>
                      </div>
                      <span className="text-slate-600">🚀 Currently Learning: TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-code text-white text-sm"></i>
                      </div>
                      <span className="text-slate-600">⚡ Advancing: JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-database text-white text-sm"></i>
                      </div>
                      <span className="text-slate-600">🎯 Future Focus: Databases</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-brain text-white text-sm"></i>
                      </div>
                      <span className="text-slate-600">🧠 Goal: Data Science & ML</span>
                    </div>
                  </div>
                </div>
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
                
                <h3 className="font-semibold text-xl text-dev-slate mb-4">Technology Stack</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-2">Current Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">Python/Django</span>
                      <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">JavaScript/React</span>
                      <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">Vue.js</span>
                      <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">Node.js/Express</span>
                      <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">PostgreSQL/MySQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-2">Currently Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">TypeScript</span>
                      <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">Advanced JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-2">Engineering Background</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">MATLAB</span>
                      <span className="bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">AutoCAD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import type { Profile } from "@shared/schema";

export default function AboutSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ['/api/profile'],
  });

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Dev Pulse</h2>
          
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
                <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">DP</span>
                    </div>
                    About Dev Pulse
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dev Pulse is more than just a portfolio - it's my way of showcasing my work and representing myself as something beyond just the name "Khensani". This brand represents my unique approach to technology, combining traditional engineering thinking with modern software development. It's a platform where I can demonstrate my journey, skills, and the innovative solutions I create.
                  </p>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  {profile?.bio || "I'm the founder of Dev Pulse - a technology brand focused on building innovative solutions that bridge engineering and software development. My journey from Mining Engineering at Wits University to full-stack development represents the evolution of traditional engineering into the digital age."}
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl my-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{profile?.location || 'Gauteng, Alberton 1458'}</h4>
                      <p className="text-sm text-gray-600">Open to Remote & On-site Opportunities</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-rocket text-white text-sm"></i>
                      </div>
                      <span className="text-gray-600">Currently Learning: TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-code text-white text-sm"></i>
                      </div>
                      <span className="text-gray-600">Advancing: JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-database text-white text-sm"></i>
                      </div>
                      <span className="text-gray-600">Future Focus: Databases</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-brain text-white text-sm"></i>
                      </div>
                      <span className="text-gray-600">Goal: Data Science & ML</span>
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
                
                <h3 className="font-semibold text-xl text-gray-800 mb-4">Technology Stack</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Current Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium">Python/Django</span>
                      <span className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium">HTML/CSS</span>
                      <span className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium">JavaScript</span>
                      <span className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium">SQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Currently Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-500 text-white px-3 py-1 rounded-lg text-sm font-medium">TypeScript</span>
                      <span className="bg-gray-500 text-white px-3 py-1 rounded-lg text-sm font-medium">Advanced JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Engineering Background</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm font-medium">MATLAB</span>
                      <span className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm font-medium">AutoCAD</span>
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

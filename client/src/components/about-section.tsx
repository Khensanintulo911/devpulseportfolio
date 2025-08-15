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
                  {profile?.bio || "I'm a passionate full-stack developer with expertise in creating innovative web applications that solve real-world problems. My journey in technology has led me to develop comprehensive solutions ranging from political engagement platforms to business management systems."}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  With a focus on user experience and robust functionality, I specialize in building scalable applications that make a meaningful impact in their respective domains.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-xl text-dev-slate mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">JavaScript</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">React</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">Node.js</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">Python</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">MongoDB</span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

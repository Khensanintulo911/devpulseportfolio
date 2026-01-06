import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse h-96 bg-slate-100 dark:bg-slate-800" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            A selection of my recent full-stack applications and engineering solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover-elevate border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-2">
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] uppercase tracking-wider">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-4 flex gap-4">
                  {project.repoUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild size="sm" className="flex-1 gap-2">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";
import { ExternalLink, Github, ChevronRight, Play, LayoutList, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            {projects?.map((project) => {
              const techStack = project.techStack ? JSON.parse(project.techStack) as string[] : [];
              const specifications = project.specifications ? JSON.parse(project.specifications) as string[] : [];
              const images = project.images ? JSON.parse(project.images) as string[] : [];
              
              return (
                <Card key={project.id} className="group overflow-hidden hover-elevate border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full">
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
                  
                  <CardContent className="px-6 pb-2 flex-grow">
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[10px] uppercase tracking-wider">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-4 flex flex-col gap-3 mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full gap-2 rounded-xl group/btn">
                          View Details <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden dark:bg-slate-900 dark:border-slate-800">
                        <ScrollArea className="h-full max-h-[90vh]">
                          <div className="p-6 md:p-8">
                            <DialogHeader className="mb-8">
                              <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                              <DialogDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                                {project.description}
                              </DialogDescription>
                            </DialogHeader>

                            <Tabs defaultValue="specs" className="w-full">
                              <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
                                <TabsTrigger value="specs" className="rounded-lg gap-2">
                                  <LayoutList className="w-4 h-4" /> Specs
                                </TabsTrigger>
                                <TabsTrigger value="gallery" className="rounded-lg gap-2">
                                  <ImageIcon className="w-4 h-4" /> Gallery
                                </TabsTrigger>
                                <TabsTrigger value="video" className="rounded-lg gap-2">
                                  <Play className="w-4 h-4" /> Video
                                </TabsTrigger>
                              </TabsList>

                              <TabsContent value="specs" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Technical Specifications</h4>
                                    <ul className="space-y-3">
                                      {specifications.map((spec, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                          <span className="text-sm leading-relaxed">{spec}</span>
                                        </li>
                                      ))}
                                      {specifications.length === 0 && (
                                        <li className="text-slate-500 italic text-sm">No specifications listed.</li>
                                      )}
                                    </ul>
                                  </div>
                                  <div className="space-y-6">
                                    <div>
                                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Core Tech Stack</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {techStack.map((tech) => (
                                          <Badge key={tech} variant="outline" className="px-3 py-1 text-xs">
                                            {tech}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3 pt-4">
                                      {project.demoUrl && (
                                        <Button asChild className="w-full gap-2 rounded-xl">
                                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4" /> Visit Live Project
                                          </a>
                                        </Button>
                                      )}
                                      {project.repoUrl && (
                                        <Button asChild variant="outline" className="w-full gap-2 rounded-xl">
                                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4" /> View Source Code
                                          </a>
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="gallery" className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {images.map((img, i) => (
                                    <div key={i} className="aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                                      <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                  ))}
                                  {images.length === 0 && (
                                    <div className="col-span-2 py-20 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                                      <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                      <p className="text-slate-500">No gallery images available for this project yet.</p>
                                    </div>
                                  )}
                                </div>
                              </TabsContent>

                              <TabsContent value="video" className="space-y-4">
                                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-800">
                                  {project.videoUrl ? (
                                    <video controls className="w-full h-full">
                                      <source src={project.videoUrl} type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                  ) : (
                                    <div className="text-center p-8">
                                      <Play className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                                      <p className="text-slate-500 text-lg">Project walkthrough coming soon!</p>
                                      <p className="text-slate-600 text-sm mt-2">I am currently preparing a high-quality screen recording for this system.</p>
                                    </div>
                                  )}
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                    
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <Button asChild variant="ghost" size="sm" className="flex-1 gap-2 text-xs rounded-lg">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5" /> Source
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button asChild variant="ghost" size="sm" className="flex-1 gap-2 text-xs rounded-lg">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3.5 h-3.5" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

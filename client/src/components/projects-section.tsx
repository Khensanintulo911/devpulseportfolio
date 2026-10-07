import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";
import { ExternalLink, Github, ChevronRight, Layers, LayoutList, Image as ImageIcon, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  // Filter projects by category
  const filteredProjects = (projects || []).filter((project) => {
    if (selectedCategory === "all") return true;
    const tech = (project.techStack || "").toLowerCase();
    if (selectedCategory === "fullstack") return tech.includes("react") || tech.includes("express") || tech.includes("node");
    if (selectedCategory === "python") return tech.includes("python") || tech.includes("django");
    if (selectedCategory === "data") return tech.includes("power bi") || tech.includes("excel") || tech.includes("spreadsheets") || tech.includes("data") || tech.includes("analytics") || tech.includes("streamlit");
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Featured Case Studies & Software
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Production Engineering & Live Systems
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Real-world systems engineered to solve operational bottlenecks, track complex assets, and automate manual business operations.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Systems ({projects?.length || 5})
            </button>
            <button
              onClick={() => setSelectedCategory("fullstack")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === "fullstack"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Full-Stack & Cloud
            </button>
            <button
              onClick={() => setSelectedCategory("python")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === "python"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Python & Django
            </button>
            <button
              onClick={() => setSelectedCategory("data")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === "data"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Power BI & Analytics
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && !projects && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const techStack = project.techStack ? (JSON.parse(project.techStack) as string[]) : [];
            const specifications = project.specifications ? (JSON.parse(project.specifications) as string[]) : [];
            const isFeaturedHero = index === 0 && selectedCategory === "all";

            return (
              <div
                key={project.id}
                className={`group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden ${
                  isFeaturedHero ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${isFeaturedHero ? "h-64 sm:h-80" : "h-52"}`}>
                  <img
                    src={project.imageUrl || "/project-images/adminhub pics (1).png"}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Title overlay on bottom of image for visual anchoring */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-blue-300 font-semibold mb-1">
                      {index === 0 ? "Flagship System" : `System 0${index + 1}`}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Unboxed Metadata (Zero-Pill discipline) */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {techStack.slice(0, 4).map((tech, i) => (
                        <span key={tech} className="flex items-center gap-1.5">
                          <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                          {i < Math.min(techStack.length - 1, 3) && <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Quick highlights preview */}
                    {specifications.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                        {specifications.slice(0, 2).map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveModalProject(project)}
                      className="rounded-xl text-xs font-semibold flex-1 gap-1.5 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
                    >
                      <span>System Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Button>

                    <div className="flex items-center gap-1.5">
                      {project.demoUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-1 px-3"
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <span>Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      )}
                      {project.repoUrl && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="rounded-xl text-xs px-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="View Source on GitHub">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Technical Case Study Modal */}
      {activeModalProject && (
        <Dialog open={!!activeModalProject} onOpenChange={(open) => !open && setActiveModalProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <ScrollArea className="h-full max-h-[90vh]">
              <div className="p-6 md:p-10 space-y-8">
                {/* Modal Header */}
                <DialogHeader className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Technical Architecture & Breakdown</span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {activeModalProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeModalProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Primary Hero Preview */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={activeModalProject.imageUrl || "/project-images/adminhub pics (1).png"}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Specifications & Tech Stack Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left: Detailed Specs */}
                  <div className="md:col-span-7 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                      <LayoutList className="w-4 h-4 text-blue-600" />
                      Key Capabilities & Engineering Features
                    </h4>
                    <div className="space-y-3">
                      {activeModalProject.specifications && (JSON.parse(activeModalProject.specifications) as string[]).map((spec, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Tech Stack & Links */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeModalProject.techStack && (JSON.parse(activeModalProject.techStack) as string[]).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex flex-col gap-2.5">
                        {activeModalProject.demoUrl && (
                          <Button asChild className="w-full gap-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white">
                            <a href={activeModalProject.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Open Live Application</span>
                            </a>
                          </Button>
                        )}
                        {activeModalProject.repoUrl && (
                          <Button asChild variant="outline" className="w-full gap-2 rounded-xl text-xs font-semibold border-slate-300 dark:border-slate-700">
                            <a href={activeModalProject.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5" />
                              <span>View Source Code</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Screenshots Gallery if available */}
                {activeModalProject.images && (
                  (() => {
                    const gallery = JSON.parse(activeModalProject.images) as string[];
                    if (gallery.length <= 1) return null;

                    return (
                      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-blue-600" />
                          System Screenshots & Interfaces ({gallery.length})
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {gallery.map((imgUrl, gIdx) => (
                            <div key={gIdx} className="aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                              <img
                                src={imgUrl}
                                alt={`System View ${gIdx + 1}`}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

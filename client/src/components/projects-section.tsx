export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "VoteSphere SA",
      description: "A comprehensive political engagement platform that allows users to dive deep into South African politics and parties. Users can explore party platforms, understand political positions, and participate in the democratic process through secure voting mechanisms and political insights.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Civic Tech",
      categoryColor: "bg-red-500",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/Khensanintulo911/votesphereSA",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Stockify SA",
      description: "A robust inventory management system specifically designed for South African businesses. Features real-time stock tracking, automated low-stock alerts, comprehensive analytics, and business intelligence dashboards for efficient operations and data-driven decision making.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Business Solutions",
      categoryColor: "bg-green-500",
      technologies: ["React", "Express", "PostgreSQL", "Charts.js"],
      githubUrl: "https://github.com/Khensanintulo911/stockifysa",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Klasora",
      description: "An innovative academic platform that connects teachers and students in a comprehensive learning environment. Features include grade selection, subject management, dynamic content generation, interactive quizzes, tests, and detailed progress tracking for both educators and learners.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "EdTech",
      categoryColor: "bg-purple-500",
      technologies: ["Vue.js", "Django", "MySQL", "Python"],
      githubUrl: "https://github.com/Khensanintulo911/Klasora",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dev-slate mb-4">Dev Pulse Solutions</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Explore our portfolio of innovative applications that demonstrate how engineering thinking and software development can create comprehensive solutions across civic engagement, business management, and education.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient}`}>
                  <img 
                    src={project.image}
                    alt={`${project.title} interface`}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dev-slate mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-dev-blue hover:text-blue-700 font-medium"
                    >
                      <i className="fab fa-github mr-2"></i>
                      View Code
                    </a>
                    <button className="bg-dev-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/Khensanintulo911"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-dev-slate text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
            >
              <i className="fab fa-github mr-3"></i>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

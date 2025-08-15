export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Vote SA",
      description: "A comprehensive web application that allows users to dive into South African politics, explore different parties, and participate in the democratic process through secure voting mechanisms.",
      image: "https://pixabay.com/get/g5c8d6599a14fadd097d960e18305a4f2ecd1161c1a193f65da3e8d9af40b2449396ee9dff440b9bdd2d7f87f3f66214103f81ca7c4b88714c7de4105ee0363df_1280.jpg",
      category: "Politics",
      categoryColor: "bg-red-500",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Khensanintulo911/votesphereSA",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "StockSA",
      description: "A robust inventory management system designed for South African businesses. Features real-time stock tracking, automated alerts, and comprehensive analytics for efficient business operations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Business",
      categoryColor: "bg-green-500",
      technologies: ["React", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/Khensanintulo911/stockifysa",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Klasora",
      description: "An innovative academic platform connecting teachers and students. Features grade selection, subject management, dynamic content generation, interactive quizzes, and comprehensive progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Education",
      categoryColor: "bg-purple-500",
      technologies: ["Vue.js", "Django", "MySQL"],
      githubUrl: "https://github.com/Khensanintulo911/Klasora",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dev-slate mb-4">Featured Projects</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Explore my portfolio of innovative web applications that showcase my expertise in full-stack development and problem-solving.
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

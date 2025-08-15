export default function HeroSection() {
  const proceedToPortfolio = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-dev-slate to-slate-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-dev-blue to-dev-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-white font-bold text-3xl">DP</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Dev Pulse
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Engineering Innovation Through Code
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Where traditional engineering meets modern software development - building solutions that bridge the physical and digital worlds
            </p>
          </div>

          <div className="mb-12">
            <button 
              onClick={proceedToPortfolio}
              className="group bg-white text-dev-slate px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span className="mr-3">Explore My Work</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-dev-cyan">3+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dev-cyan">2+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dev-cyan">100%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

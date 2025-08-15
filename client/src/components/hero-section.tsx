export default function HeroSection() {
  const proceedToPortfolio = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-glow">
              <span className="text-white font-bold text-3xl">DP</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-bounce-slow">
              Dev Pulse
            </h1>
            <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text mb-8">
              🚀 Engineering Innovation Through Code
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              🌉 Where traditional engineering meets modern software development - building solutions that bridge the physical and digital worlds
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-emerald-400">3+</div>
              <div className="text-slate-300 text-sm">Projects Built</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-blue-400">Graduate</div>
              <div className="text-slate-300 text-sm">HyperionDev Program</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-purple-400">Seeking</div>
              <div className="text-slate-300 text-sm">Opportunities</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-orange-400">Remote</div>
              <div className="text-slate-300 text-sm">& On-site Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

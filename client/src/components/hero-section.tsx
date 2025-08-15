export default function HeroSection() {
  const proceedToPortfolio = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-white font-bold text-3xl">DP</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Dev Pulse
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Engineering Innovation Through Code
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-code text-gray-300 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-gray-300">3+</div>
              <div className="text-gray-400 text-sm">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-graduation-cap text-gray-300 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-gray-300">Graduate</div>
              <div className="text-gray-400 text-sm">HyperionDev Program</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-search text-gray-300 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-gray-300">Seeking</div>
              <div className="text-gray-400 text-sm">Opportunities</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-map-marker-alt text-gray-300 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-gray-300">Remote</div>
              <div className="text-gray-400 text-sm">& On-site Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

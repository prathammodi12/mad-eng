export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-96 bg-black overflow-hidden flex items-center">
      {/* Video Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10"></div>
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-50"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Enterprise-Grade</span> Software Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            Trusted by global leaders to deliver innovative IT solutions that drive measurable business outcomes across 26 countries. From SAP implementation to AI integration, we transform enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold transition transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white font-semibold transition">
              Learn More
            </button>
          </div>
          <div className="mt-16 flex flex-wrap gap-12 text-white">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-slate-300 text-sm mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-slate-300 text-sm mt-1">Expert Engineers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">26</p>
              <p className="text-slate-300 text-sm mt-1">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

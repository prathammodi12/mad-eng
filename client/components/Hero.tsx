export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              MAD Engineers delivers innovative software solutions that empower businesses to embrace digital transformation. From concept to deployment, we're your trusted technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition">
                Learn More
              </button>
            </div>
            <div className="mt-12 flex gap-8 text-slate-600">
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">50+</p>
                <p className="text-sm">Expert Engineers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">20+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">≡</div>
                  <p className="text-lg font-semibold">Advanced Technology Stack</p>
                  <p className="text-sm opacity-90 mt-2">Modern tools for modern solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

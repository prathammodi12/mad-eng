export default function EnterpriseSolutions() {
  const solutions = [
    {
      title: "SAP Solutions",
      subtitle: "End-to-End Implementation & Optimization",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "AI Integration",
      subtitle: "Intelligent Business Analytics",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Salesforce Services",
      subtitle: "CRM Transformation & Automation",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Custom Development",
      subtitle: "Tailored Enterprise Applications",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Enterprise Solutions Tailored To Your Business Challenges
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At MAD Engineers, we understand that every enterprise faces unique challenges. Our comprehensive approach combines cutting-edge technology with deep business insight to deliver solutions that drive real results.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you're optimizing SAP systems, implementing Salesforce, integrating AI capabilities, or building custom applications, our expert team delivers end-to-end solutions that maximize ROI and drive growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Proven implementation methodologies with 500+ successful projects</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Deep expertise across SAP, Salesforce, and emerging technologies</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">24/7 support and ongoing optimization for sustained success</p>
              </div>
            </div>
          </div>

          {/* Right Column - Solution Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${solution.color} rounded-xl p-8 text-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 min-h-64 flex flex-col justify-end`}
              >
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className="text-sm opacity-90">{solution.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

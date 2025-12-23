export default function CaseStudies() {
  const caseStudies = [
    {
      badge: "Sustainability",
      title: "Enables eCommerce retailers to accurately calculate and reduce carbon emissions",
      description: "Reduced logistics emissions by 40% for leading retail chains",
      color: "from-green-500 to-emerald-600",
      badgeBg: "bg-green-100 text-green-700",
    },
    {
      badge: "Artificial Intelligence",
      title: "AI-powered analytics platform transforms business intelligence",
      description: "Increased decision-making efficiency by 60% for enterprise clients",
      color: "from-purple-500 to-indigo-600",
      badgeBg: "bg-purple-100 text-purple-700",
    },
    {
      badge: "Digital Transformation",
      title: "Complete enterprise modernization through cloud migration",
      description: "Reduced infrastructure costs by 45% while improving scalability",
      color: "from-blue-500 to-cyan-600",
      badgeBg: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Delivering Measurable Results for Global Enterprises
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Real-world success stories from our clients across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${study.color} rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition"></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Badge */}
                <div className={`inline-block w-fit px-3 py-1 rounded-full text-sm font-semibold ${study.badgeBg} mb-4`}>
                  {study.badge}
                </div>

                {/* Title and Description */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-sm opacity-90">{study.description}</p>
                </div>

                {/* Link */}
                <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
                    Read Full Case Study
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

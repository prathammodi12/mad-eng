export default function ITExpertise() {
  const expertise = [
    { name: "SAP", category: "Enterprise Platforms" },
    { name: "Salesforce", category: "Enterprise Platforms" },
    { name: "Microsoft", category: "Cloud & Development" },
    { name: "Oracle", category: "Enterprise Platforms" },
    { name: "ServiceNow", category: "Enterprise Platforms" },
    { name: "AWS", category: "Cloud & Development" },
    { name: "Azure", category: "Cloud & Development" },
    { name: "Google Cloud", category: "Cloud & Development" },
    { name: "Python", category: "Development Tools" },
    { name: "Java", category: "Development Tools" },
    { name: "React", category: "Development Tools" },
    { name: "Node.js", category: "Development Tools" },
    { name: "Tableau", category: "Analytics & AI" },
    { name: "Power BI", category: "Analytics & AI" },
    { name: "TensorFlow", category: "Analytics & AI" },
    { name: "Kubernetes", category: "Infrastructure" },
  ];

  const categories = ["Enterprise Platforms", "Cloud & Development", "Development Tools", "Analytics & AI", "Infrastructure"];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive IT Expertise for Enterprise Success
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Our team masters a diverse range of technologies and platforms to deliver comprehensive enterprise solutions
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 font-medium transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-lg p-4 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition text-center cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto bg-white rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition">
                <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600">
                  {item.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.name}</h3>
              <p className="text-xs text-slate-500">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

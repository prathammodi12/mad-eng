const trustItems = [
  {
    title: "Personalized Tech Support",
    description: "Dedicated support team available to assist you",
  },
  {
    title: "IT & Business Consulting",
    description: "Strategic guidance aligned with business goals",
  },
  {
    title: "Managed IT Services",
    description: "Complete infrastructure management and monitoring",
  },
  {
    title: "Global Tech Expertise",
    description: "International team with diverse industry experience",
  },
  {
    title: "End-to-End Implementation",
    description: "From planning to deployment and beyond",
  },
  {
    title: "Proven Track Record",
    description: "500+ successful projects across 26 countries",
  },
  {
    title: "Budget-Friendly Solutions",
    description: "Flexible pricing models that work for your budget",
  },
];

export default function WhyTrust() {
  const repeatedItems = [...trustItems, ...trustItems];

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Leading Enterprises Trust MAD Engineers
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive benefits that set us apart
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          <div className="flex animate-marquee gap-6">
            {repeatedItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

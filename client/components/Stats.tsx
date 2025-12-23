import { Briefcase, Users, Building2, Globe } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Briefcase,
      value: "500+",
      label: "Projects",
      sublabel: "Successfully delivered",
    },
    {
      icon: Users,
      value: "50+",
      label: "Team Members",
      sublabel: "Expert engineers & consultants",
    },
    {
      icon: Building2,
      value: "100+",
      label: "Enterprise Clients",
      sublabel: "Global companies trust us",
    },
    {
      icon: Globe,
      value: "26",
      label: "Countries",
      sublabel: "Serving businesses worldwide",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            MAD Engineers Business Stats
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            We believe in numbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all group"
              >
                <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-blue-100">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

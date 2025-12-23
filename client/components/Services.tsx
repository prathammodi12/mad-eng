import { Code2, Smartphone, Cloud, Zap, BarChart3, Lock } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance and scalability."
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps designed to engage users and drive business growth."
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure solutions that grow with your business while maintaining security and reliability."
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Intelligent solutions powered by machine learning and automation to streamline your operations."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and visualization solutions."
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures ensuring your data and systems are protected against threats."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our full suite of enterprise services covering everything from implementation to optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                  <Icon className="text-blue-600 group-hover:text-white transition" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

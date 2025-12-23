import { useState } from "react";

export default function ClientLogos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock client logos - in production these would be actual images
  const slides = [
    [
      "SAP",
      "Microsoft",
      "Salesforce",
      "Oracle",
      "ServiceNow",
      "Adobe",
    ],
    [
      "Amazon",
      "Google Cloud",
      "Azure",
      "IBM",
      "Accenture",
      "Deloitte",
    ],
    [
      "Infosys",
      "TCS",
      "Cognizant",
      "Wipro",
      "HCL",
      "DXC",
    ],
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Leading Enterprises
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our solutions power some of the world's leading organizations
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-slate-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {slides[currentSlide].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-xs font-semibold text-blue-600">{logo[0]}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{logo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-slate-600 text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </section>
  );
}

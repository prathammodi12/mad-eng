import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose MAD Engineers?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over two decades of experience in software development, MAD Engineers has established itself as a trusted partner for businesses seeking digital transformation. Our team of expert engineers combines technical excellence with creative problem-solving.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Expert Team</h3>
                  <p className="text-slate-600">Highly skilled engineers with diverse expertise across modern tech stack</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Proven Track Record</h3>
                  <p className="text-slate-600">500+ successful projects delivered across various industries</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Client-Focused</h3>
                  <p className="text-slate-600">We prioritize your success and maintain transparent communication</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Quality Assured</h3>
                  <p className="text-slate-600">Rigorous testing and quality standards ensure robust solutions</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition">
              Schedule a Consultation
            </button>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <p className="text-4xl font-bold text-blue-600 mb-2">20+</p>
              <p className="text-slate-600 text-lg">Years of Excellence</p>
              <p className="text-slate-500 text-sm mt-2">Trusted by companies worldwide since 2004</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-slate-600 text-lg">Projects Completed</p>
              <p className="text-slate-500 text-sm mt-2">Delivered across diverse industries and sectors</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-slate-600 text-lg">Team Members</p>
              <p className="text-slate-500 text-sm mt-2">Passionate engineers dedicated to your success</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-slate-600 text-lg">Client Satisfaction</p>
              <p className="text-slate-500 text-sm mt-2">Consistently delivering excellence year after year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

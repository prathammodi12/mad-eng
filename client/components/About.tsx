import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why Leading Enterprises Choose MAD Engineers
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With over 20 years of experience in enterprise software solutions, MAD Engineers has established itself as a trusted partner for businesses undergoing digital transformation. We combine deep technical expertise with strategic business acumen to deliver solutions that drive measurable ROI.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our approach combines cutting-edge technologies—from SAP and Salesforce to AI and cloud architecture—with proven implementation methodologies that minimize risk and maximize business impact.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Expert Engineering Team</h3>
                  <p className="text-slate-600 text-sm">50+ certified professionals with specialized expertise across enterprise platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Proven Track Record</h3>
                  <p className="text-slate-600 text-sm">500+ successful implementations across diverse industries and company sizes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Personalized Support</h3>
                  <p className="text-slate-600 text-sm">Dedicated account teams providing 24/7 support and strategic guidance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Quality Assured</h3>
                  <p className="text-slate-600 text-sm">Rigorous testing, compliance standards, and ongoing optimization</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold transition">
              Schedule a Consultation
            </button>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-600 hover:shadow-lg transition">
              <p className="text-5xl font-bold text-blue-600 mb-2">20+</p>
              <p className="text-slate-900 text-lg font-semibold">Years of Excellence</p>
              <p className="text-slate-600 text-sm mt-2">Delivering enterprise solutions since 2004</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-l-4 border-purple-600 hover:shadow-lg transition">
              <p className="text-5xl font-bold text-purple-600 mb-2">500+</p>
              <p className="text-slate-900 text-lg font-semibold">Projects Completed</p>
              <p className="text-slate-600 text-sm mt-2">Across diverse industries and business scales</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-l-4 border-green-600 hover:shadow-lg transition">
              <p className="text-5xl font-bold text-green-600 mb-2">50+</p>
              <p className="text-slate-900 text-lg font-semibold">Expert Engineers</p>
              <p className="text-slate-600 text-sm mt-2">Dedicated professionals driving innovation</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-l-4 border-orange-600 hover:shadow-lg transition">
              <p className="text-5xl font-bold text-orange-600 mb-2">98%</p>
              <p className="text-slate-900 text-lg font-semibold">Client Satisfaction</p>
              <p className="text-slate-600 text-sm mt-2">Consistently exceeding expectations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Calendar } from "lucide-react";

export default function ReadyToTransform() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Enterprise Technology?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you're looking to optimize your SAP implementation, leverage AI for business intelligence, modernize your infrastructure, or create a custom enterprise solution, our team is ready to help you achieve your goals.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition transform hover:scale-105 shadow-lg">
            <Calendar size={20} />
            Schedule a Consultation
          </button>
          <p className="text-sm text-slate-400 mt-8">
            Response within 24 hours • No obligation • Free initial assessment
          </p>
        </div>
      </div>
    </section>
  );
}

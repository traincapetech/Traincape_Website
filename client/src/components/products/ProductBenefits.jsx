import React from "react";
import { Award, Layers, ShieldCheck } from "lucide-react";

export default function ProductBenefits({ benefits }) {
  if (!benefits || benefits.length === 0) return null;

  const icons = [ShieldCheck, Layers, Award];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
            Why Choose Traincape Enterprise Solutions?
          </h2>
          <p className="text-slate-550 text-sm max-w-lg mx-auto">
            Our SaaS showcases are built with ownership, compliance, and zero scaling penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const BenefitIcon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 hover:border-blue-500/20 hover:bg-slate-100/30 transition-all duration-300 shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/5 text-blue-600 inline-block">
                  <BenefitIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base leading-relaxed">
                  {benefit}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Enterprise-grade structural integrity, complying with WCAG access, sitemap optimizations, and HSL variable sets.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

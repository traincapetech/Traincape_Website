import React from "react";
import { Check, ShieldCheck, Globe, Star } from "lucide-react";

export default function AboutValues({ values, globalReach }) {
  if (!values || !globalReach) return null;

  const valueProps = [
    "Business-first thinking that aligns software with commercial KPIs.",
    "Data ownership sovereignty with zero per-user licensing markup.",
    "Comprehensive SLA managed support with guaranteed response windows.",
    "Continuous upskilling partnerships to onboard internal developers.",
    "Strict alignment with WCAG AA accessibility and schema crawlers.",
    "Proven software structures scaling natively under auto-scaling clusters."
  ];

  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        
        {/* Core Values grid */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
              Our Core Operating Values
            </h2>
            <p className="text-slate-550 text-sm">
              The operational rules that govern every database container and upskilling milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-5 rounded-xl space-y-3 hover:border-blue-500/20 transition-all shadow-sm"
              >
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block">
                  Value {idx + 1}
                </span>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">
                  {val.title}
                </h4>
                <p className="text-slate-605 text-xs leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Traincape + Global Reach split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 border-t border-slate-100 items-start">
          {/* Why Businesses Choose Us (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Why Businesses Choose Traincape
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {valueProps.map((prop, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/60 p-4 rounded-xl flex items-start gap-3 hover:border-blue-500/20 transition-all shadow-sm"
                >
                  <div className="p-1 rounded-md bg-blue-500/5 text-blue-600 mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {prop}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Global Presence (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Globe className="w-5 h-5 text-blue-600 animate-pulse" />
              <h4 className="font-bold text-sm text-slate-800 uppercase tracking-wider">
                Global Reach &amp; Footprint
              </h4>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block">
                  Countries Served
                </span>
                <div className="flex flex-wrap gap-2">
                  {globalReach.countries.map((c, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-50 rounded border border-slate-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block">
                  Industries Served
                </span>
                <div className="flex flex-wrap gap-2">
                  {globalReach.industries.map((i, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold text-blue-600 bg-blue-500/5 rounded border border-blue-500/20"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-150 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
              <span>Sovereign localized systems deployments.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

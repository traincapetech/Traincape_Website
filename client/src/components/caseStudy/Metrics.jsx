import React from "react";
import { Sparkles, Gauge, RefreshCw, Smartphone } from "lucide-react";

export default function Metrics({ slug }) {
  // Configured qualitative performance targets
  const qualitativeMetrics = [
    { label: "Usability Index", val: "Optimal Flow", desc: "Drastically reduced click friction and streamlined user navigation pipelines.", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-500/5" },
    { label: "Page Crawlability", val: "100% SEO Ready", desc: "Crawlable pre-rendered paths to maximize organic indexing speed.", icon: Gauge, color: "text-emerald-600", bg: "bg-emerald-500/5" },
    { label: "Architecture", val: "Scalable Core", desc: "Modular framework designed for low overhead and future expansions.", icon: RefreshCw, color: "text-blue-600", bg: "bg-blue-500/5" },
    { label: "Responsiveness", val: "Fully Adaptive", desc: "Cross-device CSS layouts achieving seamless responsiveness.", icon: Smartphone, color: "text-purple-600", bg: "bg-purple-500/5" }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
      <div>
        <h3 className="text-xl font-bold text-slate-900 font-display">
          Qualitative Engineering Benchmarks
        </h3>
        <p className="text-slate-500 text-xs mt-1">
          Verified system attributes audited post-deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qualitativeMetrics.map((met, idx) => {
          const Icon = met.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded-xl space-y-4 hover:border-blue-500/20 transition-all duration-300 shadow-sm"
            >
              <div className={`p-2.5 rounded-lg inline-block ${met.bg} ${met.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {met.val}
                </span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block">
                  {met.label}
                </span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                {met.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

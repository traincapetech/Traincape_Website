import React from "react";
import { Award, Compass, Heart, Layers, ShieldCheck, TrendingUp } from "lucide-react";

export default function Results({ results }) {
  if (!results || results.length === 0) return null;

  const resultIcons = [TrendingUp, ShieldCheck, Layers, Award, Compass, Heart];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900 font-display">
        Project Achievements &amp; Results
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result, idx) => {
          const Icon = resultIcons[idx % resultIcons.length];
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded-xl flex gap-4 hover:border-blue-500/20 transition-all shadow-sm"
            >
              <div className="p-2.5 rounded-lg bg-blue-500/5 text-blue-600 h-10 w-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                  Outcome {idx + 1}
                </span>
                <p className="text-slate-800 font-medium text-sm md:text-base leading-relaxed">
                  {result}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

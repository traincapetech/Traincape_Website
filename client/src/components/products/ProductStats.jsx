import React from "react";
import { Star, ShieldCheck, Briefcase } from "lucide-react";

export default function ProductStats({ stats }) {
  if (!stats || stats.length === 0) return null;

  const statIcons = [Briefcase, ShieldCheck, Star];

  return (
    <section className="bg-white py-12 md:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-blue-500/20 hover:bg-slate-100/30 transition-all duration-300 shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/5 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

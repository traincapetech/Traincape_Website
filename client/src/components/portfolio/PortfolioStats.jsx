import React from "react";
import { Star, Globe, Briefcase, Award, Headphones, ShieldCheck } from "lucide-react";

export default function PortfolioStats({ stats }) {
  const statIcons = {
    projects: Briefcase,
    countries: Globe,
    tech: Award,
    industries: ShieldCheck,
    experience: Star
  };

  const defaultStats = [
    { key: "projects", label: "Projects Delivered", value: "150+", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { key: "countries", label: "Countries Served", value: "10+", color: "text-blue-500", bg: "bg-blue-500/10" },
    { key: "tech", label: "Technologies Mastered", value: "12+", color: "text-purple-500", bg: "bg-purple-500/10" },
    { key: "industries", label: "Industries Served", value: "8+", color: "text-rose-500", bg: "bg-rose-500/10" },
    { key: "experience", label: "Years Experience", value: "5+", color: "text-amber-500", bg: "bg-amber-500/10" }
  ];

  const renderStats = stats || defaultStats;

  return (
    <section className="bg-[#09090b] py-12 md:py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {renderStats.map((stat, idx) => {
            const IconComponent = statIcons[stat.key] || Briefcase;
            return (
              <div
                key={idx}
                className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-xl p-4 md:p-5 flex flex-col items-center justify-center gap-2 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300"
              >
                <div className={`${stat.bg || "bg-blue-500/10"} ${stat.color || "text-blue-500"} p-2.5 rounded-lg`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-slate-100 tracking-tight">
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

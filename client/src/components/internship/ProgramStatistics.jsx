import React from "react";
import { programStats } from "../../data/internship/internshipData";
import { LineChart, BarChart } from "lucide-react";

export default function ProgramStatistics() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[-20%] left-[-15%] w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <LineChart className="w-3.5 h-3.5" />
            Impact in Numbers
          </div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold font-display">
            Program Statistics
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Real performance indices tracking student success, training delivery, and codebase contributions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 pt-4 justify-center">
          {programStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 text-center space-y-2 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-display">
                {stat.value}
              </h3>
              <div className="space-y-1">
                <p className="text-xs font-bold text-white tracking-tight leading-tight">{stat.label}</p>
                <p className="text-[10px] text-slate-500 leading-normal">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

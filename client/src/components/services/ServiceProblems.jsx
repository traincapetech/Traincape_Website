import React from "react";
import { ShieldX } from "lucide-react";

export default function ServiceProblems({ problems }) {
  if (!problems || problems.length === 0) return null;

  return (
    <div className="bg-rose-950/10 border border-rose-500/20 rounded-2xl p-6 md:p-8 space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-2.5">
          <ShieldX className="w-5 h-5 text-rose-500" />
          <span>Operational Obstacles We Solve</span>
        </h3>
        <p className="text-slate-500 text-xs mt-0.5">
          Common operational inefficiencies and bottlenecks resolved by our software models.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((problem, idx) => (
          <li
            key={idx}
            className="bg-slate-950/40 border border-slate-850 p-5 rounded-xl space-y-3 hover:border-rose-500/20 transition-all duration-300"
          >
            <span className="text-[10px] text-rose-500 font-bold uppercase tracking-wider block">
              Blocker {idx + 1}
            </span>
            <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
              {problem}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

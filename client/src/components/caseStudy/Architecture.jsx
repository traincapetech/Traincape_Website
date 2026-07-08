import React from "react";
import { Cpu, Terminal, Database, Cloud } from "lucide-react";

export default function Architecture({ architecture }) {
  if (!architecture) return null;

  const tiers = [
    { icon: Terminal, label: "Frontend", value: architecture.frontend },
    { icon: Cpu, label: "Backend API", value: architecture.backend },
    { icon: Database, label: "Database", value: architecture.database },
    { icon: Cloud, label: "Deployment/Hosting", value: architecture.deployment || architecture.security || "AWS Services" }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 font-display">
        System Architecture
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, idx) => {
          const TierIcon = tier.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded-xl space-y-3 hover:border-blue-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="p-2 rounded-lg bg-blue-500/5 text-blue-600 inline-block">
                <TierIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block">
                  {tier.label}
                </span>
                <span className="text-xs font-semibold text-slate-800 mt-1 block leading-relaxed">
                  {tier.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

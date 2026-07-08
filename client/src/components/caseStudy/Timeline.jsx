import React from "react";
import { Hourglass } from "lucide-react";

export default function Timeline({ timeline }) {
  const steps = [
    { phase: "Phase 1", title: "Audit & Consultation", desc: "Assessing business roadblocks and mapping functional paths." },
    { phase: "Phase 2", title: "Architecture Design", desc: "Constructing system layers, database models, and API definitions." },
    { phase: "Phase 3", title: "Design System & Tokens", desc: "Setting up light/dark HSL styling and grid outlines." },
    { phase: "Phase 4", title: "Agile Development", desc: "Coding responsive UI, custom components, and socket events." },
    { phase: "Phase 5", title: "Verification & Release", desc: "Pre-rendering crawls and zero downtime deployment launch." }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-500/5 text-blue-600">
          <Hourglass className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Development Timeline
          </h3>
          <p className="text-slate-500 text-xs mt-0.5">
            Total project cycle: {timeline || "3 Months"}
          </p>
        </div>
      </div>

      <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            </span>
            <div className="space-y-1">
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                {step.phase}
              </span>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">
                {step.title}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-xl">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

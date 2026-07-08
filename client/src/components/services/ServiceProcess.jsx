import React from "react";
import { Hammer } from "lucide-react";

export default function ServiceProcess() {
  const steps = [
    { phase: "Audit & Analysis", desc: "Understanding operational blockers, target metrics, and mapping initial requirements workflows." },
    { phase: "Systems Architecture", desc: "Modeling secure database connections, schema templates, and microservices layers." },
    { phase: "Iterative Construction", desc: "Engineering modular visual UI modules, custom tokens, and code-split pages." },
    { phase: "SEO & Crawler Audits", desc: "Pre-rendering HTML targets, generating canonical configurations, and running speed checks." },
    { phase: "Deployment SLA", desc: "Launching the application to secure private containers with dedicated developer support hours." }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-500/5 text-blue-600">
          <Hammer className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Our Development Process
          </h3>
          <p className="text-slate-500 text-xs mt-0.5">
            How we translate client requirements into robust corporate solutions.
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
                Phase {idx + 1}
              </span>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">
                {step.phase}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

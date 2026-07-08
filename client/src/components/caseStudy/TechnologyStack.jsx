import React from "react";

export default function TechnologyStack({ stack }) {
  if (!stack || stack.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-2.5">
        Technology Stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 text-xs font-semibold text-slate-655 bg-white border border-slate-250 rounded-lg tracking-wide hover:border-blue-500/25 transition-colors shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

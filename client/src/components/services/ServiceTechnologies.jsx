import React from "react";

export default function ServiceTechnologies({ technologies, industries }) {
  return (
    <div className="space-y-6">
      {/* Tech Stack */}
      {technologies && technologies.length > 0 && (
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-4">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2.5">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/85 border border-slate-700/60 rounded-lg tracking-wide hover:border-slate-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Industries */}
      {industries && industries.length > 0 && (
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-4">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2.5">
            Industries Served
          </h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/5 border border-blue-500/25 rounded-lg tracking-wide hover:border-blue-450 transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

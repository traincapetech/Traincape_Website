import React from "react";

export default function ServiceTechnologies({ technologies, industries }) {
  return (
    <div className="space-y-6">
      {/* Tech Stack */}
      {technologies && technologies.length > 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-2.5">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg tracking-wide hover:border-blue-500/20 hover:bg-slate-50 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Industries */}
      {industries && industries.length > 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-2.5">
            Industries Served
          </h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-500/5 border border-blue-500/15 rounded-lg tracking-wide hover:border-blue-500/30 transition-colors shadow-sm"
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

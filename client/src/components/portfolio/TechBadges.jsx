import React from "react";

export default function TechBadges({ technologies }) {
  if (!technologies || technologies.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="px-2 py-1 text-[11px] font-semibold text-slate-300 bg-slate-800/80 border border-slate-700/65 rounded-md tracking-wide"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

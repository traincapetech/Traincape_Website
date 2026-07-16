import React from "react";

export default function Tags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md uppercase tracking-wider"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

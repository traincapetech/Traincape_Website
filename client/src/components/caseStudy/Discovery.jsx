import React from "react";
import { Eye } from "lucide-react";

export default function Discovery({ research }) {
  if (!research) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
        <Eye className="w-5 h-5 text-indigo-650" />
        <span>Discovery &amp; Research Phase</span>
      </h3>
      <p className="text-slate-655 text-sm md:text-base leading-relaxed">
        {research}
      </p>
    </div>
  );
}

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Solution({ solution }) {
  if (!solution) return null;

  return (
    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 md:p-8 space-y-4">
      <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        <span>Our Solution</span>
      </h3>
      <p className="text-slate-655 text-sm md:text-base leading-relaxed">
        {solution}
      </p>
    </div>
  );
}

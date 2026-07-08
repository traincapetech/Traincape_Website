import React from "react";
import { AlertCircle } from "lucide-react";

export default function BusinessProblem({ problem }) {
  if (!problem) return null;

  return (
    <div className="bg-rose-500/5 border border-rose-500/10 rounded-2xl p-6 md:p-8 space-y-4">
      <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
        <AlertCircle className="w-5 h-5 text-rose-600" />
        <span>The Business Problem</span>
      </h3>
      <p className="text-slate-650 text-sm md:text-base leading-relaxed">
        {problem}
      </p>
    </div>
  );
}

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ServiceSolution({ solutions, benefits }) {
  if (!solutions || solutions.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Our Solutions Box */}
      <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-2xl p-6 md:p-8 space-y-5">
        <h3 className="text-xl font-bold text-white font-display flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span>Strategic Resolutions</span>
        </h3>
        <ul className="space-y-4">
          {solutions.map((sol, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-emerald-400">
                {idx + 1}
              </span>
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed mt-0.5">
                {sol}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Business Benefits Box */}
      {benefits && benefits.length > 0 && (
        <div className="bg-blue-950/10 border border-blue-500/20 rounded-2xl p-6 md:p-8 space-y-5">
          <h3 className="text-xl font-bold text-white font-display flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span>Commercial Benefits</span>
          </h3>
          <ul className="space-y-4">
            {benefits.map((ben, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-blue-400">
                  {idx + 1}
                </span>
                <p className="text-slate-350 text-xs md:text-sm leading-relaxed mt-0.5">
                  {ben}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

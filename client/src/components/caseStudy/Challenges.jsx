import React from "react";
import { HelpCircle } from "lucide-react";

export default function Challenges({ challenges }) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
        <HelpCircle className="w-5 h-5 text-blue-600" />
        <span>Technical &amp; Execution Challenges</span>
      </h3>
      <ul className="space-y-4">
        {challenges.map((challenge, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-slate-250 flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">
              {idx + 1}
            </span>
            <p className="text-slate-655 text-xs md:text-sm leading-relaxed mt-0.5">
              {challenge}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

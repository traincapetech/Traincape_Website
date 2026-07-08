import React from "react";
import { Check } from "lucide-react";

export default function Features({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 font-display">
        Core Software Features
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feat, idx) => (
          <li
            key={idx}
            className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-3 hover:border-blue-500/20 transition-all shadow-sm"
          >
            <div className="p-1 rounded-md bg-blue-500/5 text-blue-600 mt-0.5 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-slate-655 text-xs md:text-sm leading-relaxed">
              {feat}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

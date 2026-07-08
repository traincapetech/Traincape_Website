import React from "react";
import { Link2 } from "lucide-react";

export default function ProductIntegrations({ integrations }) {
  if (!integrations || integrations.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column info (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <h2 className="text-3xl font-extrabold text-slate-900 font-display leading-tight">
            Seamless Third-Party Integrations
          </h2>
          <p className="text-slate-650 text-sm leading-relaxed">
            Connect your active databases, directory synchronizations, and billing models with pre-built hooks.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 inline-block shadow-sm">
            <Link2 className="w-4 h-4 text-blue-600" />
            <span>Ready-made secure webhook configurations</span>
          </div>
        </div>

        {/* Right column integrations grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {integrations.map((int, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-center hover:border-blue-500/20 hover:bg-slate-50 transition-all cursor-default shadow-sm"
            >
              <span className="font-semibold text-slate-800 text-xs md:text-sm">
                {int.name}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1 block">
                {int.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { CheckCircle, Activity, ShieldAlert, Award, PlayCircle } from "lucide-react";

export default function ProductModules({ modules }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!modules || modules.length === 0) return null;

  const activeModule = modules[activeTab];

  return (
    <section className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
            Functional Product Modules
          </h2>
          <p className="text-slate-550 text-sm max-w-lg mx-auto">
            Explore the core modules and workflows designed to streamline operations.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-none py-2 gap-2 justify-start md:justify-center">
          {modules.map((mod, idx) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 focus:outline-none ${
                activeTab === idx
                  ? "border-blue-600 text-blue-600 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {mod.name}
            </button>
          ))}
        </div>

        {/* Active Module Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          {/* Left Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                Module Overview
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {activeModule.name}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2">
                {activeModule.overview}
              </p>
            </div>

            {/* Features check list */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider">
                Core Features
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeModule.features?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-650">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 space-y-1.5 animate-fadeIn">
              <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-655" />
                <span>Core Business Benefit</span>
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {activeModule.benefits}
              </p>
            </div>
          </div>

          {/* Right Workflow Diagram (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
            <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-150 pb-2">
              <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>Operational Workflow Lifecycle</span>
            </h4>
            <div className="space-y-4 pt-2">
              {activeModule.workflow?.split(" -> ").map((step, idx, arr) => (
                <div key={idx} className="relative flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-white border border-slate-250 flex items-center justify-center text-[10px] font-bold text-slate-500 flex-shrink-0 shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-650">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="absolute left-2.5 top-5 w-0.5 h-4 bg-slate-200"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

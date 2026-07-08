import React from "react";
import { Terminal, Cpu, Database, ShieldAlert, Key, Globe } from "lucide-react";

export default function ProductArchitecture({ architecture, security }) {
  if (!architecture) return null;

  const layers = [
    { icon: Terminal, label: "Frontend layer", value: architecture.frontend },
    { icon: Cpu, label: "Backend API logic", value: architecture.backend },
    { icon: Database, label: "Database layer", value: architecture.database },
    { icon: Globe, label: "Deployment/Hosting", value: architecture.hosting || "AWS Services" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Architecture visual (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
                System Architecture &amp; Layers
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                A multi-tier secure cloud architecture designed for zero latency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {layers.map((layer, idx) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 p-5 rounded-xl flex gap-4 hover:border-blue-500/20 transition-all shadow-sm"
                  >
                    <div className="p-2.5 rounded-lg bg-blue-500/5 text-blue-600 h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block">
                        {layer.label}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 mt-1 block leading-relaxed">
                        {layer.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Security highlights (4 cols) */}
          {security && (
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5 shadow-sm">
              <h3 className="font-bold text-sm text-slate-700 uppercase tracking-wider border-b border-slate-150 pb-2.5 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-600" />
                <span>Security &amp; Compliance</span>
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-slate-650">
                <li className="flex items-start gap-2.5">
                  <Key className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block text-xs">Encryption standards</span>
                    <span className="text-[11px] text-slate-550">{security.encryption}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldAlert className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block text-xs">Compliance audits</span>
                    <span className="text-[11px] text-slate-550">{security.compliance}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Key className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block text-xs">Identity access (SSO/MFA)</span>
                    <span className="text-[11px] text-slate-550">{security.access}</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

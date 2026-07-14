import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function ServiceCTA({ serviceName }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-6 max-w-4xl mx-auto pt-10 shadow-sm">
      <h3 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
        Interested in {serviceName || "Our Software Services"}?
      </h3>
      <p className="text-slate-650 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
        Partner with our systems engineers to audit your software setups, model database requirements, and build dedicated operational instances.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="/contact-us"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-bold text-xs md:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-lg shadow-blue-500/10"
        >
          <span>Request Systems Audit Consult</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={`https://wa.me/919911910793?text=${encodeURIComponent("Hi Traincape Team, I'm interested in discussing " + (serviceName || "your IT services") + " and scheduling a scoping call.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 px-4 py-2.5 rounded text-xs md:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-emerald-500" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
          Partner with Traincape Technology
        </h2>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Let's discuss how we can build custom databases, headless stores, or upskill your engineering teams to improve workflow efficiency.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="/contact-us"
            className="btn-primary flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>Partner with our team</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://wa.me/919911910793"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 px-4 py-2.5 rounded text-xs md:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

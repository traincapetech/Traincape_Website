import React from "react";
import { ChevronRight, Award, Compass } from "lucide-react";

export default function CTA({ onApplyClick }) {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#070913] via-[#0a0f26] to-[#04060c] text-white text-center">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          Onboarding Batches
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display max-w-2xl mx-auto leading-tight text-white">
          Ready to Build Your Engineering Career?
        </h2>

        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Join our active cohort and gain verified client project experience, direct mentor support, and a recommendation letter.
        </p>

        <div className="pt-4">
          <button
            onClick={onApplyClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>Apply For Internship</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Hourglass } from "lucide-react";

export default function AboutTimeline({ timeline }) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
            Company History &amp; Timeline
          </h2>
          <p className="text-slate-500 text-sm">
            Our milestone timeline from inception to scaling enterprise solutions.
          </p>
        </div>

        <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-8">
          {timeline.map((step, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
              </span>
              <div className="space-y-1">
                <span className="text-xs text-blue-600 font-extrabold tracking-wider bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 rounded">
                  {step.year}
                </span>
                <h4 className="font-bold text-slate-800 text-sm md:text-base pt-1">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

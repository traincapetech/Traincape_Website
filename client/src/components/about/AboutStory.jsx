import React from "react";
import { CheckCircle, Award, Compass } from "lucide-react";

export default function AboutStory({ whoData, storyData, mvData }) {
  if (!whoData || !storyData || !mvData) return null;

  return (
    <section className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        
        {/* Who We Are & Story grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Who We Are (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-display">
                {whoData.heading}
              </h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {whoData.description}
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                Organizational Obstacles We Solve
              </h4>
              <ul className="space-y-3.5">
                {whoData.painPointsSolved.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Story (6 cols) */}
          <div className="lg:col-span-6 space-y-6 bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <div>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                Our Story
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {storyData.heading}
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 text-xs md:text-sm leading-relaxed text-justify">
              {storyData.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex gap-5 hover:border-blue-500/20 transition-all duration-300 shadow-sm">
            <div className="p-3 rounded-xl bg-blue-500/5 text-blue-600 h-12 w-12 flex items-center justify-center flex-shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                {mvData.mission.title}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {mvData.mission.statement}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex gap-5 hover:border-purple-500/20 transition-all duration-300 shadow-sm">
            <div className="p-3 rounded-xl bg-purple-500/5 text-purple-600 h-12 w-12 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                {mvData.vision.title}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {mvData.vision.statement}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

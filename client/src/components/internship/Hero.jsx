import React from "react";
import { Sparkles, ChevronRight, Play } from "lucide-react";

export default function Hero({ onApplyClick, onTracksClick }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-gradient-to-br from-[#070913] via-[#0b1026] to-[#04060c] text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Presentation */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/5 text-xs text-blue-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Internship 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display leading-[1.1] text-white">
            Software Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Internship Program
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
            Work on live software systems, collaborate directly with experienced architects, build industry-ready codebases, and bridge the gap from student to software engineer.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={onApplyClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onTracksClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
            >
              <span>View Internship Tracks</span>
            </button>
          </div>
        </div>

        {/* Visual Graphic - Interactive Mockup Code Card */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-30 z-0"></div>
          <div className="relative bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 shadow-2xl backdrop-blur-md z-10 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-1.5 pb-4 border-b border-slate-800/80">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-[10px] text-slate-500 pl-2">internship_details.js</span>
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-slate-500">// Welcome to Traincape Tech Onboarding</p>
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">internship</span> = &#123;</p>
              <p className="pl-4"><span className="text-blue-400">program</span>: <span className="text-emerald-400">"Software Development"</span>,</p>
              <p className="pl-4"><span className="text-blue-400">focus</span>: <span className="text-emerald-400">"Real-world Engineering Projects"</span>,</p>
              <p className="pl-4"><span className="text-blue-400">methodology</span>: <span className="text-emerald-400">"Structured Mentorship & Reviews"</span>,</p>
              <p className="pl-4"><span className="text-blue-400">suitableFor</span>: [<span className="text-emerald-400">"B.Tech"</span>, <span className="text-emerald-400">"MCA"</span>, <span className="text-emerald-400">"CS/IT"</span>],</p>
              <p className="pl-4"><span className="text-blue-400">outcome</span>: <span className="text-emerald-400">"Industry Readiness"</span></p>
              <p>&#125;;</p>
              <p className="text-slate-500 pt-2">// Call apply() to begin onboarding</p>
              <p><span className="text-blue-400">apply</span>(internship);</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

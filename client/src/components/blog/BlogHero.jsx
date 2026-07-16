import React from "react";
import { BookOpen } from "lucide-react";

export default function BlogHero({ children }) {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#070913] via-[#0b1026] to-[#04060c] text-white">
      {/* Glow overlays */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/5 text-xs text-blue-400 font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Knowledge & Resources</span>
        </div>

        <h1 className="text-4xl md:text-5.5xl font-extrabold tracking-tight font-display max-w-3xl mx-auto leading-[1.1] text-white">
          Traincape{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Tech Blog
          </span>
        </h1>

        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Deep-dives into modern web architectures, cybersecurity checklists, cloud operations, and verified developer resources.
        </p>

        {children && <div className="pt-4 max-w-md mx-auto">{children}</div>}
      </div>
    </section>
  );
}

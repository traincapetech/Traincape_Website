import React from "react";
import { Laptop, GraduationCap, ChevronRight, Cpu, Layers } from "lucide-react";

export default function AboutDivisions({ divisions, philosophies }) {
  if (!divisions || !philosophies) return null;

  // Custom capabilities list representing our tech stack
  const capabilities = [
    { name: "React 18", type: "SPA Web Frontends" },
    { name: "Node.js", type: "Clustered API backends" },
    { name: "MongoDB / SQL", type: "Data persistence & pooling" },
    { name: "React Native", type: "iOS / Android cross-platform" },
    { name: "Tailwind CSS", type: "HSL design tokens styling" },
    { name: "Firebase", type: "Real-time chat backplane" },
    { name: "DevOps & Cloud", type: "AWS Fargate stateless ECS" },
    { name: "AI Solutions", type: "Vector search & RAG integrations" }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        
        {/* Business Divisions Section */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
              Our Core Business Divisions
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              How software engineering and professional upskilling run together under a unified vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Division 1: Technology Solutions */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 space-y-5 hover:border-blue-500/20 transition-all shadow-sm">
              <div className="p-3 rounded-xl bg-blue-500/5 text-blue-600 inline-block">
                <Laptop className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {divisions.solutions.title}
                </h3>
                <p className="text-slate-650 text-xs md:text-sm leading-relaxed">
                  {divisions.solutions.desc}
                </p>
              </div>
              <ul className="space-y-3 pt-2">
                {divisions.solutions.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Division 2: Professional Training */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 space-y-5 hover:border-purple-500/20 transition-all shadow-sm">
              <div className="p-3 rounded-xl bg-purple-500/5 text-purple-600 inline-block">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {divisions.training.title}
                </h3>
                <p className="text-slate-650 text-xs md:text-sm leading-relaxed">
                  {divisions.training.desc}
                </p>
              </div>
              <ul className="space-y-3 pt-2">
                {divisions.training.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600">
                    <ChevronRight className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophies Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
          {/* Engineering Philosophy */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 md:p-8 flex gap-5 hover:border-blue-500/20 transition-all duration-300 shadow-sm">
            <div className="p-3 rounded-xl bg-blue-500/5 text-blue-600 h-12 w-12 flex items-center justify-center flex-shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                {philosophies.engineering.title}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {philosophies.engineering.desc}
              </p>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 md:p-8 flex gap-5 hover:border-purple-500/20 transition-all duration-300 shadow-sm">
            <div className="p-3 rounded-xl bg-purple-500/5 text-purple-600 h-12 w-12 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                {philosophies.learning.title}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {philosophies.learning.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Technology Capabilities (Tech Stack) */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Our Active Technology Capabilities
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-150 p-4 rounded-xl flex flex-col justify-center hover:bg-slate-100/50 hover:border-blue-500/20 transition-all cursor-default shadow-sm"
              >
                <span className="font-semibold text-slate-800 text-xs md:text-sm">
                  {cap.name}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1 block">
                  {cap.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { Award, CheckCircle, HelpCircle, Code, Users } from "lucide-react";

export default function Mentorship() {
  const points = [
    { title: "Daily Sync & Standups", desc: "Start each day with clear guidelines. Discuss your daily goals, resolve coding blocks, and set tasks." },
    { title: "Rigorous Code Reviews", desc: "Learn clean coding habits. Our senior staff inspects your pull requests, offering tips on structure and performance." },
    { title: "Weekly Milestones", desc: "Track your progress. Every week we review your contributions and expand your learning roadmap scope." },
    { title: "Professional Development", desc: "Learn industry soft skills, proper technical communication, reporting standards, and documentation habits." }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Illustration / Clean Stats card */}
        <div className="lg:col-span-5 relative order-last lg:order-first">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl opacity-45"></div>
          <div className="relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">Direct Mentorship</h3>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">1-on-1 Guidance</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-150">
                <Code className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Pull Request code inspections</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-150">
                <Award className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Weekly milestones feedback</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Details */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Mentorship-Driven
            </div>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display leading-tight">
              Learn From Experienced Mentors
            </h2>
            <p className="text-slate-550 text-sm md:text-base leading-relaxed">
              We believe internships should be educational, not administrative. You are paired with senior engineers who guide you through the setup, outline coding standards, inspect your logic, and help you land full-time jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {points.map((point, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  {point.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

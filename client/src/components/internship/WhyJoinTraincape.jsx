import React from "react";
import { Target, BookOpen, HeartHandshake, TrendingUp } from "lucide-react";

export default function WhyJoinTraincape() {
  const points = [
    {
      icon: Target,
      title: "Driven by Purpose",
      desc: "Our internship model focuses on practical problem-solving. Interns build software modules that solve real operational bottlenecks, ensuring that every line of code has a clear business objective.",
      color: "border-blue-500/20 bg-blue-500/5 text-blue-500",
    },
    {
      icon: BookOpen,
      title: "Fostering Lifelong Learning",
      desc: "We provide structured resources to help you master git flows, automated tests, clean code rules, and translation files, instilling solid engineering habits that remain with you for a lifetime.",
      color: "border-indigo-500/20 bg-indigo-500/5 text-indigo-500",
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support Team",
      desc: "You are never left alone to debug. Our senior architects and fullstack engineers provide regular guidelines, troubleshooting tips, and workflow checkins to help you overcome blockers.",
      color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Continuous Progress",
      desc: "We track your coding milestones. As you complete project modules, your tech stack scope widens. We invest in your professional growth, preparing you to transition seamlessly to high-caliber jobs.",
      color: "border-rose-500/20 bg-rose-500/5 text-rose-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
            Why Join Traincape Technology?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our internship programs are built to simulate real industry settings, teaching you how to write professional code rather than just basic school projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {points.map(({ icon: Icon, title, desc, color }, idx) => (
            <div
              key={idx}
              className={`border border-slate-100/80 rounded-2xl p-6 text-left space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1`}
            >
              <div className={`p-3 w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">{title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

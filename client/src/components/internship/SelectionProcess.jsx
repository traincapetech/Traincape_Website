import React from "react";
import { ClipboardList, Filter, Laptop, Users, CheckSquare, Sparkles } from "lucide-react";

export default function SelectionProcess() {
  const steps = [
    { icon: ClipboardList, step: "01", title: "Online Application", desc: "Submit your details, tech stack specialization, and public resume links using our application portal below." },
    { icon: Filter, step: "02", title: "Shortlisting", desc: "Our recruitment operations team reviews your background, coding profiles, and projects." },
    { icon: Laptop, step: "03", title: "Technical Discussion", desc: "Discuss coding patterns, projects you've built, and evaluate your track specialization readiness." },
    { icon: Users, step: "04", title: "Onboarding Sync", desc: "Align on duration (3 - 6 months), delivery expectations (hybrid/remote), and project tasks." },
    { icon: CheckSquare, step: "05", title: "Final Selection", desc: "Receive the official internship offer letter detailing your milestones and supervisors." },
    { icon: Sparkles, step: "06", title: "Cohort Onboarding", desc: "Set up workspace credentials, join slack groups, clone codebases, and start your first warmup sprint." }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
            Onboarding & Selection Process
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our systematic onboarding phases are designed to evaluate and set you up for technical success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl p-6 text-left relative space-y-4 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-shadow"
            >
              <div className="absolute top-4 right-4 text-3xl font-black text-slate-100 font-display select-none">
                {item.step}
              </div>
              <div className="p-3 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800 tracking-tight leading-tight pt-1">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

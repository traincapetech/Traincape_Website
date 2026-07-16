import React from "react";
import { CheckCircle2, Gift } from "lucide-react";

export default function Benefits() {
  const benefitsList = [
    { title: "Verified Internship Certificate", desc: "Receive an official completion credentials detailing your hours, track, and milestones." },
    { title: "Personal Senior Mentor", desc: "Direct 1-on-1 code reviews and system architecture guidance from senior technical leads." },
    { title: "Real Production Contributions", desc: "Build code modules that are shipped to active internal products and client portals." },
    { title: "Portfolio Development", desc: "Construct a clean, high-performance GitHub profile filled with real commits and features." },
    { title: "Corporate Workflows Exposure", desc: "Experience weekly scrums, standup reports, issue boards, and staging releases." },
    { title: "Professional Network Growth", desc: "Establish direct connections with tech leaders, consultants, and developers in the field." },
    { title: "Active Career Assistance", desc: "Receive resume critique, mock interview reviews, and LinkedIn branding pointers." },
    { title: "Letter of Recommendation", desc: "Earn an official recommendation letter highlighting your contributions (for high performers)." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            Perks & Outcomes
          </div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
            Program Benefits & Perks
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We ensure your hard work translates to actual professional assets that make you stand out to employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {benefitsList.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left space-y-3 hover:bg-slate-50/80 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">{benefit.title}</h3>
              <p className="text-slate-550 text-xs leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

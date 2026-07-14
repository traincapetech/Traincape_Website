import React from "react";
import { Calendar, Users, Award, ShieldCheck, Flag, Smartphone, CheckCircle } from "lucide-react";

export default function ProjectQuickFacts({ project }) {
  if (!project) return null;

  const facts = [
    { icon: ShieldCheck, label: "Industry", value: project.industry },
    { icon: Flag, label: "Country", value: project.country },
    { icon: Calendar, label: "Duration", value: project.duration || "N/A" },
    { icon: Users, label: "Team Size", value: project.teamSize || "N/A" },
    { icon: Smartphone, label: "Platform", value: project.projectType || "Web" },
    { icon: CheckCircle, label: "Status", value: "Completed", color: "text-emerald-600" }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
      <h4 className="font-bold text-sm text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-2.5">
        Project Quick Facts
      </h4>
      <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {facts.map((fact, idx) => {
          const Icon = fact.icon;
          return (
            <div key={idx} className="flex items-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-blue-600 mt-0.5 shadow-sm">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">
                  {fact.label}
                </dt>
                <dd className={`text-xs font-medium text-slate-800 ${fact.color || ""}`}>
                  {fact.value}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

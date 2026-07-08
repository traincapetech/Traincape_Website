import React from "react";
import { Flag, Building2, Calendar, Users } from "lucide-react";

export default function ClientOverview({ study }) {
  if (!study) return null;

  const items = [
    { icon: Building2, label: "Client", value: study.client },
    { icon: Flag, label: "Country", value: study.country },
    { icon: Calendar, label: "Duration", value: study.timeline || study.duration },
    { icon: Users, label: "Team", value: study.team?.map(t => t.name).join(", ") || "Engineering Team" }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-sm">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="space-y-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="p-2 rounded-lg bg-blue-500/5 text-blue-600">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <dt className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">
                {item.label}
              </dt>
              <dd className="text-sm font-semibold text-slate-800 mt-0.5">
                {item.value}
              </dd>
            </div>
          </div>
        );
      })}
    </div>
  );
}

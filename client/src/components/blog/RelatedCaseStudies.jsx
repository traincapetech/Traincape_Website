import React from "react";
import { Link } from "react-router-dom";
import { Award, ChevronRight } from "lucide-react";

export default function RelatedCaseStudies({ caseStudyIds }) {
  if (!caseStudyIds || caseStudyIds.length === 0) return null;

  const caseStudiesMap = {
    "nk-luxe": { title: "NK Luxe Storefront", desc: "How we boosted conversion rates for an e-commerce platform by 34%." },
    crm: { title: "Custom CRM Scaling", desc: "Architecting a multi-tenant client pipeline supporting 50k active requests." },
    verda: { title: "Verda Exports Platform", desc: "Automating B2B international supply log sheets and tracking." },
    "dating-app": { title: "Dating App Social Network", desc: "Real-time websocket chats and geoposition mapping." },
    traincape: { title: "Traincape Portal Refactor", desc: "Reducing layout shifts and loading speeds to achieve high Core Web Vitals." }
  };

  const activeCaseStudies = caseStudyIds
    .map((id) => ({ id, ...caseStudiesMap[id] }))
    .filter((c) => c.title);

  if (activeCaseStudies.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left space-y-4">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 border-b border-slate-150 pb-2">
        <Award className="w-3.5 h-3.5" />
        Case Studies
      </h4>
      <div className="space-y-3.5">
        {activeCaseStudies.map((cs) => (
          <div key={cs.id} className="space-y-1 group">
            <Link
              to={`/case-studies/${cs.id}`}
              className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span>{cs.title}</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="text-slate-550 text-xs leading-relaxed">{cs.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

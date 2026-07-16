import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, ChevronRight } from "lucide-react";

export default function RelatedProducts({ productIds }) {
  if (!productIds || productIds.length === 0) return null;

  const productsMap = {
    crm: { title: "Traincape CRM Suite", desc: "Automate sales tracking, customer pipelines, and analytical reports." },
    hrms: { title: "Traincape HRMS Portal", desc: "Manage employee profiles, leave systems, and onboarding schedules." },
    payroll: { title: "Traincape Payroll Operations", desc: "Process salary releases, tax slips, and benefits distributions." }
  };

  const activeProducts = productIds
    .map((id) => ({ id, ...productsMap[id] }))
    .filter((p) => p.title);

  if (activeProducts.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left space-y-4">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 border-b border-slate-150 pb-2">
        <Briefcase className="w-3.5 h-3.5" />
        Featured Products
      </h4>
      <div className="space-y-3.5">
        {activeProducts.map((product) => (
          <div key={product.id} className="space-y-1 group">
            <Link
              to={`/products/${product.id}`}
              className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span>{product.title}</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="text-slate-550 text-xs leading-relaxed">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

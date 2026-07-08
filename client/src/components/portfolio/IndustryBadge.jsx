import React from "react";
import { ShieldCheck, GraduationCap, Factory, ShoppingCart, Truck, Landmark, Home, Compass } from "lucide-react";

export default function IndustryBadge({ industry }) {
  const getIndustryDetails = (name) => {
    const cleanName = name ? name.toLowerCase() : "";
    if (cleanName.includes("healthcare")) {
      return { icon: ShieldCheck, label: "Healthcare", bg: "bg-emerald-500/10", border: "border-emerald-500/20", color: "text-emerald-400" };
    }
    if (cleanName.includes("education") || cleanName.includes("edtech")) {
      return { icon: GraduationCap, label: "Education", bg: "bg-blue-500/10", border: "border-blue-500/20", color: "text-blue-400" };
    }
    if (cleanName.includes("manufacturing")) {
      return { icon: Factory, label: "Manufacturing", bg: "bg-orange-500/10", border: "border-orange-500/20", color: "text-orange-400" };
    }
    if (cleanName.includes("retail") || cleanName.includes("e-commerce")) {
      return { icon: ShoppingCart, label: "Retail & E-commerce", bg: "bg-pink-500/10", border: "border-pink-500/20", color: "text-pink-400" };
    }
    if (cleanName.includes("logistics") || cleanName.includes("supply")) {
      return { icon: Truck, label: "Logistics", bg: "bg-purple-500/10", border: "border-purple-500/20", color: "text-purple-400" };
    }
    if (cleanName.includes("finance") || cleanName.includes("fintech")) {
      return { icon: Landmark, label: "Finance & Fintech", bg: "bg-cyan-500/10", border: "border-cyan-500/20", color: "text-cyan-400" };
    }
    if (cleanName.includes("real estate")) {
      return { icon: Home, label: "Real Estate", bg: "bg-teal-500/10", border: "border-teal-500/20", color: "text-teal-400" };
    }
    return { icon: Compass, label: name || "Enterprise", bg: "bg-slate-500/10", border: "border-slate-500/20", color: "text-slate-400" };
  };

  const details = getIndustryDetails(industry);
  const IconComponent = details.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${details.bg} ${details.border} ${details.color}`}
      aria-label={`Industry: ${details.label}`}
    >
      <IconComponent className="w-3.5 h-3.5" />
      <span>{details.label}</span>
    </span>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Cpu, ChevronRight } from "lucide-react";

export default function RelatedServices({ serviceIds }) {
  if (!serviceIds || serviceIds.length === 0) return null;

  // Map serviceId to clean human-readable name and details
  const servicesMap = {
    "custom-software-development": { title: "Custom Software Development", desc: "Build tailored desktop and web applications to automate your enterprise." },
    "web-development": { title: "Enterprise Web Development", desc: "High-performance websites and React portals optimized for speed and SEO." },
    "mobile-app-development": { title: "Mobile App Development", desc: "Cross-platform React Native apps for iOS and Android deployments." },
    "cloud-services": { title: "Cloud & DevOps Solutions", desc: "Dockerized servers, Nginx setup, and automated CI/CD configurations." },
    "ui-ux-design": { title: "UI/UX Design Systems", desc: "Vibrant user interfaces and interactive customer journeys." },
    "maintenance-support": { title: "Maintenance & Active Support", desc: "Daily system health reviews and SLA resolution services." }
  };

  const activeServices = serviceIds
    .map((id) => ({ id, ...servicesMap[id] }))
    .filter((s) => s.title);

  if (activeServices.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left space-y-4">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 border-b border-slate-150 pb-2">
        <Cpu className="w-3.5 h-3.5" />
        Relevant Services
      </h4>
      <div className="space-y-3.5">
        {activeServices.map((service) => (
          <div key={service.id} className="space-y-1 group">
            <Link
              to={`/services/${service.id}`}
              className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span>{service.title}</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

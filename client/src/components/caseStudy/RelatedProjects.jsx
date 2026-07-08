import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { caseStudiesData } from "../../data/caseStudies/caseStudiesData";

export default function RelatedProjects({ relatedSlugs }) {
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  // Filter studies that match the related list
  const relatedStudies = caseStudiesData.filter((study) =>
    relatedSlugs.includes(study.slug)
  );

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 font-display">
        Related Case Studies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedStudies.map((study) => (
          <article
            key={study.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-blue-500/20 hover:bg-slate-50/50 transition-all duration-300 group shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/10 px-2.5 py-0.5 rounded-full">
                {study.industry}
              </span>
              <span className="text-xs text-slate-550 font-medium">
                {study.timeline}
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-850 group-hover:text-blue-600 transition-colors">
              <Link to={`/case-studies/${study.slug}`} className="focus:outline-none">
                {study.title}
              </Link>
            </h4>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-2">
              {study.overview}
            </p>
            <div className="pt-2">
              <Link
                to={`/case-studies/${study.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-750"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

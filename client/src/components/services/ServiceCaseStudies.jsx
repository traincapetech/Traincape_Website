import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { caseStudiesData } from "../../data/caseStudies/caseStudiesData";

export default function ServiceCaseStudies({ caseStudySlugs }) {
  if (!caseStudySlugs || caseStudySlugs.length === 0) return null;

  // Filter case studies matching dynamic case slugs list
  const relatedStudies = caseStudiesData.filter((item) =>
    caseStudySlugs.includes(item.slug)
  );

  if (relatedStudies.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-blue-450" />
        <h3 className="text-2xl font-bold text-white font-display">
          Referenced Case Studies
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedStudies.map((study) => (
          <article
            key={study.id}
            className="bg-slate-900/20 border border-slate-800/80 rounded-2xl p-6 space-y-4 hover:border-slate-700 hover:bg-slate-900/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                {study.industry}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {study.timeline}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-display">
              <Link to={`/case-studies/${study.slug}`} className="focus:outline-none">
                {study.title}
              </Link>
            </h4>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-2">
              {study.overview}
            </p>
            <div className="pt-2">
              <Link
                to={`/case-studies/${study.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

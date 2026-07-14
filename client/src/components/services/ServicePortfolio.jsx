import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FolderOpen } from "lucide-react";
import { portfolioData } from "../../data/portfolio/portfolioData";

export default function ServicePortfolio({ portfolioIds }) {
  if (!portfolioIds || portfolioIds.length === 0) return null;

  // Filter projects matching portfolio IDs list
  const relatedProjects = portfolioData.filter((item) =>
    portfolioIds.includes(item.id)
  );

  if (relatedProjects.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <FolderOpen className="w-5 h-5 text-blue-650" />
        <h3 className="text-2xl font-bold text-slate-900 font-display">
          Related Projects Delivered
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedProjects.map((proj) => (
          <article
            key={proj.id}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-blue-500/20 hover:bg-white transition-all duration-300 group shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/15 px-2.5 py-0.5 rounded-full">
                {proj.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {proj.clientName}
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display">
              <Link to={`/portfolio/${proj.slug}`} className="focus:outline-none">
                {proj.title}
              </Link>
            </h4>
            <p className="text-slate-650 text-xs md:text-sm leading-relaxed line-clamp-2">
              {proj.description}
            </p>
            <div className="pt-2">
              <Link
                to={`/portfolio/${proj.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700"
              >
                <span>Explore Project Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

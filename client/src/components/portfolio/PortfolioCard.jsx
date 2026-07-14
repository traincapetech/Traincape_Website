import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Info, ExternalLink } from "lucide-react";
import IndustryBadge from "./IndustryBadge";
import TechBadges from "./TechBadges";

export default function PortfolioCard({ project }) {
  // Safe image path resolution
  const displayImage = project.images.desktop || project.images.dashboard || Object.values(project.images)[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="card-premium group"
    >
      {/* Background visual hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Large Project Image Container */}
      <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-50 mb-5 group/img">
        <img
          src={displayImage}
          alt={`${project.title} Screenshot`}
          width={640}
          height={360}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
          loading="lazy"
        />
        {/* Hover overlay mask */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/portfolio/${project.slug}`}
            className="flex items-center gap-1.5 bg-blue-600/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Read Case Study</span>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {/* Top badges: Industry & Logo */}
        <div className="flex items-center justify-between gap-3">
          <IndustryBadge industry={project.industry} />
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.client} Logo`}
              width={120}
              height={28}
              className="h-7 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all"
            />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
          <Link to={`/portfolio/${project.slug}`} className="focus-visible:outline-none focus-visible:underline">
            {project.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="pt-2">
          <TechBadges technologies={project.technologies.slice(0, 4)} />
        </div>

        {/* Bottom Metadata Info Row */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-slate-600" />
            <span>{project.country}</span>
          </div>
          <div>{project.duration}</div>
        </div>

        {/* Buttons Action Row */}
        <div className="pt-2 flex items-center gap-3">
          <Link
            to={`/portfolio/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 shadow-sm"
            aria-label={`View case study details for ${project.title}`}
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </Link>
          
          {project.website && project.website !== "#" && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-white border border-slate-200 hover:border-blue-500/20 text-slate-500 hover:text-slate-700 rounded text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 shadow-sm"
              aria-label={`Visit official website for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

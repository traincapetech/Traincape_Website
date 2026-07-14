import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Calendar } from "lucide-react";
import IndustryBadge from "./IndustryBadge";
import TechBadges from "./TechBadges";

export default function FeaturedProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/5 text-blue-600">
            <Star className="w-5 h-5 fill-blue-500/20" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured Case Studies
            </h2>
            <p className="text-slate-500 text-sm">
              Deep dives into our most impactful engineering and design architectures.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {projects.map((project, idx) => {
            const displayImage = project.images.desktop || project.images.dashboard || Object.values(project.images)[0];
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className={`bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-blue-500/20 hover:bg-slate-50/50 transition-all duration-300 relative group overflow-hidden shadow-sm`}
              >
                {/* Visual hover background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Left/Right Text Content (6 cols) */}
                <div className={`space-y-5 lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <IndustryBadge industry={project.industry} />
                    {project.logo && (
                      <img
                        src={project.logo}
                        alt={`${project.client} Logo`}
                        width={120}
                        height={32}
                        className="h-8 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all"
                      />
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-display leading-tight group-hover:text-blue-600 transition-colors">
                    <Link to={`/portfolio/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights / Features list */}
                  {project.features && (
                    <ul className="space-y-2 text-xs md:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      {project.features.slice(0, 3).map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="pt-2">
                    <TechBadges technologies={project.technologies} />
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-4 flex flex-wrap items-center gap-6 text-sm">
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-semibold transition-all shadow-lg hover:shadow-blue-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center gap-4 text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4" />
                        <span>{project.country}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left/Right Image Content (6 cols) */}
                <div className={`lg:col-span-6 relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl group/img ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <img
                    src={displayImage}
                    alt={`${project.title} Featured Preview`}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

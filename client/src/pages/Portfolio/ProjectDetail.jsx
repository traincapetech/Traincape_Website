import React from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import { ArrowLeft, Globe, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { portfolioData } from "../../data/portfolio/portfolioData";
import ProjectQuickFacts from "../../components/portfolio/ProjectQuickFacts";
import TechBadges from "../../components/portfolio/TechBadges";
import IndustryBadge from "../../components/portfolio/IndustryBadge";

export default function ProjectDetail() {
  const { slug } = useParams();

  // Find the current project based on URL slug
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-center p-6">
        <div className="space-y-6 max-w-md">
          <h2 className="text-3xl font-extrabold text-slate-900">Case Study Not Found</h2>
          <p className="text-slate-650 text-sm">
            We couldn't locate the requested enterprise case study portfolio details.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  // Resolve multiple screenshots or sub-images
  const screenshots = Object.entries(project.images)
    .filter(([key]) => key !== "logo")
    .map(([key, val]) => ({ type: key, src: val }));

  return (
    <div className="bg-white min-h-screen text-slate-650 overflow-hidden font-sans">
      {/* Dynamic SEO Meta Configurations */}
      <SEOHead
        title={project.seo?.title || `${project.title} Case Study | Traincape Technology`}
        description={project.seo?.description || `Explore the technical details and solution architecture of the ${project.title} custom software development project by Traincape Technology.`}
        canonical={`https://www.traincapetech.in/portfolio/${project.slug}`}
        structuredData={{
          "@context": "http://schema.org",
          "@type": "NewsArticle",
          "headline": project.title,
          "description": project.description,
          "author": {
            "@type": "Organization",
            "name": "Traincape Technology"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Traincape Technology",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.traincapetech.in/assets/TT.png"
            }
          }
        }}
      />

      {/* Main Header / Top breadcrumb section */}
      <div className="border-b border-slate-100 bg-slate-50 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
            Case Study • {project.projectType}
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20 space-y-16">
        {/* Title and Intro layout grid (12 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case study detail headings (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <IndustryBadge industry={project.industry} />
              {project.logo && (
                <img
                  src={project.logo}
                  alt={`${project.client} Logo`}
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain brightness-95"
                />
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              {project.title}
            </h1>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed border-l-2 border-blue-500/50 pl-4 py-1">
              {project.description}
            </p>
          </div>

          {/* Quick facts sidebar card (4 cols) */}
          <div className="lg:col-span-4">
            <ProjectQuickFacts project={project} />
          </div>
        </div>

        {/* Challenge & Solution sections (Split Grid layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-b border-slate-150 py-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-rose-500"></span>
              The Challenge
            </h3>
            <p className="text-slate-655 text-sm leading-relaxed">
              {project.challenge || "Our client faced key architectural limitations with legacy data speeds, security baselines, and performance optimization."}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-emerald-500"></span>
              Our Solution
            </h3>
            <p className="text-slate-655 text-sm leading-relaxed">
              {project.solution || "We designed a robust system, configuring design tokens, implementing custom React widgets, and running post-build crawl validations."}
            </p>
          </div>
        </div>

        {/* Detailed features & tech integrations grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Features check list (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Core Technical Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat, fidx) => (
                <li
                  key={fidx}
                  className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-3 hover:border-blue-500/20 transition-colors shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-xs md:text-sm leading-relaxed">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5 shadow-sm">
            <h3 className="font-bold text-sm text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-2.5">
              Technology Stack
            </h3>
            <TechBadges technologies={project.technologies} />
            <div className="text-slate-500 text-xs leading-relaxed flex items-start gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Engineered in compliance with ISO security standards and responsive web design benchmarks.</span>
            </div>
          </div>
        </div>

        {/* Screenshot Image Gallery */}
        <div className="space-y-6 pt-8">
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            Interface &amp; Screenshot Previews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map((shot, sidx) => (
              <div
                key={sidx}
                className="group relative aspect-video bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={shot.src}
                  alt={`${project.client} ${shot.type} Screen Preview`}
                  width={640}
                  height={360}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 border border-slate-200 rounded px-2.5 py-1 text-[10px] text-slate-500 font-semibold uppercase tracking-wider shadow-md">
                  {shot.type} View
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study CTA Action Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-6 max-w-4xl mx-auto pt-10 shadow-sm">
          <h3 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
            Need a Similar Solution for Your Business?
          </h3>
          <p className="text-slate-655 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can engineer a custom platform, dashboard, or application tailored to your operational workflows and speed requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-semibold text-xs md:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-lg shadow-blue-500/10"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            {project.website && project.website !== "#" && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 px-4 py-2.5 rounded text-xs md:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 shadow-sm"
              >
                <span>Visit Live Site</span>
                <Globe className="w-4 h-4 text-slate-550" />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

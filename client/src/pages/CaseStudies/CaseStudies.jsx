import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, X, Shield, ArrowRight, FolderKanban, CheckCircle } from "lucide-react";

import { caseStudiesData } from "../../data/caseStudies/caseStudiesData";
import { industries } from "../../data/caseStudies/industries";
import { filterCaseStudies } from "../../utils/caseStudies/filters";

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize filtered/searched list
  const filteredStudies = useMemo(() => {
    return filterCaseStudies(caseStudiesData, selectedIndustry, searchQuery);
  }, [selectedIndustry, searchQuery]);

  return (
    <div className="bg-white min-h-screen text-slate-650 overflow-hidden font-sans">
      {/* Helmet SEO Optimization */}
      <Helmet>
        <title>Client Case Studies &amp; Software Solutions | Traincape Technology</title>
        <meta
          name="description"
          content="Explore our corporate case studies of enterprise CRM software, agricultural logistics databases, React Native startups apps, and headless luxury storefronts."
        />
        <meta name="keywords" content="Traincape Technology case studies, software development, CRM custom, ERP systems, B2B logistics, react native mobile apps" />
        <link rel="canonical" href="https://traincapetech.in/case-studies" />
        <meta property="og:title" content="Client Case Studies &amp; Software Solutions | Traincape Technology" />
        <meta property="og:description" content="Explore our corporate case studies of enterprise CRM software, agricultural logistics databases, React Native startups apps, and headless luxury storefronts." />
        <meta property="og:url" content="https://traincapetech.in/case-studies" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://traincapetech.in",
                  "name": "Home"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://traincapetech.in/case-studies",
                  "name": "Case Studies"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Cinematic Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-white border-b border-slate-100">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/10 bg-blue-500/5 text-xs text-blue-600 font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Proven Solutions
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display max-w-4xl mx-auto leading-tight">
            Our Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-650 to-purple-600">
              Case Studies
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover how we solve complex business problems, streamline workflows, and engineer scalable architectures for global enterprises.
          </p>
        </div>
      </section>

      {/* Main Grid Filters Section */}
      <section className="py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          {/* Controls Bar: Search & Filters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Category Filters (8 cols) */}
            <div className="lg:col-span-8 flex flex-wrap gap-2" role="tablist" aria-label="Case Study Domain Filters">
              {industries.map((ind) => {
                const isActive = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActive
                        ? "text-blue-600 bg-blue-50 border-blue-100 shadow-sm"
                        : "text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100/50 border-slate-200 shadow-sm"
                    }`}
                  >
                    {ind.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input (4 cols) */}
            <div className="lg:col-span-4 relative group">
              <label htmlFor="case-studies-search" className="sr-only">
                Search case studies by client or technology
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="case-studies-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies..."
                className="w-full h-11 pl-10 pr-9 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded-lg"
                  aria-label="Clear search field"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Case Studies Grid */}
          {filteredStudies.length === 0 ? (
            <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <FolderKanban className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No Case Studies Found</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto mt-1 leading-relaxed">
                Adjust your filters or search term to discover other client solutions.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <article
                  key={study.id}
                  className="bg-white border border-slate-200 text-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                      <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/10 px-2.5 py-0.5 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {study.timeline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      <Link to={`/case-studies/${study.slug}`} className="focus:outline-none">
                        {study.title}
                      </Link>
                    </h3>

                    {/* Overview */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {study.overview}
                    </p>

                    {/* Quick outcomes list */}
                    <ul className="space-y-2 text-xs text-slate-650 bg-slate-50 p-3 rounded-lg border border-slate-150">
                      {study.results.slice(0, 2).map((res, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px]">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Read Case Study CTA button */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                      <span className="text-slate-500 font-medium">
                        Client: {study.client}
                      </span>
                      <Link
                        to={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1.5 font-bold text-blue-600 group-hover:text-blue-750 transition-colors"
                      >
                        <span>Read Study</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Corporate trust banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
            Constructing Future-Proof Systems
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Our engineering methodology revolves around design tokens synchronization, WCAG accessibility benchmarks, and statically cached assets to ensure security and speed.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 inline-block shadow-sm">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Full compliance &amp; ISO standards alignment</span>
          </div>
        </div>
      </section>
    </div>
  );
}

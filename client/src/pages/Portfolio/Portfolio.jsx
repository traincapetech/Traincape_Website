import React, { useState, useMemo, useRef } from "react";
import SEOHead from "../../components/SEOHead";
import { Shield, Sparkles, Code2, Layers, Cpu, Database, Settings } from "lucide-react";

// Components
import PortfolioHero from "../../components/portfolio/PortfolioHero";
import PortfolioStats from "../../components/portfolio/PortfolioStats";
import FeaturedProjects from "../../components/portfolio/FeaturedProjects";
import PortfolioFilters from "../../components/portfolio/PortfolioFilters";
import SearchBar from "../../components/portfolio/SearchBar";
import PortfolioGrid from "../../components/portfolio/PortfolioGrid";
import PortfolioCTA from "../../components/portfolio/PortfolioCTA";

// Data & Utilities
import { portfolioData } from "../../data/portfolio/portfolioData";
import { portfolioCategories } from "../../data/portfolio/portfolioCategories";
import { filterProjects } from "../../utils/portfolio/filterProjects";
import { searchProjects } from "../../utils/portfolio/searchProjects";
import { sortProjects } from "../../utils/portfolio/sortProjects";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const gridSectionRef = useRef(null);

  const scrollToGrid = () => {
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic lists
  const featuredProjects = useMemo(() => {
    return portfolioData.filter((p) => p.featured);
  }, []);

  const processedProjects = useMemo(() => {
    let result = portfolioData;
    // 1. Filter
    result = filterProjects(result, selectedCategory);
    // 2. Search
    result = searchProjects(result, searchQuery);
    // 3. Sort (Featured first, then default order)
    return sortProjects(result, "default");
  }, [selectedCategory, searchQuery]);

  // Technologies list
  const coreTech = [
    { name: "React / Next.js", icon: Code2, desc: "Ultra-fast reactive user interfaces & static generation" },
    { name: "Node.js / Express", icon: Cpu, desc: "Scalable backend microservices and REST/GraphQL APIs" },
    { name: "MongoDB / SQL", icon: Database, desc: "High availability transactional databases & data models" },
    { name: "React Native", icon: Layers, desc: "High-performance cross-platform iOS and Android mobile apps" },
    { name: "AWS Cloud Services", icon: Cloud2, desc: "Highly secure, auto-scaling, fault-tolerant infrastructure" },
    { name: "Framer Motion / GSAP", icon: Sparkles, desc: "Immersive storytelling animations and micro-interactions" }
  ];

  // Industries list
  const servedIndustries = [
    "Retail & E-commerce",
    "Logistics & Supply Chain",
    "Education & EdTech",
    "Healthcare & Life Sciences",
    "Finance & Fintech",
    "Startups & Scaleups"
  ];

  // Development process steps
  const processSteps = [
    { step: "01", title: "Requirement Architecture", desc: "Detailed consulting wizards to align technical specifications." },
    { step: "02", title: "Design Tokens & System", desc: "Establishing custom HSL variables and semantic layouts." },
    { step: "03", title: "Agile Development", desc: "Two-week sprints delivering incremental functional packages." },
    { step: "04", title: "Rigorous Verification", desc: "WCAG contrast audits, compile tests, and speed validations." },
    { step: "05", title: "Enterprise Deployment", desc: "Zero downtime deployments using AWS and pre-rendered crawling." }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-650 overflow-hidden font-sans">
      <SEOHead
        title="Portfolio of Custom Software & Enterprise Solutions | Traincape Technology"
        description="Explore our case studies of bespoke CRM software, luxury e-commerce platforms, React Native mobile apps, and cloud setups developed for global enterprises."
        canonical="https://www.traincapetech.in/portfolio"
      />

      {/* Hero */}
      <PortfolioHero onExploreClick={scrollToGrid} />

      {/* Statistics */}
      <PortfolioStats />

      {/* Featured Projects */}
      <FeaturedProjects projects={featuredProjects} />

      {/* Grid Filter Search Section */}
      <section ref={gridSectionRef} className="py-20 border-t border-slate-100 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              Browse Client Projects
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Filter by department or use the search field to find specific architectures.
            </p>
          </div>

          <div className="space-y-6">
            {/* Filters */}
            <PortfolioFilters
              categories={portfolioCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Search */}
            <SearchBar
              query={searchQuery}
              onSearchChange={setSearchQuery}
              onClear={() => setSearchQuery("")}
            />
          </div>

          {/* Grid */}
          <PortfolioGrid projects={processedProjects} />
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
              Our Core Technology Standards
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              We leverage modern software architectures to ensure scalability, security, and rendering speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTech.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 hover:border-blue-500/20 hover:bg-white transition-all duration-300 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-blue-500/5 text-blue-600 inline-block">
                    <TechIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {tech.name}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-slate-50/80 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display leading-tight">
              Enterprise Domains &amp; Industries Served
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design specialized workflows matching the security guidelines, compliance thresholds, and operational patterns of diverse commercial domains.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 inline-block shadow-sm">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              <span>Full compliance &amp; ISO standards alignment</span>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {servedIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:bg-slate-50 hover:border-blue-500/20 transition-all cursor-default shadow-sm"
              >
                <span className="font-semibold text-slate-800 text-xs md:text-sm">
                  {ind}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
              Our Professional Engineering Process
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              How we take projects from tokens definition to production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 hover:border-blue-500/20 transition-all group shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-700 group-hover:text-blue-500 transition-colors">
                    {step.step}
                  </span>
                  <Settings className="w-4 h-4 text-slate-700 group-hover:animate-spin" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PortfolioCTA />
    </div>
  );
}

// Simple dynamic cloud icon mapping
function Cloud2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.89-1.9-3-4-3-2.6 0-4.67 1.88-5 4.5A4.5 4.5 0 0 0 6.5 21" />
    </svg>
  );
}

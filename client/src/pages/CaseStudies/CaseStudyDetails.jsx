import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

// Data & utilities
import { caseStudiesData } from "../../data/caseStudies/caseStudiesData";
import { getCaseStudyBySlug } from "../../utils/caseStudies/slug";

// Components
import Hero from "../../components/caseStudy/Hero";
import ClientOverview from "../../components/caseStudy/ClientOverview";
import BusinessProblem from "../../components/caseStudy/BusinessProblem";
import Challenges from "../../components/caseStudy/Challenges";
import Discovery from "../../components/caseStudy/Discovery";
import Solution from "../../components/caseStudy/Solution";
import Architecture from "../../components/caseStudy/Architecture";
import TechnologyStack from "../../components/caseStudy/TechnologyStack";
import Features from "../../components/caseStudy/Features";
import UIShowcase from "../../components/caseStudy/UIShowcase";
import Results from "../../components/caseStudy/Results";
import Metrics from "../../components/caseStudy/Metrics";
import Gallery from "../../components/caseStudy/Gallery";
import Timeline from "../../components/caseStudy/Timeline";
import Testimonial from "../../components/caseStudy/Testimonial";
import RelatedProjects from "../../components/caseStudy/RelatedProjects";
import CTA from "../../components/caseStudy/CTA";

export default function CaseStudyDetails() {
  const { slug } = useParams();

  // Fetch the active study using slug helper
  const study = useMemo(() => {
    return getCaseStudyBySlug(caseStudiesData, slug);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-center p-6">
        <div className="space-y-6 max-w-md">
          <h2 className="text-3xl font-extrabold text-slate-900">Case Study Not Found</h2>
          <p className="text-slate-500 text-sm">
            We couldn't locate the requested case study details.
          </p>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-slate-650 overflow-hidden font-sans">
      {/* Helmet SEO Configuration */}
      <Helmet>
        <title>{study.seo?.title || `${study.title} | Traincape Technology`}</title>
        <meta
          name="description"
          content={study.seo?.description || `Technical study detailing our solutions, architecture and results for ${study.client}.`}
        />
        <meta name="keywords" content={study.seo?.keywords || "case study, software development, CRM, ERP"} />
        <link rel="canonical" href={`https://traincapetech.in/case-studies/${study.slug}`} />
        <meta property="og:title" content={study.seo?.title} />
        <meta property="og:description" content={study.seo?.description} />
        <meta property="og:url" content={`https://traincapetech.in/case-studies/${study.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* NewsArticle structured JSON-LD schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "headline": study.title,
            "description": study.overview,
            "author": {
              "@type": "Organization",
              "name": "Traincape Technology"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Traincape Technology",
              "logo": {
                "@type": "ImageObject",
                "url": "https://traincapetech.in/assets/TT.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Top back navigation block */}
      <div className="border-b border-slate-100 bg-slate-50 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
            Case Study • {study.client}
          </div>
        </div>
      </div>

      {/* Main hero banner section */}
      <Hero study={study} />

      {/* Case Study Details grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 space-y-12">
        {/* Client Metadata block */}
        <ClientOverview study={study} />

        {/* Content body split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Case Study description & challenges (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            <BusinessProblem problem={study.businessProblem} />
            <Challenges challenges={study.challenges} />
            <Discovery research={study.research} />
            <Solution solution={study.solution} />
            <Architecture architecture={study.architecture} />
            <Features features={study.features} />
            <UIShowcase gallery={study.gallery} client={study.client} />
            <Results results={study.results} />
            <Metrics slug={study.slug} />
            <Gallery gallery={study.gallery} client={study.client} />
            <Testimonial testimonial={study.testimonial} />
          </div>

          {/* Sidebar parameters (4 cols) */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            <TechnologyStack stack={study.technologyStack} />
            <Timeline timeline={study.timeline} />
          </div>
        </div>

        {/* Related Case studies and Conversion CTA */}
        <div className="pt-10 border-t border-slate-100 space-y-12">
          <RelatedProjects relatedSlugs={study.relatedProjects} />
          <CTA client={study.client} />
        </div>
      </div>
    </div>
  );
}

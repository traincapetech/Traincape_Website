import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

// Data & utilities
import { servicesData } from "../../data/services/servicesData";
import { getServiceBySlug } from "../../utils/services/slug";

// Components
import ServiceHero from "../../components/services/ServiceHero";
import ServiceProblems from "../../components/services/ServiceProblems";
import ServiceSolution from "../../components/services/ServiceSolution";
import ServiceProcess from "../../components/services/ServiceProcess";
import ServiceTechnologies from "../../components/services/ServiceTechnologies";
import ServicePortfolio from "../../components/services/ServicePortfolio";
import ServiceCaseStudies from "../../components/services/ServiceCaseStudies";
import ServiceCTA from "../../components/services/ServiceCTA";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = useMemo(() => {
    return getServiceBySlug(servicesData, slug);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-center p-6">
        <div className="space-y-6 max-w-md">
          <h2 className="text-3xl font-extrabold text-slate-900">Service Not Found</h2>
          <p className="text-slate-500 text-sm">
            We couldn't locate the requested enterprise IT service detail showcase.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-slate-650 overflow-hidden font-sans">
      {/* Helmet SEO Optimization */}
      <Helmet>
        <title>{service.seo?.title || `${service.title} | Traincape Technology`}</title>
        <meta
          name="description"
          content={service.seo?.description || `Explore modules, tech stack and compliance features of ${service.title}.`}
        />
        <meta name="keywords" content={service.seo?.keywords || "IT service, software developer, enterprise database"} />
        <link rel="canonical" href={`https://traincapetech.in/services/${service.slug}`} />
        <meta property="og:title" content={service.seo?.title} />
        <meta property="og:description" content={service.seo?.description} />
        <meta property="og:url" content={`https://traincapetech.in/services/${service.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Dynamic Service and FAQ JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "serviceType": service.title,
            "provider": {
              "@type": "Organization",
              "name": "Traincape Technology",
              "logo": "https://traincapetech.in/assets/TT.png"
            },
            "description": service.shortDescription,
            "areaServed": "Global"
          })}
        </script>
        {service.faqs && service.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "FAQPage",
              "mainEntity": service.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      {/* Back button header navigation bar */}
      <div className="border-b border-slate-100 bg-slate-50 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Services</span>
          </Link>
          <div className="text-xs text-slate-550 font-semibold uppercase tracking-wider">
            Enterprise Services • {service.title}
          </div>
        </div>
      </div>

      {/* Hero section */}
      <ServiceHero service={service} />

      {/* Grid Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Main (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <ServiceProblems problems={service.businessProblems} />
            <ServiceSolution solutions={service.solutions} benefits={service.benefits} />
            <ServiceProcess />
            <ServicePortfolio portfolioIds={service.portfolioReferences} />
            <ServiceCaseStudies caseStudySlugs={service.caseStudyReferences} />
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            <ServiceTechnologies technologies={service.technologies} industries={service.industries} />
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="pt-10 border-t border-slate-100">
          <ServiceCTA serviceName={service.title} />
        </div>
      </div>
    </div>
  );
}

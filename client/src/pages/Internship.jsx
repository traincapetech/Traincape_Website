import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/internship/Hero";
import { faqs } from "../data/internship/internshipData";

// Lazy load below-the-fold sections for excellent mobile Core Web Vitals (FCP, LCP)
const WhyJoinTraincape = lazy(() => import("../components/internship/WhyJoinTraincape"));
const InternshipTracks = lazy(() => import("../components/internship/InternshipTracks"));
const LearningJourney = lazy(() => import("../components/internship/LearningJourney"));
const Technologies = lazy(() => import("../components/internship/Technologies"));
const RealProjects = lazy(() => import("../components/internship/RealProjects"));
const Mentorship = lazy(() => import("../components/internship/Mentorship"));
const ProgramStatistics = lazy(() => import("../components/internship/ProgramStatistics"));
const FeaturedAlumni = lazy(() => import("../components/internship/FeaturedAlumni"));
const CurrentBatch = lazy(() => import("../components/internship/CurrentBatch"));
const SelectionProcess = lazy(() => import("../components/internship/SelectionProcess"));
const Benefits = lazy(() => import("../components/internship/Benefits"));
const FAQ = lazy(() => import("../components/internship/FAQ"));
const ApplicationSection = lazy(() => import("../components/internship/ApplicationSection"));
const CTA = lazy(() => import("../components/internship/CTA"));

// Shared section placeholder to prevent layout shifts during lazy load
const SectionPlaceholder = () => (
  <div className="py-20 bg-slate-50 animate-pulse flex flex-col items-center justify-center space-y-4">
    <div className="w-48 h-6 bg-slate-200 rounded-md"></div>
    <div className="w-96 h-4 bg-slate-200 rounded-md max-w-[80vw]"></div>
    <div className="w-72 h-4 bg-slate-200 rounded-md max-w-[60vw]"></div>
  </div>
);

export default function Internship() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("internship-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTracks = () => {
    const tracksElement = document.getElementById("internship-tracks-section");
    if (tracksElement) {
      tracksElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Structured schemas for advanced SEO & GEO indexing
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.traincapetech.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Internship Program",
        "item": "https://www.traincapetech.in/internship"
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Traincape Technology",
    "url": "https://www.traincapetech.in",
    "logo": "https://www.traincapetech.in/android-chrome-512x512.png"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Software Development Internship",
    "description": "Gain hands-on software development experience. Work on fullstack React/Node.js products, collaborate via agile sprints, and receive direct 1-on-1 code mentorship.",
    "datePosted": "2026-07-15",
    "validThrough": "2027-07-15",
    "employmentType": "INTERN",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Traincape Technology",
      "sameAs": "https://www.traincapetech.in"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Software Development & MERN Stack Internship Program | Traincape Technology</title>
        <meta
          name="description"
          content="Apply for Traincape's software development internship. Gain hands-on project experience in React, Node.js, and Mobile App development. Mentorship-driven."
        />
        <meta
          name="keywords"
          content="Software Development Internship, MERN Stack Internship, React Internship, Node.js Internship, Web Development Internship, Remote Internship, Summer Internship"
        />
        <link rel="canonical" href="https://www.traincapetech.in/internship" />

        {/* OG Tags */}
        <meta property="og:title" content="Software Development & MERN Stack Internship Program | Traincape Technology" />
        <meta property="og:description" content="Apply for Traincape's software development internship. Gain hands-on project experience in React, Node.js, and Mobile App development." />
        <meta property="og:url" content="https://www.traincapetech.in/internship" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development & MERN Stack Internship Program | Traincape Technology" />
        <meta name="twitter:description" content="Apply for Traincape's software development internship. Gain hands-on project experience in React, Node.js, and Mobile App development." />

        {/* Structured JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(jobSchema)}</script>
      </Helmet>

      {/* Hero (Loaded directly above-the-fold) */}
      <Hero onApplyClick={handleScrollToForm} onTracksClick={handleScrollToTracks} />

      {/* Lazy loaded subcomponents with suspense safeguards */}
      <Suspense fallback={<SectionPlaceholder />}>
        <WhyJoinTraincape />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <InternshipTracks />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <LearningJourney />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <Technologies />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <RealProjects />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <Mentorship />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <ProgramStatistics />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <FeaturedAlumni />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <CurrentBatch />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <SelectionProcess />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <Benefits />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <ApplicationSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <CTA onApplyClick={handleScrollToForm} />
      </Suspense>
    </>
  );
}

import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import AdvisorModal from "../../components/AdvisorModal";
import { getCertificationsCatalog } from "../../data/certificationsCatalog";

export default function CertificationDetail() {
  const navigate = useNavigate();
  const { categorySlug, certSlug } = useParams();
  const { allCourses } = useMemo(() => getCertificationsCatalog(), []);
  const [advisorOpen, setAdvisorOpen] = useState(false);

  const cert = allCourses.find((c) => c.categorySlug === categorySlug && c.slug === certSlug);
  const title = cert?.title || "Certification";
  const canonical = `https://www.traincapetech.in/certifications/${categorySlug}/${certSlug}`;

  const structuredData = cert
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: cert.title,
        description: cert.shortDescription,
        provider: {
          "@type": "Organization",
          name: "Traincape Technology",
          url: "https://www.traincapetech.in",
        },
        url: canonical,
        educationalCredentialAwarded: cert.title,
      }
    : undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <SEOHead
        title={`${title} | Certifications | Traincape Technology`}
        description={
          cert?.shortDescription ||
          "Explore certification details, learning outcomes, who should enroll, and career benefits."
        }
        canonical={canonical}
        ogType="article"
        structuredData={structuredData}
      />

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <button onClick={() => navigate("/")} className="hover:text-gray-900">Home</button>
            <span>/</span>
            <button onClick={() => navigate("/certifications")} className="hover:text-gray-900">Certifications</button>
            <span>/</span>
            <button onClick={() => navigate(`/certifications/${categorySlug}`)} className="hover:text-gray-900">
              {cert?.categoryTitle || "Category"}
            </button>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{title}</span>
          </div>

          {!cert ? (
            <div className="mt-6">
              <h1 className="text-3xl font-extrabold text-gray-900">Certification not found</h1>
              <p className="mt-2 text-gray-600">Please go back and select a certification.</p>
              <button
                onClick={() => navigate("/certifications")}
                className="mt-6 px-5 py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition"
              >
                Back to Certifications
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {cert.categoryTitle}
                  </span>
                  <span className="text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">
                    {cert.groupTitle}
                  </span>
                </div>

                <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
                  {cert.title}
                </h1>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {cert.longDescription}
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-gray-900">Key Learning Outcomes</h2>
                    <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                      {cert.learningOutcomes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-gray-900">Who Should Enroll</h2>
                    <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                      {cert.whoShouldEnroll.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900">Career Benefits</h2>
                  <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                    {cert.careerBenefits.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
                  <h2 className="text-lg font-extrabold text-gray-900">Program Details</h2>
                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-semibold text-gray-900">Duration</span>
                      <span className="text-right">{cert.duration}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-semibold text-gray-900">Delivery</span>
                      <span className="text-right">{cert.deliveryMode}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-semibold text-gray-900">Domain</span>
                      <span className="text-right">{cert.domainTitle}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => setAdvisorOpen(true)}
                      className="w-full px-5 py-3 rounded-xl font-bold bg-blue-700 text-white hover:bg-blue-800 transition"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={() => setAdvisorOpen(true)}
                      className="w-full px-5 py-3 rounded-xl font-bold bg-cyan-100 text-cyan-900 hover:bg-cyan-200 transition"
                    >
                      Talk to Advisor
                    </button>
                    <a
                      href={cert.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm text-gray-600 hover:text-gray-900 underline"
                    >
                      View source reference
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <AdvisorModal
        isOpen={advisorOpen}
        onClose={() => setAdvisorOpen(false)}
        prefillCourse={cert?.title || ""}
      />
    </div>
  );
}


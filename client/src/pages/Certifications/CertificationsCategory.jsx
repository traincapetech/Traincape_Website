import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import CertificationCard from "../../components/CertificationCard";
import AdvisorModal from "../../components/AdvisorModal";
import { getCertificationsCatalog, TOP_CATEGORIES } from "../../data/certificationsCatalog";

export default function CertificationsCategory() {
  const navigate = useNavigate();
  const { categorySlug } = useParams();
  const { categories } = useMemo(() => getCertificationsCatalog(), []);
  const [query, setQuery] = useState("");
  const [advisorOpen, setAdvisorOpen] = useState(false);

  const category = categories.find((c) => c.slug === categorySlug);
  const categoryTitle =
    category?.title || TOP_CATEGORIES.find((c) => c.slug === categorySlug)?.title || "Certifications";

  const flatCourses = useMemo(() => {
    const all = (category?.groups || []).flatMap((g) => g.courses);
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((c) => `${c.title} ${c.groupTitle}`.toLowerCase().includes(q));
  }, [category, query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <SEOHead
        title={`${categoryTitle} Certifications | Traincape Technology`}
        description={`Browse ${categoryTitle} certifications and professional training programs. Explore groups, compare programs, and view detailed outcomes and benefits.`}
        canonical={`https://www.traincapetech.in/certifications/${categorySlug}`}
        ogType="website"
      />

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <button onClick={() => navigate("/")} className="hover:text-gray-900">Home</button>
            <span>/</span>
            <button onClick={() => navigate("/certifications")} className="hover:text-gray-900">Certifications</button>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{categoryTitle}</span>
          </div>

          <div className="mt-4 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{categoryTitle}</h1>
              <p className="mt-2 text-gray-600 max-w-3xl">
                Explore programs grouped by specialization. Open any certification to see outcomes, who should enroll,
                and career impact.
              </p>
            </div>

            <div className="w-full lg:w-[420px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search within this category…"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <div className="mt-2 text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-900">{flatCourses.length}</span> programs
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {!category ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">Category not found</h2>
            <p className="mt-2 text-gray-600">Please select a category from the Certifications page.</p>
            <button
              onClick={() => navigate("/certifications")}
              className="mt-6 px-5 py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition"
            >
              Back to Certifications
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {(category.groups || []).map((group) => {
              const groupCourses = group.courses.filter((c) =>
                query.trim()
                  ? `${c.title} ${c.groupTitle}`.toLowerCase().includes(query.trim().toLowerCase())
                  : true
              );
              if (groupCourses.length === 0) return null;
              return (
                <div key={group.slug} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">{group.title}</h2>
                      <p className="mt-1 text-gray-600 text-sm">
                        Domain: <span className="font-semibold text-gray-800">{group.domainTitle}</span>
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                      {groupCourses.length} programs
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {groupCourses.map((c) => (
                      <CertificationCard key={c.id} cert={c} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900 rounded-3xl p-8 md:p-10 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_40%),radial-gradient(circle_at_80%_20%,#22c55e,transparent_35%),radial-gradient(circle_at_50%_80%,#a855f7,transparent_35%)]" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Need help choosing the right certification?</h2>
              <p className="mt-2 text-white/85 max-w-2xl">
                Share your goals and background — we’ll recommend the best path and a practical training plan.
              </p>
            </div>
            <button
              onClick={() => setAdvisorOpen(true)}
              className="px-6 py-3 rounded-xl font-bold bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition"
            >
              Talk to Advisor
            </button>
          </div>
        </div>
      </section>

      <AdvisorModal
        isOpen={advisorOpen}
        onClose={() => setAdvisorOpen(false)}
        prefillCourse={categoryTitle}
      />
    </div>
  );
}


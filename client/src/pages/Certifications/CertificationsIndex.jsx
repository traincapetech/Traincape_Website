import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import CertificationCard from "../../components/CertificationCard";
import AdvisorModal from "../../components/AdvisorModal";
import { getCertificationsCatalog, TOP_CATEGORIES } from "../../data/certificationsCatalog";

export default function CertificationsIndex() {
  const navigate = useNavigate();
  const { categories, allCourses } = useMemo(() => getCertificationsCatalog(), []);
  const [query, setQuery] = useState("");
  const [advisorOpen, setAdvisorOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCourses;
    return allCourses.filter((c) => {
      const hay = `${c.title} ${c.categoryTitle} ${c.groupTitle} ${c.domainTitle}`.toLowerCase();
      return hay.includes(q);
    });
  }, [allCourses, query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <SEOHead
        title="Certifications & Professional Training | Traincape Technology"
        description="Explore certification and professional training programs across project management, agile, cybersecurity, cloud, AI, testing, business, and digital marketing. Browse categories and view course details."
        canonical="https://www.traincapetech.in/certifications"
        ogType="website"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_40%),radial-gradient(circle_at_80%_20%,#22c55e,transparent_35%),radial-gradient(circle_at_50%_80%,#a855f7,transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-200">
            Certifications & Professional Training
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Find the right certification path — and move faster in your career
          </h1>
          <p className="mt-4 max-w-3xl text-white/85 text-lg">
            Browse category-based certifications with detailed outcomes, who-it’s-for, and clear next steps.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-3 max-w-3xl">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certifications (e.g., Agile, ISO, DevOps, Cybersecurity)…"
              className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <button
              onClick={() => setAdvisorOpen(true)}
              className="px-5 py-3 rounded-xl font-bold bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition"
            >
              Talk to Advisor
            </button>
          </div>

          <div className="mt-6 text-sm text-white/70">
            Showing <span className="font-semibold text-white">{filtered.length}</span> certifications
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Browse by Category</h2>
            <p className="mt-2 text-gray-600">
              Clear separation across services and training paths — optimized for fast exploration.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOP_CATEGORIES.map((cat) => {
            const match = categories.find((c) => c.slug === cat.slug);
            const count = match ? match.groups.reduce((a, g) => a + g.courses.length, 0) : 0;
            return (
              <button
                key={cat.slug}
                onClick={() => navigate(`/certifications/${cat.slug}`)}
                className="text-left bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Category
                </div>
                <div className="mt-2 text-lg font-bold text-gray-900">{cat.title}</div>
                <div className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                  {count} programs
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">All Certifications</h2>
            <p className="mt-2 text-gray-600">
              Click a program to view outcomes, benefits, and enrollment options.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.slice(0, 60).map((c) => (
            <CertificationCard key={c.id} cert={c} />
          ))}
        </div>

        {filtered.length > 60 && (
          <div className="mt-10 text-center text-gray-600">
            Showing 60 of {filtered.length}. Use search or open a category to see everything.
          </div>
        )}
      </section>

      <AdvisorModal
        isOpen={advisorOpen}
        onClose={() => setAdvisorOpen(false)}
        prefillCourse=""
      />
    </div>
  );
}


import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Box, CheckCircle, Shield } from "lucide-react";
import { productsData } from "../../data/products/productsData";

export default function Products() {
  return (
    <div className="bg-white min-h-screen text-slate-650 overflow-hidden font-sans">
      {/* Helmet SEO Optimization */}
      <Helmet>
        <title>Enterprise SaaS &amp; Custom Software Products | Traincape Technology</title>
        <meta
          name="description"
          content="Discover our custom enterprise software products: Traincape CRM, HRMS system, and Automated Payroll suite built for zero per-user licensing overhead."
        />
        <meta name="keywords" content="Traincape software products, custom CRM, HRMS suite, automated payroll, SaaS showcase" />
        <link rel="canonical" href="https://traincapetech.in/products" />
        <meta property="og:title" content="Enterprise SaaS &amp; Custom Software Products | Traincape Technology" />
        <meta property="og:description" content="Discover our custom enterprise software products: Traincape CRM, HRMS system, and Automated Payroll suite." />
        <meta property="og:url" content="https://traincapetech.in/products" />
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
                  "@id": "https://traincapetech.in/products",
                  "name": "Products"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-white border-b border-slate-100">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/10 bg-blue-500/5 text-xs text-blue-600 font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Software Showcase
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display max-w-4xl mx-auto leading-tight">
            Our Custom{"  "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-650 to-purple-600">
              Enterprise Products
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Blistering fast SaaS engines engineered with custom design system tokens, database ownership, and no user-based licensing markup.
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((prod) => (
              <article
                key={prod.id}
                className="bg-white border border-slate-200 text-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-500/5 border border-blue-500/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Box className="w-3 h-3" />
                      <span>{prod.name}</span>
                    </span>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Ready
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    <Link to={`/products/${prod.slug}`} className="focus:outline-none">
                      {prod.tagline}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {prod.shortDescription}
                  </p>

                  {/* Stats list */}
                  <ul className="space-y-2 text-xs text-slate-650 bg-slate-50 p-3 rounded-lg border border-slate-150">
                    {prod.stats.map((stat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{stat.label}: <strong className="text-slate-800">{stat.value}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs mt-5">
                  <span className="text-slate-500 font-medium">
                    Scale: Unlimited Users
                  </span>
                  <Link
                    to={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-blue-600 group-hover:text-blue-750 transition-colors"
                  >
                    <span>Explore Product</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust compliance footer */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
            Constructing Future-Proof Systems
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Our SaaS showcases are built with design system tokens synchronization, WCAG accessibility benchmarks, and statically cached assets to ensure security and speed.
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

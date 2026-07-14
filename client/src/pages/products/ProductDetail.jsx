import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

// Data & utilities
import { productsData } from "../../data/products/productsData";
import { getProductBySlug } from "../../utils/products/slug";

// Components
import ProductHero from "../../components/products/ProductHero";
import ProductStats from "../../components/products/ProductStats";
import ProductModules from "../../components/products/ProductModules";
import ProductArchitecture from "../../components/products/ProductArchitecture";
import ProductIntegrations from "../../components/products/ProductIntegrations";
import ProductBenefits from "../../components/products/ProductBenefits";
import ProductFAQs from "../../components/products/ProductFAQs";
import ProductCTA from "../../components/products/ProductCTA";
import StickyCTA from "../../components/StickyCTA";

export default function ProductDetail() {
  const { slug } = useParams();

  const product = useMemo(() => {
    return getProductBySlug(productsData, slug);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-center p-6">
        <div className="space-y-6 max-w-md">
          <h2 className="text-3xl font-extrabold text-slate-900">Product Not Found</h2>
          <p className="text-slate-500 text-sm">
            We couldn't locate the requested SaaS product details showcase.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-slate-650 overflow-hidden font-sans">
      {/* Helmet SEO Optimization */}
      <Helmet>
        <title>{product.seo?.title || `${product.name} | Traincape Technology`}</title>
        <meta
          name="description"
          content={product.seo?.description || `Explore modules, tech stack and compliance features of ${product.name}.`}
        />
        <meta name="keywords" content={product.seo?.keywords || "SaaS product, custom software"} />
        <link rel="canonical" href={`https://traincapetech.in/products/${product.slug}`} />
        <meta property="og:title" content={product.seo?.title} />
        <meta property="og:description" content={product.seo?.description} />
        <meta property="og:url" content={`https://traincapetech.in/products/${product.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Dynamic Product JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": "https://traincapetech.in/assets/TT.png",
            "description": product.shortDescription,
            "brand": {
              "@type": "Brand",
              "name": "Traincape Technology"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "0.00",
              "valueAddedTaxIncluded": "true",
              "priceValidUntil": "2030-01-01",
              "availability": "http://schema.org/InStock",
              "url": `https://traincapetech.in/products/${product.slug}`
            }
          })}
        </script>
      </Helmet>

      {/* Back button header navigation bar */}
      <div className="border-b border-slate-100 bg-slate-50 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Products</span>
          </Link>
          <div className="text-xs text-slate-550 font-semibold uppercase tracking-wider">
            SaaS Showcase • {product.name}
          </div>
        </div>
      </div>

      {/* Core components rendering sequence */}
      <ProductHero product={product} />
      <ProductStats stats={product.stats} />
      <ProductModules modules={product.modules} />
      <ProductArchitecture architecture={product.architecture} security={product.security} />
      <ProductIntegrations integrations={product.integrations} />
      <ProductBenefits benefits={product.benefits} />
      <ProductFAQs faqs={product.faqs} />
      <ProductCTA productName={product.name} />
      <StickyCTA
        primaryLabel="Request Demo"
        whatsappPrefill={`Hi Traincape Team, I'm interested in requesting a sandbox demo for your "${product.name}" product.`}
      />
    </div>
  );
}

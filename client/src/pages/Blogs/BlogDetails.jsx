import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import ReadingProgress from "../../components/blog/ReadingProgress";
import Breadcrumb from "../../components/blog/Breadcrumb";
import TableOfContents from "../../components/blog/TableOfContents";
import AuthorCard from "../../components/blog/AuthorCard";
import ShareButtons from "../../components/blog/ShareButtons";
import Tags from "../../components/blog/Tags";
import RelatedArticles from "../../components/blog/RelatedArticles";
import RelatedServices from "../../components/blog/RelatedServices";
import RelatedProducts from "../../components/blog/RelatedProducts";
import RelatedCaseStudies from "../../components/blog/RelatedCaseStudies";
import NewsletterCTA from "../../components/blog/NewsletterCTA";
import CommentPlaceholder from "../../components/blog/CommentPlaceholder";
import { blogPosts } from "../../data/blog/posts";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Structured SEO schemas
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
        "name": "Blogs",
        "item": "https://www.traincapetech.in/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.traincapetech.in/blogs/${post.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.coverImage],
    "datePublished": new Date(post.publishDate).toISOString().split("T")[0],
    "dateModified": new Date(post.lastUpdated).toISOString().split("T")[0],
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Traincape Technology",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.traincapetech.in/android-chrome-512x512.png"
      }
    }
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>{post.seo?.title || `${post.title} | Traincape Blog`}</title>
        <meta name="description" content={post.seo?.description || post.excerpt} />
        <meta name="keywords" content={post.seo?.keywords || post.tags.join(", ")} />
        <link rel="canonical" href={`https://www.traincapetech.in/blogs/${post.slug}`} />

        {/* OG Tags */}
        <meta property="og:title" content={post.seo?.title || post.title} />
        <meta property="og:description" content={post.seo?.description || post.excerpt} />
        <meta property="og:url" content={`https://www.traincapetech.in/blogs/${post.slug}`} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo?.title || post.title} />
        <meta name="twitter:description" content={post.seo?.description || post.excerpt} />
        <meta name="twitter:image" content={post.coverImage} />

        {/* Schema configurations */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Breadcrumb Map */}
      <Breadcrumb title={post.title} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        {/* Left Side: Back button, Sticky Table of Contents */}
        <div className="lg:col-span-3 space-y-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-600 font-bold text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-4.5 h-4.5" />
            <span>All Articles</span>
          </Link>
          <TableOfContents content={post.content} />
        </div>

        {/* Center: Article body content (max-width around 720-800px) */}
        <div className="lg:col-span-6 space-y-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.01)] max-w-3xl mx-auto">
          {/* Category & Badges */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-md px-2.5 py-1 uppercase tracking-wider">
              {post.category.replace("-", " ")}
            </span>
            <div className="flex items-center gap-3.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4.5xl font-black text-slate-900 tracking-tight leading-tight text-left">
            {post.title}
          </h1>

          {/* Author and Date bar */}
          <div className="flex items-center gap-3.5 border-t border-b border-slate-50 py-4 text-left">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full border border-slate-200"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-tight">{post.author.name}</h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider pt-0.5">{post.author.role}</p>
            </div>
          </div>

          {/* Banner cover image */}
          <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 aspect-video">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rich Content Area */}
          <div
            className="article-body-content prose prose-slate max-w-none text-left text-slate-600 text-xs md:text-sm leading-relaxed space-y-5
              prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
              prose-h2:text-xl prose-h2:pt-4 prose-h2:pb-1
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/40 prose-blockquote:px-5 prose-blockquote:py-3.5 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-700 prose-blockquote:italic
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:font-mono prose-pre:text-xs"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-50 text-left">
            <Tags tags={post.tags} />
          </div>

          {/* Share Buttons */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-50">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Author Card Bio */}
          <div className="pt-4">
            <AuthorCard author={post.author} />
          </div>

          {/* FAQ Accordion Section if exists */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="pt-6 border-t border-slate-50 space-y-4 text-left">
              <h3 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3.5">
                {post.faqs.map((faq, index) => (
                  <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-800">{faq.question}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comment Forum placeholder */}
          <div className="pt-6 border-t border-slate-50">
            <CommentPlaceholder />
          </div>
        </div>

        {/* Right Side: Related items (Services, Products, Case studies, Newsletter) */}
        <div className="lg:col-span-3 space-y-6">
          <RelatedServices serviceIds={post.relatedServices} />
          <RelatedProducts productIds={post.relatedProducts} />
          <RelatedCaseStudies caseStudyIds={post.relatedCaseStudies} />
          <NewsletterCTA />
        </div>
      </div>

      {/* Footer Related Articles */}
      <RelatedArticles currentSlug={post.slug} category={post.category} />
    </div>
  );
}

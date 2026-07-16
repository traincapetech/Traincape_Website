import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

export default function FeaturedArticles({ article }) {
  if (!article) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-6">
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-md px-2 py-1 uppercase tracking-wider">
            Featured Article
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
          {/* Banner cover */}
          <div className="lg:col-span-7 h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-200 relative border border-slate-100">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {article.category.replace("-", " ")}
            </span>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <Link to={`/blogs/${article.slug}`} className="hover:text-blue-600 transition-colors">
                {article.title}
              </Link>
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full border border-slate-200"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-850">{article.author.name}</h4>
                <p className="text-[10px] text-slate-400">{article.author.role}</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to={`/blogs/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-bold text-xs uppercase tracking-wider"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

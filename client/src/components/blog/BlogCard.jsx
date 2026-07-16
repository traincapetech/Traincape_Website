import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogCard({ article }) {
  return (
    <article className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(16,40,66,0.06)] transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative bg-slate-50 border-b border-slate-50">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute top-4 right-4 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {article.category.replace("-", " ")}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-3.5 text-left">
        <div className="flex items-center gap-3.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {article.publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight flex-grow transition-colors group-hover:text-blue-600">
          <Link to={`/blogs/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-slate-500 text-xs md:text-sm leading-normal line-clamp-2">
          {article.excerpt}
        </p>

        <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full border border-slate-200"
            />
            <span className="text-[10px] font-semibold text-slate-600">{article.author.name}</span>
          </div>

          <Link
            to={`/blogs/${article.slug}`}
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold text-[10px] uppercase tracking-wider"
          >
            <span>Read</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}

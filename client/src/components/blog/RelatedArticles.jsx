import React from "react";
import { blogPosts } from "../../data/blog/posts";
import BlogCard from "./BlogCard";

export default function RelatedArticles({ currentSlug, category }) {
  const related = blogPosts
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-12 border-t border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 space-y-8 text-left">
        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Related Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((post) => (
            <BlogCard key={post.slug} article={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

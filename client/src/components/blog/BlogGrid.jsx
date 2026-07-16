import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-12">
      {articles.map((article) => (
        <BlogCard key={article.slug} article={article} />
      ))}
    </div>
  );
}

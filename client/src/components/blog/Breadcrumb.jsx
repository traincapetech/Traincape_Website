import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ title }) {
  return (
    <nav className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left py-2.5 max-w-7xl mx-auto px-6">
      <Link to="/" className="hover:text-blue-600 transition-colors">
        Home
      </Link>
      <ChevronRight className="w-3 h-3 text-slate-350" />
      <Link to="/blogs" className="hover:text-blue-600 transition-colors">
        Blogs
      </Link>
      {title && (
        <>
          <ChevronRight className="w-3 h-3 text-slate-350" />
          <span className="text-slate-600 line-clamp-1 max-w-xs">{title}</span>
        </>
      )}
    </nav>
  );
}

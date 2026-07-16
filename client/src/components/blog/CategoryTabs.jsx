import React from "react";
import { categories } from "../../data/blog/categories";

export default function CategoryTabs({ activeCategory, onSelectCategory }) {
  return (
    <div className="border-b border-slate-200">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2.5 max-w-7xl mx-auto px-6">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all whitespace-nowrap focus:outline-none ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-350"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

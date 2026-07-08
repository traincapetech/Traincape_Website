import React from "react";
import { motion } from "framer-motion";

export default function PortfolioFilters({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-none py-4" role="tablist" aria-label="Project Category Filters">
      <div className="flex items-center justify-start md:justify-center gap-2.5 px-4 min-w-max">
        {categories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isActive}
              id={`tab-${category.id}`}
              aria-controls="portfolio-grid-container"
              onClick={() => onSelectCategory(category.id)}
              className={`relative px-4 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive
                  ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                  : "text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80"
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {isActive && (
                <motion.span
                  layoutId="activeFilterBg"
                  className="absolute inset-0 rounded-full bg-blue-500/5 -z-0 pointer-events-none"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ query, onSearchChange, onClear }) {
  return (
    <div className="max-w-xl mx-auto px-4 mt-6">
      <div className="relative group">
        <label htmlFor="portfolio-search" className="sr-only">
          Search projects by name, technology, or industry
        </label>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
          <Search className="w-5 h-5" />
        </div>
        <input
          id="portfolio-search"
          type="text"
          value={query}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by project, technology, or industry..."
          className="w-full h-12 pl-12 pr-10 bg-slate-900/40 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        />
        {query && (
          <button
            onClick={onClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded-lg"
            aria-label="Clear search input"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

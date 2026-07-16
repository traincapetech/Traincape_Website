import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles, tags, or keywords..."
        className="w-full bg-slate-900/60 border border-slate-800 text-white rounded-xl pl-11 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

import React from "react";
import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="w-full text-center py-16 px-6 bg-slate-50 border border-slate-200 rounded-2xl">
      <div className="mx-auto w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 mb-4 shadow-sm">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-800">No Projects Found</h3>
      <p className="text-slate-500 text-sm max-w-sm mx-auto mt-1 leading-relaxed">
        We couldn't find any projects matching your current filters or search query. Try adjusting your query or resetting filters.
      </p>
    </div>
  );
}

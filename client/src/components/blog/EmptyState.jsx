import React from "react";
import { AlertCircle } from "lucide-react";

export default function EmptyState({ title = "No articles found", message = "Try adjusting your search filters or check another category." }) {
  return (
    <div className="py-20 text-center space-y-4 max-w-md mx-auto px-6">
      <div className="inline-flex p-4 bg-slate-50 border border-slate-100 rounded-full text-slate-400">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{message}</p>
    </div>
  );
}

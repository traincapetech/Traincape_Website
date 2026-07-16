import React from "react";

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-12">
      {[1, 2, 3].map((idx) => (
        <div
          key={idx}
          className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 animate-pulse"
        >
          <div className="w-full h-48 bg-slate-200 rounded-2xl"></div>
          <div className="w-24 h-4 bg-slate-200 rounded-md"></div>
          <div className="w-full h-6 bg-slate-200 rounded-md"></div>
          <div className="w-3/4 h-6 bg-slate-200 rounded-md"></div>
          <div className="w-full h-4 bg-slate-200 rounded-md"></div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-200"></div>
              <div className="w-16 h-3 bg-slate-200 rounded-md"></div>
            </div>
            <div className="w-12 h-3 bg-slate-200 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

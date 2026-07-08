import React from "react";

export default function UIShowcase({ gallery, client }) {
  if (!gallery) return null;

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 font-display">
        Product Interface Showcase
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        {gallery.desktop && (
          <div className="md:col-span-8 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xl relative group aspect-video">
            <img
              src={gallery.desktop}
              alt={`${client} Desktop View`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-50/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 bg-white/90 border border-slate-200 rounded px-2.5 py-1 text-[10px] text-slate-500 font-semibold uppercase tracking-wider shadow-lg">
              Desktop storefront View
            </div>
          </div>
        )}
        
        {gallery.mobile && (
          <div className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xl relative group aspect-[9/16] max-h-[500px]">
            <img
              src={gallery.mobile}
              alt={`${client} Mobile View`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-50/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 bg-white/90 border border-slate-200 rounded px-2.5 py-1 text-[10px] text-slate-500 font-semibold uppercase tracking-wider shadow-lg">
              Mobile Responsive View
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

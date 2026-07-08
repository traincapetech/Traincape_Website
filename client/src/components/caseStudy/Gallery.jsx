import React from "react";

export default function Gallery({ gallery, client }) {
  if (!gallery || Object.keys(gallery).length <= 2) return null;

  // Filter out the primary 'desktop' and 'mobile' images to show secondary screenshots
  const secondaryImages = Object.entries(gallery).filter(
    ([key]) => key !== "desktop" && key !== "mobile" && key !== "logo"
  );

  if (secondaryImages.length === 0) return null;

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 font-display">
        Product Screen Catalogue
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondaryImages.map(([name, src], idx) => (
          <div
            key={idx}
            className="group relative aspect-video bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:border-blue-500/20 transition-all duration-300"
          >
            <img
              src={src}
              alt={`${client} ${name} Screen Catalog`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-50/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 bg-white/90 border border-slate-200 rounded px-2.5 py-1 text-[10px] text-slate-500 font-semibold uppercase tracking-wider shadow-lg">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { Quote } from "lucide-react";

export default function Testimonial({ testimonial }) {
  if (!testimonial || !testimonial.quote) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-sm">
      <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-200/40 pointer-events-none -z-0" />
      
      <blockquote className="space-y-4 relative z-10">
        <p className="text-slate-800 font-medium text-base md:text-lg leading-relaxed italic">
          "{testimonial.quote}"
        </p>
        <footer className="flex items-center gap-3">
          {testimonial.avatar && (
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
          )}
          <div className="flex flex-col">
            <cite className="not-italic font-bold text-slate-900 text-sm">
              {testimonial.author}
            </cite>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              {testimonial.role}
            </span>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

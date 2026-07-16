import React from "react";
import { featuredAlumni } from "../../data/internship/internshipData";
import { Award, Quote } from "lucide-react";

export default function FeaturedAlumni() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Alumni Success
          </div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
            Featured Alumni
          </h2>
          <p className="text-slate-550 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            See what our past interns say about their learning experience and how it accelerated their entry into full-time roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {featuredAlumni.map((alumnus, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="text-slate-300">
                  <Quote className="w-8 h-8 fill-current" />
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic">
                  "{alumnus.testimonial}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <img
                  src={alumnus.photoUrl}
                  alt={alumnus.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{alumnus.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-0.5">{alumnus.college}</p>
                  <p className="text-[10px] text-blue-600 font-semibold pt-0.5">
                    {alumnus.role} {alumnus.currentCompany && `at ${alumnus.currentCompany}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

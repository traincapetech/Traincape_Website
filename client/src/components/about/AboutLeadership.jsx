import React from "react";
import { Quote, Users, Heart } from "lucide-react";
import founderImage from "../../assets/Parichay-Sir.jpeg";

export default function AboutLeadership({ leadership, team }) {
  if (!leadership || !team) return null;

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        
        {/* CEO Message Block */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <Quote className="absolute top-6 right-6 w-24 h-24 text-slate-200/50 pointer-events-none -z-0" />
          
          {/* Left Founder Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 relative z-10">
            <img
              src={founderImage}
              alt={leadership.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-slate-200 object-cover shadow-xl"
            />
            <div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                {leadership.name}
              </h4>
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-0.5">
                {leadership.role}
              </p>
            </div>
          </div>

          {/* Right Message (8 cols) */}
          <div className="lg:col-span-8 relative z-10">
            <blockquote className="space-y-4">
              <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed italic">
                "{leadership.message}"
              </p>
            </blockquote>
          </div>
        </div>

        {/* Team profiles grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Our Core Engineering &amp; Operations Team
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-xl p-5 text-center space-y-2 hover:border-blue-500/20 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/5 text-blue-600 flex items-center justify-center mx-auto text-sm font-extrabold font-display">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs md:text-sm">
                    {member.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture statement */}
        <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl flex gap-5 items-start shadow-sm">
          <div className="p-2.5 rounded-lg bg-rose-500/5 text-rose-600 flex-shrink-0">
            <Heart className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-slate-900 font-display">
              Our Collaborative Culture
            </h4>
            <p className="text-slate-650 text-xs md:text-sm leading-relaxed">
              We cultivate a culture of innovation, continuous mentorship, and transparent collaboration. Whether engineering custom software interfaces, deploying stateless API nodes, or upskilling developer cohorts, our team aligns behind user outcomes and clean, accessible code.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

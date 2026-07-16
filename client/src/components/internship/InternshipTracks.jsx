import React from "react";
import { internshipTracks } from "../../data/internship/internshipData";
import { Code, Tag } from "lucide-react";

export default function InternshipTracks() {
  return (
    <section id="internship-tracks-section" className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
            Internship Specialization Tracks
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Select a specialized technology track aligned with your career goals. Each track features dedicated project assignments and milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {internshipTracks.map((track) => (
            <div
              key={track.id}
              className="bg-white border border-slate-100 rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 border border-slate-200 rounded-full px-2 py-0.5 uppercase tracking-wide">
                    {track.availability}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 tracking-tight leading-tight">
                  {track.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-50 flex flex-wrap gap-1.5">
                {track.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[9px] font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

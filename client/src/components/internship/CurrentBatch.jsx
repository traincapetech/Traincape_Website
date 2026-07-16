import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../config/api";
import { Users, Globe, GraduationCap, MapPin, Code, Briefcase } from "lucide-react";

export default function CurrentBatch() {
  const [interns, setInterns] = useState([]);
  const [loadingInterns, setLoadingInterns] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const baseUrl = API_BASE_URL || "http://localhost:3001";
        const { data } = await axios.get(`${baseUrl}/interns`);
        if (data.success) {
          setInterns(data.interns);
        }
      } catch (err) {
        console.error("Failed to fetch interns", err);
      } finally {
        setLoadingInterns(false);
      }
    };
    fetchInterns();
  }, []);

  const FallbackAvatar = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  );

  if (loadingInterns) {
    return (
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center py-20">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (interns.length === 0) {
    return null; // Hide the section automatically if no interns exist
  }

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200/50">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
          Our Active Intern Cohort
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
          See the students and professionals currently executing project milestones across software engineering, mobile development, and product design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {interns.map((intern) => (
          <div
            key={intern._id}
            className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(16,40,66,0.08)] transition-all duration-300 group hover:-translate-y-1.5 border border-slate-100 flex flex-col h-full"
          >
            <div className="h-60 overflow-hidden relative bg-slate-50 border-b border-slate-100">
              {imageErrors[intern._id] ? (
                <FallbackAvatar />
              ) : (
                <img
                  src={`${API_BASE_URL || "http://localhost:3001"}/interns/${intern._id}/photo`}
                  alt={intern.fullName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  onError={() => setImageErrors((prev) => ({ ...prev, [intern._id]: true }))}
                />
              )}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Cohort Member
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-955 transition-colors group-hover:text-blue-600">
                  {intern.fullName}
                </h3>
              </div>

              <div className="space-y-3 text-xs flex-grow">
                {intern.college && (
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Institution</p>
                      <p className="font-semibold text-slate-700">{intern.college}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Education</p>
                    <p className="font-semibold text-slate-700">{intern.degree}</p>
                  </div>
                </div>

                {intern.location && (
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Location</p>
                      <p className="font-semibold text-slate-700">{intern.location}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-2.5">
                <Code className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Tech Stack</p>
                  <p className="font-bold text-blue-600 text-xs">{intern.techStack}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

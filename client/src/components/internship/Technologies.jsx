import React from "react";
import { Sparkles, Terminal } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonwebservices
} from "react-icons/si";

export default function Technologies() {
  const techStack = [
    { icon: SiReact, name: "React", category: "Frontend", color: "text-[#61dafb]" },
    { icon: SiNodedotjs, name: "Node.js", category: "Backend", color: "text-[#339933]" },
    { icon: SiMongodb, name: "MongoDB", category: "Database", color: "text-[#47a248]" },
    { icon: SiExpress, name: "Express", category: "Backend Framework", color: "text-slate-400" },
    { icon: SiReact, name: "React Native", category: "Mobile App", color: "text-[#61dafb]" },
    { icon: SiNextdotjs, name: "Next.js", category: "Fullstack", color: "text-slate-200" },
    { icon: SiTailwindcss, name: "Tailwind CSS", category: "Styling", color: "text-[#38bdf8]" },
    { icon: SiFirebase, name: "Firebase", category: "Backend services", color: "text-[#ffca28]" },
    { icon: SiGit, name: "Git", category: "Version Control", color: "text-[#f05032]" },
    { icon: SiGithub, name: "GitHub", category: "Collaborations", color: "text-slate-200" },
    { icon: SiDocker, name: "Docker", category: "Containers", color: "text-[#2496ed] opacity-60" },
    { icon: SiAmazonwebservices, name: "AWS Cloud", category: "Infrastructure", color: "text-[#ff9900] opacity-60" }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Mesh gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            Stack & Standards
          </div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold font-display">
            Technologies You Will Master
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Gain direct experience using industry-standard tools and frameworks that power modern software architectures globally.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pt-4">
          {techStack.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 flex flex-col items-center justify-center space-y-3 transition-colors hover:bg-slate-900 hover:border-slate-700"
              >
                <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${tech.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white leading-tight">{tech.name}</h3>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider pt-0.5">{tech.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

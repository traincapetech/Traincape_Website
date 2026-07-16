import React from "react";
import { GitPullRequest, ShieldAlert, Cpu, Eye } from "lucide-react";

export default function RealProjects() {
  const contributions = [
    {
      icon: Cpu,
      title: "Active Feature Building",
      desc: "Implement dashboard metrics, user lists, form widgets, or responsive layout changes. You contribute directly to our active codebase."
    },
    {
      icon: GitPullRequest,
      title: "Enterprise Git Workflows",
      desc: "Create feature branches, push updates, submit pull requests, and resolve merge conflicts. Learn how engineering teams collaborate."
    },
    {
      icon: ShieldAlert,
      title: "Bug Fixing & Audits",
      desc: "Investigate console logs, correct slow image renders, fix sitemap link crawls, and optimize layouts to achieve high Lighthouse scores."
    },
    {
      icon: Eye,
      title: "Live Server Deployments",
      desc: "Observe how builds are compiled and served, and verify changes directly in active staging and pre-production environments."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text Details */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
            <GitPullRequest className="w-3.5 h-3.5" />
            Live Experience
          </div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display leading-tight">
            Work on Real Software Projects
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            We don't assign mock tutorials. Traincape interns write code that contributes directly to active internal tools (like our CRM and employee portals) and client systems. Under supervision, you gain real exposure to software cycles, issue debugging, and staging environments.
          </p>
        </div>

        {/* Right Side: 2x2 Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contributions.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left space-y-3 hover:bg-slate-50/80 transition-colors"
            >
              <div className="p-2.5 w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 tracking-tight leading-tight">{item.title}</h3>
              <p className="text-slate-550 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { CheckCircle2, Award, Zap, Compass, MapPin } from "lucide-react";

export default function LearningJourney() {
  const learningTopics = [
    { title: "Hands-on Development", desc: "Write actual production code using React, Node.js, and clean software architecture rules." },
    { title: "Git & Collaborative Workflows", desc: "Master branches, pull requests, resolving merge conflicts, and structured code reviews." },
    { title: "REST APIs & Integrations", desc: "Design clean endpoints, handle middleware, authentication tokens, and state parameters." },
    { title: "Database Architecture", desc: "Create robust relational schemas, optimize queries, and design schema relationships." },
    { title: "Deployment Operations", desc: "Deploy web application builds to cloud servers (AWS, Netlify, Render) with environment variables." },
    { title: "Agile & Team Dynamics", desc: "Collaborate via weekly scrums, standup reports, and backlog task assignment systems." }
  ];

  const steps = [
    { phase: "Phase 1: Setup & Warmup", title: "Git Workflows & Setup", duration: "Weeks 1 - 2", desc: "Clone target branches, configure your local environment, and complete introductory warm-up coding tasks." },
    { phase: "Phase 2: Core Engineering", title: "Feature Development", duration: "Weeks 3 - 8", desc: "Implement active frontend screens, API endpoints, or database queries under senior guidance." },
    { phase: "Phase 3: Integration & Test", title: "Integration Testing", duration: "Weeks 9 - 12", desc: "Perform unit tests, verify sitemap discovery, fix UI visual layouts, and prepare the module for release." },
    { phase: "Phase 4: Release & Onboarding", title: "Production Deployment", duration: "Weeks 13 - 16", desc: "Deploy features to staging, run core web audits, and document your technical achievements." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        {/* Grid: What You Will Learn */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Skills & Systems
            </div>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display leading-tight">
              What You Will Learn
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              We skip basic theories and focus on practical engineering habits used in modern software companies. You will build core technical competencies that set you apart.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {learningTopics.map((topic, idx) => (
              <div key={idx} className="flex gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-800">{topic.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline: Learning Journey */}
        <div className="pt-8 border-t border-slate-100 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Your Learning Journey
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              A structured, step-by-step roadmap designed to guide you from foundation tasks to deployment operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left space-y-3">
                <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-400">
                  {step.duration}
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wide">
                  {step.phase.split(":")[0]}
                </span>
                <h3 className="text-base font-bold text-slate-800 pt-1">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

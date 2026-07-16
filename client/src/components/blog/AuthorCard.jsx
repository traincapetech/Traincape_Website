import React from "react";

export default function AuthorCard({ author }) {
  if (!author) return null;

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center text-left">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-16 h-16 rounded-full object-cover border border-slate-200 shadow-sm flex-shrink-0"
      />
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
          About the Author: <span className="text-blue-600">{author.name}</span>
        </h4>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          {author.role}
        </p>
        <p className="text-slate-550 text-xs leading-relaxed pt-1">
          {author.bio}
        </p>
      </div>
    </div>
  );
}

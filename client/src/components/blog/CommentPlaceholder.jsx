import React from "react";
import { MessageSquare } from "lucide-react";

export default function CommentPlaceholder() {
  return (
    <div className="border border-slate-100 rounded-2xl p-6 text-center space-y-3 bg-slate-50/50">
      <div className="inline-flex p-3 bg-slate-100/80 rounded-full text-slate-400">
        <MessageSquare className="w-5 h-5" />
      </div>
      <h4 className="text-sm font-bold text-slate-800">Discussion Forum</h4>
      <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
        Comments are currently locked for archiving. Sign in to your developer profile in a future update to participate in discussions.
      </p>
    </div>
  );
}

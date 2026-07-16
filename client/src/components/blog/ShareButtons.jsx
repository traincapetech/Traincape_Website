import React from "react";
import { Linkedin, Twitter, MessageSquare, Link2 } from "lucide-react";
import toast from "react-hot-toast";

export default function ShareButtons({ title, slug }) {
  const absoluteUrl = `https://www.traincapetech.in/blogs/${slug}`;

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(absoluteUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${absoluteUrl}`)}`
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(absoluteUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mr-2">
        Share Post:
      </span>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100 rounded-lg text-slate-550 transition-all hover:scale-105"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100 rounded-lg text-slate-550 transition-all hover:scale-105"
        title="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100 rounded-lg text-slate-550 transition-all hover:scale-105"
        title="Share on WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
      <button
        onClick={handleCopyLink}
        className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100 rounded-lg text-slate-550 transition-all hover:scale-105"
        title="Copy Link to Clipboard"
      >
        <Link2 className="w-4 h-4" />
      </button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { List } from "lucide-react";

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const articleNode = document.querySelector(".article-body-content");
    if (!articleNode) return;

    const h2Elements = articleNode.querySelectorAll("h2");
    const list = Array.from(h2Elements).map((h2, index) => {
      const text = h2.textContent || "";
      const id = h2.id || `heading-${index}`;
      h2.id = id; // Ensure ID exists for anchor mapping
      return { id, text };
    });
    setHeadings(list);

    // Track active heading using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px" }
    );

    h2Elements.forEach((h2) => observer.observe(h2));
    return () => observer.disconnect();
  }, [content]);

  if (headings.length === 0) return null;

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-24 bg-white border border-slate-100 rounded-2xl p-6 text-left space-y-4 max-w-sm hidden lg:block">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 border-b border-slate-50 pb-2">
        <List className="w-3.5 h-3.5" />
        Table of Contents
      </h3>
      <ul className="space-y-3.5 text-xs">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li key={heading.id}>
              <button
                onClick={() => handleScrollTo(heading.id)}
                className={`text-left font-semibold hover:text-blue-600 transition-colors block border-l-2 pl-3 ${
                  isActive
                    ? "border-blue-600 text-blue-600 font-bold"
                    : "border-transparent text-slate-500"
                }`}
              >
                {heading.text}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

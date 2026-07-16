import React, { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

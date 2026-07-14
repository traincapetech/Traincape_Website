import React from "react";

export default function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none select-none z-[1]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="footer-grid"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 160 0 L 0 0 0 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-grid)" />
    </svg>
  );
}

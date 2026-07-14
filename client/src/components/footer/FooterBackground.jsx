import React from "react";
import GridPattern from "./GridPattern";
import AmbientGlow from "./AmbientGlow";
import FloatingParticles from "./FloatingParticles";

export default function FooterBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#03050c] select-none pointer-events-none">
      {/* Animated Mesh Gradients */}
      <style>{`
        @keyframes meshGlow {
          0% {
            background-position: 0% 50%, 50% 100%, 100% 50%;
          }
          50% {
            background-position: 50% 100%, 100% 50%, 0% 50%;
          }
          100% {
            background-position: 0% 50%, 50% 100%, 100% 50%;
          }
        }
        .animated-mesh-overlay {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(8, 47, 73, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(30, 27, 75, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(3, 105, 161, 0.08) 0%, transparent 60%);
          background-size: 200% 200%;
          animation: meshGlow 30s ease-in-out infinite;
        }
      `}</style>

      {/* Deep Rich Gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050711] to-[#03050c]" />

      {/* Shifting Mesh Gels */}
      <div className="absolute inset-0 animated-mesh-overlay opacity-90" />

      {/* Grid Pattern */}
      <GridPattern />

      {/* Canvas Floating Particles */}
      <FloatingParticles />

      {/* Radial Breathing Glows */}
      <AmbientGlow />

      {/* Dark Subtle Base Overlay for accessibility and contrast */}
      <div className="absolute inset-0 bg-[#03050c]/30" />
    </div>
  );
}

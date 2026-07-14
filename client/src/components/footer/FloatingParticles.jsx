import React, { useEffect, useRef } from "react";

export default function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initParticles();
    };

    class Particle {
      constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.15; // Slow horizontal speed
        this.vy = (Math.random() - 0.5) * 0.15; // Slow vertical speed
        this.radius = Math.random() * 1.2 + 0.6; // Tiny dot size
        this.alpha = Math.random() * 0.4 + 0.1;
      }

      update(w, h) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce or wrap edges
        if (this.x < 0 || this.x > w) this.vx = -this.vx;
        if (this.y < 0 || this.y > h) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${this.alpha})`; // Light blue/cyan shade
        ctx.fill();
      }
    }

    const initParticles = () => {
      const w = canvas.width;
      const h = canvas.height;
      
      // Scale count based on width for mobile performance
      const count = Math.floor((w * h) / 18000); 
      const limitedCount = Math.min(count, 65); // Cap to preserve performance

      particles = [];
      for (let i = 0; i < limitedCount; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Update and draw particles
      particles.forEach((p) => {
        p.update(w, h);
        p.draw();
      });

      // Draw subtle connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Listeners
    window.addEventListener("resize", resizeCanvas);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-[1] opacity-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

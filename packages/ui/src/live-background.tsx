"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

const PX_PER_PARTICLE = 18000;
const MAX_PARTICLES = 90;
const LINE_DIST = 140;
const CURSOR_DIST = 220;
const ATTRACT_DIST = 200;

export function LiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let mouseX = -10000;
    let mouseY = -10000;
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      const count = Math.min(
        MAX_PARTICLES,
        Math.floor((w * h) / PX_PER_PARTICLE),
      );
      if (Math.abs(count - particles.length) > 4) {
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
        }));
      }
    };

    const draw = () => {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const attract2 = ATTRACT_DIST * ATTRACT_DIST;
      for (const p of particles) {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < attract2 && d2 > 1) {
          const d = Math.sqrt(d2);
          const f = 0.0009 * (1 - d / ATTRACT_DIST);
          p.vx += dx * f;
          p.vy += dy * f;
        }
        p.vx *= 0.99;
        p.vy *= 0.99;
        if (Math.hypot(p.vx, p.vy) < 0.05) {
          p.vx += (Math.random() - 0.5) * 0.04;
          p.vy += (Math.random() - 0.5) * 0.04;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        else if (p.y > h + 10) p.y = -10;
      }

      ctx.lineWidth = 0.5;
      const ld2 = LINE_DIST * LINE_DIST;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        if (!a) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (!b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < ld2) {
            const alpha = (1 - Math.sqrt(d2) / LINE_DIST) * 0.22;
            ctx.strokeStyle = `rgba(220,228,236,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      const cd2 = CURSOR_DIST * CURSOR_DIST;
      for (const p of particles) {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < cd2) {
          const alpha = (1 - Math.sqrt(d2) / CURSOR_DIST) * 0.5;
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(220,228,236,0.7)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onLeave = () => {
      mouseX = -10000;
      mouseY = -10000;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        mouseX = t.clientX;
        mouseY = t.clientY;
      }
    };
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!prefersReduced) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    if (!prefersReduced) {
      raf = requestAnimationFrame(draw);
    } else {
      running = true;
      draw();
      running = false;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <div className="gaaia-mesh gaaia-mesh-a" />
      <div className="gaaia-mesh gaaia-mesh-b" />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <div className="gaaia-mesh-vignette" />
    </div>
  );
}

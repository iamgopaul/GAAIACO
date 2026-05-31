"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Particle = { x: number; y: number; vx: number; vy: number };

const SESSION_KEY = "gaaia-visited";
const PX_PER_PARTICLE = 14000;
const MAX_PARTICLES = 80;
const LINE_DIST = 130;

const FIRST_LOAD = {
  rings: 2800,
  wordmark: 4800,
  welcome: 7200,
  mission: 10400,
  exit: 13600,
  done: 14600,
};
const NAV = {
  icon: 150,
  exit: 750,
  done: 1250,
};

type PageSplashProps = {
  /** First-load welcome line (e.g. "GAAIA Ecosystem", "GAAIA AI"). */
  welcomeName?: string;
  /** First-load tagline shown after the welcome. */
  tagline?: string;
  /** First-load mission line. */
  mission?: string;
};

export function PageSplash({
  welcomeName = "GAAIA Ecosystem",
  tagline = "Global Autonomous Artificial Intelligence Agency",
  mission = "We build software and AI applications for you.",
}: PageSplashProps = {}) {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(true);
  const [mode, setMode] = useState<"first" | "nav">("nav");
  const [stage, setStage] = useState(0);

  const skip = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setActive(false);
  }, []);

  useEffect(() => {
    setMounted(true);
    const isFirst = !sessionStorage.getItem(SESSION_KEY);
    if (isFirst) sessionStorage.setItem(SESSION_KEY, "1");
    setMode(isFirst ? "first" : "nav");
    setActive(true);
    setStage(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    if (isFirst) {
      timers.push(setTimeout(() => setStage(1), FIRST_LOAD.rings));
      timers.push(setTimeout(() => setStage(2), FIRST_LOAD.wordmark));
      timers.push(setTimeout(() => setStage(3), FIRST_LOAD.welcome));
      timers.push(setTimeout(() => setStage(4), FIRST_LOAD.mission));
      timers.push(setTimeout(() => setStage(5), FIRST_LOAD.exit));
      timers.push(setTimeout(() => setActive(false), FIRST_LOAD.done));
    } else {
      timers.push(setTimeout(() => setStage(1), NAV.icon));
      timers.push(setTimeout(() => setStage(5), NAV.exit));
      timers.push(setTimeout(() => setActive(false), NAV.done));
    }
    timersRef.current = timers;
    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  useEffect(() => {
    const onKey = () => skip();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [skip]);

  useEffect(() => {
    if (!active) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      html.style.overflow = prev;
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
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
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const draw = () => {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
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
            const alpha = (1 - Math.sqrt(d2) / LINE_DIST) * 0.28;
            ctx.strokeStyle = `rgba(220,228,236,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(220,228,236,0.85)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  if (!active) return null;

  const showLogo = stage <= 2 || (mode === "nav" && stage >= 3);
  const showWelcome = mode === "first" && stage === 3;
  const showMission = mode === "first" && stage >= 4;

  return (
    <div
      key={pathname}
      aria-hidden
      onClick={skip}
      className={`gaaia-splash ${
        stage >= 5
          ? `opacity-0 transition-opacity ${
              mode === "first" ? "duration-[800ms]" : "duration-500"
            }`
          : ""
      }`}
    >
      <canvas
        ref={canvasRef}
        className="gaaia-intro-canvas pointer-events-none absolute inset-0 h-full w-full"
      />

      {mounted && (
        <div className="gaaia-splash-stage">
          {showLogo && (
            <div className="gaaia-fade-in flex flex-col items-center gap-6">
              <div className="gaaia-intro-emblem">
                <Image
                  src="/gaaia-emblem-base.png"
                  alt=""
                  fill
                  sizes="352px"
                  priority
                  className={`object-contain transition-opacity duration-700 ease-out ${
                    stage >= 1 ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span className="gaaia-intro-core" />
              </div>
              <Image
                src="/gaaia-wordmark.png"
                alt="GAAIA"
                width={1098}
                height={181}
                priority
                className={`gaaia-intro-wordmark transition-opacity duration-700 ease-out ${
                  mode === "first" && stage >= 2 ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}

          {showWelcome && (
            <p className="gaaia-fade-in gaaia-intro-headline">
              Welcome to the
              <br />
              <span className="text-silver">{welcomeName}</span>
            </p>
          )}

          {showMission && (
            <div className="gaaia-fade-in flex flex-col items-center gap-5">
              <span className="gaaia-intro-sub">{tagline}</span>
              <p className="gaaia-intro-headline">{mission}</p>
            </div>
          )}
        </div>
      )}

      {mounted && mode === "first" && stage < 5 && (
        <span className="gaaia-splash-skip">Click or press any key to skip</span>
      )}
    </div>
  );
}

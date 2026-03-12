// components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline();

    // Background subtle zoom + parallax
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.15,
        duration: 30,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    // Headline animation
    gsap.fromTo(
      sectionRef.current.querySelectorAll("h1 > span"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.4,
        ease: "power4.out",
      },
    );

    // Subheadline
    gsap.fromTo(
      sectionRef.current.querySelector("p.text-xl"),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.7, ease: "power3.out" },
    );

    // CTAs
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-button"),
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.18,
        duration: 1,
        delay: 1.1,
        ease: "back.out(1.2)",
      },
    );

    // Counters on scroll
    countersRef.current.forEach((counter) => {
      if (!counter) return;
      const target = parseInt(counter.dataset.target || "0", 10);

      ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            duration: 2.8,
            innerHTML: target,
            snap: { innerHTML: 1 },
            ease: "power2.out",
            onUpdate: function () {
              counter.innerHTML = Math.ceil(
                Number(this.targets()[0].innerHTML),
              ).toString();
            },
          });
        },
      });
    });

    // Mouse parallax (subtle)
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(bgRef.current, { x, y, duration: 1.4, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Respect reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("h1 > span, p.text-xl, .cta-button", { opacity: 1, y: 0 });
      gsap.set(bgRef.current, { scale: 1 });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 isolate"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform"
          style={{
            backgroundImage: "url('img/home-hero.avif')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* Floating subtle icons (optional – remove if too much) */}
      <div className="absolute inset-0 -z-5 pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-16 h-16 text-blue-400 animate-float-slow">
          {/* Blueprint / crane icon – you can use lucide-react or heroicons */}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        {/* Add 2–3 more if desired */}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none mb-6">
            <span className="block">Engineering</span>
            <span className="block text-accent">Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed text-shadow-lg">
            Delivering sustainable infrastructure, innovative engineering
            solutions, and lasting value across global projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-16">
            <a
              href="/projects"
              className="cta-button group relative inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-secondary text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <span className="relative z-10">Explore Our Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </a>

            <a
              href="/contact"
              className="cta-button group relative inline-flex items-center justify-center px-10 py-5 border-2 border-secondary text-secondary hover:text-white font-semibold text-lg rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>

          {/* Trust stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {[
              { value: 120, label: "Projects Delivered" },
              { value: 28, label: "Countries Served" },
              { value: 450, label: "Satisfied Clients" },
              { value: 18, label: "Years of Excellence" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  ref={(el) => (countersRef.current[i] = el)}
                  className="text-4xl md:text-5xl font-bold text-secondary"
                  data-target={stat.value}
                >
                  0+
                </div>
                <p className="text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow opacity-70">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

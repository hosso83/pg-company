"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

export default function UvurLithiumIntro() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Hero
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.8, ease: "power3.out" },
      );
    }

    // Section animations
    const sections = document.querySelectorAll(".section-animate");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 75%" },
        },
      );
    });

    // Counters
    const counters = [
      { ref: statsRefs.current[0], target: 60.32, suffix: "%", decimals: 2 },
      {
        ref: statsRefs.current[1],
        target: 124.4,
        suffix: "M USD",
        decimals: 1,
      },
      { ref: statsRefs.current[2], target: 45, suffix: "M USD", decimals: 0 },
    ];

    counters.forEach(({ ref, target, suffix, decimals }) => {
      if (!ref) return;
      const counter = { value: 0 };

      gsap.fromTo(
        counter,
        { value: 0 },
        {
          value: target,
          duration: 2.5,
          ease: "power1.out",
          scrollTrigger: { trigger: ref, start: "top 80%" },
          onUpdate: () => {
            ref.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* NAVBAR */}
      <Header />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:4px_4px]"></div>
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{
            backgroundImage: `url('https://picsum.photos/id/1015/1920/1080')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/50 text-amber-400 text-xs font-medium mb-6">
            LITHIUM + RUBIDIUM • MONGOLIA • JORC PENDING
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-4">
            UVUR
            <br />
            PROJECT
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-10">
            32,480 t Li₂O + 10,640 t Rb • 60%+ IRR
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/50 text-lg px-10 py-7 rounded-full"
              asChild
            >
              <a href="#financials">View Economics</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white text-lg px-10 py-7 rounded-full hover:bg-white/10"
              asChild
            >
              <a href="#resources">Explore Resources</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <p className="text-xs tracking-[3px] mb-3 text-zinc-500">
            SCROLL TO DISCOVER
          </p>
          <div className="h-px w-8 bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="section-animate py-24 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="uppercase tracking-widest text-amber-500 text-sm mb-3">
              STRENGTHENING QUALITY
            </div>
            <h2 className="text-5xl font-semibold tracking-tight">
              Global &amp; Local Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-zinc-900 border-white/10 p-10">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">
                  SRK Consulting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300 text-lg">
                Globally recognized mining consultancy preparing the
                JORC-compliant resource estimation report for the Uvur Project.
                Ensures international credibility in geological modeling, data
                validation, and resource classification.
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-white/10 p-10">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">
                  German-Mongolian Institute for Resources and Technology (GMIT)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300 text-lg">
                Comprehensive Li and Rb ore processing study conducted in
                Germany. One-year research program supported by GIZ Mongolia.
                Detailed mineralogical investigations supporting beneficiation
                strategy and process optimization.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="section-animate py-24 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline px-6 py-2 bg-white/5 rounded-full text-sm mb-6">
              PRELIMINARY RESOURCE ESTIMATION
            </div>
            <h2 className="text-6xl py-6 font-semibold tracking-tighter">
              Ore Body 9 <p>(20% of exploration area)</p>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-zinc-950 border border-amber-500/20 rounded-3xl p-12 text-center">
              <p className="text-amber-400 text-sm tracking-widest mb-4">
                TOTAL RESOURCE
              </p>
              <div className="space-y-8">
                <div>
                  <p className="text-7xl font-bold text-white">32,480</p>
                  <p className="text-2xl text-zinc-400">tonnes Li₂O</p>
                </div>
                <div>
                  <p className="text-7xl font-bold text-white">10,640</p>
                  <p className="text-2xl text-zinc-400">tonnes Rb</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-amber-500/20 rounded-3xl p-12 text-center">
              <p className="text-amber-400 text-sm tracking-widest mb-4">
                MINEABLE RESOURCE
              </p>
              <div className="space-y-8">
                <div>
                  <p className="text-7xl font-bold text-white">13,990</p>
                  <p className="text-2xl text-zinc-400">tonnes Li₂O</p>
                </div>
                <div>
                  <p className="text-7xl font-bold text-white">4,600</p>
                  <p className="text-2xl text-zinc-400">tonnes Rb</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto text-zinc-400 text-lg">
            SRK Consulting finalizing JORC-compliant report — expected February
            2025
            <br />
            In-situ value at USD 17,000/t Li₂CO₃ + USD 84/g Rb ≈{" "}
            <span className="text-white font-semibold">USD 895.1 billion</span>
          </div>
        </div>
      </section>

      {/* LABORATORY RESULTS */}
      <section id="lab" className="section-animate py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-semibold tracking-tight mb-16">
            Laboratory Key Results
          </h2>

          {/* Elemental Composition */}
          <div className="mb-20">
            <h3 className="uppercase text-amber-400 text-sm tracking-widest mb-6">
              Elemental Composition of Li and Rb Ore
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 text-left font-medium text-zinc-400">
                      Element
                    </th>
                    <th className="py-4 text-center font-medium text-zinc-400">
                      ALS LAB (ppm)
                    </th>
                    <th className="py-4 text-center font-medium text-zinc-400">
                      Khanlab (ppm)
                    </th>
                    <th className="py-4 text-center font-medium text-zinc-400">
                      XRF NITON
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-zinc-300">
                  {[
                    ["F", ">20,000", "—", "—"],
                    ["Al %", "8.39", "—", "—"],
                    ["As", "26", "11", "28"],
                    ["Ba", "450", "188.6", "140"],
                    ["Ca %", "1.21", "1.18", "—"],
                    ["Fe %", "2.29", "2.26", "2.7633"],
                    ["Li", "6,590", "6,481", "—"],
                    ["Rb", "3,550", "3,136", "4,416"],
                  ].map(([el, als, khan, xrf]) => (
                    <tr key={el}>
                      <td className="py-4 font-medium">{el}</td>
                      <td className="py-4 text-center font-mono">{als}</td>
                      <td className="py-4 text-center font-mono">{khan}</td>
                      <td className="py-4 text-center font-mono">{xrf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Minerals */}
          <div>
            <h3 className="uppercase text-amber-400 text-sm tracking-widest mb-6">
              Lithium and Rubidium Bearing Minerals
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Lithium Minerals</CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left text-white py-3">Mineral</th>
                        <th className="text-left text-white py-3">Density</th>
                        <th className="text-left text-white py-3">Formula</th>
                        <th className="text-right text-white py-3">Li (%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-zinc-300">
                      <tr>
                        <td className="py-3">Spodumene</td>
                        <td>3.15</td>
                        <td>LiAl(Si₂O₆)</td>
                        <td className="text-right">3.85</td>
                      </tr>
                      <tr>
                        <td className="py-3">Petalite</td>
                        <td>2.39</td>
                        <td>LiAlSi₄O₁₀</td>
                        <td className="text-right">2.27</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Rubidium Mineral</CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left text-white py-3">Mineral</th>
                        <th className="text-left text-white py-3">Density</th>
                        <th className="text-left text-white py-3">Formula</th>
                        <th className="text-right text-white py-3">Rb (%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-zinc-300">
                      <tr>
                        <td className="py-3">Muscovite</td>
                        <td>2.83</td>
                        <td>KAl₃Si₃O₁₀(OH)₂</td>
                        <td className="text-right">1.7</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL MODEL */}
      <section id="financials" className="section-animate py-24 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tight">
              Conceptual Financial Model
            </h2>
            <p className="text-zinc-400 mt-3">
              10-year mine life • Conservative assumptions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-amber-500/30 text-center py-10">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-amber-400">
                  <span
                    ref={(el) => {
                      statsRefs.current[0] = el;
                    }}
                    className="counter"
                  >
                    0
                  </span>
                </CardTitle>
                <CardDescription className="text-xl text-white">
                  IRR
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black border-amber-500/30 text-center py-10">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-amber-400">
                  <span
                    ref={(el) => {
                      statsRefs.current[1] = el;
                    }}
                    className="counter"
                  >
                    0
                  </span>
                </CardTitle>
                <CardDescription className="text-xl text-white">
                  NPV @ 10%
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black border-amber-500/30 text-center py-10">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-amber-400">
                  <span
                    ref={(el) => {
                      statsRefs.current[2] = el;
                    }}
                    className="counter"
                  >
                    0
                  </span>
                </CardTitle>
                <CardDescription className="text-xl text-white">
                  CAPEX
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center text-zinc-400">
            <p className="text-lg">
              Li₂CO₃ production: 315,140 tonnes total
              <br />
              OPEX: USD 6,000/t • 100% debt financing • Rubidium revenue
              excluded
            </p>
            <p className="mt-8 text-xs">
              Payback ~1.7 years • Strong upside from Rb monetization &amp;
              resource expansion
            </p>
          </div>
        </div>
      </section>

      {/* UPSIDE */}
      <section className="section-animate py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-6xl font-semibold tracking-tighter mb-8">
            Investment Highlights &amp; Upside
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <p className="font-semibold">Strong early cash flow</p>
                  <p className="text-zinc-400">1.7-year payback</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📈</div>
                <div>
                  <p className="font-semibold">Conservative pricing</p>
                  <p className="text-zinc-400">
                    Year-1 Li₂CO₃ at USD 16,065/t escalating 5% annually
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <p className="font-semibold">Rubidium upside</p>
                  <p className="text-zinc-400">Currently excluded from model</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-semibold">JORC + expansion</p>
                  <p className="text-zinc-400">
                    SRK report Feb 2025 • Metallurgical optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 border-t border-white/10 bg-black">
        <div className="text-center">
          <p className="text-amber-400 text-sm tracking-widest mb-4">
            MONGOLIA’S NEXT MAJOR LITHIUM OPPORTUNITY
          </p>
          <h2 className="text-6xl font-bold tracking-tighter mb-10">
            Ready for strategic partnership
          </h2>
          <Button
            size="lg"
            className="text-xl px-16 py-8 rounded-full bg-amber-600 hover:bg-amber-500"
          >
            Contact for Full Data Room →
          </Button>
          <p className="mt-8 text-zinc-500">
            JORC report imminent • All permits in progress • Conceptual model
            complete
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

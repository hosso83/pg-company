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
import Separator from "@/components/ui/separator";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function ErdenesPowerIntro() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Hero entrance
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.8, ease: "power3.out" },
      );
    }

    // Scroll-triggered section animations
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
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Animated counters
    const counters = [
      { ref: statsRefs.current[0], target: 12.6, suffix: "%", decimals: 1 },
      { ref: statsRefs.current[1], target: 8.6, suffix: "M USD", decimals: 1 },
      { ref: statsRefs.current[2], target: 50, suffix: "M USD", decimals: 0 },
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
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            ref.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
          },
        },
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
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
            backgroundImage: `url('https://picsum.photos/id/1015/1920/1080')`, // Replace with your Jargalant Valley photo
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/50 text-teal-400 text-xs font-medium mb-6">
            45 MW PUMPED STORAGE • KHENTII PROVINCE
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-4">
            JARGALANT
            <br />
            PUMPED STORAGE
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-10">
            Reliable dispatchable power for Mongolia’s Central Grid
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-400 text-black hover:bg-white/90 text-lg px-10 py-7 rounded-full"
              asChild
            >
              <a href="#financials">View Financials</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white text-lg px-10 py-7 rounded-full hover:bg-white/60"
              asChild
            >
              <a href="#location">Explore Location</a>
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

      {/* COMPANY OVERVIEW */}
      <section
        id="overview"
        className="section-animate py-24 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="uppercase tracking-widest text-teal-500 text-sm mb-3">
                ERDENES POWER LLC
              </div>
              <h2 className="text-5xl font-semibold tracking-tight mb-8">
                A project-specific vehicle with zero liabilities
              </h2>
              <div className="prose prose-invert max-w-none text-lg text-zinc-300">
                <p>
                  Erdenes Power LLC was formed solely for the development of the
                  45 MW Jargalant Pumped Storage Project. The company is 100%
                  owned by two individuals with deep expertise in power industry
                  engineering and finance. Development is fully funded by the
                  founders — no external debt or liabilities at company level.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-10 border border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-zinc-500">OWNERSHIP</p>
                  <p className="text-4xl font-semibold mt-2">100% Private</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">LIABILITIES</p>
                  <p className="text-4xl font-semibold mt-2 text-teal-400">
                    ZERO
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">LOCATION</p>
                  <p className="text-4xl font-semibold mt-2">
                    Jargalant Valley
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">CAPACITY</p>
                  <p className="text-4xl font-semibold mt-2">45 MW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="section-animate py-24 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <div className="uppercase text-teal-500 tracking-widest text-sm mb-4">
                PROJECT SITE
              </div>
              <h2 className="text-5xl font-semibold tracking-tight mb-6">
                Jargalant Valley,
                <br />
                Tsenkhermandal Soum,
                <br />
                Khentii Province
              </h2>
              <div className="space-y-6 text-lg text-zinc-300">
                <p>
                  152 km east of Ulaanbaatar • 12 km east of Baganuur Town • 6.7
                  km north of Kherlen River Bridge
                </p>
                <p>
                  The site lies at the very beginning of the Kherlen River
                  (1,200+ km long). The lower reservoir uses &lt;1% of the
                  river’s annual discharge. No resettlement required. Land
                  secured from local authorities. Interconnection to Baganuur
                  220/110/10 kV substation (15 km away).
                </p>
              </div>
            </div>

            {/* MAP IMAGE */}
            <div className="flex-1 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://picsum.photos/id/1016/800/600"
                alt="Project Location Map - Jargalant Valley &amp; Kherlen River"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 text-sm">
                <div className="bg-black/70 px-5 py-3 rounded-2xl backdrop-blur">
                  📍 152 km E of Ulaanbaatar
                  <br />
                  15 km to Baganuur Substation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RATIONALE */}
      <section id="rationale" className="section-animate py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex px-6 py-2 bg-white/5 rounded-full text-sm mb-6">
              WHY THIS PROJECT?
            </div>
            <h2 className="text-6xl font-semibold tracking-tighter">
              Replacing Russian imports with Mongolian dispatchable power
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-teal-400">Grid Reality</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-400 text-lg">
                Central Grid is 76% of national generation, 95% of demand.
                Almost entirely aging coal-fired plants. Only flexibility = 350
                MW import from Russia (maxed out).
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-teal-400">Renewables Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-400 text-lg">
                Solar + Wind added in last decade but provide zero regime
                regulation. The 45 MW pumped storage delivers reliable peak
                power and stores off-peak coal excess.
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-teal-400">
                  Economic &amp; Strategic Win
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-400 text-lg">
                Uses cheap off-peak export power to pump, sells at import price.
                Reduces transmission losses to south-east Mongolia. Government
                blocked classic hydro on Russian-bound rivers — this is fully
                domestic.
              </CardContent>
            </Card>
          </div>

          {/* POWER DEMAND CHART */}
          <div className="mt-20">
            <h3 className="text-center text-zinc-400 mb-6">
              Central Grid Power Demand (mn kWh)
            </h3>
            <div className="flex items-end justify-center gap-3 max-w-4xl mx-auto h-64">
              {[5219, 5706, 6014, 6099, 6992, 7780].map((value, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 flex-1"
                >
                  <div
                    className="w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t transition-all duration-1000"
                    style={{ height: `${(value / 7780) * 100}%` }}
                  />
                  <p className="text-xs text-zinc-500">{2017 + i}</p>
                  <p className="font-mono text-xs">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section id="technical" className="section-animate py-24 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-5xl font-semibold tracking-tight mb-8">
                45 MW Pumped Storage Facility
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Gross Head", value: "138 m" },
                  { label: "Water Volume", value: "1.8 million m³" },
                  { label: "Charge Time", value: "6.75 hours" },
                  { label: "Discharge Time", value: "8 hours" },
                  { label: "Penstock Length", value: "580 m" },
                  { label: "Turbines", value: "3 × 15 MW Francis reversible" },
                ].map((item, idx) => (
                  <Card key={idx} className="border-white/10 bg-zinc-950">
                    <CardContent className="py-3">
                      <p className="text-teal-400 text-sm">{item.label}</p>
                      <p className="text-4xl text-zinc-400 font-semibold mt-1 tracking-tight">
                        {item.value}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FACILITY DIAGRAM */}
            <div className="flex-1 relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://picsum.photos/id/1018/800/620"
                  alt="Pumped Storage Facility Layout - Lower & Upper Reservoirs, Penstock, Powerhouse"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zinc-950 border border-white/10 p-6 rounded-3xl max-w-[280px]">
                <p className="text-xs uppercase tracking-widest mb-3">
                  Efficiency
                </p>
                <p className="text-6xl font-bold text-teal-400">80%+</p>
                <p className="text-zinc-400 mt-2">
                  Round-trip efficiency of reversible Francis turbines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERMITS &amp; PPA */}
      <section className="section-animate py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto w-16 h-px bg-teal-500 mb-8" />
          <h2 className="text-5xl font-semibold tracking-tight mb-6">
            All permits secured • 15-year PPA signed
          </h2>
          <p className="text-2xl text-zinc-300 max-w-2xl mx-auto">
            Construction license, tariffs, land acquisition, environmental
            impact assessment, river usage rights — all approved by ERC,
            Ministry of Energy, and local authorities (2021–2022).
          </p>
          <div className="mt-12 inline-flex items-center gap-4 bg-zinc-900 px-8 py-4 rounded-2xl border border-white/10">
            <div className="text-left">
              <p className="text-teal-400 text-sm">PURCHASE FROM GRID</p>
              <p className="font-mono text-2xl">
                138.54 mn kWh/yr @ 0.0252 USD/kWh
              </p>
            </div>
            <Separator orientation="vertical" className="h-12" />
            <div className="text-left">
              <p className="text-teal-400 text-sm">SUPPLY TO GRID</p>
              <p className="font-mono text-2xl">
                110.83 mn kWh/yr @ 0.101 USD/kWh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL INDICATORS */}
      <section id="financials" className="section-animate py-24 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tight">
              Strong Economics
            </h2>
            <p className="text-zinc-400 mt-3">Base case at 70% debt leverage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-teal-500/30 text-center py-10">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-teal-400">
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

            <Card className="bg-black border-teal-500/30 text-center py-10">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-teal-400">
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
                  NPV @ 8%
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black border-teal-500/30 text-center py-10">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-teal-400">
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

          {/* CAPEX BREAKDOWN */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="uppercase text-xs tracking-[2px] text-zinc-500 mb-8 text-center">
              CAPEX BREAKDOWN (USD millions)
            </h3>
            <div className="space-y-5">
              {[
                ["Lower Reservoir", "10.5"],
                ["Upper Reservoir", "3.8"],
                ["Penstock", "11.7"],
                ["Plant", "5.5"],
                ["Pump Turbine", "14.5"],
                ["OHL + Substation", "3.9"],
              ].map(([item, cost]) => (
                <div
                  key={item}
                  className="flex justify-between items-center border-b border-white/10 pb-5"
                >
                  <p className="text-lg">{item}</p>
                  <p className="font-mono text-2xl text-teal-400">{cost}</p>
                </div>
              ))}
              <div className="flex justify-between text-xl font-semibold pt-4">
                <p>Total</p>
                <p className="text-teal-400">50.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALLED CAPACITY PIE */}
      <div className="bg-zinc-950 py-16 border-t border-white/10">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-zinc-400 mb-8">
            Central Grid Installed Capacity (2022)
          </h3>
          <div
            className="relative mx-auto w-72 h-72 rounded-full"
            style={{
              background: `conic-gradient(#10b981 0deg 301deg, #3b82f6 301deg 337deg, #22c55e 337deg 360deg)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 rounded-full">
              <div className="text-center">
                <p className="text-6xl font-bold">1,478 MW</p>
                <p className="text-sm text-zinc-500">Total</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded" />
              Coal 84%
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded" />
              Wind 10%
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded" />
              Solar 6%
            </div>
          </div>
        </div>
      </div>

      {/* OPPORTUNITIES */}
      <section id="opportunities" className="section-animate py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-semibold tracking-tighter">
              Ready for investment &amp; expansion
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-zinc-900 border-white/10 p-10">
              <h3 className="text-2xl font-medium mb-6">Government Support</h3>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li>• Zero customs on renewable equipment</li>
                <li>
                  • Income tax holiday 3 years + 50% reduction next 3 years
                </li>
                <li>• PPA open to investor-friendly amendments</li>
              </ul>
            </Card>

            <Card className="bg-zinc-900 border-white/10 p-10">
              <h3 className="text-2xl font-medium mb-6">
                Strategic Advantages
              </h3>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li>• Russian import tariffs rising 10–30% annually</li>
                <li>• Import line at technical maximum</li>
                <li>
                  • Site allows doubling capacity (90 MW) with minimal new
                  permits
                </li>
                <li>
                  • Perfect location to reduce south-east transmission losses
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 border-t border-white/10 bg-black">
        <div className="text-center">
          <p className="text-teal-400 text-sm tracking-widest mb-4">
            READY TO INVEST IN MONGOLIA’S ENERGY INDEPENDENCE?
          </p>
          <h2 className="text-6xl font-bold tracking-tighter mb-10">
            Let’s build Mongolia’s first modern pumped storage together
          </h2>
          <Button
            size="lg"
            className="text-xl px-16 py-8 rounded-full bg-teal-500 hover:bg-teal-400"
          >
            Schedule Investor Call →
          </Button>
          <p className="mt-8 text-zinc-500">
            Project fully permitted • PPA signed • Construction-ready
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

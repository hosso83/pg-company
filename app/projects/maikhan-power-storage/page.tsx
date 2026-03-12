"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ProjectMaikhan() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.8, ease: "power3.out" },
      );
    }

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
      { ref: statsRefs.current[0], target: 10.84, suffix: "%", decimals: 2 }, // IRR
      { ref: statsRefs.current[1], target: 55.6, suffix: "M USD", decimals: 1 }, // NPV
      {
        ref: statsRefs.current[2],
        target: 111.2,
        suffix: "M USD",
        decimals: 1,
      }, // CAPEX
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-teal-950 text-white font-sans">
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:4px_4px]"></div>
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{
              backgroundImage: `url('https://picsum.photos/id/1015/1920/1080')`, // Replace with your Maikhan valley render
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 text-emerald-400 text-sm font-medium mb-8">
              75 MW → 100 MW UPGRADE • 37 KM FROM ULAANBAATAR
            </div>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              PROJECT
              <br />
              MAIKHAN
            </h1>
            <p className="text-3xl text-emerald-100 mb-4">
              75–100 MW Pumped Storage Hydropower
            </p>
            <p className="text-2xl text-teal-300 max-w-2xl mx-auto">
              Green Energy &amp; Data Ecosystem • Phase 1–4
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-lg px-10 py-7 rounded-full"
                asChild
              >
                <a href="#financials">View $111.2M Opportunity</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 bg-white/10 text-white text-lg px-10 py-7 rounded-full hover:bg-white/60"
                asChild
              >
                <a href="#phases">Full 4-Phase Roadmap</a>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <p className="text-xs tracking-[3px] mb-3 text-teal-500">
              SCROLL TO EXPLORE
            </p>
            <div className="h-px w-8 bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section
          id="executive"
          className="section-animate py-24 border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline text-emerald-500 text-sm tracking-widest mb-4">
                EXECUTIVE SUMMARY
              </div>
              <h2 className="text-6xl font-semibold tracking-tight">
                Grid-stability infrastructure built to balance Mongolia’s
                Central Grid immediately
              </h2>
              <p className="mt-6 text-xl text-teal-300">
                A vertically integrated Green Energy Ecosystem 37 km from
                Ulaanbaatar.
                <br />
                Phase 1: Shovel-ready 75 MW PSH with clear 100 MW upgrade
                pathway.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="bg-teal-900 border-emerald-500/20 p-10">
                <CardTitle className="text-emerald-400 mb-6">Seeking</CardTitle>
                <div className="text-7xl font-bold">$111.2M</div>
                <p className="text-teal-400 mt-3">
                  Phase 1 Core PSH Infrastructure
                </p>
                <p className="text-sm text-teal-500 mt-8">
                  10% equity / 90% debt • 15-year loan @ 6%
                </p>
              </Card>

              <Card className="bg-teal-900 border-emerald-500/20 p-10">
                <CardTitle className="text-emerald-400 mb-6">
                  Sponsor Case Returns
                </CardTitle>
                <div className="space-y-6">
                  <div>
                    <span className="text-5xl font-bold text-emerald-400">
                      10.84%
                    </span>
                    <span className="text-teal-400 ml-3">IRR (WACC)</span>
                  </div>
                  <div>
                    <span className="text-5xl font-bold text-emerald-400">
                      $55.6M
                    </span>
                    <span className="text-teal-400 ml-3">NPV</span>
                  </div>
                  <div>
                    <span className="text-5xl font-bold text-emerald-400">
                      8.2 years
                    </span>
                    <span className="text-teal-400 ml-3">
                      Discounted Payback
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* PHASE 1 */}
        <section id="phases" className="section-animate py-24 bg-teal-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold tracking-tight">
                Phase 1 • Core PSH Infrastructure
              </h2>
              <p className="text-emerald-400 mt-4">
                75 MW (3 × 25 MW) — Fully Permitted &amp; Shovel-Ready
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Capacity", value: "75 MW (3 × 25 MW)" },
                {
                  title: "Grid Connection",
                  value: "25 km 220 kV line to Ulaanbaatar substation",
                },
                {
                  title: "Approvals",
                  value:
                    "Feasibility, EIA, Land, Construction License, Tariffs, PPA",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="bg-teal-950 border-emerald-500/20 p-8 text-center"
                >
                  <CardTitle className="text-emerald-400 mb-4">
                    {item.title}
                  </CardTitle>
                  <p className="text-2xl text-teal-400 leading-tight">
                    {item.value}
                  </p>
                </Card>
              ))}
            </div>

            {/* 100 MW UPGRADE */}
            <div className="mt-20 max-w-4xl mx-auto bg-teal-950 border border-emerald-500/30 rounded-3xl p-12">
              <div className="inline-flex px-5 py-1 rounded-full bg-emerald-900/50 text-emerald-400 text-sm mb-6">
                100 MW UPGRADE PATHWAY INCLUDED
              </div>
              <h3 className="text-3xl font-semibold mb-6">
                Immediate upgrade to 100 MW post-financial close
              </h3>
              <p className="text-teal-300">
                Current design basis supports 103 MW pumping load. Upgrade
                requires only electromechanical optimisation (larger units +
                electrical equipment) with minimal civil changes. Option
                preserved in procurement specs.
              </p>
            </div>
          </div>
        </section>

        {/* FULL ROADMAP */}
        <section className="section-animate py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-5xl font-semibold tracking-tight text-center mb-16">
              4-Phase Green Energy &amp; Data Ecosystem
            </h2>

            <div className="space-y-20 max-w-4xl mx-auto">
              {[
                {
                  phase: "PHASE 2",
                  title: "Hybrid Renewable Integration",
                  desc: "Wind 15–20 MW • Solar ~30 MW • BESS 5–10 MW. PSH smooths intermittency and enables green certification.",
                },
                {
                  phase: "PHASE 3",
                  title: "PSH Scale-up to 200 MW",
                  desc: "Additional penstocks, larger turbines, reservoir expansion to 2.5–3.0 million m³ (lower) + 1.0 million m³ (upper).",
                },
                {
                  phase: "PHASE 4",
                  title: "Tier-rated Green Data Centre",
                  desc: "Anchored by stable, low-carbon power from the integrated ecosystem. Competitive cooling advantage in Mongolia’s climate.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-12 items-start">
                  <div className="w-28 shrink-0 pt-1">
                    <div className="text-emerald-500 font-mono text-2xl font-bold tracking-tighter">
                      {item.phase}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xl text-teal-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINANCIAL OVERVIEW */}
        <section id="financials" className="section-animate py-24 bg-teal-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold tracking-tight">
                Phase 1 Financial Overview
              </h2>
              <p className="text-teal-400 mt-4">
                $111.2 million total ask • 10% equity / 90% debt
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="bg-black border-emerald-500/30 py-10 text-center">
                <CardHeader>
                  <CardTitle className="text-7xl font-bold text-emerald-400">
                    <span
                      ref={(el) => {
                        statsRefs.current[0] = el;
                      }}
                    >
                      0
                    </span>
                  </CardTitle>
                  <p className="text-xl text-white">IRR (WACC)</p>
                </CardHeader>
              </Card>
              <Card className="bg-black border-emerald-500/30 py-10 text-center">
                <CardHeader>
                  <CardTitle className="text-7xl font-bold text-emerald-400">
                    <span
                      ref={(el) => {
                        statsRefs.current[1] = el;
                      }}
                    >
                      0
                    </span>
                  </CardTitle>
                  <p className="text-xl text-white">NPV</p>
                </CardHeader>
              </Card>
              <Card className="bg-black border-emerald-500/30 py-10 text-center">
                <CardHeader>
                  <CardTitle className="text-7xl font-bold text-emerald-400">
                    <span
                      ref={(el) => {
                        statsRefs.current[2] = el;
                      }}
                    >
                      0
                    </span>
                  </CardTitle>
                  <p className="text-xl text-white">Phase 1 CAPEX</p>
                </CardHeader>
              </Card>
            </div>

            {/* Sources & Uses Table */}
            <div className="max-w-4xl mx-auto bg-teal-950 border border-white/10 rounded-3xl overflow-hidden">
              <div className="bg-emerald-950 px-10 py-6">
                <p className="uppercase text-xs tracking-widest text-emerald-400">
                  Sources &amp; Uses of Funds — Phase 1
                </p>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  ["Construction (Civil works, dams, reservoirs)", "82.00"],
                  ["Equipment (Turbines, pumps, electro-mechanical)", "14.96"],
                  ["Buildings (Powerhouse + technical)", "5.14"],
                  ["Housing (Worker + offices)", "3.00"],
                  ["EPC Subtotal", "105.10"],
                  ["Project Costs (Implementation &amp; management)", "4.00"],
                  ["Supervision (Monworld Ltd)", "2.10"],
                  ["TOTAL ASK", "111.20"],
                ].map(([desc, cost], i) => (
                  <div
                    key={i}
                    className="flex justify-between px-10 py-6 text-lg"
                  >
                    <span>{desc}</span>
                    <span className="font-mono text-emerald-400">${cost}M</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTION PLAN */}
        <section className="section-animate py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-5xl font-semibold tracking-tight text-center mb-16">
              Execution Plan &amp; Procurement Readiness
            </h2>

            <div className="max-w-3xl mx-auto text-teal-300 space-y-8 text-lg">
              <p>
                Owner’s Engineer-led process. All long-lead items will include
                100 MW option provisions.
              </p>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="font-semibold text-emerald-400 mb-4">
                    Immediate Next Steps
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li>• Mobilise Owner’s Engineer</li>
                    <li>• Finalise detailed design packages</li>
                    <li>• Launch RFQ for long-lead equipment</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-emerald-400 mb-4">
                    Indicative Long-Lead Windows
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      Turbine-pump units: Award Month 6 • Delivery 12–18 months
                    </li>
                    <li>Transformers: Award Month 7 • Delivery 9–12 months</li>
                    <li>HV switchgear: Award Month 6 • Delivery 6–9 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 border-t border-white/10 bg-black">
          <div className="text-center">
            <p className="text-emerald-400 tracking-widest text-sm mb-4">
              SHOVEL-READY • FULLY PERMITTED • 100 MW UPGRADE INCLUDED
            </p>
            <h2 className="text-6xl font-bold tracking-tighter mb-10">
              Ready to deliver Mongolia’s next grid-stability asset
            </h2>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-xl px-16 py-8 rounded-full"
              asChild
            >
              <a href="mailto:admin@monworldgroup.com">
                Contact Monworld Ltd – Financial Arranger
              </a>
            </Button>
            <p className="mt-8 text-teal-500">
              +44 7769 398914 • admin@monworldgroup.com
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

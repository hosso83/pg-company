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

export default function AdvanceCreditIntro() {
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

    // Counters for financials
    const counters = [
      { ref: statsRefs.current[0], target: 13.9, suffix: "%", decimals: 1 }, // ROE
      {
        ref: statsRefs.current[1],
        target: 1.279,
        suffix: "M USD",
        decimals: 3,
      }, // Assets
      { ref: statsRefs.current[2], target: 2, suffix: "M USD", decimals: 0 }, // Equity raise
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
    <div className="min-h-screen bg-teal-950 text-white font-sans">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-950/50 text-amber-400 text-xs font-medium mb-6">
            ASIC + AUSTRAC REGISTERED • MONGOLIA HQ • AUSTRALIA FOCUS
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            ADVANCE
            <br />
            CREDIT
          </h1>
          <p className="text-3xl text-teal-200 mb-12 max-w-2xl mx-auto">
            Becoming the diaspora financial platform from Australia.
            <br />
            Instant remittance → apartment leasing → high-yield deposits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/50 text-lg px-12 py-7 rounded-full"
              asChild
            >
              <a href="#traction">See Live Traction</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white  text-white text-lg px-12 py-7 rounded-full hover:bg-white/10"
              asChild
            >
              <a href="#partnership">Investment Opportunity</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <p className="text-xs tracking-[3px] mb-3 text-teal-500">
            SCROLL FOR THE JOURNEY
          </p>
          <div className="h-px w-8 bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </section>

      {/* PROBLEM */}
      <section
        id="problem"
        className="section-animate py-24 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="uppercase tracking-widest text-orange-500 text-sm mb-4">
                THE PROBLEM
              </div>
              <h2 className="text-6xl font-semibold tracking-tight mb-8">
                Demand in Australia is surging in an immigrant nation
              </h2>
              <div className="space-y-8 text-teal-300 text-lg">
                <div>
                  <p className="font-semibold text-white">
                    Record demand base, today
                  </p>
                  <p>
                    31.5% of Australia’s population (8.6m people) are immigrants
                    and visa holders. 2024 retail outbounds hit $12.0B — an
                    all-time high.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Remittance from Australia are still costly
                  </p>
                  <p>
                    Global average 6.5% in 2025. Banks average 14.6%. Hidden FX
                    margins + confusing pricing.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Choice is constrained in niche corridors
                  </p>
                  <p>
                    RBA notes digital MTOs ignore smaller corridors. Slow
                    correspondent banking. Language barriers, compliance
                    friction, low ticket sizes, no local trust.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://picsum.photos/id/1016/800/620"
                alt="Australia Map with flag"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="section-animate py-24 bg-teal-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tight">
              Fast rails, fair fees, fully compliant — ready to deploy.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Fast rails",
                desc: "Simple products: Remittance, Apartment leasing, Deposit. Designed under one rule: Fast and Compliant.",
              },
              {
                num: "02",
                title: "Affordable",
                desc: "Banks take days and 6-16% fees. We deliver in minutes for under a single dollar.",
              },
              {
                num: "03",
                title: "Well positioned",
                desc: "ASIC + AUSTRAC registered remittance provider in Australia. Headquartered in Mongolia.",
              },
            ].map((item) => (
              <Card key={item.num} className="bg-teal-950 border-orange-500/20">
                <CardHeader>
                  <div className="text-5xl font-black text-orange-500 mb-2">
                    {item.num}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-teal-300">{item.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="section-animate py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-semibold tracking-tight text-center mb-16">
            Minutes, not days. About $1 fees.
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Remittance */}
            <Card className="bg-teal-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-orange-400">
                  01 Remittance (Live)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-teal-300">
                <p>Mongolian nationals in Australia (valid visa holders)</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>KYC + AUSTRAC-aligned screening</li>
                  <li>Self-serve in-app transfers</li>
                  <li>Real-time status & receipts</li>
                  <li>Transparent FX + in-language support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Leasing */}
            <Card className="bg-teal-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-orange-400">
                  02 Leasing (Next)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-teal-300">
                <p>
                  AU-based Mongolians leasing apartments in Mongolia (path to
                  ownership)
                </p>
                <p className="text-sm">Asset-backed • Mongolia underwriting</p>
                <p className="font-mono text-lg">
                  48–60 months • ~2% monthly rate
                </p>
              </CardContent>
            </Card>

            {/* Deposit */}
            <Card className="bg-teal-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-orange-400">
                  03 Deposit & Wallet (Post-license)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-teal-300">
                <p>Recurring AUD deposits targeting high single-digit yields</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Auto-schedules + real-time balance</li>
                  <li>Instant remittance toggle</li>
                  <li>Monthly interest payout</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-teal-900 border border-white/10 rounded-3xl p-8 max-w-md">
              <img
                src="https://picsum.photos/id/201/400/700"
                alt="Advance Credit App Mockup"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section id="traction" className="section-animate py-24 bg-teal-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-semibold tracking-tight">
              Launch-ready and tracking from day one
            </h2>
            <p className="text-teal-400 mt-3">Speed • Reliability • Adoption</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-lg">
              <div>
                <p className="font-semibold">App Store & Google Play</p>
                <p>Approved Dec 2025 • Soft-launch test installs complete</p>
              </div>
              <div>
                <p className="font-semibold">Rails proven</p>
                <p>
                  100+ internal tests (3 min landing) • 25 Dec 2025 launch •
                  100,000 AUD railed in ~100 transactions
                </p>
              </div>
              <div>
                <p className="font-semibold">Compliance live</p>
                <p>
                  AUSTRAC registered 27 Aug 2025 • Jade ThirdEye monitoring • 0
                  findings
                </p>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="App Store"
                  className="h-10"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  className="h-10"
                />
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-teal-950 rounded-3xl overflow-hidden border border-orange-500/30">
                  <img
                    src="https://picsum.photos/id/180/400/500"
                    alt="Remittance App Screen"
                    className="w-full"
                  />
                </div>
                <div className="bg-teal-950 rounded-3xl overflow-hidden border border-orange-500/30 mt-12">
                  <img
                    src="https://picsum.photos/id/201/400/500"
                    alt="Leasing App Screen"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section-animate py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-7xl font-black tracking-tighter mb-16">
            5 Year Road Map
          </h2>
          <div className="space-y-10 text-left max-w-2xl mx-auto">
            {[
              [
                "2025",
                "FIRST MONGOLIAN NBFI",
                "Acquired Australian remittance license with operational branch",
              ],
              [
                "2026",
                "FULL POTENTIAL",
                "Raising $10M USD • Acquiring deposit license from FRC",
              ],
              [
                "2027",
                "DIASPORA FINANCIAL PLATFORM",
                "Remittance + Real estate leasing + Deposits",
              ],
              [
                "2028",
                "HELLO SINGAPORE",
                "Structuring holding company for tax & pre-IPO",
              ],
              [
                "2029",
                "GLOBAL PARTNERSHIP",
                "Partnering with world’s best remittance providers",
              ],
              ["2030", "IPO-ready", "Governance & reporting standards met"],
            ].map(([year, title, desc]) => (
              <div key={year} className="flex gap-8 items-start">
                <div className="w-16 text-orange-400 font-mono text-4xl font-bold shrink-0">
                  {year}
                </div>
                <div>
                  <p className="font-semibold text-xl">{title}</p>
                  <p className="text-teal-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      {/* <section className="section-animate py-24 bg-teal-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-semibold tracking-tight text-center mb-16">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {/* Placeholder portraits — replace with real headshots when available }
            {[
              { name: "Khulan.D", role: "Chairwoman" },
              { name: "Zolbadrahk.E", role: "Board Director" },
              { name: "Sanchir.M", role: "Board Director" },
              { name: "Enkhbat.Ch", role: "Independent Director" },
              { name: "Tulga.S", role: "Independent Director" },
              { name: "Sugarbayar.S", role: "CEO" },
              { name: "Anand.E", role: "Deputy CEO" },
              { name: "Tuvshinzul.I", role: "CBO" },
              { name: "Tsogtguyn.N", role: "Australian Office" },
            ].map((person, i) => (
              <Card
                key={i}
                className="bg-teal-950 border-white/10 overflow-hidden"
              >
                <div className="h-64 bg-teal-800 flex items-center justify-center">
                  <span className="text-6xl text-teal-700">👤</span>
                </div>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-xs text-orange-400">{person.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FINANCIALS */}
      <section id="financials" className="section-animate py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tight">
              Profitable lender base powering our fintech rollout
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-teal-900 rounded-3xl p-10">
                <h3 className="text-orange-400 mb-6">
                  Asset Size Growth (USD ’000)
                </h3>
                <div className="h-80 flex items-end gap-2">
                  {[
                    287, 286, 289, 292, 292, 979, 1084, 1107, 1204, 1236, 1175,
                    1212, 1279,
                  ].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end">
                      <div
                        className="bg-orange-500 rounded-t w-full"
                        style={{ height: `${(v / 1279) * 100}%` }}
                      />
                      <p className="text-[10px] text-center mt-2 text-teal-500">
                        {2018 + i}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-6xl font-bold text-orange-400">
                  <span
                    ref={(el) => {
                      statsRefs.current[1] = el;
                    }}
                    className="counter"
                  >
                    0
                  </span>
                </p>
                <p className="text-xl">Assets (HY-2025)</p>
                <p className="text-sm text-teal-400">
                  Loan book 82% of assets • CAR 65% • Liquidity 22%
                </p>
              </div>
              <div>
                <p className="text-6xl font-bold text-orange-400">
                  <span
                    ref={(el) => {
                      statsRefs.current[0] = el;
                    }}
                    className="counter"
                  >
                    0
                  </span>
                </p>
                <p className="text-xl">ROE (FY-2024)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOAN PORTFOLIO */}
      <section className="section-animate py-24 bg-teal-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-semibold tracking-tight text-center mb-12">
            Performing loan book — underwriting we reuse for diaspora leasing
          </h2>
          <div className="text-center text-7xl font-bold text-orange-400 mb-8">
            1.0M USD
          </div>
          <p className="text-center text-teal-400">
            300+ clients • NPL 2.5% • Write-offs 0%
          </p>
        </div>
      </section>

      {/* PARTNERSHIP & RAISE */}
      <section id="partnership" className="section-animate py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-6xl font-semibold tracking-tighter text-center mb-16">
            Partnership Opportunities
          </h2>

          <div className="bg-teal-900 rounded-3xl p-12">
            <div className="text-center mb-10">
              <p className="uppercase text-xs tracking-widest text-orange-400">
                We are raising
              </p>
              <p className="text-5xl font-semibold">
                $2M equity + $8M senior secured credit facility
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-teal-950 border-orange-500/30">
                <CardHeader className="bg-orange-500/10 py-6">
                  <CardTitle>Equity</CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                  <p className="text-lg">
                    Max 20% common equity stake for a total investment of{" "}
                    <span className="font-bold">$500,000 USD</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-teal-950 border-orange-500/30">
                <CardHeader className="bg-orange-500/10 py-6">
                  <CardTitle>Credit Facility</CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                  <p className="text-lg">
                    US$8M senior secured, committed facility (SPV/warehouse) to
                    scale the diaspora leasing book.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* USE OF FUNDS */}
      <section className="section-animate py-24 bg-teal-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-5xl font-semibold tracking-tight text-center mb-12">
            Use of Funds
          </h2>
          <div className="space-y-6">
            {[
              ["Go-to-Market & Partnerships", "US$100–200k"],
              ["Product & Engineering", "US$500k"],
              ["Diaspora Leasing Pilot Build & Ops", "US$1,000k"],
              ["Deposit-License Preparation", "US$100–200k"],
            ].map(([item, amount]) => (
              <div
                key={item}
                className="flex justify-between items-center border-b border-white/10 pb-6"
              >
                <p className="text-lg">{item}</p>
                <p className="font-mono text-2xl text-orange-400">{amount}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-teal-400 max-w-md mx-auto">
            This US$2M equity, together with existing capital, meets Mongolia’s
            10 bn MNT regulatory capital threshold for the deposit license.
          </p>
        </div>
      </section>

      {/* CONTACTS */}
      {/* <section className="py-32 bg-black border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-6xl font-bold tracking-tighter mb-16">
            Contacts
          </h2>

          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div>
              <p className="uppercase text-orange-400 text-sm mb-4">
                Investor Relations
              </p>
              <p className="font-semibold">Anand.E – Deputy CEO</p>
              <p>Mobile: +976-80111225</p>
              <p>anand@advance.mn</p>
            </div>
            <div>
              <p className="uppercase text-orange-400 text-sm mb-4">
                Business Relations
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-medium">Mongolian Office</p>
                  <p>Tel: +976-72022020</p>
                  <p>office@advance.mn</p>
                </div>
                <div>
                  <p className="font-medium">Australian Office</p>
                  <p>Mobile: +61-0421777616</p>
                  <p>exchange@advance.mn</p>
                </div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-20 bg-orange-600 hover:bg-orange-500 text-xl px-16 py-8 rounded-full"
          >
            Schedule a Call with the Team →
          </Button>
        </div>
      </section> */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

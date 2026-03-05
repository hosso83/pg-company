// app/maikhan/page.tsx
// Next.js (App Router) + Tailwind + shadcn/ui
// Drop into: /app/maikhan/page.tsx
// Requires shadcn components: button, card
// Optional (nice): scroll-area

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { SectionCTA } from "@/components/section-cta";
import { ArrowLeft, MapPin, Zap, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type Stat = { label: string; value: string; note?: string };

const heroStats: Stat[] = [
  { label: "Installed capacity", value: "75 MW", note: "Expandable to 150 MW" },
  {
    label: "Total investment",
    value: "USD 135.1M",
    note: "Equity 10% / Debt 90%",
  },
  {
    label: "Annual generation",
    value: "~213 GWh",
    note: "Peak-shaving operating mode",
  },
  {
    label: "LCOE (WACC 10.84%)",
    value: "11.92 ¢/kWh",
    note: "Equalized tariff estimate",
  },
];

const techParams: { k: string; v: string }[] = [
  { k: "Upper reservoir volume", v: "1.092 million m³" },
  { k: "Lower reservoir volume", v: "1.408 million m³" },
  { k: "Net head", v: "265 m" },
  { k: "Flow rate at full capacity", v: "34 m³/s" },
  { k: "Hydraulic pipeline length", v: "1,000 m" },
  { k: "Generating cycle", v: "7-8 hours" },
  { k: "Pumping cycle", v: "7-8 hours" },
  { k: "Units", v: "3-25 MW reversible turbine-generators" },
];

const grid: { title: string; body: string }[] = [
  {
    title: "Connection concept",
    body: "Connect via a 220 kV transmission line to the Ulaanbaatar 35/110/220 kV substation (~25 km northwest).",
  },
  {
    title: "New infrastructure",
    body: "New ~25 km 220 kV overhead line from the pumped-storage station to the Ulaanbaatar substation.",
  },
  {
    title: "On-site substation",
    body: "220/11 kV substation with 2Ã—63 MVA transformers operating in parallel with the grid.",
  },
];

const permits: { title: string; items: string[] }[] = [
  {
    title: "Approved / obtained",
    items: [
      "Feasibility study approved by the Ministry of Energy (Science & Technology Council).",
      "Land possession order approved by the Mayor / Land Use Authority (upper & lower reservoirs).",
      "Grid operating regime calculation & assessment completed by the National Dispatching Center.",
      "Construction license approved.",
      "Tariffs approved by the Energy Regulatory Commission (ERC).",
      "Environmental Impact Assessment (general + detailed) approved by the Ministry of Environment.",
    ],
  },
  {
    title: "In progress",
    items: [
      "Power Purchase Agreement (PPA) is in final processing stages with relevant authorities.",
    ],
  },
];

const financials: { k: string; v: string; note?: string }[] = [
  { k: "NPV", v: "USD 55.6M", note: "At 6% discount rate" },
  { k: "Payback (discounted)", v: "8.2 years" },
  { k: "25-year revenue", v: "USD 636.1M" },
  { k: "25-year total costs", v: "USD 471.9M" },
  { k: "25-year cumulative net profit", v: "USD 164.1M" },
  { k: "Construction period", v: "2 years" },
  { k: "Operating lifetime", v: "40 years" },
];

const schedule: { time: string; action: string; detail: string }[] = [
  {
    time: "00:00 - 08:00",
    action: "Pumping (off-peak)",
    detail: "Use low-tariff electricity to pump water to upper reservoir.",
  },
  {
    time: "10:00 - 14:00",
    action: "Generation (morning high load)",
    detail: "1 unit (~25 MW) dispatched for peak shaving.",
  },
  {
    time: "17:00 - 18:00",
    action: "Generation (pre-peak)",
    detail: "2 units (~50 MW) ramp.",
  },
  {
    time: "18:00 - 22:00",
    action: "Generation (evening peak)",
    detail: "3 units (75 MW) dispatched.",
  },
  {
    time: "23:00 - 24:00",
    action: "Generation (late peak)",
    detail: "1 unit (~25 MW) for final peak support.",
  },
];

const advantages: { title: string; body: string }[] = [
  {
    title: "Energy security",
    body: "Reduces reliance on imported electricity and strengthens Mongolia's system reliability.",
  },
  {
    title: "Renewable integration",
    body: "Enables higher penetration of wind/solar by providing long-duration, dispatchable storage.",
  },
  {
    title: "Fast-track implementation",
    body: "Two-year construction timeline for earlier revenue and system impact.",
  },
  {
    title: "Stable economics",
    body: "Long-term tariff framework with regulated approvals supporting bankability.",
  },
];

const phase2: { title: string; items: string[] }[] = [
  {
    title: "Capacity expansion",
    items: [
      "Increase installed capacity to 150 MW (Phase II).",
      "Install additional turbine-generators (e.g., 3×50 MW in future powerhouse configuration).",
    ],
  },
  {
    title: "Reservoir upgrades",
    items: [
      "Increase lower reservoir capacity to ~2.5-3.0 million m³.",
      "Expand upper reservoir by ~1.0 million m³.",
    ],
  },
  {
    title: "Solar charging (optional)",
    items: [
      "Install 25â€“50 MW solar on suitable slopes to replace grid electricity for pumping during daytime.",
      "Use greenhouse-gas reduction mechanisms to support solar installation where applicable.",
    ],
  },
];

function StatGrid({ stats }: { stats: Stat[] }) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref as any} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, index) => (
        <Card
          key={s.label}
          className={`rounded-2xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {s.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{s.value}</div>
            {s.note ? (
              <div className="mt-1 text-sm text-muted-foreground">{s.note}</div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function KeyValueTable({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <div className="rounded-2xl border bg-card">
      <div className="grid grid-cols-1 divide-y">
        {rows.map((r) => (
          <div
            key={r.k}
            className="flex flex-col gap-1 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div className="text-sm text-muted-foreground">{r.k}</div>
            <div className="text-sm font-medium">{r.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MaikhanPitchPage() {
  const statsSection = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });
  const overviewSection = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });
  const technicalSection = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });
  const marketSection = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });
  const detailsSection = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });
  const phaseSection = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });
  const contactSection = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <HeroBanner
          title="Maikhan Pumped Storage Hydropower"
          description="Strategic energy storage for Mongolia's grid stability and renewable integration"
          image="/img/hydro-power.avif"
          alt="Maikhan Hydropower Project"
        />

        {/* Key Stats Section */}
        <section
          ref={statsSection.ref as any}
          className="mx-auto max-w-6xl px-4 py-16"
        >
          <div
            className={`mb-8 text-center transition-all duration-700 ease-out ${
              statsSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Project Highlights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A 75MW pumped storage facility serving Ulaanbaatar with up to 213
              GWh annual generation
            </p>
          </div>
          <StatGrid stats={heroStats} />
        </section>

        {/* Image Section 1 */}
        <section className="relative h-96 overflow-hidden bg-muted md:h-[500px]">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/maikhan-power-grid.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-4">
            <div className="max-w-2xl text-white">
              <h3 className="text-4xl font-bold">Grid Stability</h3>
              <p className="mt-4 text-lg text-white/90">
                Providing dispatchable power during peak demand and supporting
                Mongolia's renewable energy transition.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section
          ref={overviewSection.ref as any}
          className="mx-auto max-w-6xl px-4 py-16"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div
              className={`transition-all duration-700 ease-out ${
                overviewSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Project Overview
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The Maikhan 75MW Pumped Storage Hydro Power Station is a
                strategic renewable energy infrastructure project located in
                Ulaanbaatar, Mongolia.
              </p>
              <div className="mt-6 space-y-4">
                <div
                  className={`flex gap-3 transition-all duration-700 ease-out ${
                    overviewSection.isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <Zap className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">75 MW Capacity</h3>
                    <p className="text-sm text-muted-foreground">
                      Expandable to 150 MW in Phase II
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 transition-all duration-700 ease-out ${
                    overviewSection.isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <TrendingUp className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">~213 GWh Annual</h3>
                    <p className="text-sm text-muted-foreground">
                      Peak-shaving operating mode
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 transition-all duration-700 ease-out ${
                    overviewSection.isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <Shield className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Grid Balancing</h3>
                    <p className="text-sm text-muted-foreground">
                      Stabilizes renewable integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card
              className={`rounded-2xl transition-all duration-700 ease-out ${
                overviewSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <CardHeader>
                <CardTitle>Key Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">
                    Bayanzurkh District, Ulaanbaatar
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Investment</p>
                  <p className="font-semibold">USD 135.1M</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Construction Period
                  </p>
                  <p className="font-semibold">2 years</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Operating Lifetime
                  </p>
                  <p className="font-semibold">40 years</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    In Progress
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Image Section 2 */}
        <section className="relative h-96 overflow-hidden bg-muted md:h-[500px]">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/maikhan-turbines.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/60 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-end px-4 pb-12">
            <div className="max-w-2xl text-right text-white">
              <h3 className="text-4xl font-bold">Advanced Technology</h3>
              <p className="mt-4 text-lg text-white/90">
                Three 25 MW reversible turbine-generators with 265m net head for
                efficient energy storage and dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* Technical & Financial Highlights */}
        <section
          ref={technicalSection.ref as any}
          className="mx-auto max-w-6xl px-4 py-16"
        >
          <h2
            className={`text-3xl font-bold tracking-tight transition-all duration-700 ease-out ${
              technicalSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Technical & Financial Highlights
          </h2>
          <p
            className={`mt-2 text-lg text-muted-foreground transition-all duration-700 ease-out ${
              technicalSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Engineered for optimal performance and bankable returns
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card
              className={`rounded-2xl transition-all duration-700 ease-out ${
                technicalSection.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardHeader>
                <CardTitle className="text-base">
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <KeyValueTable rows={techParams.slice(0, 4)} />
              </CardContent>
            </Card>
            <Card
              className={`rounded-2xl transition-all duration-700 ease-out ${
                technicalSection.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <CardHeader>
                <CardTitle className="text-base">Financial Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm text-muted-foreground">
                      NPV (6% discount)
                    </span>
                    <span className="font-semibold">USD 55.6M</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm text-muted-foreground">
                      Payback Period
                    </span>
                    <span className="font-semibold">8.2 years</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm text-muted-foreground">
                      LCOE (WACC 10.84%)
                    </span>
                    <span className="font-semibold">11.92Â¢/kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Equity / Debt
                    </span>
                    <span className="font-semibold">10% / 90%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Market Opportunity Section */}
        <section ref={marketSection.ref as any} className="bg-muted/50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              className={`text-3xl font-bold tracking-tight transition-all duration-700 ease-out ${
                marketSection.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Market Opportunity
            </h2>
            <p
              className={`mt-2 text-lg text-muted-foreground transition-all duration-700 ease-out ${
                marketSection.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Mongolia's growing demand and renewable integration drive the need
              for grid-scale storage
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card
                className={`rounded-2xl transition-all duration-700 ease-out ${
                  marketSection.isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <CardHeader>
                  <CardTitle className="text-4xl">11.6B</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    kWh electricity consumption in 2024
                  </p>
                </CardContent>
              </Card>
              <Card
                className={`rounded-2xl transition-all duration-700 ease-out ${
                  marketSection.isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <CardHeader>
                  <CardTitle className="text-4xl">24.6%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    of electricity currently imported
                  </p>
                </CardContent>
              </Card>
              <Card
                className={`rounded-2xl transition-all duration-700 ease-out ${
                  marketSection.isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <CardHeader>
                  <CardTitle className="text-4xl">~10%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    renewables in installed capacity
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section
          ref={detailsSection.ref as any}
          className="mx-auto max-w-6xl px-4 py-16"
        >
          <h2
            className={`text-3xl font-bold tracking-tight transition-all duration-700 ease-out ${
              detailsSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Comprehensive Project Details
          </h2>

          <div className="mt-12 space-y-12">
            {/* Technical Section */}
            <div
              className={`transition-all duration-700 ease-out ${
                detailsSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-2xl font-bold">Technical Design</h3>
              <p className="mt-2 text-muted-foreground">
                Optimized for peak shaving and grid stability with three
                reversible units
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <KeyValueTable rows={techParams} />
                <div className="space-y-4">
                  <Card className="rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-base">
                        Infrastructure
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>- Upper & lower reservoirs</p>
                      <p>- Main powerhouse</p>
                      <p>- Hydraulic pipeline system</p>
                      <p>- 220 kV substation</p>
                      <p>- Grid transmission line</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Permits Section */}
            <div
              className={`transition-all duration-700 ease-out ${
                detailsSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-2xl font-bold">Permits & Approvals</h3>
              <p className="mt-2 text-muted-foreground">
                Major regulatory approvals secured from key Mongolian
                authorities
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {permits.map((p) => (
                  <Card key={p.title} className="rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <ul className="list-inside list-disc space-y-1">
                        {p.items.slice(0, 3).map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Operations Section */}
            <div
              className={`transition-all duration-700 ease-out ${
                detailsSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3 className="text-2xl font-bold">Daily Operations</h3>
              <p className="mt-2 text-muted-foreground">
                Flexible dispatch aligned with Mongolia's grid demand patterns
              </p>
              <div className="mt-6 rounded-2xl border bg-card">
                <div className="grid divide-y">
                  {schedule.map((s) => (
                    <div
                      key={s.time}
                      className="grid gap-2 p-4 md:grid-cols-12 md:items-center"
                    >
                      <div className="md:col-span-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                          {s.time}
                        </span>
                      </div>
                      <div className="md:col-span-3">
                        <div className="text-sm font-semibold">{s.action}</div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="text-sm text-muted-foreground">
                          {s.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section 3 */}
        <section className="relative h-96 overflow-hidden bg-muted md:h-[500px]">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/maikhan-renewable-energy.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-2xl text-center text-white">
              <h3 className="text-4xl font-bold">Renewable Energy Future</h3>
              <p className="mt-4 text-lg text-white/90">
                Supporting Mongolia's clean energy transition and reducing
                reliance on imported electricity.
              </p>
            </div>
          </div>
        </section>

        {/* Phase II & CTA */}
        <section
          ref={phaseSection.ref as any}
          className="mx-auto max-w-6xl px-4 py-16"
        >
          <h2
            className={`text-3xl font-bold tracking-tight transition-all duration-700 ease-out ${
              phaseSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Phase II Expansion
          </h2>
          <p
            className={`mt-2 text-lg text-muted-foreground transition-all duration-700 ease-out ${
              phaseSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Clear path to 150 MW with potential solar integration
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {phase2.map((p, idx) => (
              <Card
                key={p.title}
                className={`rounded-2xl transition-all duration-700 ease-out ${
                  phaseSection.isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="list-inside list-disc space-y-1">
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <SectionCTA
          title="Ready to explore the investment opportunity?"
          subtitle="Request the complete investor pack including technical documentation, financial models, and regulatory approvals."
        />

        {/* Contact Section */}
        <section
          ref={contactSection.ref as any}
          id="contact"
          className="mx-auto max-w-6xl px-4 py-16"
        >
          <h2
            className={`text-3xl font-bold tracking-tight transition-all duration-700 ease-out ${
              contactSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Get in Touch
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card
              className={`rounded-2xl transition-all duration-700 ease-out ${
                contactSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardHeader>
                <CardTitle>MONWORLD LTD</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+44 7769 398914</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">admin@monworldgroup.com</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Representative of Sunhydro LLC for the Maikhan Pumped Storage
                  Project
                </p>
              </CardContent>
            </Card>
            <Card
              className={`rounded-2xl transition-all duration-700 ease-out ${
                contactSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    Location: Bayanzurkh District, Ulaanbaatar
                  </p>
                  <p className="text-muted-foreground">
                    Capacity: 75 MW (expandable to 150 MW)
                  </p>
                  <p className="text-muted-foreground">
                    Investment: USD 135.1M
                  </p>
                </div>
                <Button asChild className="w-full">
                  <a href="mailto:admin@monworldgroup.com">Send Inquiry</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

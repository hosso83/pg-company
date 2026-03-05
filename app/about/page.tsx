import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { StatsSection } from "@/components/stats-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award, Leaf } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionCTA } from "@/components/section-cta";

export const metadata: Metadata = {
  title: "About Us | Engineering Global",
  description:
    "Learn about our global employee-owned engineering consultancy. Over 150 years of excellence delivering infrastructure projects that transform communities worldwide.",
  keywords: [
    "about engineering global",
    "employee-owned consultancy",
    "infrastructure heritage",
    "engineering values",
    "global reach",
  ],
  openGraph: {
    title: "About Engineering Global",
    description:
      "Global employee-owned engineering consultancy with 19,000 employees delivering excellence across 80+ countries.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex align-center justify-center min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroBanner
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&q=80"
          alt="About Us"
          title="About Us"
          description="We're a global, employee-owned engineering, management and development consultancy focused on delivering excellence across infrastructure projects worldwide."
        />

        <Breadcrumbs />

        {/* Mission Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                We plan, design, deliver and maintain the transport, energy,
                water, buildings and wider infrastructure that is integral to
                people's daily lives. Our purpose is to improve society by
                considering social outcomes in everything we do, relentlessly
                focusing on excellence and digital innovation, and addressing
                environmental and climate challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Our Values
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                These core values guide everything we do and shape how we work
                with clients, partners, and communities.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Global Reach
                </h3>
                <p className="text-muted-foreground">
                  Operating in over 80 countries with local expertise and global
                  standards of excellence.
                </p>
              </div>

              <div className="rounded-lg bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Employee Owned
                </h3>
                <p className="text-muted-foreground">
                  Our employee ownership model means everyone has a stake in our
                  collective success.
                </p>
              </div>

              <div className="rounded-lg bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  Committed to technical excellence and innovation in every
                  project we undertake.
                </p>
              </div>

              <div className="rounded-lg bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  Leading the way in sustainable infrastructure and
                  climate-positive solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We exist to engineer a better future—one where
                    infrastructure doesn't just connect places, but transforms
                    lives. Our mission is to deliver innovative, sustainable
                    solutions that empower communities, protect our planet, and
                    set new standards for engineering excellence.
                  </p>
                  <p>
                    By combining technical mastery with forward-thinking design,
                    we create resilient infrastructure that anticipates
                    tomorrow's challenges. From climate adaptation to digital
                    transformation, every project we undertake is driven by a
                    commitment to leave the world better than we found it.
                  </p>
                  <p>
                    As an employee-owned consultancy, we measure success not
                    just by profits, but by the positive impact we create. We're
                    proud to partner with clients who share our vision of
                    building a sustainable, inclusive future for generations to
                    come.
                  </p>
                </div>
                <Button size="lg" className="mt-8 gap-2">
                  Discover our approach
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80"
                  alt="Engineering innovation and strategic planning"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Leading by Example
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We care about delivering infrastructure that transforms lives
                and protects our planet for future generations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg bg-card p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/5" />
                <h3 className="relative mb-4 text-2xl font-semibold text-foreground">
                  Social Outcomes
                </h3>
                <p className="relative text-muted-foreground">
                  We focus on delivering positive social outcomes in everything
                  we do, considering the impact on communities, accessibility,
                  and quality of life in every project.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-card p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5" />
                <h3 className="relative mb-4 text-2xl font-semibold text-foreground">
                  Digital Innovation
                </h3>
                <p className="relative text-muted-foreground">
                  Leveraging cutting-edge digital tools and technologies to
                  optimize design, construction, and asset management across all
                  our projects.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-card p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5" />
                <h3 className="relative mb-4 text-2xl font-semibold text-foreground">
                  Climate Action
                </h3>
                <p className="relative text-muted-foreground">
                  Addressing climate change through sustainable design,
                  renewable energy projects, and helping clients achieve their
                  net-zero goals.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-card p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/5" />
                <h3 className="relative mb-4 text-2xl font-semibold text-foreground">
                  Engineering Excellence
                </h3>
                <p className="relative text-muted-foreground">
                  Maintaining the highest standards of technical excellence and
                  professional integrity in all our work, from concept to
                  completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SectionCTA
          title="Join our team"
          subtitle="Be part of a global team working on projects that make a real difference to communities worldwide."
          primaryBtn={{ Text: "Explore careers", URL: "/careers" }}
          secondaryBtn={{ Text: "Meet our people", URL: "/team" }}
        />
      </main>

      <Footer />
    </div>
  );
}

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { SectionCTA } from "@/components/section-cta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Zap,
  Droplet,
  Train,
  Leaf,
  Shield,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets & Services | Engineering Global",
  description:
    "Explore our engineering expertise across transport, energy, water, buildings, defence, and environment. Technical excellence and innovation for today's challenges.",
};

export default function MarketsServicesPage() {
  const markets = [
    {
      title: "Energy",
      description:
        "We understand energy markets and the different paces of transition. We'll use our unique breadth of energy sector technical expertise to co-create solutions with you, and help you deliver them.",
      icon: Zap,
      slug: "energy",
    },
    {
      title: "Environment & Society",
      description:
        "Our global network of climate, environment and social experts support clients and project teams to achieve sustainability throughout the project lifecycle, a strong reputation with investors and stakeholders, and innovative, cost-effective solutions.",
      icon: Leaf,
      slug: "environment",
    },
    {
      title: "Buildings",
      description:
        "We work across a broad range of building types including arts and culture, aviation and ports, commercial, retail and offices, education, healthcare, local and central government, residential and hotels, sports and events venues, and transport buildings.",
      icon: Building2,
      slug: "buildings",
    },

    {
      title: "Transport",
      description:
        "Effective development and delivery of transport infrastructure is essential to realise the benefits from efficient and sustainable transport networks. Our experts help clients create solutions that are intuitive and safe to use.",
      icon: Train,
      slug: "transport",
    },
    {
      title: "Water",
      description:
        "We have more than a century of water management experience and have played leading roles in many of the world's largest and most transformative water supply, wastewater, irrigation, drainage, and flood protection projects.",
      icon: Droplet,
      slug: "water",
    },
  ];

  const services = [
    {
      title: "Advisory",
      description:
        "Strategic advice and guidance to help you make informed decisions, navigate complex challenges, and achieve your objectives with confidence and clarity.",
    },
    {
      title: "Project Management",
      description:
        "End-to-end project delivery expertise ensuring your projects are completed on time, within budget, and to the highest quality standards.",
    },
    {
      title: "Engineering Design",
      description:
        "Innovative engineering solutions that combine technical excellence with sustainability, delivering designs that are efficient, safe, and future-ready.",
    },
    {
      title: "Digital Solutions",
      description:
        "Cutting-edge digital technologies and data analytics to transform infrastructure planning, design, construction, and operation for better outcomes.",
    },
    {
      title: "Asset Management",
      description:
        "Comprehensive asset lifecycle management services to maximize performance, minimize costs, and extend the life of your infrastructure assets.",
    },
    {
      title: "Sustainability Consulting",
      description:
        "Environmental and sustainability expertise to help you meet net zero targets, achieve climate resilience, and deliver socially responsible projects.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner
          image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop&q=80"
          alt="Markets and Services"
          title="Markets & Services"
          description="Whatever your needs, our technical experts are here to help. We mobilise our rich heritage in core markets, apply innovation and pursue excellence to solve today's challenges and equip you for tomorrow's."
        />
        <Breadcrumbs />

        {/* Markets Section */}
        <section className="py-20 px-4 md:px-6 bg-background">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Our Markets
              </h2>
              <p className="text-lg text-muted-foreground">
                Our technical expertise spans all major infrastructure sectors.
                We bring deep sector knowledge and cross-sector insights to
                deliver innovative solutions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {markets.map((market) => {
                const Icon = market.icon;
                return (
                  <Card
                    key={market.slug}
                    className="group relative overflow-hidden p-8 transition-all hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-foreground">
                      {market.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {market.description}
                    </p>
                    <Link
                      href={`/services?market=${market.slug}`}
                      className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-6 bg-muted/30">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to completion, we provide comprehensive services to
                support your infrastructure projects at every stage of their
                lifecycle.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group p-6 transition-all hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 md:px-6 bg-background">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground">
                We bring together technical excellence, innovation, and a
                commitment to sustainable development to deliver exceptional
                outcomes for our clients.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                  <span className="text-3xl font-bold text-white">150+</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Years of Experience
                </h3>
                <p className="text-muted-foreground">
                  Over a century and a half of engineering excellence and
                  innovation
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                  <span className="text-3xl font-bold text-white">10+</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Countries
                </h3>
                <p className="text-muted-foreground">
                  Global reach with local expertise across all continents
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                  <span className="text-3xl font-bold text-white">19K</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Employees
                </h3>
                <p className="text-muted-foreground">
                  Employee-owned with a shared commitment to excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionCTA
          title="Ready to start your project?"
          subtitle="Get in touch with our team to discuss how we can help bring your infrastructure vision to life."
          primaryBtn={{ Text: "Contact Us", URL: "/contact" }}
          secondaryBtn={{ Text: "View Projects", URL: "/projects" }}
        />
      </main>
      <Footer />
    </div>
  );
}

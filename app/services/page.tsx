import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { ServiceCard } from "@/components/service-card";
import { getServices } from "@/lib/strapi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next/metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionCTA } from "@/components/section-cta";

export const metadata: Metadata = {
  title: "Markets & Services | Engineering Global",
  description:
    "Explore our engineering expertise across transport, energy, water, buildings, defence, and environment. Technical excellence and innovation for today's challenges.",
  keywords: [
    "engineering services",
    "transport infrastructure",
    "energy consulting",
    "water management",
    "building design",
    "defence infrastructure",
    "environmental consulting",
  ],
  openGraph: {
    title: "Markets & Services | Engineering Global",
    description:
      "Technical expertise across all major infrastructure sectors with innovation and excellence.",
    type: "website",
  },
};

export default async function ServicesPage() {
  let services = [];

  try {
    const servicesData = await getServices();
    services = servicesData.data;
  } catch (error) {
    console.error("[v0] Error fetching services from Strapi:", error);
  }

  const markets = [
    {
      title: "Buildings",
      description:
        "We work across a broad range of building types including arts and culture, aviation and ports, commercial, retail and offices, education, healthcare, local and central government, residential and hotels, sports and events venues, and transport buildings.",
      icon: "building",
      slug: "buildings",
    },
    {
      title: "Energy",
      description:
        "We understand energy markets and the different paces of transition. We'll use our unique breadth of energy sector technical expertise to co-create solutions with you, and help you deliver them.",
      icon: "energy",
      slug: "energy",
    },
    {
      title: "Transport",
      description:
        "Effective development and delivery of transport infrastructure is essential to realise the benefits from efficient and sustainable transport networks. Our experts help clients create solutions that are intuitive and safe to use.",
      icon: "transport",
      slug: "transport",
    },
    {
      title: "Water",
      description:
        "We have more than a century of water management experience and have played leading roles in many of the world's largest and most transformative water supply, wastewater, irrigation, drainage, and flood protection projects.",
      icon: "water",
      slug: "water",
    },
    {
      title: "Environment & Society",
      description:
        "Our global network of climate, environment and social experts support clients and project teams to achieve sustainability throughout the project lifecycle, a strong reputation with investors and stakeholders, and innovative, cost-effective solutions.",
      icon: "leaf",
      slug: "environment",
    },
  ];

  const keyServices = [
    {
      title: "Advisory",
      description:
        "Strategic advice and guidance to help you make informed decisions, navigate complex challenges, and achieve your objectives with confidence and clarity.",
      icon: "lightbulb",
      slug: "advisory",
    },
    {
      title: "Engineering Design",
      description:
        "Innovative engineering solutions that combine technical excellence with sustainability, delivering designs that are efficient, safe, and future-ready.",
      icon: "compass",
      slug: "engineering-design",
    },
    {
      title: "Project Management",
      description:
        "End-to-end project delivery expertise ensuring your projects are completed on time, within budget, and to the highest quality standards.",
      icon: "calendar",
      slug: "project-management",
    },
    {
      title: "Digital Solutions",
      description:
        "Cutting-edge digital technologies and data analytics to transform infrastructure planning, design, construction, and operation for better outcomes.",
      icon: "monitor",
      slug: "digital-solutions",
    },
    {
      title: "Asset Management",
      description:
        "Comprehensive asset lifecycle management services to maximize performance, minimize costs, and extend the life of your infrastructure assets.",
      icon: "settings",
      slug: "asset-management",
    },
    {
      title: "Sustainability Consulting",
      description:
        "Environmental and sustainability expertise to help you meet net zero targets, achieve climate resilience, and deliver socially responsible projects.",
      icon: "recycle",
      slug: "sustainability",
    },
  ];

  const displayServices =
    services.length > 0
      ? services
      : [...markets, ...keyServices].map((s, i) => ({ id: i, attributes: s }));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroBanner
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80"
          alt="Markets and Services"
          title="Markets & Services"
          description="Whatever your needs, our technical experts are here to help. We mobilise our rich heritage in core markets, apply innovation and pursue excellence to solve today's challenges and equip you for tomorrow's."
        />
        <Breadcrumbs />

        <section className="py-20 px-4 md:px-6 bg-background">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Markets
              </h2>
              <p className="text-lg text-muted-foreground">
                Our technical expertise spans all major infrastructure sectors.
                We understand the unique challenges and opportunities in each
                market, delivering solutions that create lasting value.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {markets.map((market, index) => (
                <ServiceCard
                  key={market.slug}
                  service={{ id: index, attributes: market }}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 bg-muted/20">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Key Services
              </h2>
              <p className="text-lg text-muted-foreground">
                From strategic advisory to hands-on project delivery, our
                comprehensive service offering supports you at every stage of
                your infrastructure journey.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {keyServices.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  service={{ id: index + 100, attributes: service }}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <SectionCTA
          title="Ready to discuss your project?"
          subtitle="Our team of experts is ready to help you deliver your next infrastructure project with excellence and innovation."
          primaryBtn={{ Text: "Contact us", URL: "/contact" }}
          secondaryBtn={{ Text: "View our projects", URL: "/projects" }}
        />
      </main>

      <Footer />
    </div>
  );
}

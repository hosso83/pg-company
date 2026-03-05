import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getServiceBySlug, getServices } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  let service = null;

  try {
    service = await getServiceBySlug(slug);
  } catch (error) {
    console.error("[v0] Error fetching service from Strapi:", error);
  }

  // Fallback service data
  const fallbackServices: Record<string, any> = {
    buildings: {
      title: "Buildings",
      description:
        "We work across a broad range of building types including arts and culture, aviation and ports, commercial, retail and offices, education, healthcare, local and central government, residential and hotels, sports and events venues, and transport buildings.",
      icon: "building",
    },
    energy: {
      title: "Energy",
      description:
        "We understand energy markets and the different paces of transition. We'll use our unique breadth of energy sector technical expertise to co-create solutions with you, and help you deliver them. From renewable energy projects to power generation and distribution infrastructure, we deliver comprehensive solutions.",
      icon: "energy",
    },
    transport: {
      title: "Transport",
      description:
        "Effective development and delivery of transport infrastructure is essential to realise the benefits from efficient and sustainable transport networks. Leveraging our global expertise in urban, suburban, and rural environments, our experts help clients create solutions that are intuitive and safe to use.",
      icon: "transport",
    },
    water: {
      title: "Water",
      description:
        "We have more than a century of water management experience and have played leading roles in many of the world's largest and most transformative water supply, wastewater, irrigation, drainage, and flood protection projects. Our comprehensive approach ensures sustainable water management for communities worldwide.",
      icon: "water",
    },
    defence: {
      title: "Defence & Security",
      description:
        "We are proud to be a trusted partner for some of the most complex and critical defence and security equipment and infrastructure programmes worldwide, giving our clients what they need to be operationally ready and effective. Our expertise spans secure facilities, communications infrastructure, and mission-critical systems.",
      icon: "building",
    },
    environment: {
      title: "Environment & Society",
      description:
        "Our global network of climate, environment and social experts support clients and project teams to achieve sustainability throughout the project lifecycle, a strong reputation with investors and stakeholders, and innovative, cost-effective solutions. We help organizations navigate environmental challenges and create positive social impact.",
      icon: "building",
    },
  };

  const displayService = service || fallbackServices[slug];

  if (!displayService) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-accent-color">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground">{displayService.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
          <div className="container relative">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
                {displayService.title}
              </h1>
              <p className="text-pretty text-xl opacity-90">
                {displayService.description}
              </p>
            </div>
          </div>
          <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-primary-foreground/10" />
        </section>
        <Breadcrumbs />

        {/* Key Capabilities */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-4xl font-bold text-foreground">
                Key Capabilities
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Strategic Planning
                      </h3>
                      <p className="text-muted-foreground">
                        We provide comprehensive strategic planning services
                        that align with your long-term goals and deliver
                        measurable outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Design & Engineering
                      </h3>
                      <p className="text-muted-foreground">
                        Our award-winning design and engineering teams deliver
                        innovative solutions that exceed industry standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Project Management
                      </h3>
                      <p className="text-muted-foreground">
                        End-to-end project management ensuring on-time,
                        on-budget delivery with the highest quality standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Sustainability Solutions
                      </h3>
                      <p className="text-muted-foreground">
                        Embedding sustainability throughout the project
                        lifecycle to deliver lasting environmental and social
                        value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={`/.jpg?height=600&width=1200&query=${displayService.title} infrastructure project`}
                  alt={`${displayService.title} project`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-4xl font-bold text-foreground">
                Areas of Expertise
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Our team brings together decades of experience and
                  cutting-edge expertise to deliver exceptional results. We
                  combine technical excellence with innovative thinking to solve
                  complex challenges and create sustainable solutions for the
                  future.
                </p>
                <p className="text-muted-foreground">
                  From initial feasibility studies through detailed design,
                  construction supervision, and long-term maintenance planning,
                  we provide comprehensive services that ensure project success
                  at every stage.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Feasibility Studies",
                  "Concept Design",
                  "Detailed Engineering",
                  "Construction Management",
                  "Asset Management",
                  "Digital Solutions",
                ].map((area) => (
                  <div
                    key={area}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <p className="font-medium text-foreground">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-20 text-accent-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Let's work together
              </h2>
              <p className="mb-8 text-lg opacity-90">
                Get in touch to discuss how we can help deliver your{" "}
                {displayService.title.toLowerCase()} project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Contact our team
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                  asChild
                >
                  <Link href="/services" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    All services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  let services: any[] = [];

  try {
    const servicesData = await getServices();
    services = servicesData.data;
  } catch (error) {
    console.error("[v0] Error fetching services for static params:", error);
  }

  const fallbackSlugs = [
    "buildings",
    "energy",
    "transport",
    "water",
    "defence",
    "environment",
  ];

  if (services.length > 0) {
    return services.map((service) => ({
      slug: service.slug,
    }));
  }

  return fallbackSlugs.map((slug) => ({ slug }));
}

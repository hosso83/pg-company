import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SectionCTA } from "@/components/section-cta";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getProjects, getStrapiMedia } from "@/lib/strapi";
import { notFound, redirect } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (slug === "maikhan-pumped-storage-hydro" || slug === "maikhan") {
    redirect("/maikhan");
  }

  let project = null;

  try {
    project = await getProjectBySlug(slug);
  } catch (error) {
    console.error("[v0] Error fetching project from Strapi:", error);
  }

  // Fallback project data
  const fallbackProjects: Record<string, any> = {
    "la-regional-connector": {
      title: "Los Angeles Regional Connector",
      description:
        "We helped to deliver the Los Angeles Regional Connector, encouraging Angelenos towards public transport with modern, efficient rail infrastructure. This transformative project connects three existing light rail lines, creating a unified transit system that serves downtown Los Angeles.",
      location: "Los Angeles, USA",
      region: "North America",
    },
    "kitakyushu-offshore-wind": {
      title: "Kitakyushu Hibikinada Offshore Wind",
      description:
        "The largest privately financed offshore wind energy project in Japan provides a model for others to follow as the country strives towards net zero. Our comprehensive services included technical advisory, environmental assessments, and construction management for this landmark renewable energy development.",
      location: "Kitakyushu, Japan",
      region: "Asia",
    },
    "ontario-line-toronto": {
      title: "Ontario Line, Toronto",
      description:
        "Toronto's largest and most complex transport project to date, the Ontario Line is being delivered under a combination of two large public-private partnerships and two progressive design-build contracts. This new 15.6-kilometer subway line will transform urban mobility across the city.",
      location: "Toronto, Canada",
      region: "North America",
    },
  };

  const displayProject = project || fallbackProjects[slug];

  if (!displayProject) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-[500px] overflow-hidden bg-muted">
          {project?.image?.url ? (
            <Image
              src={getStrapiMedia(project.image.url) || "/placeholder.svg"}
              alt={project.image.alternativeText || displayProject.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          ) : (
            <Image
              src={`/ceholder-svg-key-m8jk1-height-500-width-1400-text-.jpg?key=m8jk1&height=500&width=1400&text=${encodeURIComponent(
                displayProject.title,
              )}`}
              alt={displayProject.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <div className="container">
              <div className="inline-block rounded-full bg-primary/90 px-4 py-1 text-sm font-medium text-primary-foreground">
                {displayProject.region}
              </div>
              <h1 className="mt-4 text-balance text-5xl font-bold text-white md:text-6xl">
                {displayProject.title}
              </h1>
              <div className="mt-4 flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">{displayProject.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Project Overview */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {displayProject.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                Project Highlights
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Challenge
                    </h3>
                    <p className="text-muted-foreground">
                      Delivering complex infrastructure in a challenging urban
                      environment while maintaining operations and minimizing
                      disruption to local communities and businesses.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Our Role
                    </h3>
                    <p className="text-muted-foreground">
                      Lead technical consultant providing design, engineering,
                      project management, and construction supervision services
                      throughout the project lifecycle.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Solution
                    </h3>
                    <p className="text-muted-foreground">
                      Innovative design and construction methodologies combined
                      with advanced digital tools to optimize delivery, ensure
                      safety, and exceed quality standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Impact
                    </h3>
                    <p className="text-muted-foreground">
                      Transforming infrastructure to deliver lasting benefits
                      for the community, improving connectivity, sustainability,
                      and quality of life for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                Key Facts
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    2020
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Project Start
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    $500M+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Project Value
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    200+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Team Members
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    5yrs
                  </div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="bg-accent py-20 text-accent-foreground"> */}

        <SectionCTA
          title={"Interested in learning more?"}
          subtitle={
            "Get in touch to discuss how we can help deliver your next infrastructure project."
          }
          primaryBtn={{ Text: "Contact us", URL: "/contact" }}
          secondaryBtn={{ Text: "All projects", URL: "/projects" }}
        />

        {/* <section className="cta">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Interested in learning more?
              </h2>
              <p className="mb-8 text-lg opacity-90">
                Get in touch to discuss how we can help deliver your next
                infrastructure project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Contact us
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                  asChild
                >
                  <Link href="/projects" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    All projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  let projects: any[] = [];

  try {
    const projectsData = await getProjects(1, 100);
    projects = projectsData.data;
  } catch (error) {
    console.error("[v0] Error fetching projects for static params:", error);
  }

  const fallbackSlugs = [
    "la-regional-connector",
    "kitakyushu-offshore-wind",
    "ontario-line-toronto",
  ];

  if (projects.length > 0) {
    return projects.map((project) => ({
      slug: project?.slug,
    }));
  }

  return fallbackSlugs.map((slug) => ({ slug }));
}

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionCTA } from "@/components/section-cta";
import { MapPin } from "lucide-react";
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

  if (slug === "advance-credit-infrastructure-program") {
    redirect("/projects/advance-credit-diaspora-fintech-platform");
  }

  let project = null;

  try {
    project = await getProjectBySlug(slug);
  } catch (error) {
    console.error("[v0] Error fetching project from Strapi:", error);
  }

  if (!project) {
    notFound();
  }

  const displayProject: any = project;

  const keyFacts = [
    { label: "Status", value: displayProject.status || "Not specified" },
    { label: "Duration", value: displayProject.duration || "Not specified" },
    { label: "Project Value", value: displayProject.value || "Not specified" },
    { label: "Client", value: displayProject.client || "Not specified" },
  ];

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
                  {displayProject.content || displayProject.description}
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
                      Challenges
                    </h3>
                    {Array.isArray(displayProject.challenges) &&
                    displayProject.challenges.length > 0 ? (
                      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {displayProject.challenges.map(
                          (item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">Not specified.</p>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Services Delivered
                    </h3>
                    {Array.isArray(displayProject.services) &&
                    displayProject.services.length > 0 ? (
                      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {displayProject.services.map(
                          (item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">Not specified.</p>
                    )}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Outcomes
                    </h3>
                    {Array.isArray(displayProject.outcomes) &&
                    displayProject.outcomes.length > 0 ? (
                      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {displayProject.outcomes.map(
                          (item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">Not specified.</p>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Sector and Region
                    </h3>
                    <p className="text-muted-foreground">
                      {displayProject.sector || "Not specified"} •{" "}
                      {displayProject.region || "Not specified"}
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
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <div className="mb-2 text-lg font-semibold text-primary">
                      {fact.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {fact.label}
                    </div>
                  </div>
                ))}
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

  if (projects.length > 0) {
    return projects.map((project) => ({
      slug: project?.slug,
    }));
  }

  return [];
}

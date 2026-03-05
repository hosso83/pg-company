"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { ProjectCard } from "@/components/project-card";
import { getProjects, getProjectPage } from "@/lib/strapi";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionCTA } from "@/components/section-cta";

const REGIONS = [
  "All Regions",
  "North America",
  "UK",
  "Asia",
  "Europe",
  "Middle East",
] as const;

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentRegion = searchParams.get("region") || "All Regions";

  const [projects, setProjects] = useState<any[]>([]);
  const [projectPage, setProjectPage] = useState<any>(null);
  const [pagination, setPagination] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const pageData = await getProjectPage(); // adjust if it needs slug
        setProjectPage(pageData);

        const projectsData = await getProjects(
          currentPage,
          12,
          currentRegion === "All Regions" ? undefined : currentRegion,
        );

        setProjects(projectsData.data || []);
        setPagination(projectsData.meta?.pagination || null);
      } catch (err) {
        console.error("[ProjectsPage] Error fetching data:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage, currentRegion]);

  // Fallback projects when Strapi fails or returns nothing
  const fallbackProjects = [
    {
      title: "Los Angeles Regional Connector",
      description:
        "We helped to deliver the Los Angeles Regional Connector, encouraging Angelenos towards public transport with modern, efficient rail infrastructure.",
      location: "Los Angeles, USA",
      region: "North America",
      slug: "la-regional-connector",
    },
    {
      title: "Kitakyushu Hibikinada Offshore Wind",
      description:
        "The largest privately financed offshore wind energy project in Japan provides a model for others to follow as the country strives towards net zero.",
      location: "Kitakyushu, Japan",
      region: "Asia",
      slug: "kitakyushu-offshore-wind",
    },
    {
      title: "Ontario Line, Toronto",
      description:
        "Toronto's largest and most complex transport project to date, the Ontario Line is being delivered to transform urban mobility.",
      location: "Toronto, Canada",
      region: "North America",
      slug: "ontario-line-toronto",
    },
    {
      title: "Liverpool Baltic Station",
      description:
        "Transforming Liverpool's Baltic Triangle district with a new station to maximize connectivity and regenerate the area.",
      location: "Liverpool, UK",
      region: "UK",
      slug: "liverpool-baltic-station",
    },
    {
      title: "Philadelphia Stormwater Management",
      description:
        "A comprehensive project to double sewer capacity and reduce stormwater flooding during large storm events.",
      location: "Philadelphia, USA",
      region: "North America",
      slug: "philadelphia-stormwater",
    },
    {
      title: "UK Net Zero Grid Development",
      description:
        "Supporting the UK government's ambitious programme of wind farm construction and new transmission infrastructure for a greener, more resilient energy system.",
      location: "United Kingdom",
      region: "UK",
      slug: "uk-net-zero-grid",
    },
    {
      title: "Nepal Climate Resilience Programme",
      description:
        "A UK aid funded programme helping communities adapt to climate change with technical support and financial aid for resilience projects.",
      location: "Nepal",
      region: "Asia",
      slug: "nepal-climate-programme",
    },
    {
      title: "HS2 Digital Innovation",
      description:
        "Enhancing the observational method on HS2 with DAARWIN, new software that employs machine learning for dramatic time and safety benefits.",
      location: "United Kingdom",
      region: "UK",
      slug: "hs2-digital-innovation",
    },
    {
      title: "Floating Wetlands Water Treatment",
      description:
        "Engineering natural processes with 31 new floating wetlands providing biological water treatment to bring an abandoned resource back into use.",
      location: "United Kingdom",
      region: "UK",
      slug: "floating-wetlands-treatment",
    },
  ];

  const displayProjects =
    projects.length > 0
      ? projects
      : fallbackProjects.map((p, i) => ({
          id: i,
          attributes: { ...p, image: { data: null } },
        }));

  const handleRegionChange = (region: string) => {
    const params = new URLSearchParams();
    if (region !== "All Regions") params.set("region", region);
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroBanner
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80"
          alt="Our Projects"
          title={projectPage?.title || "Our Projects"}
          description={
            projectPage?.description ||
            "Discover our global portfolio of infrastructure projects. From transport systems to renewable energy, we deliver projects that transform communities worldwide."
          }
        />
        <Breadcrumbs />

        {/* Filter Bar */}
        <section className="border-b border-border bg-background">
          <div className="container py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                Filter by region:
              </span>
              {REGIONS.map((region) => (
                <Button
                  key={region}
                  variant={currentRegion === region ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleRegionChange(region)}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container">
            {loading ? (
              <p className="text-center py-12">Loading projects...</p>
            ) : error ? (
              <p className="text-center py-12 text-destructive">{error}</p>
            ) : (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Showing {displayProjects.length}{" "}
                    {displayProjects.length === 1 ? "project" : "projects"}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {displayProjects.map((project) => (
                    <ProjectCard
                      key={project.attributes?.slug || project.slug}
                      project={project}
                    />
                  ))}
                </div>

                {pagination && pagination.pageCount > 1 && (
                  <nav
                    className="mt-12 flex justify-center flex-wrap gap-2"
                    aria-label="Pagination"
                  >
                    <Button
                      variant="outline"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      Previous
                    </Button>

                    {Array.from(
                      { length: pagination.pageCount },
                      (_, i) => i + 1,
                    ).map((pageNum) => (
                      <Button
                        key={pageNum}
                        variant={
                          pageNum === currentPage ? "default" : "outline"
                        }
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      disabled={currentPage === pagination.pageCount}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      Next
                    </Button>
                  </nav>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        {projectPage?.cta && (
          <SectionCTA
            title={projectPage.cta.title}
            subtitle={projectPage.cta.subtitle}
            primaryBtn={projectPage.cta.primaryBtn} // adjust to your actual CTA structure
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

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

  const displayProjects = projects;

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
          title={"Our Projects"}
          description={
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

                {displayProjects.length === 0 ? (
                  <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
                    <p className="text-muted-foreground">
                      No projects found for the current filter/page.
                    </p>
                    <Button
                      className="mt-4"
                      onClick={() => {
                        const params = new URLSearchParams(searchParams);
                        params.delete("region");
                        params.set("page", "1");
                        router.push(`?${params.toString()}`);
                      }}
                    >
                      Reset filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayProjects.map((project) => (
                      <ProjectCard
                        key={project.attributes?.slug || project.slug}
                        project={project}
                      />
                    ))}
                  </div>
                )}

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

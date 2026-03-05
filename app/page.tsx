import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { StatsSection } from "@/components/stats-section";
import { SectionDivider } from "@/components/section-divider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  getProjects,
  getServices,
  getPageContent,
  getGlobals,
} from "@/lib/strapi";
import type { Metadata } from "next";
import Link from "next/link";
import ProjectSection from "@/components/section-project";
import MarketSection from "@/components/section-markets";
import AboutSection from "@/components/section-about";

export const metadata: Metadata = {
  title: "Project Globally | Delivering Excellence in Infrastructure",
  description:
    "Project Globally, management and development consultancy. We plan, design, deliver and maintain infrastructure that is integral to daily life across transport, energy, water, and buildings.",
  keywords: [
    "engineering consultancy",
    "infrastructure development",
    "transport engineering",
    "energy infrastructure",
    "water management",
    "building design",
    "global engineering",
  ],
  openGraph: {
    title: "Project Globally | Delivering Excellence",
    description:
      "Global engineering consultancy delivering world-class infrastructure projects across transport, energy, water, and buildings.",
    type: "website",
  },
};

export default async function HomePage() {
  // Fetch data from Strapi CMS
  let projects = [];
  let services = [];
  let pageContent = null;

  try {
    const [projectsData, servicesData, contentData, globalsData] =
      await Promise.all([
        getProjects(1, 6),
        getServices(),
        getPageContent(),
        getGlobals(),
      ]);
    projects = projectsData.data;
    services = servicesData.data;
    pageContent = contentData;
    console.log("Page Content:", pageContent);
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    // Use fallback data when Strapi is not connected
  }

  return (
    <>
      <Header />

      <main className="flex-1">
        {pageContent && (
          <HeroSection
            title={pageContent.heroTitle}
            subtitle={pageContent?.heroSubtitle}
            imageUrl={pageContent?.heroImage?.url}
          />
        )}

        <StatsSection />

        <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&q=80"
          imageAlt="Infrastructure overview"
          height="md"
        />

        {/* About Section */}
        <AboutSection />

        <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&q=80"
          imageAlt="Engineering collaboration"
          height="md"
        />

        {/* Projects Section */}

        <ProjectSection />

        <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&q=80"
          imageAlt="Sustainable infrastructure"
          height="md"
        />

        {/* Services Section */}
        <MarketSection />

        <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          imageAlt="Professional team"
          height="md"
        />

        {/* CTA Section */}
        <section className="bg-accent py-20 px-4 md:px-6 text-accent-foreground">
          <div className="container text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Build your career with us
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              We are a unique group of experts who work on high-profile projects
              around the world that address some of the world's most pressing
              issues.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers">
                <Button size="lg" variant="secondary" className="gap-2">
                  Search our vacancies
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  Meet our people
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

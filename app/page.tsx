import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { StatsSection } from "@/components/stats-section";
import { SectionDivider } from "@/components/section-divider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
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
import { SectionCTA } from "@/components/section-cta";
import HomeHero from "@/components/home-hero";

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
        <HomeHero />
        {/* {pageContent && (
          <HeroSection
            title={pageContent.heroTitle}
            subtitle={pageContent?.heroSubtitle}
            imageUrl={pageContent?.heroImage?.url}
          />
          
        )} */}
        {/* <StatsSection /> */}
        {/* <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&q=80"
          imageAlt="Infrastructure overview"
          height="md"
        /> */}
        {/* About Section */}
        <AboutSection
          title={pageContent?.introductionTitle || "Who we are"}
          content={
            pageContent?.introductionContent ||
            "We are a global engineering consultancy dedicated to creating opportunities through the responsible development of sustainable infrastructure. Our multidisciplinary team of experts works across diverse environments and industries, delivering innovative engineering solutions to complex challenges. By combining technical excellence, practical experience, and a forward-thinking approach, we partner with clients to design and deliver projects that strengthen communities, support economic growth, and improve quality of life. Our work is guided by a commitment to long-term sustainability, collaboration, and engineering solutions that make a meaningful and lasting impact."
          }
        />
        <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80"
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
        <SectionCTA
          title={" Build your career with us"}
          subtitle={
            "We are a unique group of experts who work on high-profile projects around the world that address some of the world's most pressing issues."
          }
          primaryBtn={{ Text: "Search our vacancies", URL: "/careers" }}
          secondaryBtn={{ Text: "Meet our people", URL: "/about#team" }}
        />{" "}
      </main>

      <Footer />
    </>
  );
}

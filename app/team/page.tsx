import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import { getTeamMembers } from "@/lib/strapi";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionCTA } from "@/components/section-cta";

export const metadata: Metadata = {
  title: "Our People | Engineering Global",
  description:
    "Meet our global team of engineering experts working on high-profile projects that address the world's most pressing infrastructure challenges.",
  keywords: [
    "engineering team",
    "infrastructure experts",
    "engineering professionals",
    "global team",
    "technical leadership",
  ],
  openGraph: {
    title: "Our People | Engineering Global",
    description:
      "A unique group of experts delivering world-class infrastructure projects globally.",
    type: "website",
  },
};

export default async function TeamPage() {
  let teamMembers: any[] = [];
  let pagination: any = null;

  try {
    const teamData = await getTeamMembers(1, 12);
    teamMembers = teamData.data;
    pagination = teamData.meta.pagination;
  } catch (error) {
    console.error("[v0] Error fetching team members from Strapi:", error);
  }

  const fallbackMembers = [
    {
      name: "Sarah Chen",
      role: "Managing Director",
      location: "Singapore",
      slug: "sarah-chen",
    },
    {
      name: "James Mitchell",
      role: "Principal Engineer, Transport",
      location: "London, UK",
      slug: "james-mitchell",
    },
    {
      name: "Maria Rodriguez",
      role: "Technical Director, Water",
      location: "Madrid, Spain",
      slug: "maria-rodriguez",
    },
    {
      name: "David Kim",
      role: "Global Practice Leader, Energy",
      location: "Toronto, Canada",
      slug: "david-kim",
    },
    {
      name: "Emma Thompson",
      role: "Principal Architect",
      location: "Melbourne, Australia",
      slug: "emma-thompson",
    },
    {
      name: "Ahmed Hassan",
      role: "Senior Project Manager",
      location: "Dubai, UAE",
      slug: "ahmed-hassan",
    },
    {
      name: "Lisa Wang",
      role: "Digital Innovation Lead",
      location: "San Francisco, USA",
      slug: "lisa-wang",
    },
    {
      name: "Thomas Anderson",
      role: "Principal Engineer, Structures",
      location: "Oslo, Norway",
      slug: "thomas-anderson",
    },
    {
      name: "Priya Patel",
      role: "Environmental Lead",
      location: "Mumbai, India",
      slug: "priya-patel",
    },
    {
      name: "Carlos Santos",
      role: "Technical Director, Buildings",
      location: "São Paulo, Brazil",
      slug: "carlos-santos",
    },
    {
      name: "Sophie Laurent",
      role: "Principal Engineer, Geotechnics",
      location: "Paris, France",
      slug: "sophie-laurent",
    },
    {
      name: "Robert Taylor",
      role: "Managing Principal",
      location: "New York, USA",
      slug: "robert-taylor",
    },
    {
      name: "Sarah Chen",
      role: "Managing Director",
      location: "Singapore",
      slug: "sarah-chen",
    },
    {
      name: "James Mitchell",
      role: "Principal Engineer, Transport",
      location: "London, UK",
      slug: "james-mitchell",
    },
    {
      name: "Maria Rodriguez",
      role: "Technical Director, Water",
      location: "Madrid, Spain",
      slug: "maria-rodriguez",
    },
    {
      name: "David Kim",
      role: "Global Practice Leader, Energy",
      location: "Toronto, Canada",
      slug: "david-kim",
    },
    {
      name: "Emma Thompson",
      role: "Principal Architect",
      location: "Melbourne, Australia",
      slug: "emma-thompson",
    },
    {
      name: "Ahmed Hassan",
      role: "Senior Project Manager",
      location: "Dubai, UAE",
      slug: "ahmed-hassan",
    },
    {
      name: "Lisa Wang",
      role: "Digital Innovation Lead",
      location: "San Francisco, USA",
      slug: "lisa-wang",
    },
    {
      name: "Thomas Anderson",
      role: "Principal Engineer, Structures",
      location: "Oslo, Norway",
      slug: "thomas-anderson",
    },
    {
      name: "Priya Patel",
      role: "Environmental Lead",
      location: "Mumbai, India",
      slug: "priya-patel",
    },
    {
      name: "Carlos Santos",
      role: "Technical Director, Buildings",
      location: "São Paulo, Brazil",
      slug: "carlos-santos",
    },
    {
      name: "Sophie Laurent",
      role: "Principal Engineer, Geotechnics",
      location: "Paris, France",
      slug: "sophie-laurent",
    },
    {
      name: "Robert Taylor",
      role: "Managing Principal",
      location: "New York, USA",
      slug: "robert-taylor",
    },
  ];

  const displayMembers =
    teamMembers.length > 0
      ? teamMembers
      : fallbackMembers.map((m, i) => ({
          id: i,
          ...m,
          bio: "",
          image: { data: null },
        }));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroBanner
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
          alt="Our People"
          title="Meet Our People"
          description="We are a unique group of experts who work on high-profile projects around the world that address some of the world's most pressing issues."
        />
        <Breadcrumbs />

        {/* Filter Bar */}
        <section className="border-b border-border bg-background">
          <div className="container py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                Filter by:
              </span>
              <Button variant="outline" size="sm" className="bg-transparent">
                All Roles
              </Button>
              <Button variant="ghost" size="sm">
                Leadership
              </Button>
              <Button variant="ghost" size="sm">
                Engineering
              </Button>
              <Button variant="ghost" size="sm">
                Architecture
              </Button>
              <Button variant="ghost" size="sm">
                Project Management
              </Button>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {displayMembers.length} team{" "}
                {displayMembers.length === 1 ? "member" : "members"}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayMembers.map((member) => (
                <TeamMemberCard key={member.slug} member={member} />
              ))}
            </div>

            {pagination && pagination.pageCount > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                <Button variant="outline" disabled className="bg-transparent">
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="bg-primary text-primary-foreground"
                >
                  1
                </Button>
                <Button variant="outline" className="bg-transparent">
                  2
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}

        <SectionCTA
          title="Join our global team"
          subtitle="We're always looking for talented professionals who want to make a difference through infrastructure engineering."
          primaryBtn={{ Text: "View open positions", URL: "/careers" }}
        />
      </main>

      <Footer />
    </div>
  );
}

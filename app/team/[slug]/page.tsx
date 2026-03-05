import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTeamMembers, getStrapiMedia } from "@/lib/strapi";
import { notFound } from "next/navigation";

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;

  let teamMembers: any[] = [];

  try {
    const teamData = await getTeamMembers(1, 100);
    teamMembers = teamData.data;
  } catch (error) {
    console.error("[v0] Error fetching team members from Strapi:", error);
  }

  const member = teamMembers.find((m) => m.slug === slug);

  // Fallback member data
  const fallbackMembers: Record<string, any> = {
    "sarah-chen": {
      name: "Sarah Chen",
      role: "Managing Director",
      location: "Singapore",
      bio: "Sarah leads our Asia-Pacific operations with over 20 years of experience in infrastructure development. She specializes in sustainable urban planning and has overseen major transport and water infrastructure projects across the region. Sarah is passionate about integrating innovative technologies with traditional engineering excellence to deliver projects that enhance quality of life for communities.",
    },
    "james-mitchell": {
      name: "James Mitchell",
      role: "Principal Engineer, Transport",
      location: "London, UK",
      bio: "James is a chartered civil engineer with extensive experience in rail and metro systems. He has led the design and delivery of several award-winning transport projects across Europe. His expertise includes station design, rail infrastructure, and integrated transport planning. James is committed to creating sustainable transport solutions that reduce congestion and improve connectivity.",
    },
  };

  const displayMember = member || fallbackMembers[slug];

  if (!displayMember) {
    notFound();
  }

  const name = displayMember.name + " " + displayMember.lastname;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/team" className="hover:text-foreground">
                Our People
              </Link>
              <span>/</span>
              <span className="text-foreground">{name}</span>
            </nav>
          </div>
        </div>

        {/* Profile Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-3">
                {/* Profile Image */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                      {member?.image?.data ? (
                        <Image
                          src={
                            getStrapiMedia(member.image.url) ||
                            "/placeholder.svg"
                          }
                          alt={
                            member.image.alternativeText || displayMember.name
                          }
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <img
                          src={getStrapiMedia(displayMember.image.url)}
                          alt={displayMember?.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link href="/contact" className="block">
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-2 bg-transparent"
                          size="lg"
                        >
                          <Mail className="h-4 w-4" />
                          Contact
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-2 bg-transparent"
                        size="lg"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="lg:col-span-2">
                  <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                    {name}
                  </h1>
                  <p className="mb-2 text-xl font-medium text-primary">
                    {displayMember.role}
                  </p>
                  <div className="mb-8 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{displayMember.location}</span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-foreground">
                      Biography
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {displayMember.bio ||
                        "A dedicated professional with extensive experience in infrastructure engineering and project delivery. Committed to technical excellence and innovation in creating sustainable solutions for complex challenges."}
                    </p>
                  </div>

                  <div className="mt-12">
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                      Expertise
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Strategic Planning",
                        "Project Leadership",
                        "Technical Excellence",
                        "Stakeholder Management",
                        "Sustainable Design",
                        "Digital Innovation",
                      ].map((expertise) => (
                        <div
                          key={expertise}
                          className="rounded-lg border border-border bg-card p-4"
                        >
                          <p className="font-medium text-foreground">
                            {expertise}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12">
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                      Professional Qualifications
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          Chartered Professional Engineer (CPEng), Institution
                          of Engineers
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          Master of Engineering (MEng), Civil and Structural
                          Engineering
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          Project Management Professional (PMP)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Team */}
        <section className="border-t border-border bg-muted/30 py-12">
          <div className="container">
            <Button variant="outline" asChild className="gap-2 bg-transparent">
              <Link href="/team">
                <ArrowLeft className="h-4 w-4" />
                Back to team
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  let teamMembers: any[] = [];

  try {
    const teamData = await getTeamMembers(1, 100);
    teamMembers = teamData.data;
  } catch (error) {
    console.error("[v0] Error fetching team members for static params:", error);
  }

  const fallbackSlugs = ["sarah-chen", "james-mitchell"];

  if (teamMembers.length > 0) {
    return teamMembers.map((member) => ({
      slug: member.slug,
    }));
  }

  return fallbackSlugs.map((slug) => ({ slug }));
}

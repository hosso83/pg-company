import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionCTA } from "@/components/section-cta";

export const metadata: Metadata = {
  title: "Careers | Engineering Global",
  description:
    "Join our global team of engineering experts. Explore career opportunities in transport, energy, water, buildings, and more across 80+ countries.",
  keywords: [
    "engineering careers",
    "infrastructure jobs",
    "engineering vacancies",
    "global opportunities",
    "employee ownership",
    "engineering graduate programs",
  ],
  openGraph: {
    title: "Careers | Engineering Global",
    description:
      "Build your career with a global engineering consultancy working on world-changing projects.",
    type: "website",
  },
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Civil Engineer - Transport",
      location: "London, UK",
      type: "Full-time",
      department: "Transport",
    },
    {
      title: "Principal Architect",
      location: "Singapore",
      type: "Full-time",
      department: "Buildings",
    },
    {
      title: "Water Infrastructure Engineer",
      location: "Toronto, Canada",
      type: "Full-time",
      department: "Water",
    },
    {
      title: "Project Manager - Energy",
      location: "Dubai, UAE",
      type: "Full-time",
      department: "Energy",
    },
    {
      title: "Graduate Engineer",
      location: "Multiple Locations",
      type: "Graduate",
      department: "Various",
    },
    {
      title: "Digital Innovation Specialist",
      location: "New York, USA",
      type: "Full-time",
      department: "Digital",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroBanner
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
          alt="Build Your Career"
          title="Build Your Career With Us"
          description="Join a global team of experts working on high-profile projects that address some of the world's most pressing challenges."
        />
        <Breadcrumbs />
        {/* Why Join Us */}
        <section className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Why Join Us?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We offer more than just a job – we offer a career where you can
                make a real difference.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Employee Ownership
                </h3>
                <p className="text-muted-foreground">
                  As an employee-owned company, you'll have a real stake in our
                  success and share in our achievements.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Global Opportunities
                </h3>
                <p className="text-muted-foreground">
                  Work on world-class projects across 80+ countries and
                  collaborate with international teams.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Professional Growth
                </h3>
                <p className="text-muted-foreground">
                  Continuous learning and development opportunities to help you
                  reach your full potential.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mb-12">
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore current opportunities to join our team.
              </p>
            </div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  className="p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </div>
                      </div>
                    </div>
                    <Button className="gap-2 self-start md:self-center">
                      Apply now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
                Application Process
              </h2>

              <div className="grid gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Apply Online
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your application through our careers portal.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Initial Review
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our team reviews your qualifications and experience.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Interview
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Meet with our team to discuss the opportunity.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    4
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Join Us
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Start your journey with our global team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SectionCTA
          title={"Ready to make an impact?"}
          subtitle={
            "If you don't see a position that matches your skills, register your interest and we'll keep you informed of future opportunities."
          }
          primaryBtn={{ Text: "Register your interest", URL: "#" }}
        />
      </main>

      <Footer />
    </div>
  );
}

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { getContactPage } from "@/lib/strapi";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata = {
  title: "Contact Us | Engineering Global",
  description:
    "Get in touch with our team of experts. We're here to help with your engineering and consultancy needs.",
};

export default async function ContactPage() {
  // Fetch data from Strapi CMS
  let pageContent = null;

  try {
    const [contentData] = await Promise.all([getContactPage()]);
    pageContent = contentData;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    // Use fallback data when Strapi is not connected
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroBanner
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&q=80"
        alt="Contact Us"
        title={pageContent?.title || "Get in Touch"}
        description={
          pageContent?.description ||
          "Have a project in mind? Let's discuss how we can help."
        }
      />
      <Breadcrumbs />

      {/* Contact Form & Info */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-2 text-3xl font-bold text-foreground">
                Send us a message
              </h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service interested in</Label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="transport">Transport</option>
                    <option value="energy">Energy</option>
                    <option value="water">Water</option>
                    <option value="buildings">Buildings</option>
                    <option value="environment">Environment</option>
                    <option value="digital">Digital Services</option>
                    <option value="advisory">Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Contact information
                </h2>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">
                            London
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            United Kingdom
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-building2 size-3"
                          >
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                          </svg>
                          HQ
                        </span>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-map-pin mt-0.5 size-4 shrink-0 text-secondary"
                          >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span className="text-muted-foreground">
                            2 Martin House, 179-181 North End road, London W14
                            9NL, United Kingdom
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-phone size-4 shrink-0 text-secondary"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <a
                            href="tel:+442071234567"
                            className="text-muted-foreground transition-colors hover:text-secondary"
                          >
                            +44-776-939-8914
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail size-4 shrink-0 text-secondary"
                          >
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <a
                            href="mailto:contact@projectglobally.com"
                            className="text-muted-foreground transition-colors hover:text-secondary"
                          >
                            contact@projectglobally.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-muted/30 py-16 px-4 md:px-6">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Find us on the map
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted">
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">
                  Map placeholder - Integrate with Google Maps or similar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

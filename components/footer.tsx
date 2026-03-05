"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const footer_nav = [
  {
    title: "Engineering Global",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "Transport", href: "/services/transport" },
      { label: "Energy", href: "/services/energy" },
      { label: "Water", href: "/services/water" },
      { label: "Buildings", href: "/services/buildings" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Case studies", href: "/case-studies" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "LinkedIn", href: "/linkedIn" },
    ],
  },
];
export function Footer() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const base = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-6";
  const visible = "opacity-100 translate-y-0";

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground">
      <div className="container py-12">
        {/* Top grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footer_nav.map((section, index) => (
            <div
              key={section.title}
              className={`${base} delay-${index * 150} ${
                isVisible ? visible : hidden
              }`}
            >
              <h3 className="mb-4 uppercase text-sm md:text-md font-bold">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-md md:text-lg hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className={`${base} delay-[700ms] mt-12  pt-8 ${
            isVisible ? visible : hidden
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm ">© 2026 Project Globally</p>

            <Link
              href="#"
              onClick={scrollToTop}
              className="text-sm hover:text-secondary transition-colors"
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

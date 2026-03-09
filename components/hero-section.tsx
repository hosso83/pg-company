"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/strapi";
import { AdminInlineText } from "@/components/admin-inline-text";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export function HeroSection({ title, subtitle, imageUrl }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getStrapiMedia(imageUrl)})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}
      <div className="container relative flex h-full flex-col items-start justify-center">
        <div className="max-w-3xl space-y-6">
          <AdminInlineText
            as="h1"
            value={title}
            path="data.homepage.hero.title"
            commitMessage="Update homepage hero title"
            className={`text-balance text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl transition-all duration-700 drop-shadow-lg ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          />
          <AdminInlineText
            as="p"
            value={subtitle}
            path="data.homepage.hero.subtitle"
            commitMessage="Update homepage hero subtitle"
            className={`text-pretty text-xl text-white md:text-2xl transition-all duration-700 delay-200 drop-shadow-md ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          />
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                Explore our work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-accent/10" />
    </section>
  );
}

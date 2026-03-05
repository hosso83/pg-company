"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/strapi";
import { getStrapiMedia } from "@/lib/strapi";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { title, description, location, region, image, slug } = project;
  const projectHref =
    slug === "maikhan-pumped-storage-hydro" || slug === "maikhan"
      ? "/maikhan"
      : `/projects/${slug}`;

  // Handle both direct image object and nested data structure
  const imageUrl = image?.url || image?.url;
  const imageAlt = image?.alternativeText || image?.alternativeText || title;

  return (
    <Link href={projectHref}>
      <Card
        ref={ref as any}
        className={`group p-0 overflow-hidden transition-all hover:shadow-lg duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {imageUrl ? (
            <Image
              src={getStrapiMedia(imageUrl) || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image available</span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
            <span className=" text-left text-xs font-medium text-primary-foreground">
              {region}
            </span>
          </div>
        </div>
        <div className="px-6 pb-12">
          <h3 className="text-left m-2 text-xl font-semibold text-foreground group-hover:text-primary">
            {title}
          </h3>

          <p className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
            <MapPin className="text-muted-foreground" strokeWidth={1} />
            {location}
          </p>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
}

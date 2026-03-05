"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Zap, Droplet, Train } from "lucide-react";
import type { Service } from "@/lib/strapi";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const iconMap: Record<string, any> = {
  building: Building2,
  energy: Zap,
  water: Droplet,
  transport: Train,
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { title, description, icon, slug } = service.attributes;
  const Icon = iconMap[icon] || Building2;

  return (
    <Card
      ref={ref as any}
      className={`group relative overflow-hidden p-8 transition-all hover:shadow-lg duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-white">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-4xl font-bold text-muted-foreground/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mb-3 text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}

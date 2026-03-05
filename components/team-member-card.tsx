import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { TeamMember } from "@/lib/strapi";
import { getStrapiMedia } from "@/lib/strapi";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, role, location, image, slug } = member;

  return (
    <Link href={`/team/${slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg p-0 ">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {image && (
            <Image
              src={getStrapiMedia(image.url) || "/placeholder.svg"}
              alt={image?.alternativeText || name}
              fill
              className=" object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
          )}
        </div>
        <div className="p-6">
          <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary">
            {name}
          </h3>
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            {role}
          </p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </Card>
    </Link>
  );
}

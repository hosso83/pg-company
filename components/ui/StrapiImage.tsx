import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

interface StrapiImageProps {
  alt?: string;
  height?: number;
  width: number;
  className?: string;
}

export function StrapiImage({
  src,
  alt = "",
  height,
  width,
  className = "",
}: StrapiImageProps & { src: string }) {
  if (!src) return null;

  const imageUrl = getStrapiMedia(src);
  const fallbackImage = `https://placehold.co/${width}x${height || width}`;

  return (
    <Image
      src={imageUrl ?? fallbackImage}
      width={width}
      className={className}
      alt={alt}
    />
  );
}

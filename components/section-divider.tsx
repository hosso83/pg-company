import React from "react";

type DividerVariant = "image" | "color" | "line";
type HeightSize = "xs" | "sm" | "md" | "lg" | "xl";

interface SectionDividerProps {
  /**
   * The variant of the divider
   * @default "image"
   */
  variant?: DividerVariant;

  /**
   * Height size of the divider
   * @default "md"
   */
  height?: HeightSize;

  /**
   * Image URL (required when variant is "image")
   */
  imageSrc?: string;

  /**
   * Alt text for the image
   */
  imageAlt?: string;

  /**
   * Gradient overlay color (applies to image variant)
   * @default "from-background/20 via-transparent to-background/20"
   */
  gradientOverlay?: string;

  /**
   * Background color class (used for "color" variant)
   * @default "bg-muted"
   */
  backgroundColor?: string;

  /**
   * Line style (used for "line" variant)
   * @default "border-t border-border"
   */
  lineStyle?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

const heightMap: Record<HeightSize, string> = {
  xs: "h-[150px] md:h-[200px]",
  sm: "h-[200px] md:h-[300px]",
  md: "h-[400px] md:h-[500px]",
  lg: "h-[500px] md:h-[600px]",
  xl: "h-[600px] md:h-[700px]",
};

export function SectionDivider({
  variant = "image",
  height = "md",
  imageSrc,
  imageAlt = "Divider",
  gradientOverlay = "from-background/20 via-transparent to-background/20",
  backgroundColor = "bg-muted",
  lineStyle = "border-t border-border",
  className = "",
}: SectionDividerProps) {
  const heightClass = heightMap[height];
  const baseClass = `relative w-full ${heightClass} ${className}`;

  if (variant === "image" && imageSrc) {
    return (
      <div className={baseClass}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b ${gradientOverlay}`}
        />
      </div>
    );
  }

  if (variant === "color") {
    return <div className={`${baseClass} ${backgroundColor}`} />;
  }

  if (variant === "line") {
    return (
      <div className={`w-full ${lineStyle}`}>
        <div className={`relative w-full ${heightClass}`} />
      </div>
    );
  }

  return null;
}

import Image from "next/image";

const heightMap = {
  xs: "h-8",
  sm: "h-16",
  md: "h-24",
  lg: "h-40",
  xl: "h-64",
};

export function SectionBreak({ data }: { data: { height?: keyof typeof heightMap; variant?: string; image?: { url: string }; overlay?: boolean } }) {
  const heightClass = heightMap[data.height || "md"];

  if (data.variant === "image" && data.image) {
    return (
      <div className={`relative w-full ${heightClass}`}>
        <Image
          src={data.image.url}
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
        {data.overlay && <div className="absolute inset-0 bg-black/30" />}
      </div>
    );
  }

  // Default: blank space
  return <div className={heightClass} />;
}

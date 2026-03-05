interface HeroBannerProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

export function HeroBanner({
  image,
  title,
  description,
  alt,
}: HeroBannerProps) {
  return (
    <section className="relative h-[30vh] w-full overflow-hidden bg-cover bg-center">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative flex h-full flex-col items-center justify-end pb-16 px-4 md:pb-20">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="mb-4 text-balance text-5xl font-bold drop-shadow-lg md:text-6xl">
            {title}
          </h1>
          <p className="text-pretty text-lg drop-shadow-md opacity-95 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

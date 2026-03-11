"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ButtonCTA {
  Text: string;
  URL: string;
}

interface SectionCTAProps {
  title: string;
  subtitle: string;
  primaryBtn?: ButtonCTA;
  secondaryBtn?: ButtonCTA;
}

export function SectionCTA({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
}: SectionCTAProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.25,
    triggerOnce: true,
  });

  const base = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-8";
  const visible = "opacity-100 translate-y-0";

  return (
    <section ref={ref} className="cta w-full overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h1
            className={`${base} mb-8 delay-0 text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
              isVisible ? visible : hidden
            }`}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className={`${base} delay-150 mb-8 text-lg md:text-2xl ${
              isVisible ? visible : hidden
            }`}
          >
            {subtitle}
          </p>

          {/* Buttons */}
          <div
            className={`${base} delay-300 flex flex-wrap justify-center gap-4 ${
              isVisible ? visible : hidden
            }`}
          >
            {primaryBtn && (
              <Link href={primaryBtn.URL}>
                <Button size="lg" variant="default">
                  {primaryBtn.Text}
                </Button>
              </Link>
            )}

            {secondaryBtn && (
              <Link href={secondaryBtn.URL}>
                <Button size="lg" variant="outline">
                  {secondaryBtn.Text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

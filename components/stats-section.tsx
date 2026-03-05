"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const stats = [
    { value: "80+", label: "Countries worldwide" },
    { value: "19,000+", label: "Expert employees" },
    { value: "150+", label: "Years of experience" },
    { value: "£1.5bn", label: "Annual revenue" },
  ]

  return (
    <section ref={ref as any} className="bg-primary py-16 text-primary-foreground">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 text-4xl font-bold md:text-5xl">{stat.value}</div>
              <div className="text-sm opacity-90 md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

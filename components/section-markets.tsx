"use client";

import { useState, useEffect } from "react";
import { getProjects } from "@/lib/strapi";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./service-card";

export default function MarketSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsData = await getProjects(1, 6);
        setProjects(projectsData.data || []);
      } catch (err) {
        console.error("Error fetching data from Strapi:", err);
        setError("Failed to load projects");
        // Optionally set fallback data here if desired
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section
      id="markets"
      className="py-20 bg-muted text-primary flex justify-center"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="small-title" data-animate="fade">
            Markets
          </div>
          <h2 className="uppercase text-3xl text-left md:text-huge font-normal mb-4">
            Expertise
          </h2>
          <p className="text-2xl leading-10 text-left max-w-5xl mb-8">
            Whatever your needs, our technical experts are here to help. We
            mobilise our rich heritage in core markets and apply innovation to
            solve today's challenges.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Buildings",
                description:
                  "We work across a broad range of building types including commercial, education, healthcare, and residential projects.",
                icon: "building",
                slug: "buildings",
              },
              {
                title: "Energy",
                description:
                  "Unique breadth of energy sector technical expertise to co-create solutions and help you deliver them.",
                icon: "energy",
                slug: "energy",
              },
              {
                title: "Transport",
                description:
                  "Creating solutions that are intuitive and safe to use, maximising wider social, health and environmental outcomes.",
                icon: "transport",
                slug: "transport",
              },
              {
                title: "Water",
                description:
                  "More than a century of water management experience in supply, wastewater, irrigation, and flood protection.",
                icon: "water",
                slug: "water",
              },
              {
                title: "Environment & Society",
                description:
                  "Climate, environment and social experts support sustainability throughout the project lifecycle.",
                icon: "building",
                slug: "environment",
              },
            ].map((service, index) => (
              <ServiceCard
                key={index}
                service={{
                  id: index,
                  attributes: service,
                }}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

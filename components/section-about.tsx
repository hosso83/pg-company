"use client";

import { useState, useEffect } from "react";
import { getProjects } from "@/lib/strapi";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
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
      id="projects"
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
            About Us
          </div>
          <h2 className="uppercase text-3xl text-left md:text-9xl font-normal mb-4">
            Who we are
          </h2>
          <p className="text-2xl leading-10 text-left max-w-5xl mb-8">
            We plan, design, deliver and maintain the transport, energy, water,
            buildings and wider infrastructure that is integral to people’s
            daily lives.
          </p>
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="gap-2">
              About Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

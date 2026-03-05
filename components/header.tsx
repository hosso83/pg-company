"use client";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Markets & Services", href: "/markets_services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      // Update scrolled state
      setIsScrolled(currentScrollPos > 50);

      if (navbar) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-150px";
        }
        prevScrollpos = currentScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-primary-foreground shadow-lg"
          : "bg-transparent text-white"
      }`}
      style={{ transition: "top 0.3s, background-color 0.3s" }}
    >
      <div className="container flex h-32 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 no-hover group">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded transition-colors ${
              isScrolled ? "bg-primary-foreground" : "bg-white"
            } group-hover:bg-secondary`}
          >
            <span className="text-lg font-bold text-primary">PG</span>
          </div>
          <span className="text-xl font-semibold uppercase group-hover:text-secondary">
            Project Globally
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex ">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav_link uppercase hover:text-secondary font-normal transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

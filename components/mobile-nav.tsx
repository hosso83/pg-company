"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="md:hidden size-9" aria-hidden="true" />;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="p-8 text-left">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to different sections of the website
        </SheetDescription>
        <nav className="flex flex-col gap-4 m-8">
          <Link
            href="/about"
            className="nav_mobile_link"
            onClick={() => setOpen(false)}
          >
            About us
          </Link>
          <Link
            href="/projects"
            className="nav_mobile_link"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/markets_services"
            className="nav_mobile_link"
            onClick={() => setOpen(false)}
          >
            Markets & Services
          </Link>
          <Link
            href="/careers"
            className="nav_mobile_link"
            onClick={() => setOpen(false)}
          >
            Careers
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button className="w-full mt-4">Contact us</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

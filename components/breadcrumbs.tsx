"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export function Breadcrumbs() {
  const pathname = usePathname();

  // Split pathname and filter out empty segments
  const segments = pathname.split("/").filter((segment) => segment);

  // Optional: Customize display names (e.g., "admin-dashboard" → "Admin Dashboard")
  const formatSegment = (segment: string) => {
    return segment
      .replace(/-/g, " ")
      .replace(/_/g, " & ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // If on homepage, show nothing or just "Home"
  if (segments.length === 0) {
    return null; // or <div>Home</div>
  }

  return (
    <div className="border-b border-border bg-primary text-primary-foreground uppercase">
      <div className="container py-4">
        <nav aria-label="Breadcrumb" className="flex items-center text-sm">
          <ol className="flex items-center space-x-1">
            {/* Home link */}
            <li>
              <Link href="/" className="hover:text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </Link>
            </li>

            {segments.map((segment, index) => {
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const isLast = index === segments.length - 1;

              return (
                <Fragment key={href}>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mx-2" />
                  </li>
                  <li>
                    {isLast ? (
                      <span className="font-medium transition-colors">
                        {formatSegment(segment)}
                      </span>
                    ) : (
                      <Link href={href}>{formatSegment(segment)}</Link>
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}

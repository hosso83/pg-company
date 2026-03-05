"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Error caught:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="rounded-full bg-destructive/10 p-8">
              <AlertTriangle className="h-24 w-24 text-destructive" />
            </div>
          </div>

          <div className="mb-12 space-y-4 animate-fade-in animate-delay-200">
            <h2 className="heading-2 text-foreground">Something Went Wrong</h2>
            <p className="subheading max-w-2xl mx-auto">
              We encountered an unexpected error. Our team has been notified and we're working to fix the issue.
            </p>
            {error.digest && <p className="text-sm text-muted-foreground font-mono">Error ID: {error.digest}</p>}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in animate-delay-300">
            <Button onClick={reset} size="lg" className="uppercase tracking-wider">
              <RefreshCcw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button asChild size="lg" variant="outline" className="uppercase tracking-wider bg-transparent">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
          </div>

          <div className="mt-16 animate-fade-in animate-delay-400">
            <p className="mb-6 text-sm text-muted-foreground uppercase tracking-wider">Need Help?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

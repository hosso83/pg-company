"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
          <div className="container max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-destructive/10 p-8">
                <AlertTriangle className="h-24 w-24 text-destructive" />
              </div>
            </div>

            <div className="mb-12 space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Critical Error</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A critical error has occurred. Please refresh the page or return to the homepage.
              </p>
              {error.digest && <p className="text-sm text-muted-foreground font-mono">Error ID: {error.digest}</p>}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button onClick={reset} size="lg" className="uppercase tracking-wider">
                Refresh Page
              </Button>
              <Button asChild size="lg" variant="outline" className="uppercase tracking-wider bg-transparent">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="mb-4 text-9xl font-bold text-primary md:text-[12rem]">404</h1>
            <div className="mx-auto mb-6 h-1 w-24 bg-accent"></div>
          </div>

          <div className="mb-12 space-y-4 animate-fade-in animate-delay-200">
            <h2 className="heading-2 text-foreground">Page Not Found</h2>
            <p className="subheading max-w-2xl mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in animate-delay-300">
            <Button asChild size="lg" className="uppercase tracking-wider">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="uppercase tracking-wider bg-transparent">
              <Link href="/contact">
                <Search className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="mt-16 animate-fade-in animate-delay-400">
            <p className="mb-6 text-sm text-muted-foreground uppercase tracking-wider">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/about"
                className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

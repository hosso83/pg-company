import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-16 w-16 animate-spin text-accent mx-auto mb-4" />
        <p className="text-lg font-medium uppercase tracking-wider text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

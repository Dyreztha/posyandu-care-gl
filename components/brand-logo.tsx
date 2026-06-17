import Link from "next/link"
import { Baby } from "lucide-react"

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/dashboard" className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
        <Baby className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-2xl font-bold tracking-wide ${
            light ? "text-primary-foreground" : "text-primary"
          }`}
        >
          POSYANDU
        </span>
        <span
          className={`block font-display text-base ${
            light ? "text-primary-foreground/90" : "text-primary/80"
          }`}
        >
          Ceria
        </span>
      </span>
    </Link>
  )
}

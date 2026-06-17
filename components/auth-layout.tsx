import { BrandLogo } from "@/components/brand-logo"
import { Heart, Flower } from "lucide-react"
import type React from "react"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5">
        <BrandLogo light />
        <div className="flex items-end gap-2" aria-hidden="true">
          {["text-secondary", "text-primary/40", "text-primary", "text-card"].map(
            (color, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="h-6 w-px bg-primary/30" />
                <Heart className={`h-5 w-5 fill-current ${color}`} />
              </div>
            ),
          )}
        </div>
      </header>

      {/* Decorative flower */}
      <Flower
        className="absolute left-8 top-44 z-0 h-12 w-12 fill-primary text-accent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 items-center justify-center px-5 pb-12">
        {children}
      </div>

      {/* Decorative baby blocks */}
      <div
        className="pointer-events-none absolute bottom-10 left-4 z-0 flex flex-col gap-1"
        aria-hidden="true"
      >
        {["B", "A", "B", "Y"].map((l, i) => (
          <span
            key={i}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[oklch(0.82_0.06_70)] font-display text-lg font-bold text-[oklch(0.4_0.08_60)] shadow-sm"
          >
            {l}
          </span>
        ))}
      </div>
    </main>
  )
}

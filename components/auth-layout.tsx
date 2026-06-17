import { BrandLogo } from "@/components/brand-logo"
import { Heart, Flower } from "lucide-react"
import type React from "react"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-[#f7a8c4] to-[#f7a8c4]">
      {/* Header dengan POSYANDU Ceria */}
      <header className="relative z-10 flex items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center">
            <span className="text-xl font-bold text-pink-500">👧</span>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold font-display">POSYANDU</h1>
            <p className="text-sm font-display">Ceria</p>
          </div>
        </div>
        <div className="flex items-end gap-3" aria-hidden="true">
          <Heart className="h-6 w-6 text-red-400 fill-red-400" />
          <Heart className="h-8 w-8 text-red-600 fill-red-600" />
          <Heart className="h-6 w-6 text-blue-300" />
          <Heart className="h-8 w-8 text-blue-400 fill-blue-400" />
          <Heart className="h-6 w-6 text-brown-600 fill-brown-600" />
          <Heart className="h-8 w-8 text-white fill-white" />
        </div>
      </header>

      {/* Decorative flower - top left */}
      <div className="absolute left-6 top-36 z-0">
        <Flower className="h-16 w-16 fill-purple-400 text-yellow-300" aria-hidden="true" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-5 pb-12">
        {children}
      </div>

      {/* Decorative baby blocks - bottom left */}
      <div
        className="pointer-events-none absolute bottom-16 left-4 z-0 flex flex-col gap-1"
        aria-hidden="true"
      >
        {["B", "A", "B", "Y"].map((l, i) => (
          <span
            key={i}
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 font-display text-2xl font-bold text-amber-700 shadow-lg"
            style={{
              backgroundColor: "rgb(217, 119, 6)",
              color: "white",
            }}
          >
            {l}
          </span>
        ))}
      </div>

      {/* Decorative baby illustration - bottom right (placeholder) */}
      <div className="absolute bottom-0 right-0 z-0 text-6xl">👶</div>
    </main>
  )
}

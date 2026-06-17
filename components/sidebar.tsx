"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  UserRound,
  Baby,
  ClipboardList,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/brand-logo"

const menu = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/profil", label: "Profil Posyandu", icon: UserRound },
  { href: "/data-anak", label: "Data Anak", icon: Baby },
  { href: "/kegiatan", label: "Laporan Kader", icon: ClipboardList },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  // Guard against null pathname (can be null in some runtimes)
  const pathname = usePathname() ?? ""
  return (
    <nav className="flex flex-col gap-1">
      {menu.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(href + "/")
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-2xl px-4 py-3 font-display text-base font-semibold transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
              active
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-primary hover:bg-primary/10 active:bg-primary/20",
            )}
          >
            <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            {label}
          </Link>
        )
      })}
      <div className="my-2 border-t border-dashed border-primary/30" />
      <Link
        href="/login"
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-2xl px-4 py-3 font-display text-base font-semibold text-primary transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary hover:bg-primary/10 active:bg-primary/20"
        aria-current={undefined}
      >
        <LogOut className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
        Keluar
      </Link>
    </nav>
  )
}

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-primary/20 bg-background px-4 py-3 lg:hidden">
        <BrandLogo />
        <button
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          className="rounded-xl bg-primary p-2 text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72 bg-background p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-2xl font-bold text-primary">
                Main Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="rounded-lg p-1 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <NavLinks onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col gap-6 border-r border-primary/20 bg-background p-6 lg:flex">
        <BrandLogo />
        <div>
          <h2 className="mb-3 font-display text-3xl font-bold text-primary">
            Main Menu
          </h2>
          <NavLinks />
        </div>
      </aside>
    </>
  )
}

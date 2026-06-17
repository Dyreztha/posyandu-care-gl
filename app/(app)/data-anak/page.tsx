"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { dataAnak } from "@/lib/data"
import { Search, Plus, ChevronRight } from "lucide-react"

const filters = ["Semua", "Normal", "Stunting"] as const

export default function DataAnakPage() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState<(typeof filters)[number]>("Semua")

  const filtered = dataAnak.filter((a) => {
    const matchQuery = a.nama.toLowerCase().includes(query.toLowerCase())
    const matchFilter = filter === "Semua" || a.status === filter
    return matchQuery && matchFilter
  })

  return (
    <div className="mx-auto w-full max-w-5xl">
      <PageHeader title="Data Anak" subtitle="Daftar balita yang terdaftar di Posyandu Ceria" />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama anak..."
            className="w-full rounded-full border-2 border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
          />
        </div>
        <Link
          href="/data-anak/tambah"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_4px_0_0_var(--color-primary-shadow)] transition active:translate-y-0.5 active:shadow-[0_2px_0_0_var(--color-primary-shadow)]"
        >
          <Plus className="h-4 w-4" />
          Input Pengukuran
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={
              "rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition " +
              (filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:bg-secondary/50")
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Link
            key={a.id}
            href={`/data-anak/${a.id}`}
            className="card-fun group flex items-center gap-4 bg-card p-4 transition hover:-translate-y-0.5"
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-bold text-foreground"
              style={{ backgroundColor: a.avatarBg }}
              aria-hidden="true"
            >
              {a.nama.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display font-bold text-foreground">{a.nama}</p>
              <p className="text-xs text-muted-foreground">{a.usia}</p>
              <span
                className={
                  "mt-1 inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold " +
                  (a.status === "Normal"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-rose-100 text-rose-700")
                }
              >
                {a.status}
              </span>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-muted-foreground">Tidak ada anak yang cocok.</p>
        )}
      </div>
    </div>
  )
}

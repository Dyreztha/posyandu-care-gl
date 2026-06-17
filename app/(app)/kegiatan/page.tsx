"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { dataKegiatan } from "@/lib/data"
import { Search, Plus, CalendarDays } from "lucide-react"

const months = [
  "Semua Bulan",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
]

export default function KegiatanPage() {
  const [query, setQuery] = useState("")
  const [month, setMonth] = useState("Semua Bulan")

  const filtered = dataKegiatan.filter((k) => {
    const matchQuery =
      k.namaKegiatan.toLowerCase().includes(query.toLowerCase()) ||
      k.kaderBertugas.toLowerCase().includes(query.toLowerCase())
    const matchMonth = month === "Semua Bulan" || k.tanggal.includes(month)
    return matchQuery && matchMonth
  })

  return (
    <div className="mx-auto w-full max-w-5xl">
      <PageHeader title="Daftar Kegiatan Kader" subtitle="Catatan kegiatan posyandu setiap bulan" />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari kegiatan atau kader..."
              className="w-full rounded-full border-2 border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full rounded-full border-2 border-border bg-card py-2.5 pl-10 pr-8 text-sm outline-none focus:border-primary sm:w-48"
            >
              {months.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>
        <Link
          href="/kegiatan/tambah"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_4px_0_0_var(--color-primary-shadow)] transition active:translate-y-0.5 active:shadow-[0_2px_0_0_var(--color-primary-shadow)]"
        >
          <Plus className="h-4 w-4" />
          Tambah Kegiatan
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border-2 border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="bg-secondary/60 text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-3 font-bold">No</th>
                <th className="px-4 py-3 font-bold">Tanggal</th>
                <th className="px-4 py-3 font-bold">Nama Kegiatan</th>
                <th className="px-4 py-3 font-bold">Kader Bertugas</th>
                <th className="px-4 py-3 font-bold">Peserta</th>
                <th className="px-4 py-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((k, i) => (
                <tr key={k.id} className="border-t border-border/70 transition hover:bg-secondary/30">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">{k.tanggal}</td>
                  <td className="px-4 py-3">{k.namaKegiatan}</td>
                  <td className="px-4 py-3 text-muted-foreground">{k.kaderBertugas}</td>
                  <td className="px-4 py-3">{k.jumlahPeserta}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        "inline-flex rounded-full px-3 py-1 text-xs font-bold " +
                        (k.status === "SUCCESS"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700")
                      }
                    >
                      {k.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                    Tidak ada kegiatan yang cocok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Phone, Mail, MapPin, Heart } from "lucide-react"
import { profilPosyandu, dataKader } from "@/lib/data"

type Tab = "profil" | "kader"

function HangingSign({ title }: { title: string }) {
  return (
    <div className="relative mx-auto mt-2 w-fit">
      <div className="absolute -top-5 left-4 h-5 w-px bg-primary/40" />
      <div className="absolute -top-5 right-4 h-5 w-px bg-primary/40" />
      <div className="rounded-2xl border-2 border-primary/30 bg-card px-8 py-3 text-center shadow-md">
        <h1 className="whitespace-pre-line font-display text-2xl font-bold leading-tight text-primary">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default function ProfilPage() {
  const [tab, setTab] = useState<Tab>("profil")

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            aria-label="Kembali ke dashboard"
            className="text-primary"
          >
            <Home className="h-8 w-8 fill-primary/20" />
          </Link>
          <Heart className="h-7 w-7 fill-primary text-primary" aria-hidden="true" />
        </div>
        <HangingSign title={tab === "profil" ? "Profil\nPosyandu" : "Kader\nPosyandu"} />
      </div>

      {/* Tabs */}
      <div className="mt-6 flex justify-center gap-10 px-5">
        {(["profil", "kader"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-xl border-2 px-6 py-1.5 font-display text-lg font-semibold capitalize transition ${
              tab === t
                ? "border-primary bg-primary text-primary-foreground shadow-md"
                : "border-primary/40 bg-card text-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-3xl px-5 py-7">
        {tab === "profil" ? <ProfilContent /> : <KaderContent />}
      </div>
    </div>
  )
}

function ProfilContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-display text-2xl font-bold text-primary">Tentang Kami</h2>
        <ul className="mt-3 space-y-3">
          {profilPosyandu.tentang.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-primary">Layanan Kami</h2>
        <ul className="mt-3 space-y-2">
          {profilPosyandu.layanan.map((l, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {l}
            </li>
          ))}
        </ul>
      </section>

      <footer className="grid gap-3 rounded-2xl bg-primary/10 p-5 text-sm text-foreground sm:grid-cols-2">
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" /> {profilPosyandu.telepon}
        </span>
        <span className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" /> {profilPosyandu.email}
        </span>
        <span className="flex items-start gap-2 sm:col-span-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          {profilPosyandu.alamat}
        </span>
      </footer>
    </div>
  )
}

function KaderContent() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-sky text-foreground" style={{ backgroundColor: "oklch(0.8 0.09 230)" }}>
              {["NO", "NAMA", "ALAMAT", "TELEPON", "PEKERJAAN", "UMUR"].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-bold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataKader.map((k) => (
              <tr key={k.no} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-semibold">{k.no}</td>
                <td className="px-4 py-3">{k.nama}</td>
                <td className="px-4 py-3">{k.alamat}</td>
                <td className="px-4 py-3">{k.telepon}</td>
                <td className="px-4 py-3">{k.pekerjaan}</td>
                <td className="px-4 py-3">{k.umur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { FunCard } from "@/components/fun-card"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

const kaderNames = ["Ibu Siti Aminah", "Ibu Dewi Lestari", "Ibu Rina Wati", "Ibu Sri Mulyani"]
const kegiatanTypes = [
  "Penimbangan Balita",
  "Imunisasi",
  "Pemberian Vitamin A",
  "Penyuluhan Gizi",
  "Pemeriksaan Ibu Hamil",
]

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  "w-full rounded-2xl border-2 border-border bg-card px-4 py-2.5 text-sm outline-none transition focus:border-primary"

export default function TambahKegiatanPage() {
  const router = useRouter()
  const [saved, setSaved] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => router.push("/kegiatan"), 900)
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <PageHeader title="Tambah Kegiatan Kader" subtitle="Isi formulir kegiatan posyandu" />

      <div className="mt-4">
        <Link
          href="/kegiatan"
          className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Link>
      </div>

      <FunCard className="mt-4 p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Nama Kader">
            <select className={inputClass} required defaultValue="">
              <option value="" disabled>
                Pilih kader
              </option>
              {kaderNames.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>

          <Field label="Jenis Kegiatan">
            <select className={inputClass} required defaultValue="">
              <option value="" disabled>
                Pilih kegiatan
              </option>
              {kegiatanTypes.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>

          <Field label="Tanggal Kegiatan">
            <input type="date" className={inputClass} required />
          </Field>

          <Field label="Lokasi">
            <input type="text" placeholder="Balai RW 03" className={inputClass} required />
          </Field>

          <Field label="Jumlah Peserta">
            <input type="number" min={0} placeholder="0" className={inputClass} />
          </Field>

          <Field label="Status">
            <select className={inputClass} defaultValue="Terjadwal">
              <option>Terjadwal</option>
              <option>Selesai</option>
            </select>
          </Field>

          <div className="sm:col-span-2">
            <Field label="Catatan Kegiatan">
              <textarea
                rows={3}
                placeholder="Tuliskan ringkasan kegiatan..."
                className={inputClass + " resize-none"}
              />
            </Field>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={saved}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_4px_0_0_var(--color-primary-shadow)] transition active:translate-y-0.5 active:shadow-[0_2px_0_0_var(--color-primary-shadow)] disabled:opacity-70"
            >
              <Save className="h-4 w-4" />
              {saved ? "Tersimpan!" : "Simpan Kegiatan"}
            </button>
          </div>
        </form>
      </FunCard>
    </div>
  )
}

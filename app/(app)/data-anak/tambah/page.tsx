"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { FunCard } from "@/components/fun-card"
import { ArrowLeft, Save } from "lucide-react"

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

export default function TambahAnakPage() {
  const router = useRouter()
  const [saved, setSaved] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => router.push("/data-anak"), 900)
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <PageHeader title="Input Data Pengukuran" subtitle="Catat hasil pengukuran balita" />

      <div className="mt-4">
        <Link
          href="/data-anak"
          className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Link>
      </div>

      <FunCard className="mt-4 p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <p className="font-display text-sm font-bold text-primary">Data Anak</p>
          </div>

          <Field label="Nama Lengkap Anak">
            <input type="text" placeholder="Nama anak" className={inputClass} required />
          </Field>

          <Field label="Jenis Kelamin">
            <select className={inputClass} required defaultValue="">
              <option value="" disabled>
                Pilih jenis kelamin
              </option>
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </Field>

          <Field label="Tempat Lahir">
            <input type="text" placeholder="Kota kelahiran" className={inputClass} />
          </Field>

          <Field label="Tanggal Lahir">
            <input type="date" className={inputClass} required />
          </Field>

          <Field label="Nama Orang Tua">
            <input type="text" placeholder="Nama ibu / ayah" className={inputClass} />
          </Field>

          <Field label="Tanggal Pengukuran">
            <input type="date" className={inputClass} required />
          </Field>

          <div className="sm:col-span-2 mt-2">
            <p className="font-display text-sm font-bold text-primary">Hasil Pengukuran</p>
          </div>

          <Field label="Berat Badan (kg)">
            <input type="number" step="0.1" min={0} placeholder="0.0" className={inputClass} required />
          </Field>

          <Field label="Tinggi Badan (cm)">
            <input type="number" step="0.1" min={0} placeholder="0.0" className={inputClass} required />
          </Field>

          <Field label="Lingkar Kepala (cm)">
            <input type="number" step="0.1" min={0} placeholder="0.0" className={inputClass} />
          </Field>

          <Field label="Status Gizi">
            <select className={inputClass} defaultValue="Normal">
              <option>Normal</option>
              <option>Stunting</option>
            </select>
          </Field>

          <div className="sm:col-span-2">
            <Field label="Catatan / Saran Kader">
              <textarea
                rows={3}
                placeholder="Tuliskan catatan kesehatan anak..."
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
              {saved ? "Tersimpan!" : "Simpan Data"}
            </button>
          </div>
        </form>
      </FunCard>
    </div>
  )
}

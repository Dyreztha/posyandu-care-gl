import { notFound } from "next/navigation"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { FunCard } from "@/components/fun-card"
import { GrowthChart } from "@/components/growth-chart"
import { dataAnak } from "@/lib/data"
import { ArrowLeft, Check, X, Weight, Ruler, CircleDashed, Lightbulb, StickyNote } from "lucide-react"

export function generateStaticParams() {
  return dataAnak.map((a) => ({ id: a.id }))
}

export default async function DetailAnakPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const anak = dataAnak.find((a) => a.id === id)
  if (!anak) notFound()

  const stats = [
    { label: "Berat Badan", value: `${anak.beratBadan} kg`, icon: Weight },
    { label: "Tinggi Badan", value: `${anak.tinggiBadan} cm`, icon: Ruler },
    { label: "Lingkar Kepala", value: `${anak.lingkarKepala} cm`, icon: CircleDashed },
  ]

  return (
    <div className="mx-auto w-full max-w-5xl">
      <PageHeader title={anak.nama} subtitle={`${anak.usia} · ${anak.jenisKelamin}`} />

      <div className="mt-4">
        <Link
          href="/data-anak"
          className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Anak
        </Link>
      </div>

      {/* Bio + status */}
      <FunCard className="mt-4 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl font-display text-3xl font-bold text-foreground"
          style={{ backgroundColor: anak.avatarBg }}
          aria-hidden="true"
        >
          {anak.nama.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-xl font-bold text-foreground">{anak.nama}</h2>
          <p className="text-sm text-muted-foreground">{anak.tempatTanggalLahir}</p>
          <span
            className={
              "mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold " +
              (anak.status === "Normal" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700")
            }
          >
            Status: {anak.status}
          </span>
        </div>
      </FunCard>

      {/* Measurement stats */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <FunCard key={s.label} className="flex items-center gap-3 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="font-display text-lg font-bold text-foreground">{s.value}</p>
            </div>
          </FunCard>
        ))}
      </div>

      {/* Growth chart */}
      <FunCard className="mt-4 p-6">
        <h3 className="font-display text-lg font-bold text-foreground">Grafik Pertumbuhan</h3>
        <p className="mb-4 text-sm text-muted-foreground">Perkembangan berat dan tinggi badan</p>
        <GrowthChart data={anak.grafik} />
      </FunCard>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Immunization */}
        <FunCard className="p-6">
          <h3 className="font-display text-lg font-bold text-foreground">Riwayat Imunisasi</h3>
          <ul className="mt-4 space-y-2">
            {anak.imunisasi.map((im) => (
              <li
                key={im.nama}
                className="flex items-center justify-between rounded-2xl border-2 border-border bg-background/60 px-4 py-2.5"
              >
                <span className="text-sm font-medium text-foreground">{im.nama}</span>
                {im.sudah ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    <Check className="h-3.5 w-3.5" /> Sudah
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-bold text-rose-700">
                    <X className="h-3.5 w-3.5" /> Belum
                  </span>
                )}
              </li>
            ))}
          </ul>
        </FunCard>

        {/* Notes & advice */}
        <div className="flex flex-col gap-4">
          <FunCard className="p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <StickyNote className="h-5 w-5 text-primary" />
              Catatan Kader
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{anak.catatan}</p>
          </FunCard>
          <FunCard className="p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Lightbulb className="h-5 w-5 text-accent" />
              Saran
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{anak.saran}</p>
          </FunCard>
        </div>
      </div>
    </div>
  )
}

import { Users, Smile, Frown, ShieldCheck } from "lucide-react"
import { FunCard } from "@/components/fun-card"
import { StatusDonut, StatusTrend } from "@/components/dashboard-charts"
import { dashboardStats } from "@/lib/data"

const stats = [
  {
    label: "Total Anak",
    value: dashboardStats.totalAnak,
    sub: "Anak Terdaftar",
    icon: Users,
    color: "text-primary",
  },
  {
    label: "Normal",
    value: dashboardStats.normal,
    sub: "Anak",
    icon: Smile,
    color: "text-[oklch(0.6_0.18_150)]",
  },
  {
    label: "Stunting",
    value: dashboardStats.stunting,
    sub: "Anak",
    icon: Frown,
    color: "text-destructive",
  },
  {
    label: "Imunisasi Lengkap",
    value: `${dashboardStats.imunisasiLengkap}%`,
    sub: "Anak",
    icon: ShieldCheck,
    color: "text-[oklch(0.5_0.16_280)]",
  },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-8">
      <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>

      {/* Stat cards */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <FunCard key={s.label} className="p-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold ${s.color}`}>{s.label}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-display text-3xl font-bold text-foreground">
                {s.value}
              </span>
              <s.icon className={`h-6 w-6 ${s.color}`} aria-hidden="true" />
            </div>
            <span className="text-xs text-muted-foreground">{s.sub}</span>
          </FunCard>
        ))}
      </div>

      {/* Charts */}
      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">
        Grafik Status Kesehatan
      </h2>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <FunCard className="border-2 border-primary/40 p-6">
          <StatusDonut />
        </FunCard>
        <FunCard className="p-6">
          <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
            Tren Bulanan
          </h3>
          <StatusTrend />
        </FunCard>
      </div>
    </div>
  )
}

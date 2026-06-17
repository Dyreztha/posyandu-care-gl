"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { statusKesehatanTrend, dashboardStats } from "@/lib/data"

const donutData = [
  { name: "Normal", value: 60, color: "oklch(0.7 0.18 150)" },
  { name: "Stunting", value: 40, color: "oklch(0.62 0.22 18)" },
]

export function StatusDonut() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative h-40 w-40 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={donutData}
              dataKey="value"
              innerRadius={48}
              outerRadius={70}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              stroke="none"
            >
              {donutData.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-bold text-foreground">
            {dashboardStats.imunisasiLengkap}%
          </span>
          <span className="text-xs text-muted-foreground">Normal</span>
        </div>
      </div>
      <ul className="space-y-3">
        {donutData.map((d) => (
          <li key={d.name} className="flex items-center gap-2 text-sm">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span className="font-semibold text-foreground">{d.value}%</span>
            <span className="text-muted-foreground">{d.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function StatusTrend() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={statusKesehatanTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="oklch(0.88 0.04 350)" />
          <XAxis dataKey="bulan" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "1px solid oklch(0.85 0.05 350)",
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="normal"
            name="Normal"
            stroke="oklch(0.7 0.18 150)"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="stunting"
            name="Stunting"
            stroke="oklch(0.62 0.22 18)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

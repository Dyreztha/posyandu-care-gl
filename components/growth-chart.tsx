"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import type { GrowthPoint } from "@/lib/data"

export function GrowthChart({ data }: { data: GrowthPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 12, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" />
          <XAxis dataKey="label" tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
          <YAxis tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "2px solid var(--color-border)",
              fontSize: 12,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="berat"
            name="Berat (kg)"
            stroke="var(--color-primary)"
            strokeWidth={3}
            dot={{ r: 4, fill: "var(--color-primary)" }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="tinggi"
            name="Tinggi (cm)"
            stroke="var(--color-accent)"
            strokeWidth={3}
            dot={{ r: 4, fill: "var(--color-accent)" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Du", performance: 65, recovery: 78 },
  { day: "Se", performance: 72, recovery: 70 },
  { day: "Ch", performance: 80, recovery: 65 },
  { day: "Pa", performance: 75, recovery: 72 },
  { day: "Ju", performance: 85, recovery: 68 },
  { day: "Sh", performance: 78, recovery: 75 },
  { day: "Ya", performance: 90, recovery: 82 },
]

export function ProgressChart() {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Haftalik Progress</h3>
          <p className="text-sm text-muted-foreground">Natija va Tiklanish</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Natija</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">Tiklanish</span>
          </div>
        </div>
      </div>

      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.75 0.18 195)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.75 0.18 195)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="recoveryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.8 0.2 145)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.8 0.2 145)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.01 250)" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.12 0.01 250)",
                border: "1px solid oklch(0.25 0.01 250)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
            />
            <Area
              type="monotone"
              dataKey="performance"
              stroke="oklch(0.75 0.18 195)"
              strokeWidth={2}
              fill="url(#performanceGradient)"
            />
            <Area
              type="monotone"
              dataKey="recovery"
              stroke="oklch(0.8 0.2 145)"
              strokeWidth={2}
              fill="url(#recoveryGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

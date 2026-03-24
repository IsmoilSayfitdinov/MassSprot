"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

const data = [
  { name: "Excellent", value: 12, color: "oklch(0.8 0.2 145)" },
  { name: "Good", value: 18, color: "oklch(0.75 0.18 195)" },
  { name: "Moderate", value: 8, color: "oklch(0.75 0.22 60)" },
  { name: "At Risk", value: 4, color: "oklch(0.65 0.25 30)" },
]

export function GroupAnalytics() {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Group Performance Distribution</h3>
        <p className="text-sm text-muted-foreground">42 athletes total</p>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" barSize={24}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.01 250)" horizontal={false} />
            <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }} />
            <YAxis 
              type="category" 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.12 0.01 250)",
                border: "1px solid oklch(0.25 0.01 250)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
              formatter={(value: number) => [`${value} athletes`, "Count"]}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm text-muted-foreground">{item.name}</span>
            <span className="text-sm font-medium text-foreground ml-auto">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

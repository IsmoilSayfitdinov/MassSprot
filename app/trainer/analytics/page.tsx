"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, Target, Users, AlertTriangle, Activity } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICard } from "@/components/dashboard/kpi-card"

// Group comparison — 4 groups side by side
const groupComparison = [
  { guruh: "A guruh", tayyorlik: 82, davomat: 88, xavf: 1, progress: 76 },
  { guruh: "B guruh", tayyorlik: 75, davomat: 80, xavf: 2, progress: 68 },
  { guruh: "C guruh", tayyorlik: 79, davomat: 85, xavf: 0, progress: 74 },
  { guruh: "D guruh", tayyorlik: 68, davomat: 76, xavf: 1, progress: 60 },
]

// Readiness trend over 4 weeks by group
const readinessTrend = [
  { hafta: "1-hafta", aGuruh: 74, bGuruh: 68, cGuruh: 72, dGuruh: 60 },
  { hafta: "2-hafta", aGuruh: 77, bGuruh: 71, cGuruh: 75, dGuruh: 63 },
  { hafta: "3-hafta", aGuruh: 80, bGuruh: 73, cGuruh: 77, dGuruh: 65 },
  { hafta: "4-hafta", aGuruh: 82, bGuruh: 75, cGuruh: 79, dGuruh: 68 },
]

// Risk distribution stacked bar — by week
const riskDistribution = [
  { hafta: "1-hafta", xavfsiz: 34, ehtiyot: 6, xavf: 4 },
  { hafta: "2-hafta", xavfsiz: 36, ehtiyot: 5, xavf: 3 },
  { hafta: "3-hafta", xavfsiz: 37, ehtiyot: 4, xavf: 3 },
  { hafta: "4-hafta", xavfsiz: 38, ehtiyot: 4, xavf: 2 },
]

// Groups performance summary table
const groupsPerformance = [
  {
    guruh: "A guruh",
    sportichilar: 12,
    tayyorlik: 82,
    davomat: 88,
    xavf: 1,
    trend: "up",
  },
  {
    guruh: "B guruh",
    sportichilar: 10,
    tayyorlik: 75,
    davomat: 80,
    xavf: 2,
    trend: "stable",
  },
  {
    guruh: "C guruh",
    sportichilar: 11,
    tayyorlik: 79,
    davomat: 85,
    xavf: 0,
    trend: "up",
  },
  {
    guruh: "D guruh",
    sportichilar: 9,
    tayyorlik: 68,
    davomat: 76,
    xavf: 1,
    trend: "down",
  },
]

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up")   return <TrendingUp className="h-4 w-4 text-emerald-500" />
  if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />
  return <Minus className="h-4 w-4 text-yellow-500" />
}

function TayyorlikBadge({ value }: { value: number }) {
  const cls =
    value >= 80
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : value >= 70
      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
      : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
  return <Badge className={`border text-xs ${cls}`}>{value}%</Badge>
}

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader title="Guruh tahlili" subtitle="Guruh bo'yicha keng qamrovli tahlil" />

      <div className="px-[32px] py-6 space-y-6">

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <KPICard
            title="O'rtacha tayyorlik"
            value="78%"
            subtitle="Barcha guruhlar bo'yicha"
            icon={Target}
            trend={{ value: 5, isPositive: true }}
            status="success"
          />
          <KPICard
            title="O'rtacha davomat"
            value="84%"
            subtitle="Barcha guruhlar bo'yicha"
            icon={Users}
            trend={{ value: 3, isPositive: true }}
            status="neutral"
          />
          <KPICard
            title="Xavf ostida"
            value="4"
            subtitle="E'tibor talab qiladigan sportchilar"
            icon={AlertTriangle}
            trend={{ value: 2, isPositive: false }}
            status="danger"
          />
          <KPICard
            title="Progress"
            value="+5%"
            subtitle="O'tgan oyga nisbatan"
            icon={Activity}
            trend={{ value: 5, isPositive: true }}
            status="success"
          />
        </div>

        {/* Group Comparison Bar Chart */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Guruhlar taqqoslashi</CardTitle>
            <CardDescription>4 ta guruh bo'yicha tayyorlik, davomat va progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={groupComparison} barGap={4} barCategoryGap="25%">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="guruh" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="tayyorlik" fill="#10b981" radius={[3, 3, 0, 0]} name="Tayyorlik (%)" />
                  <Bar dataKey="davomat"   fill="#06b6d4" radius={[3, 3, 0, 0]} name="Davomat (%)" />
                  <Bar dataKey="progress"  fill="#8b5cf6" radius={[3, 3, 0, 0]} name="Progress (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Readiness Trend Line Chart — 4 weeks */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Tayyorlik trendi — guruhlar bo'yicha</CardTitle>
            <CardDescription>4 hafta davomida guruhlarning o'rtacha tayyorlik darajasi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={readinessTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hafta" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[55, 90]} stroke="hsl(var(--muted-foreground))" unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                    formatter={(v: number) => [`${v}%`]}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="aGuruh" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} name="A guruh" />
                  <Line type="monotone" dataKey="bGuruh" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} name="B guruh" />
                  <Line type="monotone" dataKey="cGuruh" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} name="C guruh" />
                  <Line type="monotone" dataKey="dGuruh" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} name="D guruh" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Risk Distribution Stacked Bar Chart */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Xavf taqsimoti (stacked)</CardTitle>
            <CardDescription>Hafta bo'yicha xavfsiz, ehtiyot va xavfli sportchilar soni</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskDistribution} barSize={50}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hafta" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="xavfsiz" stackId="risk" fill="#10b981" name="Xavfsiz" />
                  <Bar dataKey="ehtiyot" stackId="risk" fill="#f59e0b" name="Ehtiyot" />
                  <Bar dataKey="xavf"    stackId="risk" fill="#ef4444" radius={[3, 3, 0, 0]} name="Xavf" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Groups Performance Table */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Guruhlar samaradorligi jadvali</CardTitle>
            <CardDescription>Har bir guruhning asosiy ko'rsatkichlari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Guruh nomi</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Sportchilar soni</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">O'rtacha tayyorlik</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Davomat</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Xavf</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {groupsPerformance.map((g, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/30 hover:bg-background/40 transition-colors"
                    >
                      <td className="py-3 px-3 font-semibold text-foreground">{g.guruh}</td>
                      <td className="py-3 px-3 text-center text-foreground">{g.sportichilar}</td>
                      <td className="py-3 px-3">
                        <TayyorlikBadge value={g.tayyorlik} />
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className={
                            g.davomat >= 85
                              ? "text-emerald-400 font-semibold"
                              : g.davomat >= 75
                              ? "text-cyan-400 font-semibold"
                              : "text-yellow-400 font-semibold"
                          }
                        >
                          {g.davomat}%
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {g.xavf === 0 ? (
                          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
                            Yo'q
                          </Badge>
                        ) : (
                          <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 text-xs">
                            {g.xavf} kishi
                          </Badge>
                        )}
                      </td>
                      <td className="py-3 px-3">
                        <TrendIcon trend={g.trend} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

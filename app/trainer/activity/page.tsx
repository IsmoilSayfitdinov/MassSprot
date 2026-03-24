"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Activity, TrendingUp, TrendingDown, Minus, Zap, Users } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICard } from "@/components/dashboard/kpi-card"

// Activity distribution — faollik darajasi bo'yicha sportchilar soni
const activityDistribution = [
  { daraja: "Juda faol", soni: 12, fill: "#10b981" },
  { daraja: "Faol",      soni: 18, fill: "#06b6d4" },
  { daraja: "O'rtacha",  soni: 8,  fill: "#f59e0b" },
  { daraja: "Past faol", soni: 4,  fill: "#ef4444" },
]

// Weekly trend — 7 kunlik faollik darajasi
const weeklyTrend = [
  { kun: "Du", judaFaol: 10, faol: 16, ortacha: 9,  pastFaol: 5 },
  { kun: "Se", judaFaol: 11, faol: 18, ortacha: 8,  pastFaol: 5 },
  { kun: "Ch", judaFaol: 9,  faol: 15, ortacha: 10, pastFaol: 6 },
  { kun: "Pa", judaFaol: 13, faol: 17, ortacha: 7,  pastFaol: 4 },
  { kun: "Ju", judaFaol: 12, faol: 18, ortacha: 8,  pastFaol: 4 },
  { kun: "Sh", judaFaol: 8,  faol: 14, ortacha: 11, pastFaol: 7 },
  { kun: "Ya", judaFaol: 3,  faol: 8,  ortacha: 12, pastFaol: 9 },
]

// 8 mock athletes activity table
const athletesActivity = [
  { ism: "Bobur Toshmatov",  oxirgiMashjulot: "Bugun",     haftaSessiya: 6, avgIntensivlik: 85, trend: "up",     holat: "Juda faol" },
  { ism: "Sevara Nazarova",  oxirgiMashjulot: "Bugun",     haftaSessiya: 5, avgIntensivlik: 78, trend: "up",     holat: "Faol" },
  { ism: "Aziz Karimov",     oxirgiMashjulot: "Kecha",     haftaSessiya: 5, avgIntensivlik: 80, trend: "stable", holat: "Faol" },
  { ism: "Dilnoza Rahimova", oxirgiMashjulot: "Kecha",     haftaSessiya: 4, avgIntensivlik: 72, trend: "stable", holat: "Faol" },
  { ism: "Jasur Alimov",     oxirgiMashjulot: "2 kun oldin", haftaSessiya: 3, avgIntensivlik: 65, trend: "down",  holat: "O'rtacha" },
  { ism: "Malika Yusupova",  oxirgiMashjulot: "Bugun",     haftaSessiya: 6, avgIntensivlik: 88, trend: "up",     holat: "Juda faol" },
  { ism: "Ulugbek Mirzayev", oxirgiMashjulot: "3 kun oldin", haftaSessiya: 2, avgIntensivlik: 50, trend: "down",  holat: "Past faol" },
  { ism: "Zulfiya Hamidova", oxirgiMashjulot: "4 kun oldin", haftaSessiya: 1, avgIntensivlik: 42, trend: "down",  holat: "Past faol" },
]

// Low activity / risk athletes
const riskAthletes = athletesActivity.filter((a) => a.holat === "Past faol" || a.holat === "O'rtacha")

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up")     return <TrendingUp className="h-4 w-4 text-emerald-500" />
  if (trend === "down")   return <TrendingDown className="h-4 w-4 text-red-500" />
  return <Minus className="h-4 w-4 text-yellow-500" />
}

function HolatBadge({ holat }: { holat: string }) {
  const map: Record<string, string> = {
    "Juda faol": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "Faol":      "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "O'rtacha":  "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    "Past faol": "bg-red-500/10 text-red-400 border-red-500/20",
  }
  return (
    <Badge className={`border text-xs ${map[holat] ?? ""}`}>{holat}</Badge>
  )
}

export default function ActivityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader title="Faollik monitoringi" subtitle="Sportchilar faollik darajasi" />

      <div className="px-[32px] py-6 space-y-6">

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <KPICard
            title="Juda faol"
            value="12"
            subtitle="Yuqori faollik darajasi"
            icon={Zap}
            trend={{ value: 2, isPositive: true }}
            status="success"
          />
          <KPICard
            title="Faol"
            value="18"
            subtitle="Normal faollik darajasi"
            icon={Activity}
            trend={{ value: 3, isPositive: true }}
            status="neutral"
          />
          <KPICard
            title="O'rtacha"
            value="8"
            subtitle="O'rtacha faollik darajasi"
            icon={Users}
            trend={{ value: 1, isPositive: false }}
            status="warning"
          />
          <KPICard
            title="Past faol"
            value="4"
            subtitle="Diqqat talab qiladi"
            icon={AlertTriangle}
            trend={{ value: 1, isPositive: false }}
            status="danger"
          />
        </div>

        {/* Activity Distribution Bar Chart */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Faollik darajasi taqsimoti</CardTitle>
            <CardDescription>Sportchilar faollik darajasi bo'yicha guruhlanishi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityDistribution} barSize={60}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="daraja" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                    formatter={(v: number) => [v, "Sportchi"]}
                  />
                  <Bar
                    dataKey="soni"
                    radius={[4, 4, 0, 0]}
                    name="Sportchilar soni"
                    fill="#06b6d4"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Trend Area Chart */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Haftalik faollik trendi</CardTitle>
            <CardDescription>7 kunlik faollik darajasi dinamikasi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyTrend}>
                  <defs>
                    <linearGradient id="gradJudaFaol" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="gradFaol" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="gradOrtacha" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="gradPast" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="kun" stroke="hsl(var(--muted-foreground))" />
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
                  <Area type="monotone" dataKey="judaFaol" stroke="#10b981" fill="url(#gradJudaFaol)" strokeWidth={2} name="Juda faol" />
                  <Area type="monotone" dataKey="faol"     stroke="#06b6d4" fill="url(#gradFaol)"     strokeWidth={2} name="Faol" />
                  <Area type="monotone" dataKey="ortacha"  stroke="#f59e0b" fill="url(#gradOrtacha)"  strokeWidth={2} name="O'rtacha" />
                  <Area type="monotone" dataKey="pastFaol" stroke="#ef4444" fill="url(#gradPast)"     strokeWidth={2} name="Past faol" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Athletes Activity Table */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Sportchilar faollik jadvali</CardTitle>
            <CardDescription>Har bir sportchining haftalik faollik ko'rsatkichlari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Ism</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Oxirgi mashg'ulot</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Haftalik sessiya</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">O'rt. intensivlik</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Trend</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Holat</th>
                  </tr>
                </thead>
                <tbody>
                  {athletesActivity.map((a, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/30 hover:bg-background/40 transition-colors"
                    >
                      <td className="py-3 px-3 font-medium text-foreground">{a.ism}</td>
                      <td className="py-3 px-3 text-muted-foreground">{a.oxirgiMashjulot}</td>
                      <td className="py-3 px-3 font-semibold">{a.haftaSessiya}</td>
                      <td className="py-3 px-3">
                        <span
                          className={
                            a.avgIntensivlik >= 75
                              ? "text-emerald-400 font-semibold"
                              : a.avgIntensivlik >= 60
                              ? "text-yellow-400 font-semibold"
                              : "text-red-400 font-semibold"
                          }
                        >
                          {a.avgIntensivlik}%
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <TrendIcon trend={a.trend} />
                      </td>
                      <td className="py-3 px-3">
                        <HolatBadge holat={a.holat} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Risk Section — Low activity athletes */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Past faollik — xavf ostidagi sportchilar
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {riskAthletes.map((a, i) => (
              <Card
                key={i}
                className={`border ${
                  a.holat === "Past faol"
                    ? "bg-red-500/5 border-red-500/20"
                    : "bg-yellow-500/5 border-yellow-500/20"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg mt-0.5 ${
                        a.holat === "Past faol" ? "bg-red-500/10" : "bg-yellow-500/10"
                      }`}
                    >
                      <AlertTriangle
                        className={`h-4 w-4 ${
                          a.holat === "Past faol" ? "text-red-500" : "text-yellow-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-semibold text-sm ${
                          a.holat === "Past faol" ? "text-red-400" : "text-yellow-400"
                        }`}
                      >
                        {a.ism}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Oxirgi mashg'ulot: {a.oxirgiMashjulot}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Haftalik: {a.haftaSessiya} sessiya | Intensivlik: {a.avgIntensivlik}%
                      </p>
                      <div className="mt-2">
                        <HolatBadge holat={a.holat} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

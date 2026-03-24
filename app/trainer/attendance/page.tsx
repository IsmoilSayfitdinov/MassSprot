"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Filter,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICard } from "@/components/dashboard/kpi-card"

// Weekly bar chart data — 7 days attendance percentage
const weeklyData = [
  { kun: "Du", foiz: 75 },
  { kun: "Se", foiz: 83 },
  { kun: "Ch", foiz: 70 },
  { kun: "Pa", foiz: 88 },
  { kun: "Ju", foiz: 79 },
  { kun: "Sh", foiz: 65 },
  { kun: "Ya", foiz: 40 },
]

// 10 mock athletes daily attendance
const attendanceRecords = [
  { id: 1,  ism: "Bobur Toshmatov",   guruh: "A guruh", holat: "Keldi",    vaqt: "08:00", izoh: "" },
  { id: 2,  ism: "Sevara Nazarova",   guruh: "A guruh", holat: "Kechikdi", vaqt: "08:14", izoh: "Avtobus kechikdi" },
  { id: 3,  ism: "Aziz Karimov",      guruh: "B guruh", holat: "Keldi",    vaqt: "07:58", izoh: "" },
  { id: 4,  ism: "Dilnoza Rahimova",  guruh: "B guruh", holat: "Kelmadi",  vaqt: "—",     izoh: "Kasallik" },
  { id: 5,  ism: "Jasur Alimov",      guruh: "A guruh", holat: "Keldi",    vaqt: "08:02", izoh: "" },
  { id: 6,  ism: "Malika Yusupova",   guruh: "C guruh", holat: "Keldi",    vaqt: "08:00", izoh: "" },
  { id: 7,  ism: "Ulugbek Mirzayev",  guruh: "C guruh", holat: "Kechikdi", vaqt: "08:22", izoh: "Yo'l tirbandligi" },
  { id: 8,  ism: "Zulfiya Hamidova",  guruh: "B guruh", holat: "Keldi",    vaqt: "07:55", izoh: "" },
  { id: 9,  ism: "Sardor Ergashev",   guruh: "A guruh", holat: "Kelmadi",  vaqt: "—",     izoh: "Ruxsatsiz" },
  { id: 10, ism: "Nargiza Saidova",   guruh: "C guruh", holat: "Keldi",    vaqt: "08:05", izoh: "" },
]

// Monthly heatmap — 4 weeks × 7 days (attendance percentage)
const heatmapData = [
  [92, 85, 78, 90, 88, 60, 30],
  [80, 83, 75, 86, 82, 58, 25],
  [88, 79, 82, 91, 85, 65, 35],
  [75, 78, 70, 88, 79, 62, 40],
]

const kunlar = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"]
const haftalar = ["1-hafta", "2-hafta", "3-hafta", "4-hafta"]

function getHeatColor(value: number) {
  if (value >= 85) return "bg-emerald-500"
  if (value >= 70) return "bg-cyan-500"
  if (value >= 55) return "bg-yellow-500"
  return "bg-red-500"
}

function HolatBadge({ holat }: { holat: string }) {
  if (holat === "Keldi")
    return (
      <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 gap-1 flex items-center w-fit">
        <CheckCircle2 className="h-3 w-3" /> Keldi
      </Badge>
    )
  if (holat === "Kelmadi")
    return (
      <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 gap-1 flex items-center w-fit">
        <XCircle className="h-3 w-3" /> Kelmadi
      </Badge>
    )
  return (
    <Badge className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 gap-1 flex items-center w-fit">
      <Clock className="h-3 w-3" /> Kechikdi
    </Badge>
  )
}

export default function AttendancePage() {
  const [selectedGuruh, setSelectedGuruh] = useState("barchasi")
  const [selectedSana, setSelectedSana] = useState("bugun")

  const filtered = attendanceRecords.filter(
    (r) => selectedGuruh === "barchasi" || r.guruh === selectedGuruh
  )

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader title="Davomat monitoringi" subtitle="Sportchilarning trening davomati" />

      <div className="px-[32px] py-6 space-y-6">

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <KPICard
            title="Bugungi davomat"
            value="78%"
            subtitle="Bugun qatnashgan sportchilar"
            icon={CheckCircle2}
            trend={{ value: 3, isPositive: true }}
            status="success"
          />
          <KPICard
            title="Haftalik o'rtacha"
            value="82%"
            subtitle="Oxirgi 7 kun bo'yicha"
            icon={TrendingUp}
            trend={{ value: 5, isPositive: true }}
            status="neutral"
          />
          <KPICard
            title="Umumiy sportchilar"
            value="42"
            subtitle="Ro'yxatdagi sportchilar"
            icon={Users}
            status="neutral"
          />
          <KPICard
            title="Yetib kelgan"
            value="33"
            subtitle="Bugun qatnashdi"
            icon={Calendar}
            trend={{ value: 2, isPositive: false }}
            status="warning"
          />
        </div>

        {/* Weekly Bar Chart */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Haftalik davomat foizi</CardTitle>
            <CardDescription>Oxirgi 7 kun bo'yicha davomat foizi (%)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barSize={38}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="kun" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                    formatter={(v: number) => [`${v}%`, "Davomat"]}
                  />
                  <Bar dataKey="foiz" fill="#06b6d4" radius={[4, 4, 0, 0]} name="Davomat" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Filters + Daily Table */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <CardTitle>Kunlik davomat jadvali</CardTitle>
                <CardDescription>Bugungi sportchilar holati</CardDescription>
              </div>
              <div className="flex gap-2">
                <Select value={selectedGuruh} onValueChange={setSelectedGuruh}>
                  <SelectTrigger className="w-[150px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Guruh" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="barchasi">Barcha guruhlar</SelectItem>
                    <SelectItem value="A guruh">A guruh</SelectItem>
                    <SelectItem value="B guruh">B guruh</SelectItem>
                    <SelectItem value="C guruh">C guruh</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSana} onValueChange={setSelectedSana}>
                  <SelectTrigger className="w-[140px]">
                    <Calendar className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Sana" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bugun">Bugun</SelectItem>
                    <SelectItem value="kecha">Kecha</SelectItem>
                    <SelectItem value="hafta">Bu hafta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">#</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Sportchi nomi</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Guruh</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Holat</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Vaqt</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Izoh</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <tr
                      key={r.id}
                      className="border-b border-border/30 hover:bg-background/40 transition-colors"
                    >
                      <td className="py-3 px-3 text-muted-foreground">{i + 1}</td>
                      <td className="py-3 px-3 font-medium text-foreground">{r.ism}</td>
                      <td className="py-3 px-3">
                        <Badge variant="outline" className="text-xs">{r.guruh}</Badge>
                      </td>
                      <td className="py-3 px-3">
                        <HolatBadge holat={r.holat} />
                      </td>
                      <td className="py-3 px-3 text-muted-foreground font-mono">{r.vaqt}</td>
                      <td className="py-3 px-3 text-muted-foreground">{r.izoh || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Heatmap */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Oylik davomat xaritasi</CardTitle>
            <CardDescription>Hafta va kun bo'yicha davomat foizi (%) — mart 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Day header labels */}
              <div className="grid grid-cols-8 gap-2">
                <div />
                {kunlar.map((k) => (
                  <div key={k} className="text-center text-xs text-muted-foreground font-semibold">
                    {k}
                  </div>
                ))}
              </div>

              {/* Heatmap rows */}
              {haftalar.map((hafta, wi) => (
                <div key={hafta} className="grid grid-cols-8 gap-2 items-center">
                  <div className="text-xs text-muted-foreground text-right pr-2 whitespace-nowrap">
                    {hafta}
                  </div>
                  {kunlar.map((_, di) => {
                    const val = heatmapData[wi][di]
                    return (
                      <div
                        key={di}
                        title={`${val}%`}
                        className={`h-10 rounded-md flex items-center justify-center text-xs font-semibold text-white/90 ${getHeatColor(val)}`}
                      >
                        {val}%
                      </div>
                    )
                  })}
                </div>
              ))}

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="text-xs text-muted-foreground">Darajalar:</span>
                {[
                  { label: "Yuqori (≥85%)",    color: "bg-emerald-500" },
                  { label: "Yaxshi (70–84%)",  color: "bg-cyan-500" },
                  { label: "O'rtacha (55–69%)", color: "bg-yellow-500" },
                  { label: "Past (<55%)",       color: "bg-red-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

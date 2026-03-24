"use client"

import { use, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Mail,
  Phone,
  Heart,
  Activity,
  TrendingUp,
  Calendar,
  Clock,
  Flame,
  AlertTriangle,
  MessageSquare,
  Brain,
  Target,
  Send,
  ShieldCheck,
  BedDouble,
  Gauge,
} from "lucide-react"
import Link from "next/link"
import {
  AreaChart,
  Area,
  LineChart,
  Line,
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

// ─── Mock data ────────────────────────────────────────────────────────────────

const athlete = {
  id: "1",
  name: "Aziz Karimov",
  initials: "AK",
  age: 28,
  gender: "Erkak",
  email: "aziz@example.com",
  phone: "+998 90 123 45 67",
  height: 178,
  weight: 75,
  bmi: 23.7,
  level: "O'rta",
  group: "Kardio A",
  goal: "Vazn yo'qotish",
  joinDate: "2025-09-15",
  readiness: 85,
  fatigue: 20,
  attendance: 92,
  vo2Max: 42.5,
  hrMax: 192,
  hrResting: 62,
  hrZone1: "< 115 bpm",
  hrZone2: "115–134 bpm",
  hrZone3: "134–154 bpm",
  hrZone4: "154–173 bpm",
  hrZone5: "> 173 bpm",
  riskStatus: "past" as const,
}

// Performance – last 4 weeks
const performanceData = [
  { hafta: "1-hafta", tayyorlik: 72, charchoq: 35, tiklanish: 68 },
  { hafta: "2-hafta", tayyorlik: 76, charchoq: 30, tiklanish: 72 },
  { hafta: "3-hafta", tayyorlik: 80, charchoq: 25, tiklanish: 78 },
  { hafta: "4-hafta", tayyorlik: 85, charchoq: 20, tiklanish: 83 },
]

// Training history – last 5 workouts
const trainingHistory = [
  { id: 1, date: "2026-03-22", type: "Kuch",          duration: 55, calories: 420, performance: 88, difficulty: "Og'ir"     },
  { id: 2, date: "2026-03-21", type: "Kardio",         duration: 40, calories: 380, performance: 82, difficulty: "O'rtacha"  },
  { id: 3, date: "2026-03-20", type: "Egiluvchanlik",  duration: 45, calories: 180, performance: 75, difficulty: "Yengil"    },
  { id: 4, date: "2026-03-19", type: "Kuch",           duration: 50, calories: 400, performance: 85, difficulty: "Og'ir"     },
  { id: 5, date: "2026-03-17", type: "Kardio",         duration: 35, calories: 320, performance: 78, difficulty: "O'rtacha"  },
]

// Recovery
const recoveryData = [
  { kun: "Dush", ball: 72 },
  { kun: "Sesh", ball: 68 },
  { kun: "Chor", ball: 75 },
  { kun: "Pay",  ball: 80 },
  { kun: "Jum",  ball: 78 },
  { kun: "Shan", ball: 85 },
  { kun: "Yak",  ball: 83 },
]

// AI recommendations
const aiRecommendations = [
  {
    id: 1,
    priority: "Yuqori",
    priorityColor: "bg-red-500/10 text-red-500",
    title: "Yukni kamaytiring",
    description: "Oxirgi 2 kundagi charchoq indeksi yuqori. Bugun yengil kardio yoki dam olish tavsiya qilinadi.",
    category: "Tiklanish",
  },
  {
    id: 2,
    priority: "O'rta",
    priorityColor: "bg-yellow-500/10 text-yellow-500",
    title: "Protein miqdorini oshiring",
    description: "Tana vazniga nisbatan kuniga 1.8–2.0 g protein iste'mol qiling. Mushak tiklanishini tezlashtiradi.",
    category: "Ovqatlanish",
  },
  {
    id: 3,
    priority: "Past",
    priorityColor: "bg-emerald-500/10 text-emerald-500",
    title: "Uyqu rejimini yaxshilang",
    description: "Har kecha 22:30 ga qadar uxlashga harakat qiling. Uyqu sifati tiklanishda 40% rol o'ynaydi.",
    category: "Uyqu",
  },
]

const riskScores = [
  { label: "Ortiqcha mashq (Overtraining)",  score: 18, color: "bg-emerald-500" },
  { label: "Jarohat xavfi",                  score: 24, color: "bg-yellow-500"  },
  { label: "Ruhiy charchoq (Burnout)",        score: 12, color: "bg-emerald-500" },
]

// Trainer notes
const trainerNotesMock = [
  { id: 1, date: "2026-03-20", text: "Tizza og'rig'i haqida ogohlantirdi. Squat mashqlarida ehtiyot bo'lish kerak." },
  { id: 2, date: "2026-03-15", text: "Motivatsiya yuqori, lekin uyqu rejimini yaxshilash kerak. 22:30 da uxlash rejasini tuzdi." },
  { id: 3, date: "2026-03-10", text: "VO2 Max testi o'tkazildi. Natija yaxshi — 42.0. Keyingi test 1 oydan keyin." },
]

// ─── Colour helpers ────────────────────────────────────────────────────────────

const typeColors: Record<string, string> = {
  Kuch:          "bg-yellow-500/10 text-yellow-500",
  Kardio:        "bg-red-500/10 text-red-500",
  Egiluvchanlik: "bg-purple-500/10 text-purple-500",
}

const difficultyColors: Record<string, string> = {
  "Yengil":   "bg-emerald-500/10 text-emerald-500",
  "O'rtacha": "bg-yellow-500/10 text-yellow-500",
  "Og'ir":    "bg-red-500/10 text-red-500",
}

const riskBadge: Record<string, string> = {
  past:       "bg-emerald-500/10 text-emerald-500",
  "o'rtacha": "bg-yellow-500/10 text-yellow-500",
  yuqori:     "bg-red-500/10 text-red-500",
}

const riskLabel: Record<string, string> = {
  past:       "Xavfsiz",
  "o'rtacha": "Ehtiyot",
  yuqori:     "Xavfli",
}

const tooltipStyle = {
  backgroundColor: "#1a1a2e",
  border: "1px solid #333",
  borderRadius: "8px",
  fontSize: "12px",
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AthleteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [note, setNote] = useState("")
  const [notes, setNotes] = useState(trainerNotesMock)

  const handleAddNote = () => {
    if (!note.trim()) return
    setNotes([{ id: Date.now(), date: new Date().toISOString().slice(0, 10), text: note }, ...notes])
    setNote("")
  }

  // In a real app you'd fetch by id — here we always show mock data for id=1
  void id

  return (
    <>
      <DashboardHeader
        title="Sportchi profili"
        subtitle="Batafsil ma'lumot va tahlil"
      />

      <div className="px-[32px] py-6 space-y-6">

        {/* ── Back button + profile hero ── */}
        <div className="flex items-start gap-4">
          <Link href="/trainer/athletes">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Card className="bg-card/50 border-border/50 flex-1">
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                {/* Avatar */}
                <Avatar className="h-20 w-20 shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                    {athlete.initials}
                  </AvatarFallback>
                </Avatar>

                {/* Name + meta */}
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold">{athlete.name}</h2>
                    <Badge className={riskBadge[athlete.riskStatus]}>
                      {riskLabel[athlete.riskStatus]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {athlete.age} yosh · {athlete.gender} · {athlete.level} daraja · {athlete.group}
                  </p>
                  <p className="text-sm text-muted-foreground">Maqsad: {athlete.goal}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" />{athlete.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5" />{athlete.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />A'zo: {athlete.joinDate}
                    </span>
                  </div>
                </div>

                {/* Quick action */}
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Xabar yuborish
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Tabs ── */}
        <Tabs defaultValue="indicators" className="space-y-6">
          <TabsList className="bg-card/50 border border-border/50 flex-wrap h-auto gap-1 p-1">
            <TabsTrigger value="indicators">Ko'rsatkichlar</TabsTrigger>
            <TabsTrigger value="history">Trening tarixi</TabsTrigger>
            <TabsTrigger value="recovery">Tiklanish</TabsTrigger>
            <TabsTrigger value="ai">AI Tavsiyalar</TabsTrigger>
            <TabsTrigger value="notes">Trener izohi</TabsTrigger>
          </TabsList>

          {/* ─── Ko'rsatkichlar ─── */}
          <TabsContent value="indicators" className="space-y-6">
            {/* 4 KPI cards */}
            <div className="grid gap-4 md:grid-cols-4">
              <KPICard
                title="Tayyorlik"
                value="85%"
                subtitle="Mashg'ulotga tayyorlik darajasi"
                icon={Target}
                status="success"
                trend={{ value: 5, isPositive: true }}
              />
              <KPICard
                title="Charchoq"
                value="20%"
                subtitle="Charchoq indeksi past — yaxshi"
                icon={Activity}
                status="success"
                trend={{ value: 8, isPositive: false }}
              />
              <KPICard
                title="Davomat"
                value="92%"
                subtitle="Oxirgi 30 kunda"
                icon={Calendar}
                status="neutral"
                trend={{ value: 3, isPositive: true }}
              />
              <KPICard
                title="VO2 Max"
                value={42.5}
                subtitle="Aerobik sig'im (ml/kg/min)"
                icon={Heart}
                status="neutral"
                trend={{ value: 2, isPositive: true }}
              />
            </div>

            {/* Performance area chart */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-base">Natijalar dinamikasi</CardTitle>
                <CardDescription>Oxirgi 4 hafta bo'yicha tayyorlik va charchoq</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="hafta" stroke="#888" tick={{ fontSize: 12 }} />
                      <YAxis stroke="#888" tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Area
                        type="monotone"
                        dataKey="tayyorlik"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.2}
                        name="Tayyorlik %"
                      />
                      <Area
                        type="monotone"
                        dataKey="charchoq"
                        stroke="#f97316"
                        fill="#f97316"
                        fillOpacity={0.15}
                        name="Charchoq %"
                      />
                      <Area
                        type="monotone"
                        dataKey="tiklanish"
                        stroke="#06b6d4"
                        fill="#06b6d4"
                        fillOpacity={0.15}
                        name="Tiklanish %"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Physical metrics */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-primary" />
                    Jismoniy ko'rsatkichlar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                    {[
                      { label: "Bo'y",     value: `${athlete.height} sm` },
                      { label: "Vazn",     value: `${athlete.weight} kg` },
                      { label: "BMI",      value: athlete.bmi },
                      { label: "HRmax",    value: `${athlete.hrMax} bpm` },
                      { label: "Tinch HR", value: `${athlete.hrResting} bpm` },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    HR zonalari
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {[
                      { zone: "Zona 1 – Juda yengil", range: athlete.hrZone1, color: "bg-emerald-500" },
                      { zone: "Zona 2 – Yengil",      range: athlete.hrZone2, color: "bg-cyan-500"    },
                      { zone: "Zona 3 – O'rtacha",    range: athlete.hrZone3, color: "bg-yellow-500"  },
                      { zone: "Zona 4 – Og'ir",       range: athlete.hrZone4, color: "bg-orange-500"  },
                      { zone: "Zona 5 – Maksimal",    range: athlete.hrZone5, color: "bg-red-500"     },
                    ].map(({ zone, range, color }) => (
                      <div key={zone} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                        <span className="flex-1 text-muted-foreground">{zone}</span>
                        <span className="font-medium text-xs">{range}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ─── Trening tarixi ─── */}
          <TabsContent value="history" className="space-y-4">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-base">So'nggi mashg'ulotlar</CardTitle>
                <CardDescription>Oxirgi 5 ta trening sessiyasi</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50 text-muted-foreground text-xs uppercase tracking-wide">
                        <th className="text-left p-4">Sana</th>
                        <th className="text-left p-4">Tur</th>
                        <th className="text-left p-4">Davomiylik</th>
                        <th className="text-left p-4">Kaloriya</th>
                        <th className="text-left p-4">Natija</th>
                        <th className="text-left p-4">Qiyinlik</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trainingHistory.map((w) => (
                        <tr
                          key={w.id}
                          className="border-b border-border/30 hover:bg-card/80 transition-colors"
                        >
                          <td className="p-4 text-muted-foreground">{w.date}</td>
                          <td className="p-4">
                            <Badge className={typeColors[w.type]} variant="secondary">
                              {w.type}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3.5 w-3.5" />
                              {w.duration} daq
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Flame className="h-3.5 w-3.5" />
                              {w.calories} kcal
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Progress value={w.performance} className="h-1.5 w-16" />
                              <span className="text-xs">{w.performance}%</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={difficultyColors[w.difficulty]} variant="secondary">
                              {w.difficulty}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── Tiklanish ─── */}
          <TabsContent value="recovery" className="space-y-6">
            {/* Recovery KPI cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <ShieldCheck className="h-5 w-5 text-emerald-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">Tiklanish bali</p>
                  </div>
                  <p className="text-3xl font-bold text-emerald-500">83</p>
                  <p className="text-xs text-muted-foreground mt-1">100 dan — Yaxshi</p>
                  <Progress value={83} className="mt-2 h-1.5" />
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-orange-500/10">
                      <Activity className="h-5 w-5 text-orange-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">Charchoq indeksi</p>
                  </div>
                  <p className="text-3xl font-bold text-orange-500">20%</p>
                  <p className="text-xs text-muted-foreground mt-1">Past — Normal</p>
                  <Progress value={20} className="mt-2 h-1.5" />
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10">
                      <BedDouble className="h-5 w-5 text-cyan-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">Uyqu sifati</p>
                  </div>
                  <p className="text-3xl font-bold text-cyan-500">76%</p>
                  <p className="text-xs text-muted-foreground mt-1">O'rtacha — Yaxshilash kerak</p>
                  <Progress value={76} className="mt-2 h-1.5" />
                </CardContent>
              </Card>
            </div>

            {/* Recovery trend chart */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-base">Tiklanish trendi</CardTitle>
                <CardDescription>Haftalik tiklanish bali dinamikasi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={recoveryData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="kun" stroke="#888" tick={{ fontSize: 12 }} />
                      <YAxis domain={[0, 100]} stroke="#888" tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Bar dataKey="ball" fill="#10b981" fillOpacity={0.8} radius={[4, 4, 0, 0]} name="Tiklanish bali" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── AI Tavsiyalar ─── */}
          <TabsContent value="ai" className="space-y-6">
            {/* Recommendation cards */}
            <div className="space-y-4">
              {aiRecommendations.map((rec) => (
                <Card key={rec.id} className="bg-card/50 border-border/50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <Brain className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-sm">{rec.title}</h4>
                          <Badge className={rec.priorityColor} variant="secondary">
                            {rec.priority} ustuvorlik
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {rec.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Risk assessment */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Xavf baholash
                </CardTitle>
                <CardDescription>AI tomonidan aniqlangan xavf ko'rsatkichlari</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {riskScores.map((r) => (
                  <div key={r.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{r.label}</span>
                      <span className="font-semibold">{r.score}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full ${r.color}`}
                        style={{ width: `${r.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── Trener izohi ─── */}
          <TabsContent value="notes" className="space-y-6">
            {/* New note form */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-base">Yangi izoh qo'shish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea
                  placeholder="Sportchi haqida izoh yozing..."
                  className="min-h-[90px]"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
                <Button onClick={handleAddNote} disabled={!note.trim()}>
                  <Send className="h-4 w-4 mr-2" />
                  Saqlash
                </Button>
              </CardContent>
            </Card>

            {/* Notes history */}
            <div className="space-y-3">
              {notes.map((n) => (
                <Card key={n.id} className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 shrink-0">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">{n.date}</p>
                        <p className="text-sm">{n.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

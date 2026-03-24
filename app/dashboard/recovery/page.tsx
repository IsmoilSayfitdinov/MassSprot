"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import {
  Heart,
  Moon,
  Battery,
  BatteryWarning,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Thermometer,
  Brain,
  Droplets,
  Wind,
  Zap,
  Info,
  ChevronRight
} from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

// Fatigue & Recovery scores
const currentMetrics = {
  fatigueIndex: 42,
  recoveryScore: 74,
  sleepQuality: 82,
  stressLevel: 35,
  muscleReadiness: 68,
  mentalReadiness: 78,
  hydration: 65,
  hrv: 58,
}

// Weekly recovery trend
const weeklyRecovery = [
  { day: "Du", fatigue: 35, recovery: 80, sleep: 85, hrv: 62 },
  { day: "Se", fatigue: 55, recovery: 65, sleep: 70, hrv: 48 },
  { day: "Ch", fatigue: 30, recovery: 85, sleep: 90, hrv: 65 },
  { day: "Pa", fatigue: 60, recovery: 58, sleep: 65, hrv: 42 },
  { day: "Ju", fatigue: 70, recovery: 45, sleep: 60, hrv: 38 },
  { day: "Sh", fatigue: 45, recovery: 72, sleep: 80, hrv: 55 },
  { day: "Ya", fatigue: 25, recovery: 88, sleep: 92, hrv: 68 },
]

// Monthly fatigue trend
const monthlyTrend = [
  { week: "1-hafta", avgFatigue: 38, avgRecovery: 78, avgSleep: 80 },
  { week: "2-hafta", avgFatigue: 45, avgRecovery: 70, avgSleep: 75 },
  { week: "3-hafta", avgFatigue: 52, avgRecovery: 62, avgSleep: 68 },
  { week: "4-hafta", avgFatigue: 42, avgRecovery: 74, avgSleep: 82 },
]

// Sleep data
const sleepData = [
  { day: "Du", hours: 7.5, deep: 2.1, light: 4.0, rem: 1.4, quality: 85 },
  { day: "Se", hours: 6.2, deep: 1.5, light: 3.5, rem: 1.2, quality: 70 },
  { day: "Ch", hours: 8.0, deep: 2.5, light: 3.8, rem: 1.7, quality: 90 },
  { day: "Pa", hours: 5.8, deep: 1.2, light: 3.2, rem: 1.4, quality: 60 },
  { day: "Ju", hours: 6.5, deep: 1.8, light: 3.0, rem: 1.7, quality: 72 },
  { day: "Sh", hours: 7.8, deep: 2.3, light: 3.8, rem: 1.7, quality: 88 },
  { day: "Ya", hours: 8.5, deep: 2.8, light: 4.0, rem: 1.7, quality: 92 },
]

// Recovery radar
const recoveryRadar = [
  { metric: "Uyqu sifati", value: 82, fullMark: 100 },
  { metric: "Mushak tiklanishi", value: 68, fullMark: 100 },
  { metric: "Mental holat", value: 78, fullMark: 100 },
  { metric: "Gidratatsiya", value: 65, fullMark: 100 },
  { metric: "HRV", value: 58, fullMark: 100 },
  { metric: "Stress darajasi", value: 65, fullMark: 100 },
]

// Caution alerts
const cautionAlerts = [
  {
    id: 1,
    type: "warning",
    title: "Charchoq darajasi oshmoqda",
    description: "Oxirgi 3 kunda charchoq darajasi doimiy oshib bormoqda. Bugun yengil mashg'ulot tavsiya qilinadi.",
    time: "2 soat oldin",
    icon: BatteryWarning,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    id: 2,
    type: "caution",
    title: "Uyqu sifati pastladi",
    description: "Bu haftada o'rtacha uyqu vaqti 6.5 soat. Optimal tiklanish uchun 7-8 soat tavsiya qilinadi.",
    time: "Bugun ertalab",
    icon: Moon,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: 3,
    type: "info",
    title: "HRV past — stress yuqori",
    description: "HRV ko'rsatkichi 38 ms ga tushdi. Bu yuqori stress yoki yetarli tiklanmaganlik belgisi.",
    time: "Kecha",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    id: 4,
    type: "success",
    title: "Dam olish kuni yaxshi o'tdi",
    description: "Yakshanbadagi dam olish kuni samarali bo'ldi — tiklanish 88% ga yetdi.",
    time: "Dushanba",
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
]

// AI recovery recommendations
const recoveryRecommendations = [
  {
    id: 1,
    title: "Bugun yengil mashg'ulot qiling",
    description: "Charchoq darajasi 42% — o'rtacha intensivlikdan past mashg'ulot tavsiya qilinadi. Yoga yoki yengil cho'zish mashqlari mos keladi.",
    priority: "high",
    icon: Activity,
  },
  {
    id: 2,
    title: "Uyqu rejimini yaxshilang",
    description: "22:30 dan oldin yotishga harakat qiling. Ekran vaqtini uyqudan 1 soat oldin kamaytiring.",
    priority: "medium",
    icon: Moon,
  },
  {
    id: 3,
    title: "Gidratatsiya darajasini oshiring",
    description: "Bugun kamida 2.5 litr suv iching. Mashg'ulotdan 30 daqiqa oldin 500 ml suv tavsiya qilinadi.",
    priority: "medium",
    icon: Droplets,
  },
  {
    id: 4,
    title: "Nafas mashqlari",
    description: "5 daqiqalik chuqur nafas olish mashqi stress darajasini 20-30% ga kamaytiradi.",
    priority: "low",
    icon: Wind,
  },
]

function getFatigueStatus(value: number) {
  if (value <= 30) return { label: "Past", color: "text-emerald-500", bg: "bg-emerald-500/10" }
  if (value <= 50) return { label: "O'rtacha", color: "text-yellow-500", bg: "bg-yellow-500/10" }
  if (value <= 70) return { label: "Yuqori", color: "text-orange-500", bg: "bg-orange-500/10" }
  return { label: "Juda yuqori", color: "text-red-500", bg: "bg-red-500/10" }
}

function getRecoveryStatus(value: number) {
  if (value >= 80) return { label: "Yaxshi", color: "text-emerald-500", bg: "bg-emerald-500/10" }
  if (value >= 60) return { label: "O'rtacha", color: "text-yellow-500", bg: "bg-yellow-500/10" }
  if (value >= 40) return { label: "Past", color: "text-orange-500", bg: "bg-orange-500/10" }
  return { label: "Juda past", color: "text-red-500", bg: "bg-red-500/10" }
}

export default function RecoveryPage() {
  const fatigueStatus = getFatigueStatus(currentMetrics.fatigueIndex)
  const recoveryStatus = getRecoveryStatus(currentMetrics.recoveryScore)

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Tiklanish va Charchoq"
        subtitle="Jismoniy tiklanish holati va charchoq monitoringi"
      />
      <div className="px-[32px] space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tiklanish va Charchoq</h1>
          <p className="text-muted-foreground">Jismoniy tiklanish holati va charchoq monitoringi</p>
        </div>
        <Badge variant="outline" className="text-sm">
          <Clock className="h-3 w-3 mr-1" />
          Oxirgi yangilanish: bugun 08:30
        </Badge>
      </div>

      {/* Main Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <BatteryWarning className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-sm text-muted-foreground">Charchoq indeksi</p>
              </div>
              <Badge className={`${fatigueStatus.bg} ${fatigueStatus.color} text-xs`}>
                {fatigueStatus.label}
              </Badge>
            </div>
            <p className="text-3xl font-bold">{currentMetrics.fatigueIndex}%</p>
            <Progress value={currentMetrics.fatigueIndex} className="h-2 mt-2 [&>div]:bg-orange-500" />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Battery className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-sm text-muted-foreground">Tiklanish bali</p>
              </div>
              <Badge className={`${recoveryStatus.bg} ${recoveryStatus.color} text-xs`}>
                {recoveryStatus.label}
              </Badge>
            </div>
            <p className="text-3xl font-bold">{currentMetrics.recoveryScore}%</p>
            <Progress value={currentMetrics.recoveryScore} className="h-2 mt-2 [&>div]:bg-emerald-500" />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Moon className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-sm text-muted-foreground">Uyqu sifati</p>
              </div>
            </div>
            <p className="text-3xl font-bold">{currentMetrics.sleepQuality}%</p>
            <Progress value={currentMetrics.sleepQuality} className="h-2 mt-2 [&>div]:bg-blue-500" />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-sm text-muted-foreground">HRV (ms)</p>
              </div>
            </div>
            <p className="text-3xl font-bold">{currentMetrics.hrv}</p>
            <div className="flex items-center gap-1 mt-2 text-sm">
              <TrendingDown className="h-4 w-4 text-red-500" />
              <span className="text-red-500">-8 ms</span>
              <span className="text-muted-foreground ml-1">kechadan beri</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <Brain className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mental tayyorgarlik</p>
              <p className="text-xl font-bold">{currentMetrics.mentalReadiness}%</p>
            </div>
            <Progress value={currentMetrics.mentalReadiness} className="flex-1 h-2" />
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-cyan-500/10">
              <Zap className="h-5 w-5 text-cyan-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mushak tayyorligi</p>
              <p className="text-xl font-bold">{currentMetrics.muscleReadiness}%</p>
            </div>
            <Progress value={currentMetrics.muscleReadiness} className="flex-1 h-2" />
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Droplets className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gidratatsiya</p>
              <p className="text-xl font-bold">{currentMetrics.hydration}%</p>
            </div>
            <Progress value={currentMetrics.hydration} className="flex-1 h-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="trends">Trendlar</TabsTrigger>
          <TabsTrigger value="sleep">Uyqu</TabsTrigger>
          <TabsTrigger value="alerts">Ogohlantirishlar</TabsTrigger>
          <TabsTrigger value="recommendations">AI tavsiyalar</TabsTrigger>
        </TabsList>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Weekly Recovery vs Fatigue */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Activity className="h-5 w-5 text-primary" />
                  Haftalik tiklanish va charchoq
                </CardTitle>
                <CardDescription>Kunlik o'zgarishlar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyRecovery}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="day" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1a1a2e',
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }}
                      />
                      <Area type="monotone" dataKey="recovery" stroke="#10b981" fill="#10b981" fillOpacity={0.2} name="Tiklanish" />
                      <Area type="monotone" dataKey="fatigue" stroke="#f97316" fill="#f97316" fillOpacity={0.15} name="Charchoq" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-sm text-muted-foreground">Tiklanish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-sm text-muted-foreground">Charchoq</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HRV Trend */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Heart className="h-5 w-5 text-red-500" />
                  HRV (yurak ritm o'zgaruvchanligi)
                </CardTitle>
                <CardDescription>Stress va tiklanish ko'rsatkichi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyRecovery}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="day" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1a1a2e',
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }}
                      />
                      <Line type="monotone" dataKey="hrv" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', strokeWidth: 2, r: 5 }} name="HRV (ms)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-3 p-3 rounded-lg bg-background/50">
                  <p className="text-xs text-muted-foreground">
                    <Info className="h-3 w-3 inline mr-1" />
                    HRV yuqori bo'lsa — yaxshi tiklanish. Past bo'lsa — stress yoki charchash belgisi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Trend */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-5 w-5 text-cyan-500" />
                Oylik trend
              </CardTitle>
              <CardDescription>Hafta bo'yicha o'rtacha ko'rsatkichlar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="week" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a2e',
                        border: '1px solid #333',
                        borderRadius: '8px'
                      }}
                    />
                    <Line type="monotone" dataKey="avgRecovery" stroke="#10b981" strokeWidth={2} name="Tiklanish" />
                    <Line type="monotone" dataKey="avgFatigue" stroke="#f97316" strokeWidth={2} name="Charchoq" />
                    <Line type="monotone" dataKey="avgSleep" stroke="#3b82f6" strokeWidth={2} name="Uyqu" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-3">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500" /><span className="text-sm">Tiklanish</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500" /><span className="text-sm">Charchoq</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-sm">Uyqu</span></div>
              </div>
            </CardContent>
          </Card>

          {/* Recovery Radar */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Battery className="h-5 w-5 text-emerald-500" />
                Tiklanish profili
              </CardTitle>
              <CardDescription>Turli yo'nalishlardagi tiklanish holati</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={recoveryRadar}>
                    <PolarGrid stroke="#333" />
                    <PolarAngleAxis dataKey="metric" stroke="#888" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#888" />
                    <Radar name="Joriy" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sleep Tab */}
        <TabsContent value="sleep" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sleep Duration */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Moon className="h-5 w-5 text-blue-500" />
                  Uyqu davomiyligi
                </CardTitle>
                <CardDescription>Kunlik uyqu soatlari</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sleepData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="day" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1a1a2e',
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="deep" stackId="sleep" fill="#1e40af" name="Chuqur uyqu" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="light" stackId="sleep" fill="#3b82f6" name="Yengil uyqu" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="rem" stackId="sleep" fill="#93c5fd" name="REM" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-3">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-800" /><span className="text-xs">Chuqur</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-xs">Yengil</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-300" /><span className="text-xs">REM</span></div>
                </div>
              </CardContent>
            </Card>

            {/* Sleep Quality */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Thermometer className="h-5 w-5 text-purple-500" />
                  Uyqu sifati
                </CardTitle>
                <CardDescription>Kunlik uyqu sifat bali</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sleepData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="day" stroke="#888" />
                      <YAxis domain={[0, 100]} stroke="#888" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1a1a2e',
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }}
                      />
                      <Line type="monotone" dataKey="quality" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7', strokeWidth: 2, r: 5 }} name="Sifat (%)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between mt-3 pt-3 border-t border-border/50">
                  <div>
                    <p className="text-sm text-muted-foreground">O'rtacha</p>
                    <p className="text-lg font-bold">{Math.round(sleepData.reduce((a, b) => a + b.quality, 0) / sleepData.length)}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">O'rtacha soat</p>
                    <p className="text-lg font-bold">{(sleepData.reduce((a, b) => a + b.hours, 0) / sleepData.length).toFixed(1)}h</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Eng yaxshi</p>
                    <p className="text-lg font-bold">{Math.max(...sleepData.map(s => s.quality))}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sleep Summary */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-base">Haftalik uyqu xulosasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                {sleepData.map((day) => (
                  <div key={day.day} className="text-center p-3 rounded-lg bg-background/50">
                    <p className="text-sm font-medium text-muted-foreground">{day.day}</p>
                    <p className="text-2xl font-bold mt-1">{day.hours}h</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <div className={`w-2 h-2 rounded-full ${day.quality >= 80 ? 'bg-emerald-500' : day.quality >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} />
                      <span className="text-xs text-muted-foreground">{day.quality}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-4">
          {cautionAlerts.map((alert) => {
            const Icon = alert.icon
            return (
              <Card key={alert.id} className={`bg-card/50 border ${alert.borderColor}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${alert.bg}`}>
                      <Icon className={`h-5 w-5 ${alert.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{alert.title}</h4>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        {/* AI Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-4">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-4">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <p className="text-sm">
                <span className="font-medium">AI tavsiyalar</span> — sizning joriy charchoq ({currentMetrics.fatigueIndex}%) va tiklanish ({currentMetrics.recoveryScore}%) ko'rsatkichlaringiz asosida
              </p>
            </div>
          </div>

          {recoveryRecommendations.map((rec) => {
            const Icon = rec.icon
            const priorityColors = {
              high: "border-red-500/20 bg-red-500/5",
              medium: "border-yellow-500/20 bg-yellow-500/5",
              low: "border-emerald-500/20 bg-emerald-500/5",
            }
            const priorityLabels = {
              high: { text: "Muhim", color: "text-red-500 bg-red-500/10" },
              medium: { text: "O'rtacha", color: "text-yellow-500 bg-yellow-500/10" },
              low: { text: "Tavsiya", color: "text-emerald-500 bg-emerald-500/10" },
            }
            return (
              <Card key={rec.id} className={`bg-card/50 border ${priorityColors[rec.priority as keyof typeof priorityColors]}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{rec.title}</h4>
                        <Badge className={`text-xs ${priorityLabels[rec.priority as keyof typeof priorityLabels].color}`}>
                          {priorityLabels[rec.priority as keyof typeof priorityLabels].text}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}

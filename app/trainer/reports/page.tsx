"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Download,
  FileText,
  TrendingUp,
  TrendingDown,
  Users,
  Activity,
  Target,
  Calendar,
  Clock,
  Flame,
  AlertTriangle,
  CheckCircle2
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

// Weekly attendance data
const weeklyAttendance = [
  { day: "Du", attended: 18, total: 24 },
  { day: "Se", attended: 20, total: 24 },
  { day: "Ch", attended: 15, total: 24 },
  { day: "Pa", attended: 22, total: 24 },
  { day: "Ju", attended: 19, total: 24 },
  { day: "Sh", attended: 12, total: 24 },
  { day: "Ya", attended: 5, total: 24 },
]

// Monthly progress
const monthlyProgress = [
  { week: "1-hafta", avgReadiness: 72, avgVO2: 38.5, riskCount: 5 },
  { week: "2-hafta", avgReadiness: 75, avgVO2: 39.2, riskCount: 4 },
  { week: "3-hafta", avgReadiness: 78, avgVO2: 40.1, riskCount: 3 },
  { week: "4-hafta", avgReadiness: 80, avgVO2: 41.2, riskCount: 2 },
]

// Level distribution
const levelDistribution = [
  { name: "Boshlang'ich", value: 8, color: "#06b6d4" },
  { name: "O'rta", value: 12, color: "#eab308" },
  { name: "Yuqori", value: 4, color: "#22c55e" },
]

// Goal distribution
const goalDistribution = [
  { name: "Vazn yo'qotish", value: 10 },
  { name: "Mushak oshirish", value: 6 },
  { name: "Chidamlilik", value: 4 },
  { name: "Sog'lom bo'lish", value: 4 },
]

// Top performers
const topPerformers = [
  { name: "Bobur Toshmatov", progress: 15, readiness: 90, attendance: 96 },
  { name: "Sevara Nazarova", progress: 12, readiness: 88, attendance: 94 },
  { name: "Aziz Karimov", progress: 10, readiness: 85, attendance: 92 },
]

// Risk alerts summary
const riskSummary = {
  overtraining: 2,
  lowAttendance: 3,
  noProgress: 1,
  highFatigue: 4
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Hisobotlar</h1>
          <p className="text-muted-foreground">Guruh va individual statistika</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="week">
            <SelectTrigger className="w-[150px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Bu hafta</SelectItem>
              <SelectItem value="month">Bu oy</SelectItem>
              <SelectItem value="quarter">Chorak</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Eksport
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">O'rtacha davomat</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Activity className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">O'rtacha VO2 Max</p>
                  <p className="text-2xl font-bold">41.2</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+2.7</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Target className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">O'rtacha tayorlik</p>
                  <p className="text-2xl font-bold">80%</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Xavf signallari</p>
                  <p className="text-2xl font-bold">10</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingDown className="h-4 w-4" />
                <span className="text-sm">-3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attendance" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="attendance">Davomat</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="distribution">Taqsimot</TabsTrigger>
          <TabsTrigger value="risks">Xavflar</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Haftalik davomat</CardTitle>
                <CardDescription>Kun bo'yicha qatnashgan sportchilar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyAttendance}>
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
                      <Bar dataKey="attended" fill="#06b6d4" radius={[4, 4, 0, 0]} name="Qatnashdi" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Davomat statistikasi</CardTitle>
                <CardDescription>Bu haftadagi ko'rsatkichlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/50 text-center">
                    <p className="text-3xl font-bold text-primary">111</p>
                    <p className="text-sm text-muted-foreground">Jami tashriflar</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 text-center">
                    <p className="text-3xl font-bold text-cyan-500">78%</p>
                    <p className="text-sm text-muted-foreground">O'rtacha davomat</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Eng faol kunlar</h4>
                  <div className="space-y-2">
                    {weeklyAttendance
                      .sort((a, b) => b.attended - a.attended)
                      .slice(0, 3)
                      .map((day, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded bg-background/50">
                          <span>{day.day === 'Du' ? 'Dushanba' : day.day === 'Se' ? 'Seshanba' : day.day === 'Pa' ? 'Payshanba' : day.day === 'Ju' ? 'Juma' : day.day === 'Ch' ? 'Chorshanba' : day.day === 'Sh' ? 'Shanba' : 'Yakshanba'}</span>
                          <Badge>{day.attended} kishi</Badge>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Oylik progress</CardTitle>
                <CardDescription>O'rtacha tayorlik va VO2 Max dinamikasi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyProgress}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="week" stroke="#888" />
                      <YAxis yAxisId="left" stroke="#888" />
                      <YAxis yAxisId="right" orientation="right" stroke="#888" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a2e', 
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }} 
                      />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="avgReadiness" 
                        stroke="#06b6d4" 
                        strokeWidth={2}
                        name="Tayorlik (%)"
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="avgVO2" 
                        stroke="#22c55e" 
                        strokeWidth={2}
                        name="VO2 Max"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Eng yaxshi natijalar</CardTitle>
                <CardDescription>Bu oydagi top sportchilar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPerformers.map((performer, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        i === 0 ? 'bg-yellow-500 text-yellow-950' : 
                        i === 1 ? 'bg-gray-400 text-gray-950' : 
                        'bg-orange-700 text-orange-100'
                      }`}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-medium">{performer.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Tayorlik: {performer.readiness}% | Davomat: {performer.attendance}%
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-500">
                      +{performer.progress}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Daraja bo'yicha taqsimot</CardTitle>
                <CardDescription>Sportchilarning tayyorgarlik darajasi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={levelDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {levelDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a2e', 
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  {levelDistribution.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Maqsad bo'yicha taqsimot</CardTitle>
                <CardDescription>Sportchilarning mashg'ulot maqsadlari</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={goalDistribution} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis type="number" stroke="#888" />
                      <YAxis dataKey="name" type="category" stroke="#888" width={100} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a2e', 
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="value" fill="#06b6d4" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risks" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ortiqcha yuklama</p>
                    <p className="text-2xl font-bold">{riskSummary.overtraining}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500/10">
                    <Clock className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Past davomat</p>
                    <p className="text-2xl font-bold">{riskSummary.lowAttendance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <TrendingDown className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Progress yo'q</p>
                    <p className="text-2xl font-bold">{riskSummary.noProgress}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Flame className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Yuqori charchoq</p>
                    <p className="text-2xl font-bold">{riskSummary.highFatigue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                AI tavsiyalari trener uchun
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-400">Jasur Alimov - Yuqori xavf</p>
                    <p className="text-sm text-muted-foreground">
                      4 kun davomida mashg'ulot o'tkazmagan. Charchoq darajasi 60%. Shaxsiy murojaat qilish tavsiya etiladi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-400">Dilnoza Rahimova - O'rtacha xavf</p>
                    <p className="text-sm text-muted-foreground">
                      Oxirgi haftada progress sekinlashgan. Mashg'ulot rejasini qayta ko'rib chiqish tavsiya etiladi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-emerald-400">Umumiy guruh holati</p>
                    <p className="text-sm text-muted-foreground">
                      Guruhning 75% sportchilari yaxshi progress ko'rsatmoqda. Umumiy yuklama balansi optimal.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  Heart,
  Zap,
  Target,
  Scale,
  Timer,
  Flame,
  Award
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
  Radar
} from "recharts"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

// Weekly performance data
const weeklyData = [
  { day: "Du", workouts: 1, calories: 320, duration: 45, avgHR: 128, vo2: 42.1 },
  { day: "Se", workouts: 1, calories: 420, duration: 40, avgHR: 145, vo2: 42.3 },
  { day: "Ch", workouts: 0, calories: 0, duration: 0, avgHR: 0, vo2: 42.3 },
  { day: "Pa", workouts: 1, calories: 350, duration: 50, avgHR: 132, vo2: 42.5 },
  { day: "Ju", workouts: 1, calories: 380, duration: 35, avgHR: 152, vo2: 42.7 },
  { day: "Sh", workouts: 1, calories: 120, duration: 30, avgHR: 95, vo2: 42.7 },
  { day: "Ya", workouts: 0, calories: 0, duration: 0, avgHR: 0, vo2: 42.7 },
]

// Monthly progress data
const monthlyProgress = [
  { week: "1-hafta", vo2: 40.5, weight: 77, strength: 65, endurance: 58, flexibility: 50 },
  { week: "2-hafta", vo2: 41.2, weight: 76.5, strength: 68, endurance: 62, flexibility: 52 },
  { week: "3-hafta", vo2: 41.8, weight: 75.8, strength: 72, endurance: 67, flexibility: 55 },
  { week: "4-hafta", vo2: 42.5, weight: 75, strength: 75, endurance: 72, flexibility: 58 },
]

// Fitness radar data
const fitnessRadar = [
  { metric: "Kardio", value: 75, fullMark: 100 },
  { metric: "Kuch", value: 68, fullMark: 100 },
  { metric: "Egiluvchanlik", value: 55, fullMark: 100 },
  { metric: "Chidamlilik", value: 72, fullMark: 100 },
  { metric: "Tezlik", value: 60, fullMark: 100 },
  { metric: "Balans", value: 65, fullMark: 100 },
]

// Goals progress
const goals = [
  { id: 1, name: "Haftalik mashg'ulotlar", current: 5, target: 5, unit: "ta", achieved: true },
  { id: 2, name: "Haftalik kaloriya", current: 1590, target: 2000, unit: "kcal", achieved: false },
  { id: 3, name: "VO2 Max oshirish", current: 42.5, target: 45, unit: "ml/kg/min", achieved: false },
  { id: 4, name: "Vazn maqsadi", current: 75, target: 72, unit: "kg", achieved: false },
]

// Achievements
const achievements = [
  { id: 1, title: "Birinchi hafta", description: "7 kun ketma-ket mashg'ulot", earned: true, date: "15 Mart" },
  { id: 2, title: "Kardio ustasi", description: "10 ta kardio mashg'ulot", earned: true, date: "20 Mart" },
  { id: 3, title: "Kuch qo'shdi", description: "Push-up 20+ ga yetdi", earned: true, date: "22 Mart" },
  { id: 4, title: "Marafon", description: "Jami 1000 daqiqa mashg'ulot", earned: false, date: null },
]

export default function ProgressPage() {
  return (
    <>
      <DashboardHeader title="Progress va Statistika" subtitle="Sizning jismoniy taraqqiyotingiz" />
      <div className="px-[32px] py-6 space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Activity className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">VO2 Max</p>
                  <p className="text-2xl font-bold">42.5</p>
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
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tinch HR</p>
                  <p className="text-2xl font-bold">68</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingDown className="h-4 w-4" />
                <span className="text-sm">-4</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <Scale className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Vazn</p>
                  <p className="text-2xl font-bold">75 kg</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingDown className="h-4 w-4" />
                <span className="text-sm">-2kg</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Zap className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tayyorgarlik</p>
                  <p className="text-2xl font-bold">72%</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="weekly" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="weekly">Haftalik</TabsTrigger>
          <TabsTrigger value="monthly">Oylik</TabsTrigger>
          <TabsTrigger value="goals">Maqsadlar</TabsTrigger>
          <TabsTrigger value="achievements">Yutuqlar</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Weekly Calories */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  Haftalik kaloriya
                </CardTitle>
                <CardDescription>Kun bo'yicha yoqilgan kaloriya</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
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
                      <Bar dataKey="calories" fill="#f97316" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-sm text-muted-foreground">Jami</p>
                    <p className="text-xl font-bold">{weeklyData.reduce((a, b) => a + b.calories, 0)} kcal</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">O'rtacha</p>
                    <p className="text-xl font-bold">{Math.round(weeklyData.reduce((a, b) => a + b.calories, 0) / 7)} kcal/kun</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Duration */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-cyan-500" />
                  Mashg'ulot davomiyligi
                </CardTitle>
                <CardDescription>Kun bo'yicha mashg'ulot vaqti (daqiqa)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyData}>
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
                      <Area 
                        type="monotone" 
                        dataKey="duration" 
                        stroke="#06b6d4" 
                        fill="#06b6d4" 
                        fillOpacity={0.2} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-sm text-muted-foreground">Jami</p>
                    <p className="text-xl font-bold">{weeklyData.reduce((a, b) => a + b.duration, 0)} daqiqa</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mashg'ulotlar</p>
                    <p className="text-xl font-bold">{weeklyData.filter(d => d.workouts > 0).length} ta</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fitness Radar */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Jismoniy tayyorgarlik profili
              </CardTitle>
              <CardDescription>Turli yo'nalishlar bo'yicha ko'rsatkichlar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={fitnessRadar}>
                    <PolarGrid stroke="#333" />
                    <PolarAngleAxis dataKey="metric" stroke="#888" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#888" />
                    <Radar
                      name="Joriy"
                      dataKey="value"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* VO2 Max Progress */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-cyan-500" />
                  VO2 Max dinamikasi
                </CardTitle>
                <CardDescription>Oxirgi 4 hafta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyProgress}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="week" stroke="#888" />
                      <YAxis domain={[38, 46]} stroke="#888" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a2e', 
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="vo2" 
                        stroke="#06b6d4" 
                        strokeWidth={3}
                        dot={{ fill: '#06b6d4', strokeWidth: 2, r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Weight Progress */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-yellow-500" />
                  Vazn dinamikasi
                </CardTitle>
                <CardDescription>Oxirgi 4 hafta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyProgress}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="week" stroke="#888" />
                      <YAxis domain={[70, 80]} stroke="#888" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a2e', 
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="#eab308" 
                        strokeWidth={3}
                        dot={{ fill: '#eab308', strokeWidth: 2, r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fitness Components Progress */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle>Jismoniy komponentlar progressi</CardTitle>
              <CardDescription>Kuch, chidamlilik va egiluvchanlik</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyProgress}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="week" stroke="#888" />
                    <YAxis domain={[40, 100]} stroke="#888" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a2e', 
                        border: '1px solid #333',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="strength" stroke="#eab308" strokeWidth={2} name="Kuch" />
                    <Line type="monotone" dataKey="endurance" stroke="#ef4444" strokeWidth={2} name="Chidamlilik" />
                    <Line type="monotone" dataKey="flexibility" stroke="#06b6d4" strokeWidth={2} name="Egiluvchanlik" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-sm">Kuch</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm">Chidamlilik</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500" />
                  <span className="text-sm">Egiluvchanlik</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <div className="grid gap-4">
            {goals.map((goal) => (
              <Card key={goal.id} className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Target className={`h-5 w-5 ${goal.achieved ? 'text-emerald-500' : 'text-primary'}`} />
                      <div>
                        <h4 className="font-medium">{goal.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {goal.current} / {goal.target} {goal.unit}
                        </p>
                      </div>
                    </div>
                    {goal.achieved ? (
                      <Badge className="bg-emerald-500/10 text-emerald-500">Bajarildi</Badge>
                    ) : (
                      <Badge variant="outline">{Math.round((goal.current / goal.target) * 100)}%</Badge>
                    )}
                  </div>
                  <Progress 
                    value={Math.min((goal.current / goal.target) * 100, 100)} 
                    className={`h-2 ${goal.achieved ? '[&>div]:bg-emerald-500' : ''}`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`bg-card/50 border-border/50 ${!achievement.earned ? 'opacity-50' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.earned ? 'bg-yellow-500/10' : 'bg-muted/10'}`}>
                      <Award className={`h-6 w-6 ${achievement.earned ? 'text-yellow-500' : 'text-muted'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{achievement.title}</h4>
                        {achievement.earned && (
                          <Badge className="bg-yellow-500/10 text-yellow-500">{achievement.date}</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
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

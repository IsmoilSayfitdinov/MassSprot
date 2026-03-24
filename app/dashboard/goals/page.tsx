"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import {
  Target,
  TrendingUp,
  TrendingDown,
  Plus,
  CheckCircle2,
  Clock,
  Flame,
  Dumbbell,
  Heart,
  Scale,
  Activity,
  Zap,
  Calendar,
  Award,
  ChevronRight,
  Edit2,
  Trash2
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

// Goal categories
const goalCategories = [
  { value: "weight_loss", label: "Vazn yo'qotish", icon: Scale, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { value: "muscle_gain", label: "Mushak oshirish", icon: Dumbbell, scolor: "text-cyan-500", bg: "bg-cyan-500/10" },
  { value: "endurance", label: "Chidamlilik", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { value: "flexibility", label: "Egiluvchanlik", icon: Zap, color: "text-purple-500", bg: "bg-purple-500/10" },
  { value: "cardio", label: "Kardio sog'lom", icon: Heart, color: "text-red-500", bg: "bg-red-500/10" },
  { value: "consistency", label: "Regulyarlik", icon: Calendar, color: "text-orange-500", bg: "bg-orange-500/10" },
]

// Active goals
const activeGoals = [
  {
    id: 1,
    category: "weight_loss",
    title: "Vazn yo'qotish",
    description: "3 oy ichida 75 kg dan 72 kg ga tushish",
    current: 75,
    target: 72,
    start: 77,
    unit: "kg",
    deadline: "2026-06-15",
    createdAt: "2026-01-10",
    progress: 40,
    trend: "down" as const,
    milestones: [
      { value: 76, label: "76 kg", achieved: true, date: "2026-02-01" },
      { value: 75, label: "75 kg", achieved: true, date: "2026-03-10" },
      { value: 74, label: "74 kg", achieved: false, date: null },
      { value: 73, label: "73 kg", achieved: false, date: null },
      { value: 72, label: "72 kg (Maqsad)", achieved: false, date: null },
    ]
  },
  {
    id: 2,
    category: "endurance",
    title: "VO2 Max oshirish",
    description: "VO2 Max ko'rsatkichini 42.5 dan 48 ga yetkazish",
    current: 42.5,
    target: 48,
    start: 38,
    unit: "ml/kg/min",
    deadline: "2026-08-01",
    createdAt: "2026-01-10",
    progress: 45,
    trend: "up" as const,
    milestones: [
      { value: 40, label: "40 ml/kg/min", achieved: true, date: "2026-01-28" },
      { value: 42, label: "42 ml/kg/min", achieved: true, date: "2026-02-20" },
      { value: 44, label: "44 ml/kg/min", achieved: false, date: null },
      { value: 46, label: "46 ml/kg/min", achieved: false, date: null },
      { value: 48, label: "48 ml/kg/min (Maqsad)", achieved: false, date: null },
    ]
  },
  {
    id: 3,
    category: "consistency",
    title: "Haftalik mashg'ulotlar",
    description: "Har hafta kamida 5 ta mashg'ulot bajarish",
    current: 5,
    target: 5,
    start: 0,
    unit: "ta/hafta",
    deadline: "2026-12-31",
    createdAt: "2026-01-01",
    progress: 100,
    trend: "up" as const,
    milestones: []
  },
  {
    id: 4,
    category: "muscle_gain",
    title: "Push-up kuchini oshirish",
    description: "Bir yondashuvda 40 ta push-up bajarish",
    current: 25,
    target: 40,
    start: 12,
    unit: "ta",
    deadline: "2026-07-01",
    createdAt: "2026-02-01",
    progress: 46,
    trend: "up" as const,
    milestones: [
      { value: 15, label: "15 ta", achieved: true, date: "2026-02-10" },
      { value: 20, label: "20 ta", achieved: true, date: "2026-02-28" },
      { value: 25, label: "25 ta", achieved: true, date: "2026-03-15" },
      { value: 30, label: "30 ta", achieved: false, date: null },
      { value: 40, label: "40 ta (Maqsad)", achieved: false, date: null },
    ]
  },
  {
    id: 5,
    category: "cardio",
    title: "Tinch HR ni pasaytirish",
    description: "Tinch holatdagi yurak urish tezligini 68 dan 60 ga tushirish",
    current: 68,
    target: 60,
    start: 75,
    unit: "bpm",
    deadline: "2026-09-01",
    createdAt: "2026-01-15",
    progress: 47,
    trend: "down" as const,
    milestones: []
  },
]

// Weekly goal tracking
const weeklyTracking = [
  { week: "1-hafta", workouts: 4, target: 5, calories: 1800, calorieTarget: 2000 },
  { week: "2-hafta", workouts: 5, target: 5, calories: 2100, calorieTarget: 2000 },
  { week: "3-hafta", workouts: 3, target: 5, calories: 1500, calorieTarget: 2000 },
  { week: "4-hafta", workouts: 5, target: 5, calories: 2200, calorieTarget: 2000 },
]

// Completed goals
const completedGoals = [
  {
    id: 101,
    category: "consistency",
    title: "30 kunlik challenge",
    description: "30 kun ketma-ket mashg'ulot qilish",
    completedDate: "2026-02-15",
    duration: "30 kun",
  },
  {
    id: 102,
    category: "weight_loss",
    title: "BMI ni normallashtirish",
    description: "BMI ni 26 dan 24 ga tushirish",
    completedDate: "2026-03-01",
    duration: "45 kun",
  },
]

export default function GoalsPage() {
  const [selectedGoal, setSelectedGoal] = useState(activeGoals[0])

  const getCategoryInfo = (categoryValue: string) => {
    return goalCategories.find(c => c.value === categoryValue) || goalCategories[0]
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Mening Maqsadlarim</h1>
          <p className="text-muted-foreground">Maqsadlaringizni belgilang va progressni kuzating</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Yangi maqsad
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>Yangi maqsad qo'shish</DialogTitle>
              <DialogDescription>Yangi jismoniy maqsad belgilang</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Kategoriya</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Kategoriyani tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {goalCategories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Maqsad nomi</Label>
                <Input placeholder="Masalan: Vazn yo'qotish" />
              </div>
              <div className="space-y-2">
                <Label>Tavsif</Label>
                <Input placeholder="Maqsad haqida qisqacha..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Joriy qiymat</Label>
                  <Input type="number" placeholder="75" />
                </div>
                <div className="space-y-2">
                  <Label>Maqsad qiymat</Label>
                  <Input type="number" placeholder="72" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>O'lchov birligi</Label>
                  <Input placeholder="kg, bpm, ta..." />
                </div>
                <div className="space-y-2">
                  <Label>Muddat</Label>
                  <Input type="date" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Bekor qilish</Button>
              </DialogClose>
              <Button className="bg-primary">Saqlash</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary KPIs */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Faol maqsadlar</p>
                <p className="text-2xl font-bold">{activeGoals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bajarilgan</p>
                <p className="text-2xl font-bold">{completedGoals.length + activeGoals.filter(g => g.progress >= 100).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <TrendingUp className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">O'rtacha progress</p>
                <p className="text-2xl font-bold">{Math.round(activeGoals.reduce((a, b) => a + b.progress, 0) / activeGoals.length)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bu hafta mashg'ulot</p>
                <p className="text-2xl font-bold">5/5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="active">Faol maqsadlar</TabsTrigger>
          <TabsTrigger value="weekly">Haftalik kuzatuv</TabsTrigger>
          <TabsTrigger value="completed">Bajarilganlar</TabsTrigger>
        </TabsList>

        {/* Active Goals */}
        <TabsContent value="active" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Goals List */}
            <div className="lg:col-span-1 space-y-3">
              {activeGoals.map((goal) => {
                const catInfo = getCategoryInfo(goal.category)
                const Icon = catInfo.icon
                return (
                  <Card
                    key={goal.id}
                    className={`bg-card/50 border-border/50 cursor-pointer transition-all hover:border-primary/50 ${
                      selectedGoal.id === goal.id ? 'border-primary ring-1 ring-primary/20' : ''
                    }`}
                    onClick={() => setSelectedGoal(goal)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${catInfo.bg}`}>
                          <Icon className={`h-5 w-5 ${catInfo.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm truncate">{goal.title}</h4>
                            {goal.progress >= 100 ? (
                              <Badge className="bg-emerald-500/10 text-emerald-500 text-xs">Bajarildi</Badge>
                            ) : (
                              <span className="text-sm font-bold text-primary">{goal.progress}%</span>
                            )}
                          </div>
                          <Progress value={goal.progress} className="h-1.5 mt-2" />
                          <p className="text-xs text-muted-foreground mt-1">
                            {goal.current} / {goal.target} {goal.unit}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Goal Detail */}
            <div className="lg:col-span-2 space-y-4">
              {selectedGoal && (() => {
                const catInfo = getCategoryInfo(selectedGoal.category)
                const Icon = catInfo.icon
                return (
                  <>
                    <Card className="bg-card/50 border-border/50">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-lg ${catInfo.bg}`}>
                              <Icon className={`h-6 w-6 ${catInfo.color}`} />
                            </div>
                            <div>
                              <CardTitle>{selectedGoal.title}</CardTitle>
                              <CardDescription>{selectedGoal.description}</CardDescription>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Progress Bar */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-bold text-primary">{selectedGoal.progress}%</span>
                          </div>
                          <div className="relative">
                            <Progress value={selectedGoal.progress} className="h-4" />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Boshlang'ich: {selectedGoal.start} {selectedGoal.unit}</span>
                            <span>Maqsad: {selectedGoal.target} {selectedGoal.unit}</span>
                          </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 rounded-lg bg-background/50">
                            <p className="text-xs text-muted-foreground">Joriy</p>
                            <p className="text-xl font-bold">{selectedGoal.current}</p>
                            <p className="text-xs text-muted-foreground">{selectedGoal.unit}</p>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-background/50">
                            <p className="text-xs text-muted-foreground">Qolgan</p>
                            <p className="text-xl font-bold">
                              {Math.abs(selectedGoal.target - selectedGoal.current).toFixed(1)}
                            </p>
                            <p className="text-xs text-muted-foreground">{selectedGoal.unit}</p>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-background/50">
                            <p className="text-xs text-muted-foreground">Trend</p>
                            <div className="flex items-center justify-center gap-1 mt-1">
                              {selectedGoal.trend === "up" ? (
                                <TrendingUp className="h-5 w-5 text-emerald-500" />
                              ) : (
                                <TrendingDown className="h-5 w-5 text-emerald-500" />
                              )}
                              <span className="text-emerald-500 font-medium text-sm">Yaxshi</span>
                            </div>
                          </div>
                        </div>

                        {/* Deadline */}
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Muddat:</span>
                          <span className="text-sm font-medium">{selectedGoal.deadline}</span>
                          <span className="text-xs text-muted-foreground ml-auto">
                            Boshlangan: {selectedGoal.createdAt}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Milestones */}
                    {selectedGoal.milestones.length > 0 && (
                      <Card className="bg-card/50 border-border/50">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-500" />
                            Bosqichlar (Milestones)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {selectedGoal.milestones.map((milestone, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  milestone.achieved
                                    ? 'bg-emerald-500/10 text-emerald-500'
                                    : 'bg-muted/10 text-muted-foreground'
                                }`}>
                                  {milestone.achieved ? (
                                    <CheckCircle2 className="h-5 w-5" />
                                  ) : (
                                    <span className="text-xs font-bold">{index + 1}</span>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <p className={`text-sm font-medium ${milestone.achieved ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {milestone.label}
                                  </p>
                                  {milestone.date && (
                                    <p className="text-xs text-muted-foreground">{milestone.date}</p>
                                  )}
                                </div>
                                {milestone.achieved && (
                                  <Badge className="bg-emerald-500/10 text-emerald-500 text-xs">Bajarildi</Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                )
              })()}
            </div>
          </div>
        </TabsContent>

        {/* Weekly Tracking */}
        <TabsContent value="weekly" className="space-y-6">
          <div className="grid gap-4">
            {weeklyTracking.map((week, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">{week.week}</h4>
                    <Badge variant={week.workouts >= week.target ? "default" : "outline"}
                      className={week.workouts >= week.target ? "bg-emerald-500/10 text-emerald-500" : ""}>
                      {week.workouts >= week.target ? "Maqsadga yetildi" : "Davom etmoqda"}
                    </Badge>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Mashg'ulotlar</span>
                        <span>{week.workouts}/{week.target}</span>
                      </div>
                      <Progress value={(week.workouts / week.target) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Kaloriya</span>
                        <span>{week.calories}/{week.calorieTarget} kcal</span>
                      </div>
                      <Progress value={(week.calories / week.calorieTarget) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Completed Goals */}
        <TabsContent value="completed" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {completedGoals.map((goal) => {
              const catInfo = getCategoryInfo(goal.category)
              const Icon = catInfo.icon
              return (
                <Card key={goal.id} className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${catInfo.bg}`}>
                        <Icon className={`h-6 w-6 ${catInfo.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{goal.title}</h4>
                          <Badge className="bg-emerald-500/10 text-emerald-500">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Bajarildi
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {goal.completedDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {goal.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

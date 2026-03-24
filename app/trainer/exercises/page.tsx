"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Plus,
  Search,
  Dumbbell,
  Heart,
  Wind,
  Zap,
  Clock,
  Flame,
  Edit2,
  Trash2,
  Copy,
  Filter,
  Eye,
  LayoutGrid,
  CalendarDays,
  BookOpen,
  BarChart2,
  Layers,
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
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICard } from "@/components/dashboard/kpi-card"

// ─── Mock data ────────────────────────────────────────────────────────────────

const exercises = [
  { id: 1,  name: "Push-up",              category: "Kuch",          muscle: "Ko'krak, yelka, triceps", intensity: "O'rtacha", duration: 10, calories: 80  },
  { id: 2,  name: "Squat",                category: "Kuch",          muscle: "Oyoq, dumba",              intensity: "O'rtacha", duration: 10, calories: 90  },
  { id: 3,  name: "Deadlift",             category: "Kuch",          muscle: "Orqa, oyoq, dumba",        intensity: "Yuqori",   duration: 15, calories: 130 },
  { id: 4,  name: "Pull-up",              category: "Kuch",          muscle: "Orqa, biceps, yelka",      intensity: "Yuqori",   duration: 12, calories: 110 },
  { id: 5,  name: "Plank",                category: "Balans",        muscle: "Qorin, yelka, orqa",       intensity: "Yengil",   duration: 5,  calories: 40  },
  { id: 6,  name: "Burpee",               category: "Kardio",        muscle: "Butun tana",               intensity: "Maksimal", duration: 10, calories: 150 },
  { id: 7,  name: "Yugurish (interval)",  category: "Chidamlilik",   muscle: "Oyoq, yurak-tomir",        intensity: "Yuqori",   duration: 30, calories: 350 },
  { id: 8,  name: "Velotrenajer",         category: "Kardio",        muscle: "Oyoq, yurak",              intensity: "O'rtacha", duration: 25, calories: 280 },
  { id: 9,  name: "Yoga – Surya Namaskar",category: "Egiluvchanlik", muscle: "Butun tana",               intensity: "Yengil",   duration: 20, calories: 120 },
  { id: 10, name: "Cho'zish mashqlari",   category: "Egiluvchanlik", muscle: "Butun tana",               intensity: "Yengil",   duration: 15, calories: 60  },
  { id: 11, name: "Bench Press",          category: "Kuch",          muscle: "Ko'krak, triceps",         intensity: "Yuqori",   duration: 15, calories: 120 },
  { id: 12, name: "Nafas mashqlari",      category: "Egiluvchanlik", muscle: "Diafragma",                intensity: "Yengil",   duration: 10, calories: 20  },
]

const trainingPlans = [
  { id: 1, name: "Boshlang'ich – Umumiy sog'lom bo'lish", durationWeeks: 4,  level: "Boshlang'ich", exercisesCount: 12, created: "2026-01-10" },
  { id: 2, name: "O'rta – Kuch va chidamlilik",           durationWeeks: 8,  level: "O'rta",        exercisesCount: 20, created: "2026-01-25" },
  { id: 3, name: "Ilg'or – Intensiv kuch rejasi",          durationWeeks: 12, level: "Yuqori",       exercisesCount: 28, created: "2026-02-05" },
  { id: 4, name: "Kardio HIIT – Yog' yoqish",             durationWeeks: 6,  level: "O'rta",        exercisesCount: 16, created: "2026-02-18" },
  { id: 5, name: "Tiklanish va mobillik",                  durationWeeks: 3,  level: "Barcha",       exercisesCount: 10, created: "2026-03-01" },
]

const templates = [
  { id: 1, name: "Umumiy sog'lom hayot",  sportType: "Umumiy fitnes",  level: "Boshlang'ich", usageCount: 38 },
  { id: 2, name: "Kuch sport shabloni",   sportType: "Og'irlik ko'taring", level: "O'rta",   usageCount: 24 },
  { id: 3, name: "Kardio va yurak",       sportType: "Yugurish / sikl",    level: "O'rta",   usageCount: 17 },
  { id: 4, name: "Egiluvchanlik va yoga", sportType: "Yoga / pilates",     level: "Barcha",  usageCount: 12 },
]

// ─── Colour maps ───────────────────────────────────────────────────────────────

const categoryIcons: Record<string, typeof Dumbbell> = {
  Kuch:          Dumbbell,
  Kardio:        Heart,
  Egiluvchanlik: Wind,
  Balans:        Zap,
  Chidamlilik:   BarChart2,
}

const categoryColors: Record<string, string> = {
  Kuch:          "bg-yellow-500/10 text-yellow-500",
  Kardio:        "bg-red-500/10 text-red-500",
  Egiluvchanlik: "bg-purple-500/10 text-purple-500",
  Balans:        "bg-cyan-500/10 text-cyan-500",
  Chidamlilik:   "bg-emerald-500/10 text-emerald-500",
}

const intensityColors: Record<string, string> = {
  "Yengil":   "bg-emerald-500/10 text-emerald-500",
  "O'rtacha": "bg-yellow-500/10 text-yellow-500",
  "Yuqori":   "bg-orange-500/10 text-orange-500",
  "Maksimal": "bg-red-500/10 text-red-500",
}

const levelColors: Record<string, string> = {
  "Boshlang'ich": "bg-emerald-500/10 text-emerald-500",
  "O'rta":        "bg-yellow-500/10 text-yellow-500",
  "Yuqori":       "bg-orange-500/10 text-orange-500",
  "Barcha":       "bg-cyan-500/10 text-cyan-500",
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExercisesPage() {
  const [searchQuery, setSearchQuery]     = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch   = ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            ex.muscle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || ex.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <DashboardHeader
        title="Mashqlar kutubxonasi"
        subtitle="Trening mashqlari va rejalar"
      />

      <div className="px-[32px] py-6 space-y-6">

        {/* ── KPI stats ── */}
        <div className="grid gap-4 md:grid-cols-4">
          <KPICard
            title="Jami mashqlar"
            value={248}
            icon={Dumbbell}
            status="neutral"
            trend={{ value: 8, isPositive: true }}
          />
          <KPICard
            title="Rejalar"
            value={32}
            icon={CalendarDays}
            status="success"
            trend={{ value: 5, isPositive: true }}
          />
          <KPICard
            title="Shablonlar"
            value={15}
            icon={Layers}
            status="warning"
          />
          <KPICard
            title="Kategoriyalar"
            value={8}
            icon={BookOpen}
            status="neutral"
          />
        </div>

        {/* ── Tabs ── */}
        <Tabs defaultValue="exercises" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-card/50 border border-border/50">
              <TabsTrigger value="exercises">Mashqlar</TabsTrigger>
              <TabsTrigger value="plans">Rejalar</TabsTrigger>
              <TabsTrigger value="templates">Shablonlar</TabsTrigger>
            </TabsList>

            {/* Add exercise button (shown on all tabs for simplicity) */}
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Yangi mashq
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle>Yangi mashq qo'shish</DialogTitle>
                  <DialogDescription>Kutubxonaga yangi mashq qo'shing</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Mashq nomi</Label>
                    <Input placeholder="Masalan: Push-up" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Kategoriya</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Tanlang" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Kuch">Kuch</SelectItem>
                          <SelectItem value="Kardio">Kardio</SelectItem>
                          <SelectItem value="Egiluvchanlik">Egiluvchanlik</SelectItem>
                          <SelectItem value="Balans">Balans</SelectItem>
                          <SelectItem value="Chidamlilik">Chidamlilik</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Intensivlik</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Tanlang" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yengil">Yengil</SelectItem>
                          <SelectItem value="O'rtacha">O'rtacha</SelectItem>
                          <SelectItem value="Yuqori">Yuqori</SelectItem>
                          <SelectItem value="Maksimal">Maksimal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Ishlaydigan mushaklar</Label>
                    <Input placeholder="Masalan: Ko'krak, yelka" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Davomiylik (daqiqa)</Label>
                      <Input type="number" placeholder="10" />
                    </div>
                    <div className="space-y-2">
                      <Label>Kaloriya (taxminiy)</Label>
                      <Input type="number" placeholder="80" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Tavsif</Label>
                    <Textarea placeholder="Mashq haqida qisqacha..." />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild><Button variant="outline">Bekor qilish</Button></DialogClose>
                  <Button>Saqlash</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* ────────── Mashqlar tab ────────── */}
          <TabsContent value="exercises" className="space-y-4">
            {/* Search + filter */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Mashq yoki mushak bo'yicha qidirish..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Kategoriya" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Barcha kategoriyalar</SelectItem>
                      <SelectItem value="Kuch">Kuch</SelectItem>
                      <SelectItem value="Kardio">Kardio</SelectItem>
                      <SelectItem value="Egiluvchanlik">Egiluvchanlik</SelectItem>
                      <SelectItem value="Balans">Balans</SelectItem>
                      <SelectItem value="Chidamlilik">Chidamlilik</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground">
              {filteredExercises.length} ta mashq topildi
            </p>

            {/* Exercise cards grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredExercises.map((exercise) => {
                const Icon        = categoryIcons[exercise.category] ?? Dumbbell
                const catColor    = categoryColors[exercise.category] ?? "bg-primary/10 text-primary"
                const [bgC, txtC] = catColor.split(" ")
                return (
                  <Card
                    key={exercise.id}
                    className="bg-card/50 border-border/50 hover:border-primary/40 transition-colors"
                  >
                    <CardContent className="p-4 space-y-3">
                      {/* Name + category badge */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${bgC}`}>
                            <Icon className={`h-5 w-5 ${txtC}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm leading-tight">{exercise.name}</h4>
                            <Badge className={`mt-1 text-xs ${catColor}`} variant="secondary">
                              {exercise.category}
                            </Badge>
                          </div>
                        </div>
                        <Badge className={`text-xs ${intensityColors[exercise.intensity]}`} variant="secondary">
                          {exercise.intensity}
                        </Badge>
                      </div>

                      {/* Muscle groups */}
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground/70">Mushaklar: </span>
                        {exercise.muscle}
                      </p>

                      {/* Duration + calories */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {exercise.duration} daqiqa
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          {exercise.calories} kcal
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 pt-2 border-t border-border/50">
                        <Button variant="ghost" size="sm" className="flex-1 h-8 text-xs">
                          <Eye className="h-3.5 w-3.5 mr-1" />
                          Ko'rish
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit2 className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {filteredExercises.length === 0 && (
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-10 text-center">
                  <p className="text-muted-foreground">Hech qanday mashq topilmadi</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* ────────── Rejalar tab ────────── */}
          <TabsContent value="plans" className="space-y-4">
            <div className="flex justify-end">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Yangi reja
              </Button>
            </div>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50 text-muted-foreground text-xs uppercase tracking-wide">
                        <th className="text-left p-4">Reja nomi</th>
                        <th className="text-left p-4">Davomiylik</th>
                        <th className="text-left p-4">Daraja</th>
                        <th className="text-left p-4">Mashqlar</th>
                        <th className="text-left p-4">Yaratilgan</th>
                        <th className="text-right p-4">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trainingPlans.map((plan) => (
                        <tr
                          key={plan.id}
                          className="border-b border-border/30 hover:bg-card/80 transition-colors"
                        >
                          <td className="p-4 font-medium">{plan.name}</td>
                          <td className="p-4 text-muted-foreground">{plan.durationWeeks} hafta</td>
                          <td className="p-4">
                            <Badge className={levelColors[plan.level]} variant="secondary">
                              {plan.level}
                            </Badge>
                          </td>
                          <td className="p-4 text-muted-foreground">{plan.exercisesCount} ta</td>
                          <td className="p-4 text-muted-foreground">{plan.created}</td>
                          <td className="p-4">
                            <div className="flex items-center justify-end gap-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-3.5 w-3.5" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit2 className="h-3.5 w-3.5" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ────────── Shablonlar tab ────────── */}
          <TabsContent value="templates" className="space-y-4">
            <div className="flex justify-end">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Yangi shablon
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {templates.map((tpl) => (
                <Card
                  key={tpl.id}
                  className="bg-card/50 border-border/50 hover:border-primary/40 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{tpl.name}</CardTitle>
                      <Badge className={levelColors[tpl.level]} variant="secondary">
                        {tpl.level}
                      </Badge>
                    </div>
                    <CardDescription>{tpl.sportType}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <LayoutGrid className="h-4 w-4" />
                        <span>{tpl.usageCount} marta ishlatilgan</span>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm">
                          <Copy className="h-3.5 w-3.5 mr-1" />
                          Nusxa
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit2 className="h-3.5 w-3.5 mr-1" />
                          Tahrir
                        </Button>
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

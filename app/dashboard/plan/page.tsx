"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar,
  Clock,
  Flame,
  Target,
  Dumbbell,
  Heart,
  Wind,
  Zap,
  ChevronRight,
  CheckCircle2,
  Circle,
  Play,
  RotateCcw,
  Sparkles
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

// Weekly training plan
const weeklyPlan = [
  {
    day: "Dushanba",
    date: "25 Mart",
    type: "strength",
    title: "Yuqori tana kuchi",
    duration: 45,
    intensity: "O'rtacha",
    calories: 320,
    completed: true,
    exercises: [
      { name: "Push-up", sets: 3, reps: 15, rest: 60 },
      { name: "Dumbbell press", sets: 3, reps: 12, rest: 60 },
      { name: "Shoulder press", sets: 3, reps: 12, rest: 60 },
      { name: "Tricep dips", sets: 3, reps: 15, rest: 45 },
      { name: "Plank", sets: 3, reps: "60s", rest: 30 },
    ]
  },
  {
    day: "Seshanba",
    date: "26 Mart",
    type: "cardio",
    title: "Kardio va chidamlilik",
    duration: 40,
    intensity: "Yuqori",
    calories: 400,
    completed: true,
    exercises: [
      { name: "Isitish (yurish)", sets: 1, reps: "5 min", rest: 0 },
      { name: "Interval yugurish", sets: 8, reps: "30s sprint / 90s yurish", rest: 0 },
      { name: "Jumping jacks", sets: 3, reps: 30, rest: 30 },
      { name: "Burpees", sets: 3, reps: 10, rest: 60 },
      { name: "Sovutish (cho'zish)", sets: 1, reps: "5 min", rest: 0 },
    ]
  },
  {
    day: "Chorshanba",
    date: "27 Mart",
    type: "rest",
    title: "Dam olish / Yengil cho'zish",
    duration: 20,
    intensity: "Past",
    calories: 80,
    completed: false,
    exercises: [
      { name: "Yoga cho'zishlari", sets: 1, reps: "10 min", rest: 0 },
      { name: "Nafas olish mashqlari", sets: 1, reps: "5 min", rest: 0 },
      { name: "Meditatsiya", sets: 1, reps: "5 min", rest: 0 },
    ]
  },
  {
    day: "Payshanba",
    date: "28 Mart",
    type: "strength",
    title: "Pastki tana kuchi",
    duration: 50,
    intensity: "O'rtacha",
    calories: 350,
    completed: false,
    exercises: [
      { name: "Squat", sets: 4, reps: 15, rest: 60 },
      { name: "Lunges", sets: 3, reps: "12 har oyoq", rest: 45 },
      { name: "Deadlift", sets: 3, reps: 12, rest: 60 },
      { name: "Calf raises", sets: 3, reps: 20, rest: 30 },
      { name: "Glute bridge", sets: 3, reps: 15, rest: 45 },
    ]
  },
  {
    day: "Juma",
    date: "29 Mart",
    type: "cardio",
    title: "HIIT va Core",
    duration: 35,
    intensity: "Yuqori",
    calories: 380,
    completed: false,
    exercises: [
      { name: "Mountain climbers", sets: 4, reps: "30s", rest: 30 },
      { name: "High knees", sets: 4, reps: "30s", rest: 30 },
      { name: "Russian twists", sets: 3, reps: 20, rest: 30 },
      { name: "Bicycle crunches", sets: 3, reps: 20, rest: 30 },
      { name: "Plank variations", sets: 3, reps: "45s", rest: 30 },
    ]
  },
  {
    day: "Shanba",
    date: "30 Mart",
    type: "flexibility",
    title: "Egiluvchanlik va mobillik",
    duration: 30,
    intensity: "Past",
    calories: 120,
    completed: false,
    exercises: [
      { name: "Dinamik cho'zish", sets: 1, reps: "10 min", rest: 0 },
      { name: "Hip opener stretches", sets: 1, reps: "5 min", rest: 0 },
      { name: "Shoulder mobility", sets: 1, reps: "5 min", rest: 0 },
      { name: "Foam rolling", sets: 1, reps: "10 min", rest: 0 },
    ]
  },
  {
    day: "Yakshanba",
    date: "31 Mart",
    type: "rest",
    title: "To'liq dam olish",
    duration: 0,
    intensity: "Dam",
    calories: 0,
    completed: false,
    exercises: []
  }
]

const typeIcons: Record<string, React.ElementType> = {
  strength: Dumbbell,
  cardio: Heart,
  flexibility: Wind,
  rest: RotateCcw
}

const typeColors: Record<string, string> = {
  strength: "text-yellow-500 bg-yellow-500/10",
  cardio: "text-red-500 bg-red-500/10",
  flexibility: "text-cyan-500 bg-cyan-500/10",
  rest: "text-emerald-500 bg-emerald-500/10"
}

export default function PlanPage() {
  const [selectedDay, setSelectedDay] = useState(weeklyPlan[2]) // Today (Wednesday)

  const completedWorkouts = weeklyPlan.filter(d => d.completed).length
  const totalWorkouts = weeklyPlan.filter(d => d.type !== 'rest' || d.exercises.length > 0).length
  const weekProgress = (completedWorkouts / totalWorkouts) * 100

  return (
    <>
      <DashboardHeader title="Haftalik Reja" subtitle="25 - 31 Mart, 2024" />
      <div className="px-[32px] py-6 space-y-6">
      <div className="flex justify-end">
        <Button className="gap-2">
          <Sparkles className="h-4 w-4" />
          AI bilan yangilash
        </Button>
      </div>

      {/* Week Progress */}
      <Card className="bg-card/50 border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Haftalik progress</span>
            <span className="text-sm font-medium">{completedWorkouts}/{totalWorkouts} mashg'ulot</span>
          </div>
          <Progress value={weekProgress} className="h-3" />
          <div className="flex justify-between mt-4 gap-2">
            {weeklyPlan.map((day, i) => {
              const Icon = typeIcons[day.type] || Circle
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 p-2 rounded-lg text-center transition-all ${
                    selectedDay.day === day.day 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background/50 hover:bg-background'
                  }`}
                >
                  <p className="text-xs font-medium">{day.day.slice(0, 2)}</p>
                  <div className="flex justify-center my-1">
                    {day.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <Icon className={`h-5 w-5 ${selectedDay.day === day.day ? '' : typeColors[day.type]?.split(' ')[0]}`} />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{day.date.split(' ')[0]}</p>
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Selected Day Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${typeColors[selectedDay.type]}`}>
                    {(() => {
                      const Icon = typeIcons[selectedDay.type] || Circle
                      return <Icon className="h-6 w-6" />
                    })()}
                  </div>
                  <div>
                    <CardTitle>{selectedDay.title}</CardTitle>
                    <CardDescription>{selectedDay.day}, {selectedDay.date}</CardDescription>
                  </div>
                </div>
                {selectedDay.completed ? (
                  <Badge className="bg-emerald-500/10 text-emerald-500">Bajarildi</Badge>
                ) : (
                  <Badge variant="outline">Rejalashtirilgan</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <Clock className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                  <p className="text-lg font-bold">{selectedDay.duration}</p>
                  <p className="text-xs text-muted-foreground">daqiqa</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <Flame className="h-5 w-5 mx-auto text-orange-500 mb-1" />
                  <p className="text-lg font-bold">{selectedDay.calories}</p>
                  <p className="text-xs text-muted-foreground">kaloriya</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <Zap className="h-5 w-5 mx-auto text-yellow-500 mb-1" />
                  <p className="text-lg font-bold">{selectedDay.intensity}</p>
                  <p className="text-xs text-muted-foreground">intensivlik</p>
                </div>
              </div>

              {selectedDay.exercises.length > 0 ? (
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground">Mashqlar</h4>
                  {selectedDay.exercises.map((ex, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-muted-foreground w-6">{i + 1}.</span>
                        <span className="font-medium">{ex.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{ex.sets} set</span>
                        <span>x {ex.reps}</span>
                        {ex.rest > 0 && <span className="text-xs">({ex.rest}s dam)</span>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <RotateCcw className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Bugun to'liq dam olish kuni</p>
                  <p className="text-sm">Tanangiz tiklansin!</p>
                </div>
              )}

              {selectedDay.exercises.length > 0 && !selectedDay.completed && (
                <Button className="w-full mt-6" size="lg" asChild>
                  <a href="/dashboard/workout">
                    <Play className="mr-2 h-5 w-5" />
                    Mashg'ulotni boshlash
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* AI Insights */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                AI tahlili
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm">
                  Sizning so'nggi 5 mashg'ulotingiz asosida, bu haftagi rejangiz <strong className="text-primary">optimal</strong> tuzilgan.
                  Chorshanba kuni dam olish sizning tiklanishingiz uchun muhim.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Yuklama balansi</span>
                  <Badge className="bg-emerald-500/10 text-emerald-500">Yaxshi</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tiklanish vaqti</span>
                  <Badge className="bg-cyan-500/10 text-cyan-500">Yetarli</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Intensivlik</span>
                  <Badge className="bg-yellow-500/10 text-yellow-500">O'rtacha</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Stats */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Haftalik statistika</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Jami vaqt</span>
                </div>
                <span className="font-medium">{weeklyPlan.reduce((a, b) => a + b.duration, 0)} daqiqa</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">Jami kaloriya</span>
                </div>
                <span className="font-medium">{weeklyPlan.reduce((a, b) => a + b.calories, 0)} kcal</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Kuch mashg'ulotlari</span>
                </div>
                <span className="font-medium">{weeklyPlan.filter(d => d.type === 'strength').length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm">Kardio mashg'ulotlari</span>
                </div>
                <span className="font-medium">{weeklyPlan.filter(d => d.type === 'cardio').length}</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Tez harakatlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href="/dashboard/history">
                  Mashg'ulot tarixi
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href="/dashboard/test">
                  Qayta test qilish
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href="/dashboard/ai">
                  AI tavsiyalar
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </>
  )
}

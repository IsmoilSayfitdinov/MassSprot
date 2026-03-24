"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { 
  Calendar as CalendarIcon,
  Clock,
  Flame,
  Dumbbell,
  Heart,
  Wind,
  Search,
  Filter,
  ChevronRight,
  TrendingUp,
  Star
} from "lucide-react"
import { format } from "date-fns"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

// Mock workout history
const workoutHistory = [
  {
    id: 1,
    date: "2024-03-24",
    title: "Kardio va chidamlilik",
    type: "cardio",
    duration: 40,
    calories: 420,
    avgHR: 145,
    maxHR: 172,
    difficulty: 4,
    fatigue: 3,
    completed: true
  },
  {
    id: 2,
    date: "2024-03-23",
    title: "Yuqori tana kuchi",
    type: "strength",
    duration: 45,
    calories: 320,
    avgHR: 128,
    maxHR: 155,
    difficulty: 3,
    fatigue: 3,
    completed: true
  },
  {
    id: 3,
    date: "2024-03-21",
    title: "HIIT va Core",
    type: "cardio",
    duration: 35,
    calories: 380,
    avgHR: 152,
    maxHR: 178,
    difficulty: 5,
    fatigue: 4,
    completed: true
  },
  {
    id: 4,
    date: "2024-03-20",
    title: "Pastki tana kuchi",
    type: "strength",
    duration: 50,
    calories: 350,
    avgHR: 132,
    maxHR: 158,
    difficulty: 4,
    fatigue: 4,
    completed: true
  },
  {
    id: 5,
    date: "2024-03-18",
    title: "Egiluvchanlik va mobillik",
    type: "flexibility",
    duration: 30,
    calories: 120,
    avgHR: 95,
    maxHR: 110,
    difficulty: 2,
    fatigue: 1,
    completed: true
  },
  {
    id: 6,
    date: "2024-03-17",
    title: "Kardio interval",
    type: "cardio",
    duration: 40,
    calories: 450,
    avgHR: 155,
    maxHR: 182,
    difficulty: 5,
    fatigue: 5,
    completed: true
  },
  {
    id: 7,
    date: "2024-03-15",
    title: "Full body kuch",
    type: "strength",
    duration: 55,
    calories: 400,
    avgHR: 135,
    maxHR: 162,
    difficulty: 4,
    fatigue: 4,
    completed: true
  },
  {
    id: 8,
    date: "2024-03-14",
    title: "Yengil kardio",
    type: "cardio",
    duration: 30,
    calories: 250,
    avgHR: 125,
    maxHR: 145,
    difficulty: 2,
    fatigue: 2,
    completed: true
  },
]

const typeIcons: Record<string, React.ElementType> = {
  strength: Dumbbell,
  cardio: Heart,
  flexibility: Wind,
}

const typeColors: Record<string, string> = {
  strength: "text-yellow-500 bg-yellow-500/10",
  cardio: "text-red-500 bg-red-500/10",
  flexibility: "text-cyan-500 bg-cyan-500/10",
}

const typeLabels: Record<string, string> = {
  strength: "Kuch",
  cardio: "Kardio",
  flexibility: "Egiluvchanlik",
}

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [dateRange, setDateRange] = useState<Date | undefined>()

  const filteredHistory = workoutHistory.filter(workout => {
    const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || workout.type === typeFilter
    return matchesSearch && matchesType
  })

  // Calculate totals
  const totalWorkouts = workoutHistory.length
  const totalDuration = workoutHistory.reduce((a, b) => a + b.duration, 0)
  const totalCalories = workoutHistory.reduce((a, b) => a + b.calories, 0)
  const avgDifficulty = (workoutHistory.reduce((a, b) => a + b.difficulty, 0) / totalWorkouts).toFixed(1)

  return (
    <>
      <DashboardHeader title="Mashg'ulot Tarixi" subtitle="O'tgan mashg'ulotlaringiz" />
      <div className="px-[32px] py-6 space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Jami mashg'ulotlar</p>
                <p className="text-2xl font-bold">{totalWorkouts}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Clock className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Jami vaqt</p>
                <p className="text-2xl font-bold">{Math.round(totalDuration / 60)}s {totalDuration % 60}d</p>
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
                <p className="text-sm text-muted-foreground">Jami kaloriya</p>
                <p className="text-2xl font-bold">{totalCalories}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-500/10">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">O'rtacha qiyinlik</p>
                <p className="text-2xl font-bold">{avgDifficulty}/5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-card/50 border-border/50">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Mashg'ulot nomi bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Turi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="strength">Kuch</SelectItem>
                <SelectItem value="cardio">Kardio</SelectItem>
                <SelectItem value="flexibility">Egiluvchanlik</SelectItem>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full md:w-[200px] justify-start">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange ? format(dateRange, "dd.MM.yyyy") : "Sana tanlash"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={dateRange}
                  onSelect={setDateRange}
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {/* Workout List */}
      <div className="space-y-4">
        {filteredHistory.map((workout) => {
          const Icon = typeIcons[workout.type] || Dumbbell
          return (
            <Card key={workout.id} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${typeColors[workout.type]}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{workout.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {typeLabels[workout.type]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(workout.date), "dd MMMM, yyyy")}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{workout.duration} daq</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame className="h-4 w-4 text-orange-500" />
                      <span>{workout.calories} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>{workout.avgHR} / {workout.maxHR}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3.5 w-3.5 ${
                            star <= workout.difficulty ? "text-yellow-500 fill-yellow-500" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                {/* Mobile stats */}
                <div className="flex md:hidden items-center gap-4 mt-4 pt-4 border-t border-border/50 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{workout.duration} daq</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span>{workout.calories} kcal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>{workout.avgHR}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredHistory.length === 0 && (
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">Hech qanday mashg'ulot topilmadi</p>
          </CardContent>
        </Card>
      )}
      </div>
    </>
  )
}

"use client"

import { useState } from "react"
import { 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit,
  MapPin,
  MoreHorizontal,
  Plus,
  Trash2,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface Session {
  id: string
  title: string
  group: string
  time: string
  duration: string
  location: string
  type: "strength" | "cardio" | "technique" | "recovery" | "match"
  athleteCount: number
}

const weekDays = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"]

const typeConfig = {
  strength: { label: "Kuch", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  cardio: { label: "Kardio", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  technique: { label: "Texnika", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  recovery: { label: "Tiklash", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  match: { label: "O'yin", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
}

const scheduleData: Record<string, Session[]> = {
  "Dushanba": [
    {
      id: "1",
      title: "Ertalabki mashg'ulot",
      group: "Professional Futbol A",
      time: "09:00",
      duration: "2 soat",
      location: "Asosiy stadion",
      type: "strength",
      athleteCount: 18,
    },
    {
      id: "2",
      title: "Kechki mashg'ulot",
      group: "Basketbol Pro",
      time: "17:00",
      duration: "1.5 soat",
      location: "Sport zali #1",
      type: "technique",
      athleteCount: 12,
    },
  ],
  "Seshanba": [
    {
      id: "3",
      title: "Suzish mashg'uloti",
      group: "Suzish - Boshlang'ich",
      time: "08:00",
      duration: "1 soat",
      location: "Suzish havzasi",
      type: "cardio",
      athleteCount: 8,
    },
    {
      id: "4",
      title: "Kechki mashg'ulot",
      group: "Yosh Futbol B",
      time: "15:00",
      duration: "1.5 soat",
      location: "Yordamchi maydon",
      type: "technique",
      athleteCount: 15,
    },
  ],
  "Chorshanba": [
    {
      id: "5",
      title: "Ertalabki mashg'ulot",
      group: "Professional Futbol A",
      time: "09:00",
      duration: "2 soat",
      location: "Asosiy stadion",
      type: "cardio",
      athleteCount: 18,
    },
    {
      id: "6",
      title: "Tiklash seansasi",
      group: "Basketbol Pro",
      time: "10:00",
      duration: "1 soat",
      location: "Tiklash markazi",
      type: "recovery",
      athleteCount: 12,
    },
  ],
  "Payshanba": [
    {
      id: "7",
      title: "Suzish mashg'uloti",
      group: "Suzish - Boshlang'ich",
      time: "08:00",
      duration: "1 soat",
      location: "Suzish havzasi",
      type: "technique",
      athleteCount: 8,
    },
    {
      id: "8",
      title: "Kechki mashg'ulot",
      group: "Yosh Futbol B",
      time: "15:00",
      duration: "1.5 soat",
      location: "Yordamchi maydon",
      type: "strength",
      athleteCount: 15,
    },
  ],
  "Juma": [
    {
      id: "9",
      title: "Ertalabki mashg'ulot",
      group: "Professional Futbol A",
      time: "09:00",
      duration: "1.5 soat",
      location: "Asosiy stadion",
      type: "technique",
      athleteCount: 18,
    },
  ],
  "Shanba": [
    {
      id: "10",
      title: "Do'stona o'yin",
      group: "Professional Futbol A",
      time: "16:00",
      duration: "2 soat",
      location: "Asosiy stadion",
      type: "match",
      athleteCount: 18,
    },
    {
      id: "11",
      title: "Kechki mashg'ulot",
      group: "Basketbol Pro",
      time: "17:00",
      duration: "1.5 soat",
      location: "Sport zali #1",
      type: "strength",
      athleteCount: 12,
    },
    {
      id: "12",
      title: "Kundalik mashg'ulot",
      group: "Yosh Futbol B",
      time: "10:00",
      duration: "1.5 soat",
      location: "Yordamchi maydon",
      type: "cardio",
      athleteCount: 15,
    },
  ],
  "Yakshanba": [],
}

export default function SchedulePage() {
  const [currentWeek, setCurrentWeek] = useState(0)
  const [selectedDay, setSelectedDay] = useState("Dushanba")

  const getWeekDates = () => {
    const today = new Date()
    const monday = new Date(today)
    monday.setDate(today.getDate() - today.getDay() + 1 + currentWeek * 7)
    
    return weekDays.map((day, index) => {
      const date = new Date(monday)
      date.setDate(monday.getDate() + index)
      return {
        day,
        date: date.getDate(),
        month: date.toLocaleString('uz', { month: 'short' }),
        isToday: date.toDateString() === today.toDateString(),
      }
    })
  }

  const weekDates = getWeekDates()
  const totalSessions = Object.values(scheduleData).flat().length

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Jadval</h1>
          <p className="text-muted-foreground">
            Haftalik mashg'ulot jadvalini boshqaring
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Mashg'ulot qo'shish
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>Yangi mashg'ulot</DialogTitle>
              <DialogDescription>
                Jadvalga yangi mashg'ulot qo'shing
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Mashg'ulot nomi</Label>
                <Input placeholder="Masalan: Ertalabki mashg'ulot" className="bg-background/50 border-border/50" />
              </div>
              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-2">
                  <Label>Guruh</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="futbol-a">Professional Futbol A</SelectItem>
                      <SelectItem value="futbol-b">Yosh Futbol B</SelectItem>
                      <SelectItem value="basketbol">Basketbol Pro</SelectItem>
                      <SelectItem value="suzish">Suzish - Boshlang'ich</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Turi</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strength">Kuch</SelectItem>
                      <SelectItem value="cardio">Kardio</SelectItem>
                      <SelectItem value="technique">Texnika</SelectItem>
                      <SelectItem value="recovery">Tiklash</SelectItem>
                      <SelectItem value="match">O'yin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-2">
                  <Label>Kun</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      {weekDays.map(day => (
                        <SelectItem key={day} value={day}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Vaqt</Label>
                  <Input type="time" className="bg-background/50 border-border/50" />
                </div>
              </div>
              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-2">
                  <Label>Davomiyligi</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 daqiqa</SelectItem>
                      <SelectItem value="60">1 soat</SelectItem>
                      <SelectItem value="90">1.5 soat</SelectItem>
                      <SelectItem value="120">2 soat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Joylashuv</Label>
                  <Input placeholder="Masalan: Asosiy stadion" className="bg-background/50 border-border/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Izoh (ixtiyoriy)</Label>
                <Textarea placeholder="Qo'shimcha ma'lumotlar..." className="bg-background/50 border-border/50" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Mashg'ulot qo'shish
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Week Navigation */}
      <Card className="bg-card/50 border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setCurrentWeek(currentWeek - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">
                {weekDates[0].date} {weekDates[0].month} - {weekDates[6].date} {weekDates[6].month}
              </span>
              {currentWeek === 0 && (
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Joriy hafta
                </Badge>
              )}
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setCurrentWeek(currentWeek + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekDates.map(({ day, date, isToday }) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`p-3 rounded-xl text-center transition-all ${
                  selectedDay === day
                    ? "bg-primary text-primary-foreground"
                    : isToday
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-muted/50"
                }`}
              >
                <p className="text-xs opacity-70">{day.slice(0, 2)}</p>
                <p className="text-lg font-bold">{date}</p>
                <div className="flex justify-center mt-1">
                  {scheduleData[day]?.length > 0 && (
                    <div className="flex gap-0.5">
                      {scheduleData[day].slice(0, 3).map((_, i) => (
                        <span 
                          key={i} 
                          className={`h-1.5 w-1.5 rounded-full ${
                            selectedDay === day ? "bg-primary-foreground" : "bg-primary"
                          }`} 
                        />
                      ))}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalSessions}</p>
                <p className="text-xs text-muted-foreground">Haftalik mashg'ulotlar</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/20">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{scheduleData[selectedDay]?.length || 0}</p>
                <p className="text-xs text-muted-foreground">{selectedDay} mashg'ulotlari</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Users className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {scheduleData[selectedDay]?.reduce((acc, s) => acc + s.athleteCount, 0) || 0}
                </p>
                <p className="text-xs text-muted-foreground">Bugungi sportchilar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Day Schedule */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            {selectedDay} jadvali
          </CardTitle>
        </CardHeader>
        <CardContent>
          {scheduleData[selectedDay]?.length > 0 ? (
            <div className="space-y-4">
              {scheduleData[selectedDay].map((session) => (
                <div 
                  key={session.id}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="text-center min-w-[60px]">
                    <p className="text-lg font-bold text-primary">{session.time}</p>
                    <p className="text-xs text-muted-foreground">{session.duration}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">{session.group}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {session.location}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            {session.athleteCount} sportchi
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={typeConfig[session.type].color}>
                          {typeConfig[session.type].label}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                              <Edit className="h-4 w-4" />
                              Tahrirlash
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-destructive">
                              <Trash2 className="h-4 w-4" />
                              Bekor qilish
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="p-4 rounded-full bg-muted/50 mb-4">
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Mashg'ulotlar yo'q</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {selectedDay} kuni hech qanday mashg'ulot rejalashtirilmagan
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Mashg'ulot qo'shish
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border">
                  <DialogHeader>
                    <DialogTitle>Yangi mashg'ulot</DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

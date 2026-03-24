"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { 
  Search,
  Filter,
  UserPlus,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ChevronRight,
  Users,
  Activity,
  Heart,
  Target
} from "lucide-react"
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

// Athletes data
const athletes = [
  {
    id: 1,
    name: "Aziz Karimov",
    email: "aziz@example.com",
    phone: "+998 90 123 45 67",
    age: 28,
    level: "O'rta",
    group: "Kardio A",
    readiness: 85,
    fatigue: 20,
    attendance: 92,
    trend: "up",
    riskLevel: "past",
    lastWorkout: "Bugun",
    totalWorkouts: 45,
    vo2Max: 42.5,
    goal: "Vazn yo'qotish"
  },
  {
    id: 2,
    name: "Dilnoza Rahimova",
    email: "dilnoza@example.com",
    phone: "+998 91 234 56 78",
    age: 24,
    level: "Boshlang'ich",
    group: "Kardio A",
    readiness: 72,
    fatigue: 35,
    attendance: 78,
    trend: "down",
    riskLevel: "o'rtacha",
    lastWorkout: "Kecha",
    totalWorkouts: 23,
    vo2Max: 35.2,
    goal: "Umumiy sog'lom bo'lish"
  },
  {
    id: 3,
    name: "Bobur Toshmatov",
    email: "bobur@example.com",
    phone: "+998 93 345 67 89",
    age: 32,
    level: "Yuqori",
    group: "Kuch B",
    readiness: 90,
    fatigue: 15,
    attendance: 96,
    trend: "up",
    riskLevel: "past",
    lastWorkout: "Bugun",
    totalWorkouts: 78,
    vo2Max: 48.3,
    goal: "Mushak oshirish"
  },
  {
    id: 4,
    name: "Madina Yusupova",
    email: "madina@example.com",
    phone: "+998 94 456 78 90",
    age: 26,
    level: "O'rta",
    group: "Egiluvchanlik",
    readiness: 65,
    fatigue: 45,
    attendance: 85,
    trend: "stable",
    riskLevel: "o'rtacha",
    lastWorkout: "2 kun oldin",
    totalWorkouts: 34,
    vo2Max: 38.7,
    goal: "Egiluvchanlik"
  },
  {
    id: 5,
    name: "Jasur Alimov",
    email: "jasur@example.com",
    phone: "+998 95 567 89 01",
    age: 35,
    level: "Boshlang'ich",
    group: "Kardio B",
    readiness: 55,
    fatigue: 60,
    attendance: 65,
    trend: "down",
    riskLevel: "yuqori",
    lastWorkout: "4 kun oldin",
    totalWorkouts: 12,
    vo2Max: 32.1,
    goal: "Sog'liqni tiklash"
  },
  {
    id: 6,
    name: "Sevara Nazarova",
    email: "sevara@example.com",
    phone: "+998 97 678 90 12",
    age: 22,
    level: "Yuqori",
    group: "Kuch A",
    readiness: 88,
    fatigue: 25,
    attendance: 94,
    trend: "up",
    riskLevel: "past",
    lastWorkout: "Bugun",
    totalWorkouts: 56,
    vo2Max: 44.8,
    goal: "Sport natijalari"
  },
]

const riskColors: Record<string, string> = {
  past: "bg-emerald-500/10 text-emerald-500",
  "o'rtacha": "bg-yellow-500/10 text-yellow-500",
  yuqori: "bg-red-500/10 text-red-500"
}

const trendIcons: Record<string, React.ElementType> = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus
}

const trendColors: Record<string, string> = {
  up: "text-emerald-500",
  down: "text-red-500",
  stable: "text-yellow-500"
}

export default function AthletesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [groupFilter, setGroupFilter] = useState("all")
  const [riskFilter, setRiskFilter] = useState("all")
  const [selectedAthlete, setSelectedAthlete] = useState<typeof athletes[0] | null>(null)

  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGroup = groupFilter === "all" || athlete.group === groupFilter
    const matchesRisk = riskFilter === "all" || athlete.riskLevel === riskFilter
    return matchesSearch && matchesGroup && matchesRisk
  })

  const groups = [...new Set(athletes.map(a => a.group))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Sportchilar</h1>
          <p className="text-muted-foreground">Barcha sportchilarni boshqarish</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Yangi sportchi
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Jami sportchilar</p>
                <p className="text-2xl font-bold">{athletes.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Activity className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Faol bugun</p>
                <p className="text-2xl font-bold">{athletes.filter(a => a.lastWorkout === "Bugun").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-500/10">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Xavf ostida</p>
                <p className="text-2xl font-bold">{athletes.filter(a => a.riskLevel !== "past").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Target className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">O'rtacha tayorlik</p>
                <p className="text-2xl font-bold">{Math.round(athletes.reduce((a, b) => a + b.readiness, 0) / athletes.length)}%</p>
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
                placeholder="Ism bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={groupFilter} onValueChange={setGroupFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Guruh" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha guruhlar</SelectItem>
                {groups.map(group => (
                  <SelectItem key={group} value={group}>{group}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <AlertTriangle className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Xavf darajasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="past">Past</SelectItem>
                <SelectItem value="o'rtacha">O'rtacha</SelectItem>
                <SelectItem value="yuqori">Yuqori</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Athletes Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredAthletes.map((athlete) => {
          const TrendIcon = trendIcons[athlete.trend]
          return (
            <Dialog key={athlete.id}>
              <DialogTrigger asChild>
                <Card 
                  className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedAthlete(athlete)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {athlete.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{athlete.name}</h3>
                          <p className="text-sm text-muted-foreground">{athlete.group}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Profilni ko'rish</DropdownMenuItem>
                          <DropdownMenuItem>Xabar yuborish</DropdownMenuItem>
                          <DropdownMenuItem>Rejani tahrirlash</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 rounded bg-background/50">
                        <p className="text-lg font-bold">{athlete.readiness}%</p>
                        <p className="text-xs text-muted-foreground">Tayorlik</p>
                      </div>
                      <div className="text-center p-2 rounded bg-background/50">
                        <p className="text-lg font-bold">{athlete.attendance}%</p>
                        <p className="text-xs text-muted-foreground">Davomat</p>
                      </div>
                      <div className="text-center p-2 rounded bg-background/50">
                        <div className="flex items-center justify-center gap-1">
                          <TrendIcon className={`h-4 w-4 ${trendColors[athlete.trend]}`} />
                        </div>
                        <p className="text-xs text-muted-foreground">Trend</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{athlete.lastWorkout}</span>
                      </div>
                      <Badge className={riskColors[athlete.riskLevel]}>
                        {athlete.riskLevel === 'past' ? 'Yaxshi' : athlete.riskLevel === "o'rtacha" ? "E'tibor" : 'Xavf'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {athlete.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {athlete.name}
                  </DialogTitle>
                  <DialogDescription>{athlete.group} - {athlete.level} daraja</DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {athlete.email}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Telefon</p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {athlete.phone}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-3 rounded-lg bg-card/50 border border-border/50">
                      <p className="text-2xl font-bold text-primary">{athlete.readiness}%</p>
                      <p className="text-xs text-muted-foreground">Tayorlik</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card/50 border border-border/50">
                      <p className="text-2xl font-bold text-cyan-500">{athlete.vo2Max}</p>
                      <p className="text-xs text-muted-foreground">VO2 Max</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card/50 border border-border/50">
                      <p className="text-2xl font-bold text-yellow-500">{athlete.fatigue}%</p>
                      <p className="text-xs text-muted-foreground">Charchoq</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card/50 border border-border/50">
                      <p className="text-2xl font-bold text-emerald-500">{athlete.totalWorkouts}</p>
                      <p className="text-xs text-muted-foreground">Mashg'ulotlar</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Davomat</span>
                      <span>{athlete.attendance}%</span>
                    </div>
                    <Progress value={athlete.attendance} className="h-2" />
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      Rejani ko'rish
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Xabar yuborish
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )
        })}
      </div>

      {filteredAthletes.length === 0 && (
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">Hech qanday sportchi topilmadi</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

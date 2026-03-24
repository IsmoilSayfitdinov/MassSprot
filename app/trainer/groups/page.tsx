"use client"

import { useState } from "react"
import { 
  Calendar,
  ChevronRight,
  Clock,
  Edit,
  Filter,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  TrendingUp,
  Users,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Group {
  id: string
  name: string
  sport: string
  level: string
  schedule: string
  location: string
  athleteCount: number
  maxCapacity: number
  averageReadiness: number
  nextSession: string
  color: string
  athletes: {
    id: string
    name: string
    avatar?: string
  }[]
}

const groups: Group[] = [
  {
    id: "1",
    name: "Professional Futbol A",
    sport: "Futbol",
    level: "Professional",
    schedule: "Du, Cho, Ju - 09:00",
    location: "Asosiy stadion",
    athleteCount: 18,
    maxCapacity: 22,
    averageReadiness: 85,
    nextSession: "Bugun, 09:00",
    color: "bg-primary",
    athletes: [
      { id: "1", name: "Aziz Karimov" },
      { id: "2", name: "Bekzod Aliyev" },
      { id: "3", name: "Sardor Rahimov" },
      { id: "4", name: "Dilshod Toshev" },
    ]
  },
  {
    id: "2",
    name: "Yosh Futbol B",
    sport: "Futbol",
    level: "O'rta",
    schedule: "Se, Pay, Sha - 15:00",
    location: "Yordamchi maydon",
    athleteCount: 15,
    maxCapacity: 20,
    averageReadiness: 78,
    nextSession: "Ertaga, 15:00",
    color: "bg-secondary",
    athletes: [
      { id: "5", name: "Jamshid Qodirov" },
      { id: "6", name: "Akmal Umarov" },
      { id: "7", name: "Nodir Saidov" },
    ]
  },
  {
    id: "3",
    name: "Basketbol Pro",
    sport: "Basketbol",
    level: "Professional",
    schedule: "Du, Cho, Sha - 17:00",
    location: "Sport zali #1",
    athleteCount: 12,
    maxCapacity: 15,
    averageReadiness: 92,
    nextSession: "Bugun, 17:00",
    color: "bg-orange-500",
    athletes: [
      { id: "8", name: "Temur Nazarov" },
      { id: "9", name: "Olim Tursunov" },
    ]
  },
  {
    id: "4",
    name: "Suzish - Boshlang'ich",
    sport: "Suzish",
    level: "Boshlang'ich",
    schedule: "Se, Pay - 08:00",
    location: "Suzish havzasi",
    athleteCount: 8,
    maxCapacity: 10,
    averageReadiness: 70,
    nextSession: "Se, 08:00",
    color: "bg-blue-500",
    athletes: [
      { id: "10", name: "Murod Eshonov" },
      { id: "11", name: "Jasur Kamolov" },
    ]
  },
]

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSport, setSelectedSport] = useState<string>("all")

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.sport.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSport = selectedSport === "all" || group.sport === selectedSport
    return matchesSearch && matchesSport
  })

  const totalAthletes = groups.reduce((acc, g) => acc + g.athleteCount, 0)
  const avgReadiness = Math.round(groups.reduce((acc, g) => acc + g.averageReadiness, 0) / groups.length)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Guruhlar</h1>
          <p className="text-muted-foreground">
            Mashg'ulot guruhlarini boshqaring
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Yangi guruh
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>Yangi guruh yaratish</DialogTitle>
              <DialogDescription>
                Yangi mashg'ulot guruhi yarating
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Guruh nomi</Label>
                <Input placeholder="Masalan: Futbol A" className="bg-background/50 border-border/50" />
              </div>
              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-2">
                  <Label>Sport turi</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="football">Futbol</SelectItem>
                      <SelectItem value="basketball">Basketbol</SelectItem>
                      <SelectItem value="swimming">Suzish</SelectItem>
                      <SelectItem value="athletics">Yengil atletika</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Daraja</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Boshlang'ich</SelectItem>
                      <SelectItem value="intermediate">O'rta</SelectItem>
                      <SelectItem value="advanced">Yuqori</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Joylashuv</Label>
                <Input placeholder="Masalan: Asosiy stadion" className="bg-background/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label>Maksimal sig'im</Label>
                <Input type="number" placeholder="20" className="bg-background/50 border-border/50" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Guruh yaratish
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{groups.length}</p>
                <p className="text-xs text-muted-foreground">Jami guruhlar</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/20">
                <Zap className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalAthletes}</p>
                <p className="text-xs text-muted-foreground">Jami sportchilar</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">{avgReadiness}%</p>
                <p className="text-xs text-muted-foreground">O'rtacha taylorlik</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Calendar className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-xs text-muted-foreground">Bugungi mashg'ulotlar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Guruh qidirish..."
            className="pl-9 bg-card/50 border-border/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedSport} onValueChange={setSelectedSport}>
          <SelectTrigger className="w-full sm:w-[180px] bg-card/50 border-border/50">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Sport turi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Barcha sportlar</SelectItem>
            <SelectItem value="Futbol">Futbol</SelectItem>
            <SelectItem value="Basketbol">Basketbol</SelectItem>
            <SelectItem value="Suzish">Suzish</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Groups Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredGroups.map((group) => (
          <Card key={group.id} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-12 rounded-full ${group.color}`} />
                  <div>
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {group.sport}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {group.level}
                      </Badge>
                    </CardDescription>
                  </div>
                </div>
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
                    <DropdownMenuItem className="gap-2">
                      <Users className="h-4 w-4" />
                      Sportchilarni boshqarish
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-destructive">
                      <Trash2 className="h-4 w-4" />
                      O'chirish
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{group.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{group.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Sportchilar</span>
                  <span className="font-medium">{group.athleteCount}/{group.maxCapacity}</span>
                </div>
                <Progress 
                  value={(group.athleteCount / group.maxCapacity) * 100} 
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">O'rtacha tayorlik</span>
                  <span className={`font-medium ${
                    group.averageReadiness >= 80 ? "text-secondary" : 
                    group.averageReadiness >= 60 ? "text-yellow-400" : "text-destructive"
                  }`}>
                    {group.averageReadiness}%
                  </span>
                </div>
                <Progress 
                  value={group.averageReadiness} 
                  className="h-2"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {group.athletes.slice(0, 4).map((athlete) => (
                      <Avatar key={athlete.id} className="h-7 w-7 border-2 border-card">
                        <AvatarImage src={athlete.avatar} />
                        <AvatarFallback className="text-xs bg-muted">
                          {athlete.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {group.athleteCount > 4 && (
                      <div className="h-7 w-7 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                        <span className="text-xs">+{group.athleteCount - 4}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary">
                  Keyingi: {group.nextSession}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  UserCheck,
  Star,
  TrendingUp,
  Mail,
  Phone,
  Eye,
  Edit,
  UserPlus,
  Search,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const mockTrainers = [
  {
    id: 1,
    name: "Sevara Nazarova",
    specialty: "Yoga va meditatsiya",
    athletes: 18,
    rating: 4.9,
    status: "Faol",
    email: "sevara.nazarova@email.com",
    phone: "+998 91 234 56 78",
    experience: "7 yil",
    initials: "SN",
    color: "bg-pink-500/20 text-pink-500",
  },
  {
    id: 2,
    name: "Otabek Mirzayev",
    specialty: "Kuch va bardoshlilik",
    athletes: 22,
    rating: 4.8,
    status: "Faol",
    email: "otabek.mirzayev@email.com",
    phone: "+998 93 345 67 89",
    experience: "5 yil",
    initials: "OM",
    color: "bg-blue-500/20 text-blue-500",
  },
  {
    id: 3,
    name: "Zulfiya Ergasheva",
    specialty: "Kardio va aerobika",
    athletes: 15,
    rating: 4.7,
    status: "Faol",
    email: "zulfiya.ergasheva@email.com",
    phone: "+998 94 456 78 90",
    experience: "4 yil",
    initials: "ZE",
    color: "bg-emerald-500/20 text-emerald-500",
  },
  {
    id: 4,
    name: "Jasur Alimov",
    specialty: "Kurash va jang san'atlari",
    athletes: 12,
    rating: 4.6,
    status: "Faol",
    email: "jasur.alimov@email.com",
    phone: "+998 97 567 89 01",
    experience: "9 yil",
    initials: "JA",
    color: "bg-orange-500/20 text-orange-500",
  },
  {
    id: 5,
    name: "Kamola Umarova",
    specialty: "Pilates va funktsional trening",
    athletes: 20,
    rating: 4.5,
    status: "Faol",
    email: "kamola.umarova@email.com",
    phone: "+998 99 678 90 12",
    experience: "6 yil",
    initials: "KU",
    color: "bg-purple-500/20 text-purple-500",
  },
  {
    id: 6,
    name: "Farhodjon Tursunov",
    specialty: "Yelengich va estrada",
    athletes: 8,
    rating: 4.3,
    status: "Ta'tilda",
    email: "farhodjon.tursunov@email.com",
    phone: "+998 90 789 01 23",
    experience: "3 yil",
    initials: "FT",
    color: "bg-cyan-500/20 text-cyan-500",
  },
]

const statusColors: Record<string, string> = {
  Faol: "bg-emerald-500/10 text-emerald-500",
  "Ta'tilda": "bg-yellow-500/10 text-yellow-500",
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
          }`}
        />
      ))}
      <span className="text-sm font-medium ml-1">{rating}</span>
    </div>
  )
}

export default function TrainersPage() {
  const [search, setSearch] = useState("")
  const [inviteOpen, setInviteOpen] = useState(false)

  const filtered = mockTrainers.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.specialty.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <DashboardHeader title="Trenerlar boshqaruvi" subtitle="Trenerlar ro'yxati va ularning ko'rsatkichlari" />

      <div className="px-[32px] py-6 space-y-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Jami trenerlar</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <UserCheck className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Faol</p>
                  <p className="text-2xl font-bold">38</p>
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
                  <p className="text-sm text-muted-foreground">Yangi bu oy</p>
                  <p className="text-2xl font-bold">3</p>
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
                  <p className="text-sm text-muted-foreground">O&apos;rtacha reyting</p>
                  <p className="text-2xl font-bold">4.7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search & Invite */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ism yoki mutaxassislik bo'yicha qidiring..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card/50 border-border/50"
            />
          </div>

          <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
            <DialogTrigger asChild>
              <Button className="shrink-0">
                <UserPlus className="mr-2 h-4 w-4" />
                Trener taklif qilish
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
              <DialogHeader>
                <DialogTitle>Trener taklif qilish</DialogTitle>
                <DialogDescription>
                  Email orqali yangi trenerga taklif yuboring.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="inviteName">To&apos;liq ism</Label>
                  <Input id="inviteName" placeholder="Ism Familiya" className="bg-background/50" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="inviteEmail">Email manzili</Label>
                  <Input id="inviteEmail" type="email" placeholder="trener@email.com" className="bg-background/50" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="inviteSpecialty">Mutaxassislik</Label>
                  <Input id="inviteSpecialty" placeholder="Masalan: Yoga, Kuch, Kardio..." className="bg-background/50" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="inviteMessage">Xabar (ixtiyoriy)</Label>
                  <Input id="inviteMessage" placeholder="Shaxsiy xabar..." className="bg-background/50" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setInviteOpen(false)}>
                  Bekor qilish
                </Button>
                <Button onClick={() => setInviteOpen(false)}>
                  <Mail className="mr-2 h-4 w-4" />
                  Taklif yuborish
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Trainers Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((trainer) => (
            <Card key={trainer.id} className="bg-card/50 border-border/50 hover:border-border transition-colors">
              <CardContent className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className={`text-sm font-bold ${trainer.color}`}>
                        {trainer.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{trainer.name}</p>
                      <p className="text-xs text-muted-foreground">{trainer.specialty}</p>
                    </div>
                  </div>
                  <Badge className={statusColors[trainer.status]}>{trainer.status}</Badge>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <RatingStars rating={trainer.rating} />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-background/50 text-center">
                    <p className="text-xl font-bold text-primary">{trainer.athletes}</p>
                    <p className="text-xs text-muted-foreground">Sportchi</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 text-center">
                    <p className="text-xl font-bold">{trainer.experience}</p>
                    <p className="text-xs text-muted-foreground">Tajriba</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{trainer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span>{trainer.phone}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="mr-1.5 h-3.5 w-3.5" />
                    Ko&apos;rish
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Edit className="mr-1.5 h-3.5 w-3.5" />
                    Tahrirlash
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <Card className="bg-card/50 border-border/50">
            <CardContent className="py-16 text-center">
              <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground">Trener topilmadi</p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}

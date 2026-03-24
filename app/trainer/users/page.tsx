"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  UserX,
  UserPlus,
  Search,
  Eye,
  Edit,
  Trash2,
  Shield,
  TrendingUp,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const mockUsers = [
  {
    id: 1,
    name: "Bobur Toshmatov",
    email: "bobur.toshmatov@email.com",
    role: "Sportchi",
    status: "Faol",
    registeredDate: "12.01.2025",
  },
  {
    id: 2,
    name: "Sevara Nazarova",
    email: "sevara.nazarova@email.com",
    role: "Trener",
    status: "Faol",
    registeredDate: "05.02.2025",
  },
  {
    id: 3,
    name: "Aziz Karimov",
    email: "aziz.karimov@email.com",
    role: "Sportchi",
    status: "Faol",
    registeredDate: "18.02.2025",
  },
  {
    id: 4,
    name: "Dilnoza Rahimova",
    email: "dilnoza.rahimova@email.com",
    role: "Sportchi",
    status: "Bloklangan",
    registeredDate: "01.03.2025",
  },
  {
    id: 5,
    name: "Jasur Alimov",
    email: "jasur.alimov@email.com",
    role: "Admin",
    status: "Faol",
    registeredDate: "10.12.2024",
  },
  {
    id: 6,
    name: "Madina Yusupova",
    email: "madina.yusupova@email.com",
    role: "Sportchi",
    status: "Faol",
    registeredDate: "22.01.2025",
  },
  {
    id: 7,
    name: "Otabek Mirzayev",
    email: "otabek.mirzayev@email.com",
    role: "Trener",
    status: "Faol",
    registeredDate: "14.03.2025",
  },
  {
    id: 8,
    name: "Nilufar Hasanova",
    email: "nilufar.hasanova@email.com",
    role: "Sportchi",
    status: "Bloklangan",
    registeredDate: "07.02.2025",
  },
  {
    id: 9,
    name: "Sherzod Qodirov",
    email: "sherzod.qodirov@email.com",
    role: "Sportchi",
    status: "Faol",
    registeredDate: "28.02.2025",
  },
  {
    id: 10,
    name: "Zulfiya Ergasheva",
    email: "zulfiya.ergasheva@email.com",
    role: "Trener",
    status: "Faol",
    registeredDate: "19.03.2025",
  },
]

const roleColors: Record<string, string> = {
  Sportchi: "bg-cyan-500/10 text-cyan-500",
  Trener: "bg-primary/10 text-primary",
  Admin: "bg-purple-500/10 text-purple-500",
}

const statusColors: Record<string, string> = {
  Faol: "bg-emerald-500/10 text-emerald-500",
  Bloklangan: "bg-red-500/10 text-red-500",
}

export default function UsersPage() {
  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("hammasi")
  const [statusFilter, setStatusFilter] = useState("hammasi")
  const [dialogOpen, setDialogOpen] = useState(false)

  const filtered = mockUsers.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    const matchRole = roleFilter === "hammasi" || u.role === roleFilter
    const matchStatus = statusFilter === "hammasi" || u.status === statusFilter
    return matchSearch && matchRole && matchStatus
  })

  return (
    <>
      <DashboardHeader title="Foydalanuvchilar boshqaruvi" subtitle="Tizim foydalanuvchilarini boshqaring" />

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
                  <p className="text-sm text-muted-foreground">Jami foydalanuvchilar</p>
                  <p className="text-2xl font-bold">1,247</p>
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
                  <p className="text-2xl font-bold">892</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Shield className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Trenerlar</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <TrendingUp className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Yangi</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters & Add Button */}
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Ism yoki email bo'yicha qidiring..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 bg-background/50"
                />
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[160px] bg-background/50">
                  <SelectValue placeholder="Rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hammasi">Barcha rollar</SelectItem>
                  <SelectItem value="Sportchi">Sportchi</SelectItem>
                  <SelectItem value="Trener">Trener</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px] bg-background/50">
                  <SelectValue placeholder="Holat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hammasi">Barcha holatlar</SelectItem>
                  <SelectItem value="Faol">Faol</SelectItem>
                  <SelectItem value="Bloklangan">Bloklangan</SelectItem>
                </SelectContent>
              </Select>

              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="shrink-0">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Yangi foydalanuvchi
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[480px]">
                  <DialogHeader>
                    <DialogTitle>Yangi foydalanuvchi qo&apos;shish</DialogTitle>
                    <DialogDescription>
                      Tizimga yangi foydalanuvchi qo&apos;shish uchun ma&apos;lumotlarni kiriting.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="fullName">To&apos;liq ism</Label>
                      <Input id="fullName" placeholder="Ism Familiya" className="bg-background/50" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" className="bg-background/50" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="role">Rol</Label>
                      <Select>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Rol tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sportchi">Sportchi</SelectItem>
                          <SelectItem value="Trener">Trener</SelectItem>
                          <SelectItem value="Admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Parol</Label>
                      <Input id="password" type="password" placeholder="••••••••" className="bg-background/50" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Bekor qilish
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Qo&apos;shish
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Foydalanuvchilar ro&apos;yxati</span>
              <span className="text-sm font-normal text-muted-foreground">{filtered.length} ta natija</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                      Foydalanuvchi
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Rol
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Holat
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Ro&apos;yxatdan o&apos;tgan
                    </th>
                    <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                      Amallar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {filtered.map((user) => (
                    <tr key={user.id} className="hover:bg-background/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <Badge className={roleColors[user.role]}>{user.role}</Badge>
                      </td>
                      <td className="px-4 py-4">
                        <Badge className={statusColors[user.status]}>{user.status}</Badge>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-muted-foreground">{user.registeredDate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-yellow-500">
                            <UserX className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500">
                            <Trash2 className="h-4 w-4" />
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
      </div>
    </>
  )
}

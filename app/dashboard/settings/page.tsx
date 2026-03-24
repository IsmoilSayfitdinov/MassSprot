"use client"

import { useState } from "react"
import { 
  Bell, 
  Globe, 
  Lock, 
  Moon, 
  Palette, 
  Save, 
  Shield,
  Smartphone,
  Sun,
  User,
  Volume2,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    workoutReminders: true,
    weeklyReports: true,
    aiRecommendations: true,
    riskAlerts: true,
  })

  const [preferences, setPreferences] = useState({
    theme: "dark",
    language: "uz",
    units: "metric",
    soundEffects: true,
  })

  return (
    <>
      <DashboardHeader title="Sozlamalar" subtitle="Hisobingiz va ilovani sozlang" />
      <div className="px-[32px] py-6 space-y-6">
      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="account" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            <User className="h-4 w-4" />
            Hisob
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            <Bell className="h-4 w-4" />
            Bildirishnomalar
          </TabsTrigger>
          <TabsTrigger value="preferences" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            <Palette className="h-4 w-4" />
            Afzalliklar
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            <Shield className="h-4 w-4" />
            Xavfsizlik
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Profil ma'lumotlari
              </CardTitle>
              <CardDescription>
                Asosiy profil ma'lumotlaringizni yangilang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ism</Label>
                  <Input 
                    id="firstName" 
                    defaultValue="Aziz" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Familiya</Label>
                  <Input 
                    id="lastName" 
                    defaultValue="Karimov" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="aziz@example.com" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input 
                    id="phone" 
                    defaultValue="+998 90 123 45 67" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="h-4 w-4 mr-2" />
                Saqlash
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                Sport ma'lumotlari
              </CardTitle>
              <CardDescription>
                Sport va mashg'ulot sozlamalarini yangilang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sport">Sport turi</Label>
                  <Select defaultValue="football">
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Sport tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="football">Futbol</SelectItem>
                      <SelectItem value="basketball">Basketbol</SelectItem>
                      <SelectItem value="swimming">Suzish</SelectItem>
                      <SelectItem value="athletics">Yengil atletika</SelectItem>
                      <SelectItem value="tennis">Tennis</SelectItem>
                      <SelectItem value="boxing">Boks</SelectItem>
                      <SelectItem value="wrestling">Kurash</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Daraja</Label>
                  <Select defaultValue="professional">
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Daraja tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Boshlang'ich</SelectItem>
                      <SelectItem value="intermediate">O'rta</SelectItem>
                      <SelectItem value="advanced">Yuqori</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Maqsad</Label>
                  <Select defaultValue="performance">
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Maqsad tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight_loss">Vazn yo'qotish</SelectItem>
                      <SelectItem value="muscle_gain">Mushak oshirish</SelectItem>
                      <SelectItem value="endurance">Chidamlilik</SelectItem>
                      <SelectItem value="performance">Natijani yaxshilash</SelectItem>
                      <SelectItem value="flexibility">Moslashuvchanlik</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer">Trener</Label>
                  <Input 
                    id="trainer" 
                    defaultValue="Rustam Qodirov" 
                    className="bg-background/50 border-border/50"
                    readOnly
                  />
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="h-4 w-4 mr-2" />
                Saqlash
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Bildirishnoma kanallari
              </CardTitle>
              <CardDescription>
                Bildirishnoma olish usullarini tanlang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Email bildirishnomalar</Label>
                  <p className="text-sm text-muted-foreground">
                    Muhim yangilanishlarni emailga oling
                  </p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, email: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Push bildirishnomalar</Label>
                  <p className="text-sm text-muted-foreground">
                    Brauzer orqali bildirishnoma oling
                  </p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, push: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-secondary" />
                Bildirishnoma turlari
              </CardTitle>
              <CardDescription>
                Qaysi bildirishnomalarni olishni tanlang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Mashg'ulot eslatmalari</Label>
                  <p className="text-sm text-muted-foreground">
                    Kundalik mashg'ulot vaqti haqida eslatma
                  </p>
                </div>
                <Switch
                  checked={notifications.workoutReminders}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, workoutReminders: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Haftalik hisobotlar</Label>
                  <p className="text-sm text-muted-foreground">
                    Har hafta progress haqida hisobot
                  </p>
                </div>
                <Switch
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, weeklyReports: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">AI tavsiyalar</Label>
                  <p className="text-sm text-muted-foreground">
                    Sun'iy intellekt tavsiyalari haqida xabar
                  </p>
                </div>
                <Switch
                  checked={notifications.aiRecommendations}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, aiRecommendations: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Xavf signallari</Label>
                  <p className="text-sm text-muted-foreground">
                    Shikastlanish xavfi haqida ogohlantirish
                  </p>
                </div>
                <Switch
                  checked={notifications.riskAlerts}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, riskAlerts: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Ko'rinish
              </CardTitle>
              <CardDescription>
                Ilova ko'rinishini sozlang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Mavzu</Label>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setPreferences({ ...preferences, theme: "light" })}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      preferences.theme === "light" 
                        ? "border-primary bg-primary/10" 
                        : "border-border/50 hover:border-border"
                    }`}
                  >
                    <Sun className="h-6 w-6" />
                    <span className="text-sm">Yorug'</span>
                  </button>
                  <button
                    onClick={() => setPreferences({ ...preferences, theme: "dark" })}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      preferences.theme === "dark" 
                        ? "border-primary bg-primary/10" 
                        : "border-border/50 hover:border-border"
                    }`}
                  >
                    <Moon className="h-6 w-6" />
                    <span className="text-sm">Qorong'u</span>
                  </button>
                  <button
                    onClick={() => setPreferences({ ...preferences, theme: "system" })}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      preferences.theme === "system" 
                        ? "border-primary bg-primary/10" 
                        : "border-border/50 hover:border-border"
                    }`}
                  >
                    <Smartphone className="h-6 w-6" />
                    <span className="text-sm">Tizim</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-secondary" />
                Til va birliklar
              </CardTitle>
              <CardDescription>
                Til va o'lchov birliklarini tanlang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Til</Label>
                  <Select 
                    value={preferences.language}
                    onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                  >
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uz">O'zbek</SelectItem>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>O'lchov birliklari</Label>
                  <Select 
                    value={preferences.units}
                    onValueChange={(value) => setPreferences({ ...preferences, units: value })}
                  >
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metric">Metrik (kg, km)</SelectItem>
                      <SelectItem value="imperial">Imperial (lb, mi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Ovoz effektlari</Label>
                  <p className="text-sm text-muted-foreground">
                    Mashg'ulot vaqtida ovoz effektlari
                  </p>
                </div>
                <Switch
                  checked={preferences.soundEffects}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, soundEffects: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Parolni o'zgartirish
              </CardTitle>
              <CardDescription>
                Hisobingiz xavfsizligini ta'minlang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Joriy parol</Label>
                <Input 
                  id="currentPassword" 
                  type="password" 
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Yangi parol</Label>
                <Input 
                  id="newPassword" 
                  type="password" 
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  className="bg-background/50 border-border/50"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Lock className="h-4 w-4 mr-2" />
                Parolni yangilash
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                Ikki bosqichli autentifikatsiya
              </CardTitle>
              <CardDescription>
                Qo'shimcha xavfsizlik qatlami qo'shing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
                <div className="space-y-0.5">
                  <p className="font-medium">SMS orqali tasdiqlash</p>
                  <p className="text-sm text-muted-foreground">
                    Telefon raqamingizga kod yuboriladi
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
                <div className="space-y-0.5">
                  <p className="font-medium">Authenticator ilovasi</p>
                  <p className="text-sm text-muted-foreground">
                    Google Authenticator yoki shunga o'xshash
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-destructive/10 border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Xavfli zona</CardTitle>
              <CardDescription>
                Bu amallar qaytarib bo'lmaydi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive">
                Hisobni o'chirish
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </>
  )
}

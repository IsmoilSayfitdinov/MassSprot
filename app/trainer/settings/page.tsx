"use client"

import { useState } from "react"
import { 
  Bell, 
  Building,
  Globe, 
  Lock, 
  Moon, 
  Palette, 
  Save, 
  Shield,
  Smartphone,
  Sun,
  User,
  Users,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TrainerSettingsPage() {
  const [notifications, setNotifications] = useState({
    riskAlerts: true,
    missedWorkouts: true,
    athleteProgress: true,
    dailyDigest: false,
    weeklyReports: true,
  })

  const [preferences, setPreferences] = useState({
    theme: "dark",
    language: "uz",
    autoAssignPlans: true,
    showAdvancedMetrics: true,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Sozlamalar</h1>
        <p className="text-muted-foreground">
          Trener hisobi va tizim sozlamalari
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="profile" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            <User className="h-4 w-4" />
            Profil
          </TabsTrigger>
          <TabsTrigger value="organization" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            <Building className="h-4 w-4" />
            Tashkilot
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

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Shaxsiy ma'lumotlar
              </CardTitle>
              <CardDescription>
                Trener profil ma'lumotlaringizni yangilang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ism</Label>
                  <Input 
                    id="firstName" 
                    defaultValue="Rustam" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Familiya</Label>
                  <Input 
                    id="lastName" 
                    defaultValue="Qodirov" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="rustam.qodirov@masssport.uz" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input 
                    id="phone" 
                    defaultValue="+998 90 987 65 43" 
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
                Professional ma'lumotlar
              </CardTitle>
              <CardDescription>
                Trenerlik tajribasi va mutaxassislik
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="specialty">Mutaxassislik</Label>
                  <Select defaultValue="football">
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="football">Futbol murabbiysi</SelectItem>
                      <SelectItem value="basketball">Basketbol murabbiysi</SelectItem>
                      <SelectItem value="swimming">Suzish murabbiysi</SelectItem>
                      <SelectItem value="fitness">Fitness trener</SelectItem>
                      <SelectItem value="strength">Kuch mashqlari treneri</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Tajriba (yil)</Label>
                  <Input 
                    id="experience" 
                    type="number" 
                    defaultValue="12" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">Litsenziya</Label>
                  <Input 
                    id="license" 
                    defaultValue="UEFA Pro License" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="certification">Sertifikatlar</Label>
                  <Input 
                    id="certification" 
                    defaultValue="FIFA Fitness Coach" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio"
                  defaultValue="12 yillik tajribaga ega professional futbol murabbiysi. O'zbekiston milliy terma jamoasida ishlagan."
                  className="bg-background/50 border-border/50 min-h-[100px]"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="h-4 w-4 mr-2" />
                Saqlash
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Organization Settings */}
        <TabsContent value="organization" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Tashkilot ma'lumotlari
              </CardTitle>
              <CardDescription>
                Sport klubi yoki akademiya ma'lumotlari
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Tashkilot nomi</Label>
                  <Input 
                    defaultValue="MassSport Akademiyasi" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Tashkilot turi</Label>
                  <Select defaultValue="academy">
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="club">Sport klubi</SelectItem>
                      <SelectItem value="academy">Sport akademiyasi</SelectItem>
                      <SelectItem value="gym">Fitness markazi</SelectItem>
                      <SelectItem value="school">Sport maktabi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Manzil</Label>
                  <Input 
                    defaultValue="Toshkent sh., Yunusobod tumani, Amir Temur ko'chasi 15" 
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
                <Users className="h-5 w-5 text-secondary" />
                Jamoa sozlamalari
              </CardTitle>
              <CardDescription>
                Boshqa trenerlar va xodimlarni boshqarish
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
                <div>
                  <p className="font-medium">Yordamchi trener qo'shish</p>
                  <p className="text-sm text-muted-foreground">Guruhlaringizni boshqarishga yordam berish uchun</p>
                </div>
                <Button variant="outline">
                  Taklif yuborish
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
                <div>
                  <p className="font-medium">Tibbiy xodim qo'shish</p>
                  <p className="text-sm text-muted-foreground">Shifokor yoki fizioterapevt</p>
                </div>
                <Button variant="outline">
                  Taklif yuborish
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Ogohlantirish bildirishnomalari
              </CardTitle>
              <CardDescription>
                Muhim voqealar haqida xabar olish
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Xavf signallari</Label>
                  <p className="text-sm text-muted-foreground">
                    Sportchilarning shikastlanish xavfi haqida
                  </p>
                </div>
                <Switch
                  checked={notifications.riskAlerts}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, riskAlerts: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">O'tkazib yuborilgan mashg'ulotlar</Label>
                  <p className="text-sm text-muted-foreground">
                    Sportchi mashg'ulotni o'tkazib yuborsa
                  </p>
                </div>
                <Switch
                  checked={notifications.missedWorkouts}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, missedWorkouts: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Sportchi progressi</Label>
                  <p className="text-sm text-muted-foreground">
                    Sportchi yangi natijaga erishganda
                  </p>
                </div>
                <Switch
                  checked={notifications.athleteProgress}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, athleteProgress: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-secondary" />
                Hisobot bildirishnomalari
              </CardTitle>
              <CardDescription>
                Muntazam hisobotlar haqida xabar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Kunlik xulosa</Label>
                  <p className="text-sm text-muted-foreground">
                    Har kuni kechqurun kun yakunlari
                  </p>
                </div>
                <Switch
                  checked={notifications.dailyDigest}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, dailyDigest: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Haftalik hisobotlar</Label>
                  <p className="text-sm text-muted-foreground">
                    Har hafta dushanba kuni to'liq hisobot
                  </p>
                </div>
                <Switch
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => 
                    setNotifications({ ...notifications, weeklyReports: checked })
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
                Til va ko'rsatish
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Avtomatik reja tayinlash</Label>
                  <p className="text-sm text-muted-foreground">
                    Yangi sportchilarga AI tavsiyasi bo'yicha reja
                  </p>
                </div>
                <Switch
                  checked={preferences.autoAssignPlans}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, autoAssignPlans: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Ilg'or metrikalar</Label>
                  <p className="text-sm text-muted-foreground">
                    Batafsil analitik ko'rsatkichlarni ko'rsatish
                  </p>
                </div>
                <Switch
                  checked={preferences.showAdvancedMetrics}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, showAdvancedMetrics: checked })
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  User, 
  Heart, 
  Target, 
  Activity, 
  Scale, 
  Ruler, 
  Calendar,
  Save,
  Edit2,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

// Mock user data
const userData = {
  name: "Aziz Karimov",
  email: "aziz@example.com",
  age: 28,
  gender: "male",
  height: 178,
  weight: 75,
  targetWeight: 72,
  bmi: 23.7,
  fitnessLevel: "intermediate",
  goal: "weight_loss",
  healthRestrictions: "Yengil tizza og'rig'i",
  preferredFormat: "gym",
  hrMax: 192,
  vo2Max: 42.5,
  healthIndex: 78,
  memberSince: "2024-01-15",
  totalWorkouts: 156,
  streak: 12
}

// Heart rate zones based on Cooper method
function calculateHRZones(age: number) {
  const hrMax = 220 - age
  return {
    hrMax,
    zone1: { min: Math.round(hrMax * 0.5), max: Math.round(hrMax * 0.6), label: "Yengil", color: "bg-emerald-500" },
    zone2: { min: Math.round(hrMax * 0.6), max: Math.round(hrMax * 0.7), label: "O'rtacha", color: "bg-cyan-500" },
    zone3: { min: Math.round(hrMax * 0.7), max: Math.round(hrMax * 0.8), label: "Faol", color: "bg-yellow-500" },
    zone4: { min: Math.round(hrMax * 0.8), max: Math.round(hrMax * 0.9), label: "Yuqori", color: "bg-orange-500" },
    zone5: { min: Math.round(hrMax * 0.9), max: hrMax, label: "Maksimal", color: "bg-red-500" },
  }
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(userData)
  const hrZones = calculateHRZones(formData.age)

  const handleSave = () => {
    setIsEditing(false)
    // Save to backend
  }

  return (
    <div className="space-y-6">
      <DashboardHeader 
            title="Shaxsiy Profil" 
            subtitle="Shaxsiy ma'lumotlaringizni ko'rib chiqing va tahrir qiling"
      />

      {/* Profile Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4  p-[32px]">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Jami mashg'ulotlar</p>
                <p className="text-2xl font-bold">{userData.totalWorkouts}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Zap className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ketma-ket kunlar</p>
                <p className="text-2xl font-bold">{userData.streak}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Heart className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sog'liq indeksi</p>
                <p className="text-2xl font-bold">{userData.healthIndex}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <TrendingUp className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">VO2 Max</p>
                <p className="text-2xl font-bold">{userData.vo2Max}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="personal" className="space-y-6 p-[32px]">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="personal">Shaxsiy ma'lumotlar</TabsTrigger>
          <TabsTrigger value="physical">Jismoniy ko'rsatkichlar</TabsTrigger>
          <TabsTrigger value="goals">Maqsadlar</TabsTrigger>
          <TabsTrigger value="health">Sog'liq</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Asosiy ma'lumotlar
              </CardTitle>
              <CardDescription>Shaxsiy ma'lumotlaringizni boshqaring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">To'liq ism</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Yosh</Label>
                  <Input 
                    id="age" 
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Jins</Label>
                  <Select 
                    value={formData.gender} 
                    onValueChange={(value) => setFormData({...formData, gender: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Erkak</SelectItem>
                      <SelectItem value="female">Ayol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="physical" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Antropometrik ma'lumotlar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="height">Bo'y (sm)</Label>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="height" 
                        type="number"
                        value={formData.height}
                        onChange={(e) => setFormData({...formData, height: parseInt(e.target.value)})}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Vazn (kg)</Label>
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="weight" 
                        type="number"
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: parseInt(e.target.value)})}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">BMI (Tana massasi indeksi)</span>
                    <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400">
                      {(formData.weight / Math.pow(formData.height / 100, 2)).toFixed(1)}
                    </Badge>
                  </div>
                  <Progress value={Math.min((formData.bmi / 30) * 100, 100)} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Normal: 18.5 - 24.9</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Yurak urish zonalari (Cooper)
                </CardTitle>
                <CardDescription>HRmax = 220 - yosh = {hrZones.hrMax} bpm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(hrZones).filter(([key]) => key.startsWith('zone')).map(([key, zone]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${(zone as any).color}`} />
                      <span className="text-sm">{(zone as any).label}</span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {(zone as any).min} - {(zone as any).max} bpm
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald-500" />
                Funksional ko'rsatkichlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-2">VO2 Max</p>
                  <p className="text-3xl font-bold text-cyan-400">{userData.vo2Max}</p>
                  <p className="text-xs text-muted-foreground mt-1">ml/kg/min</p>
                  <Badge className="mt-2 bg-cyan-500/10 text-cyan-400">Yaxshi</Badge>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-2">Sog'liq indeksi</p>
                  <p className="text-3xl font-bold text-emerald-400">{userData.healthIndex}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Apanasenko bo'yicha</p>
                  <Badge className="mt-2 bg-emerald-500/10 text-emerald-400">O'rtachadan yuqori</Badge>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-2">Tayyorgarlik darajasi</p>
                  <p className="text-3xl font-bold text-orange-400">72%</p>
                  <p className="text-xs text-muted-foreground mt-1">Individual indeks</p>
                  <Badge className="mt-2 bg-orange-500/10 text-orange-400">O'rtacha</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Mashg'ulot maqsadlari
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Asosiy maqsad</Label>
                <Select 
                  value={formData.goal}
                  onValueChange={(value) => setFormData({...formData, goal: value})}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight_loss">Vazn yo'qotish</SelectItem>
                    <SelectItem value="muscle_gain">Mushak oshirish</SelectItem>
                    <SelectItem value="endurance">Chidamlilik</SelectItem>
                    <SelectItem value="flexibility">Egiluvchanlik</SelectItem>
                    <SelectItem value="general_fitness">Umumiy sog'lom bo'lish</SelectItem>
                    <SelectItem value="sport_performance">Sport natijalari</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Tayyorgarlik darajasi</Label>
                <Select 
                  value={formData.fitnessLevel}
                  onValueChange={(value) => setFormData({...formData, fitnessLevel: value})}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
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
                <Label>Afzal ko'rgan mashg'ulot formati</Label>
                <Select 
                  value={formData.preferredFormat}
                  onValueChange={(value) => setFormData({...formData, preferredFormat: value})}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gym">Sport zali</SelectItem>
                    <SelectItem value="home">Uyda</SelectItem>
                    <SelectItem value="outdoor">Ochiq havoda</SelectItem>
                    <SelectItem value="mixed">Aralash</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-4 md:grid-cols-2 pt-4">
                <div className="space-y-2">
                  <Label>Joriy vazn (kg)</Label>
                  <Input type="number" value={formData.weight} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Maqsad vazn (kg)</Label>
                  <Input 
                    type="number" 
                    value={formData.targetWeight}
                    onChange={(e) => setFormData({...formData, targetWeight: parseInt(e.target.value)})}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Maqsadga yetish</span>
                  <span className="text-cyan-400">60%</span>
                </div>
                <Progress value={60} className="h-3" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-500" />
                Sog'liq holati va cheklovlar
              </CardTitle>
              <CardDescription>
                Bu ma'lumotlar AI tizimiga xavfsiz mashg'ulot rejasi tuzishda yordam beradi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Sog'liq cheklovlari yoki shikastlanishlar</Label>
                <Textarea 
                  value={formData.healthRestrictions}
                  onChange={(e) => setFormData({...formData, healthRestrictions: e.target.value})}
                  disabled={!isEditing}
                  placeholder="Masalan: tizza og'rig'i, orqa og'rig'i, yurak muammolari..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-yellow-400">
                  Muhim: Jiddiy sog'liq muammolaringiz bo'lsa, mashg'ulotlarni boshlashdan oldin shifokor bilan maslahatlashing.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

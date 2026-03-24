"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Sparkles,
  Brain,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Target,
  Zap,
  Heart,
  Activity,
  RotateCcw,
  ChevronRight,
  Lightbulb,
  Shield,
  Clock,
  Flame
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

// AI Analysis Data
const aiAnalysis = {
  overallScore: 78,
  readiness: 82,
  fatigueRisk: 25,
  recoveryStatus: 85,
  trend: "positive"
}

// Risk Assessment
const riskAssessment = {
  overtraining: { level: "past", score: 15, description: "Hozircha xavf past" },
  injury: { level: "o'rtacha", score: 35, description: "Tizza yuklamasi oshgan" },
  burnout: { level: "past", score: 20, description: "Motivatsiya yuqori" },
  dehydration: { level: "past", score: 10, description: "Suv iste'moli yetarli" }
}

// AI Recommendations
const recommendations = [
  {
    id: 1,
    type: "workout",
    priority: "yuqori",
    title: "Bugun kardio mashg'ulotini bajaring",
    description: "Sizning tiklanish ko'rsatkichlaringiz yaxshi. Bugun o'rtacha intensivlikdagi 40 daqiqalik kardio mashg'ulot tavsiya etiladi.",
    action: "Mashg'ulotni boshlash",
    link: "/dashboard/workout"
  },
  {
    id: 2,
    type: "recovery",
    priority: "o'rtacha",
    title: "Uyqu rejimini yaxshilang",
    description: "So'nggi 3 kunda o'rtacha uyqu vaqtingiz 6 soat. Optimal tiklanish uchun 7-8 soat uxlash tavsiya etiladi.",
    action: "Batafsil",
    link: "#"
  },
  {
    id: 3,
    type: "nutrition",
    priority: "past",
    title: "Oqsil iste'molini oshiring",
    description: "Kuch mashg'ulotlaridan keyin mushak tiklanishi uchun kuniga 1.6-2g/kg oqsil iste'mol qiling.",
    action: "Batafsil",
    link: "#"
  },
  {
    id: 4,
    type: "warning",
    priority: "yuqori",
    title: "Tizza yuklamasiga e'tibor bering",
    description: "So'nggi mashg'ulotlarda squat va lunges soni ko'paygan. Tizzalarni muhofaza qilish uchun egiluvchanlik mashqlarini qo'shing.",
    action: "Mashq ko'rish",
    link: "#"
  }
]

// Weekly AI Insights
const weeklyInsights = [
  { metric: "Mashg'ulot sifati", value: 85, change: 5, trend: "up" },
  { metric: "Tiklanish tezligi", value: 78, change: 3, trend: "up" },
  { metric: "Yuklama moslashishi", value: 92, change: 8, trend: "up" },
  { metric: "Maqsadga yetish", value: 72, change: -2, trend: "down" }
]

// Personalized Plan Adjustments
const planAdjustments = [
  { 
    original: "Push-up: 3x15", 
    adjusted: "Push-up: 3x18", 
    reason: "Kuch o'sishi kuzatildi, yuklamani oshirish tavsiya etiladi" 
  },
  { 
    original: "Cardio: 30 daqiqa", 
    adjusted: "Cardio: 35 daqiqa", 
    reason: "VO2 Max o'sish tezligi yaxshi, davomiylikni oshirish mumkin" 
  },
  { 
    original: "Dam olish: 1 kun", 
    adjusted: "Faol tiklanish", 
    reason: "Tiklanish tezligi yuqori, yengil mashq qilish mumkin" 
  }
]

const priorityColors: Record<string, string> = {
  yuqori: "bg-red-500/10 text-red-500 border-red-500/20",
  "o'rtacha": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  past: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
}

const typeIcons: Record<string, React.ElementType> = {
  workout: Zap,
  recovery: RotateCcw,
  nutrition: Flame,
  warning: AlertTriangle
}

export default function AIPage() {
  return (
    <>
      <DashboardHeader
        title="AI Baho"
        subtitle="Sizning ma'lumotlaringiz asosida AI tomonidan hisoblangan baho va tavsiyalar"
      />
      <div className="px-[32px] py-6 space-y-6">
      {/* AI Score Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/20">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">AI baho</p>
                <p className="text-3xl font-bold">{aiAnalysis.overallScore}%</p>
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
                <p className="text-sm text-muted-foreground">Tayorlik</p>
                <p className="text-2xl font-bold">{aiAnalysis.readiness}%</p>
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
                <p className="text-sm text-muted-foreground">Charchoq xavfi</p>
                <p className="text-2xl font-bold">{aiAnalysis.fatigueRisk}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <RotateCcw className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tiklanish</p>
                <p className="text-2xl font-bold">{aiAnalysis.recoveryStatus}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Shaxsiy tavsiyalar
              </CardTitle>
              <CardDescription>Sizning ma'lumotlaringiz asosida AI tavsiyalari</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec) => {
                const Icon = typeIcons[rec.type] || Lightbulb
                return (
                  <div 
                    key={rec.id} 
                    className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${priorityColors[rec.priority]}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{rec.title}</h4>
                          <Badge variant="outline" className={priorityColors[rec.priority]}>
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={rec.link}>
                            {rec.action}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Plan Adjustments */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Reja moslamalari
              </CardTitle>
              <CardDescription>AI sizning rejangizni optimallashtirdi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {planAdjustments.map((adj, i) => (
                <div key={i} className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground line-through">{adj.original}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-primary">{adj.adjusted}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{adj.reason}</p>
                </div>
              ))}
              <Button className="w-full">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Moslamalarni qabul qilish
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Risk Assessment */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-500" />
                Xavf baholash
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(riskAssessment).map(([key, risk]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize">{key === 'overtraining' ? 'Ortiqcha yuklama' : key === 'injury' ? 'Shikastlanish' : key === 'burnout' ? 'Motivatsiya pasayishi' : 'Suvsizlanish'}</span>
                    <Badge variant="outline" className={priorityColors[risk.level]}>
                      {risk.level}
                    </Badge>
                  </div>
                  <Progress 
                    value={risk.score} 
                    className={`h-2 ${risk.score > 50 ? '[&>div]:bg-red-500' : risk.score > 30 ? '[&>div]:bg-yellow-500' : '[&>div]:bg-emerald-500'}`}
                  />
                  <p className="text-xs text-muted-foreground">{risk.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Insights */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                Haftalik tahlil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyInsights.map((insight, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{insight.metric}</p>
                    <div className="flex items-center gap-1">
                      {insight.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-emerald-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                      <span className={`text-xs ${insight.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                        {insight.change > 0 ? '+' : ''}{insight.change}%
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{insight.value}%</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Model Info */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">AI Model</p>
                  <p className="text-xs text-muted-foreground">MassSport AI v2.1</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Bu tavsiyalar Kenneth Cooper aerobik metodikasi va Apanasenko sog'liq baholash modeli asosida ishlaydi. 
                Barcha hisob-kitoblar individual ma'lumotlaringiz asosida amalga oshiriladi.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </>
  )
}

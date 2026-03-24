"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { 
  AlertTriangle,
  TrendingDown,
  Clock,
  Flame,
  Heart,
  Shield,
  ChevronRight,
  Bell,
  CheckCircle2,
  XCircle
} from "lucide-react"

// Risk alerts data
const riskAlerts = [
  {
    id: 1,
    athlete: "Jasur Alimov",
    type: "overload",
    severity: "yuqori",
    title: "Ortiqcha yuklama xavfi",
    description: "So'nggi 3 mashg'ulotda yurak urishi normadan 15% yuqori. Tiklanish vaqti yetarli emas.",
    metrics: {
      avgHR: 175,
      normalHR: 155,
      recoveryTime: "48 soat",
      normalRecovery: "24 soat"
    },
    recommendation: "Keyingi 2 kun dam berish va yengil cho'zish mashqlari tavsiya etiladi.",
    timestamp: "2 soat oldin",
    acknowledged: false
  },
  {
    id: 2,
    athlete: "Madina Yusupova",
    type: "fatigue",
    severity: "o'rtacha",
    title: "Yuqori charchoq darajasi",
    description: "So'nggi 5 mashg'ulotda charchoq darajasi o'rtacha 4.2/5. Motivatsiya pasayishi kuzatilmoqda.",
    metrics: {
      fatigueLevel: 4.2,
      normalFatigue: 2.5,
      motivation: "Past",
      sleepQuality: "O'rtacha"
    },
    recommendation: "Mashg'ulot intensivligini 20% kamaytirish va uyqu rejimini yaxshilash tavsiya etiladi.",
    timestamp: "5 soat oldin",
    acknowledged: false
  },
  {
    id: 3,
    athlete: "Dilnoza Rahimova",
    type: "attendance",
    severity: "o'rtacha",
    title: "Davomat pasayishi",
    description: "Oxirgi 2 haftada 5 ta mashg'ulot o'tkazib yuborilgan. Umumiy davomat 78% ga tushgan.",
    metrics: {
      currentAttendance: 78,
      normalAttendance: 90,
      missedWorkouts: 5,
      lastWorkout: "3 kun oldin"
    },
    recommendation: "Sportchi bilan shaxsiy suhbat o'tkazish va sabablarni aniqlash tavsiya etiladi.",
    timestamp: "1 kun oldin",
    acknowledged: true
  },
  {
    id: 4,
    athlete: "Aziz Karimov",
    type: "injury",
    severity: "past",
    title: "Shikastlanish oldini olish",
    description: "Tizza yuklamasi oxirgi haftada 30% ga oshgan. Profilaktik choralar ko'rish kerak.",
    metrics: {
      kneeLoad: 130,
      normalLoad: 100,
      squatVolume: "+40%",
      stretchingFrequency: "Past"
    },
    recommendation: "Squat va lunge mashqlarini kamaytirish, egiluvchanlik mashqlarini qo'shish.",
    timestamp: "6 soat oldin",
    acknowledged: false
  },
]

const severityColors: Record<string, string> = {
  yuqori: "bg-red-500/10 text-red-500 border-red-500/20",
  "o'rtacha": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  past: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
}

const typeIcons: Record<string, React.ElementType> = {
  overload: Heart,
  fatigue: Flame,
  attendance: Clock,
  injury: Shield
}

const typeLabels: Record<string, string> = {
  overload: "Ortiqcha yuklama",
  fatigue: "Charchoq",
  attendance: "Davomat",
  injury: "Shikastlanish"
}

export default function RisksPage() {
  const highRiskCount = riskAlerts.filter(a => a.severity === 'yuqori').length
  const mediumRiskCount = riskAlerts.filter(a => a.severity === "o'rtacha").length
  const lowRiskCount = riskAlerts.filter(a => a.severity === 'past').length
  const unacknowledgedCount = riskAlerts.filter(a => !a.acknowledged).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Xavf Signallari</h1>
          <p className="text-muted-foreground">AI tomonidan aniqlangan xavfli holatlar</p>
        </div>
        <Badge variant="outline" className="gap-1">
          <Bell className="h-3 w-3" />
          {unacknowledgedCount} yangi
        </Badge>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500/10">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Yuqori xavf</p>
                <p className="text-2xl font-bold">{highRiskCount}</p>
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
                <p className="text-sm text-muted-foreground">O'rtacha xavf</p>
                <p className="text-2xl font-bold">{mediumRiskCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Shield className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Past xavf</p>
                <p className="text-2xl font-bold">{lowRiskCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Kutilmoqda</p>
                <p className="text-2xl font-bold">{unacknowledgedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Alerts List */}
      <div className="space-y-4">
        {riskAlerts.map((alert) => {
          const Icon = typeIcons[alert.type] || AlertTriangle
          return (
            <Card 
              key={alert.id} 
              className={`bg-card/50 border-border/50 ${!alert.acknowledged ? 'border-l-4 border-l-' + (alert.severity === 'yuqori' ? 'red-500' : alert.severity === "o'rtacha" ? 'yellow-500' : 'emerald-500') : ''}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${severityColors[alert.severity]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-lg">{alert.title}</h3>
                        <Badge className={severityColors[alert.severity]}>
                          {alert.severity}
                        </Badge>
                        <Badge variant="outline">{typeLabels[alert.type]}</Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-xs bg-primary/10 text-primary">
                              {alert.athlete.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {alert.athlete}
                        </div>
                        <span>•</span>
                        <span>{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  {alert.acknowledged ? (
                    <Badge className="bg-emerald-500/10 text-emerald-500 gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Ko'rildi
                    </Badge>
                  ) : (
                    <Button size="sm" variant="outline">
                      Tasdiqlash
                    </Button>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{alert.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 p-3 rounded-lg bg-background/50">
                  {Object.entries(alert.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-lg font-bold">{value}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Recommendation */}
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm">
                    <strong className="text-primary">AI tavsiyasi:</strong> {alert.recommendation}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Sportchiga xabar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Rejani moslashtirish
                  </Button>
                  <Button size="sm" className="flex-1">
                    Batafsil
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* AI Summary */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            AI xavfsizlik xulosasi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm">
              Umumiy guruh holati <strong className="text-emerald-500">yaxshi</strong>. 
              {highRiskCount > 0 && ` Ammo ${highRiskCount} ta sportchi yuqori xavf ostida - ularga tezkor e'tibor kerak.`}
              {' '}So'nggi haftada xavf signallari soni {unacknowledgedCount > 3 ? 'oshgan' : 'kamaigan'}.
              Asosiy muammolar: ortiqcha yuklama va past davomat. 
              AI tavsiyasi: guruh mashg'ulotlarida tiklanish vaqtiga ko'proq e'tibor berish.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-background/50">
              <p className="text-2xl font-bold text-emerald-500">75%</p>
              <p className="text-xs text-muted-foreground">Xavfsiz sportchilar</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/50">
              <p className="text-2xl font-bold text-yellow-500">17%</p>
              <p className="text-xs text-muted-foreground">E'tibor kerak</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/50">
              <p className="text-2xl font-bold text-red-500">8%</p>
              <p className="text-xs text-muted-foreground">Yuqori xavf</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/50">
              <p className="text-2xl font-bold text-primary">92%</p>
              <p className="text-xs text-muted-foreground">AI aniqlik</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

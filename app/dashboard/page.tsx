"use client"

import { useState } from "react"
import { Battery, Heart, Flame, TrendingUp, Calendar, Target, BatteryWarning } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICard } from "@/components/dashboard/kpi-card"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { TodayWorkout } from "@/components/dashboard/today-workout"
import { AIRecommendation } from "@/components/dashboard/ai-recommendation"
import { AlertBanner } from "@/components/dashboard/alert-banner"
import { RecentWorkouts } from "@/components/dashboard/recent-workouts"

const kpis = [
  {
    title: "Tayyorlik darajasi",
    value: "87%",
    subtitle: "O'rtachadan yuqori",
    icon: Battery,
    trend: { value: 5, isPositive: true },
    status: "success" as const,
  },
  {
    title: "Charchoq darajasi",
    value: "42%",
    subtitle: "O'rtacha daraja",
    icon: BatteryWarning,
    trend: { value: 8, isPositive: false },
    status: "warning" as const,
  },
  {
    title: "Tiklanish holati",
    value: "72%",
    subtitle: "Yaxshi tiklanish",
    icon: Heart,
    trend: { value: 3, isPositive: true },
    status: "neutral" as const,
  },
  {
    title: "Trening yuki",
    value: "Yuqori",
    subtitle: "So'nggi 7 kun",
    icon: Flame,
    status: "warning" as const,
  },
  {
    title: "Haftalik progress",
    value: "+12%",
    subtitle: "o'tgan haftaga nisbatan",
    icon: TrendingUp,
    trend: { value: 12, isPositive: true },
    status: "success" as const,
  },
  {
    title: "Ketma-ket kunlar",
    value: "14 kun",
    subtitle: "Davom eting!",
    icon: Calendar,
    status: "success" as const,
  },
  {
    title: "Maqsad bajarilishi",
    value: "78%",
    subtitle: "Oylik maqsad",
    icon: Target,
    trend: { value: 8, isPositive: true },
    status: "neutral" as const,
  },
]

export default function DashboardPage() {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Bosh sahifa"
        subtitle="Xush kelibsiz, Aziz! Trening ko'rsatkichlaringiz."
      />

      <div className="px-[32px] py-6 space-y-6">
        {/* E'tibor talab qiladi */}
        {showAlert && (
          <AlertBanner
            type="warning"
            title="E'tibor talab qiladi: Yuqori trening yuki"
            message="Trening yukingiz ketma-ket 3 kun davomida yuqori bo'ldi. Intensivlikni kamaytirish yoki dam olish kuni qo'shishni ko'ring."
            onDismiss={() => setShowAlert(false)}
          />
        )}

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {kpis.map((kpi) => (
            <KPICard key={kpi.title} {...kpi} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <ProgressChart />
            <RecentWorkouts />
          </div>

          {/* Right Column - Today & AI */}
          <div className="space-y-6">
            <TodayWorkout />
            <AIRecommendation />
          </div>
        </div>
      </div>
    </div>
  )
}

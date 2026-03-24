"use client"

import {
  Users,
  UserCheck,
  DollarSign,
  Activity,
  UserPlus,
  FilePlus,
  FileText,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICard } from "@/components/dashboard/kpi-card"

const kpis = [
  {
    title: "Jami foydalanuvchilar",
    value: "1,247",
    subtitle: "Ro'yxatdan o'tganlar",
    icon: Users,
    trend: { value: 12, isPositive: true },
    status: "neutral" as const,
  },
  {
    title: "Faol trenerlar",
    value: "45",
    subtitle: "Hozir faol",
    icon: UserCheck,
    trend: { value: 5, isPositive: true },
    status: "success" as const,
  },
  {
    title: "Oylik daromad",
    value: "$12,450",
    subtitle: "Joriy oy",
    icon: DollarSign,
    trend: { value: 8, isPositive: true },
    status: "success" as const,
  },
  {
    title: "Tizim holati",
    value: "99.9%",
    subtitle: "Uptime so'nggi 30 kun",
    icon: Activity,
    trend: { value: 0.1, isPositive: true },
    status: "success" as const,
  },
]

const recentActivities = [
  { id: 1, action: "Yangi foydalanuvchi ro'yxatdan o'tdi", user: "Azizbek Karimov", time: "2 daqiqa oldin", type: "user" },
  { id: 2, action: "Yangi trener qo'shildi", user: "Dilnoza Yusupova", time: "15 daqiqa oldin", type: "trainer" },
  { id: 3, action: "To'lov qabul qilindi", user: "Bobur Toshmatov", time: "32 daqiqa oldin", type: "payment" },
  { id: 4, action: "Parol o'zgartirildi", user: "Sarvinoz Ergasheva", time: "1 soat oldin", type: "security" },
  { id: 5, action: "Yangi mashq qo'shildi", user: "Admin", time: "1 soat 20 daqiqa oldin", type: "content" },
  { id: 6, action: "Obuna yangilandi", user: "Jasur Rahimov", time: "2 soat oldin", type: "payment" },
  { id: 7, action: "Trener hisoboti yuborildi", user: "Muhammadali Xoliqov", time: "3 soat oldin", type: "report" },
  { id: 8, action: "Tizim sozlamalari o'zgartirildi", user: "Super Admin", time: "4 soat oldin", type: "system" },
  { id: 9, action: "Yangi sportchi ro'yxatdan o'tdi", user: "Feruza Qodirova", time: "5 soat oldin", type: "user" },
  { id: 10, action: "Email bildirishnomalari yuborildi", user: "Tizim", time: "6 soat oldin", type: "notification" },
]

const systemHealth = [
  { label: "Server uptime", value: "99.9%", status: "success", icon: CheckCircle },
  { label: "Bazaviy holat", value: "Yaxshi", status: "success", icon: CheckCircle },
  { label: "API javob vaqti", value: "124ms", status: "warning", icon: Clock },
  { label: "Xotira ishlatilishi", value: "67%", status: "warning", icon: AlertCircle },
]

const activityTypeColors: Record<string, string> = {
  user: "bg-blue-500/20 text-blue-400",
  trainer: "bg-green-500/20 text-green-400",
  payment: "bg-emerald-500/20 text-emerald-400",
  security: "bg-yellow-500/20 text-yellow-400",
  content: "bg-purple-500/20 text-purple-400",
  report: "bg-cyan-500/20 text-cyan-400",
  system: "bg-orange-500/20 text-orange-400",
  notification: "bg-pink-500/20 text-pink-400",
}

const activityTypeLabels: Record<string, string> = {
  user: "Foydalanuvchi",
  trainer: "Trener",
  payment: "To'lov",
  security: "Xavfsizlik",
  content: "Kontent",
  report: "Hisobot",
  system: "Tizim",
  notification: "Bildirishnoma",
}

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Admin Panel"
        subtitle="Tizim boshqaruvi va monitoring"
      />

      <div className="px-[32px] py-6 space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <KPICard key={kpi.title} {...kpi} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-card/50 border border-border/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-foreground">So'nggi faoliyat</h2>
              <span className="text-xs text-muted-foreground">So'nggi 24 soat</span>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0">
                  <span className={`mt-0.5 px-2 py-0.5 rounded text-xs font-medium ${activityTypeColors[activity.type]}`}>
                    {activityTypeLabels[activity.type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* System Health */}
            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <h2 className="text-base font-semibold text-foreground mb-4">Tizim holati</h2>
              <div className="space-y-3">
                {systemHealth.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon
                        className={`w-4 h-4 ${item.status === "success" ? "text-green-400" : "text-yellow-400"}`}
                      />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <span
                      className={`text-sm font-medium ${item.status === "success" ? "text-green-400" : "text-yellow-400"}`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <h2 className="text-base font-semibold text-foreground mb-4">Tezkor amallar</h2>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors">
                  <UserPlus className="w-4 h-4" />
                  Foydalanuvchi qo'shish
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors">
                  <FilePlus className="w-4 h-4" />
                  Trener qo'shish
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors">
                  <FileText className="w-4 h-4" />
                  Loglarni ko'rish
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors">
                  <TrendingUp className="w-4 h-4" />
                  Hisobot yaratish
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors">
                  <Zap className="w-4 h-4" />
                  Tizimni yangilash
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

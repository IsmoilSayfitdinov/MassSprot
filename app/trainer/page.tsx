"use client"

import { Users, UserCheck, AlertTriangle, TrendingUp, Calendar, Activity } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICard } from "@/components/dashboard/kpi-card"
import { AthletesTable } from "@/components/trainer/athletes-table"
import { RiskAlerts } from "@/components/trainer/risk-alerts"
import { GroupAnalytics } from "@/components/trainer/group-analytics"
import { AttendanceSummary } from "@/components/trainer/attendance-summary"

const kpis = [
  {
    title: "Total Athletes",
    value: "42",
    subtitle: "Active members",
    icon: Users,
    trend: { value: 8, isPositive: true },
    status: "neutral" as const,
  },
  {
    title: "Active Today",
    value: "28",
    subtitle: "67% of total",
    icon: UserCheck,
    status: "success" as const,
  },
  {
    title: "At Risk",
    value: "4",
    subtitle: "Need attention",
    icon: AlertTriangle,
    status: "danger" as const,
  },
  {
    title: "Avg. Readiness",
    value: "78%",
    subtitle: "Group average",
    icon: Activity,
    trend: { value: 3, isPositive: true },
    status: "neutral" as const,
  },
  {
    title: "Attendance Rate",
    value: "86%",
    subtitle: "This week",
    icon: Calendar,
    trend: { value: 2, isPositive: false },
    status: "warning" as const,
  },
  {
    title: "Performance",
    value: "+5%",
    subtitle: "vs last week",
    icon: TrendingUp,
    trend: { value: 5, isPositive: true },
    status: "success" as const,
  },
]

export default function TrainerPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader 
        title="Trainer Dashboard" 
        subtitle="Monitor and manage your athletes"
      />

      <div className="p-6 space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {kpis.map((kpi) => (
            <KPICard key={kpi.title} {...kpi} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Table */}
          <div className="lg:col-span-2">
            <AthletesTable />
          </div>

          {/* Right Column - Alerts & Analytics */}
          <div className="space-y-6">
            <RiskAlerts />
          </div>
        </div>

        {/* Bottom Row - Analytics */}
        <div className="grid lg:grid-cols-2 gap-6">
          <AttendanceSummary />
          <GroupAnalytics />
        </div>
      </div>
    </div>
  )
}

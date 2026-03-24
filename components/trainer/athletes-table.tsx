"use client"

import { useState } from "react"
import { 
  ChevronDown, 
  Search, 
  Filter, 
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Minus,
  Eye,
  MessageSquare,
  AlertTriangle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const athletes = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    readiness: 92,
    fatigue: 25,
    attendance: "95%",
    trend: "up",
    riskStatus: "safe",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "MC",
    readiness: 78,
    fatigue: 45,
    attendance: "88%",
    trend: "stable",
    riskStatus: "caution",
    lastActive: "1 day ago",
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "EW",
    readiness: 65,
    fatigue: 68,
    attendance: "72%",
    trend: "down",
    riskStatus: "risk",
    lastActive: "3 hours ago",
  },
  {
    id: 4,
    name: "James Lee",
    avatar: "JL",
    readiness: 88,
    fatigue: 30,
    attendance: "92%",
    trend: "up",
    riskStatus: "safe",
    lastActive: "30 min ago",
  },
  {
    id: 5,
    name: "Lisa Park",
    avatar: "LP",
    readiness: 71,
    fatigue: 52,
    attendance: "85%",
    trend: "stable",
    riskStatus: "caution",
    lastActive: "5 hours ago",
  },
]

export function AthletesTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-accent" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-destructive" />
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getRiskBadge = (status: string) => {
    const styles = {
      safe: "bg-accent/20 text-accent border-accent/30",
      caution: "bg-chart-4/20 text-chart-4 border-chart-4/30",
      risk: "bg-destructive/20 text-destructive border-destructive/30",
    }
    return styles[status as keyof typeof styles] || styles.safe
  }

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Athletes</h3>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border flex-1 sm:w-64">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search athletes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none flex-1"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Athlete
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Readiness
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Fatigue
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Attendance
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Trend
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Status
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Last Active
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {athletes.map((athlete) => (
              <tr
                key={athlete.id}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {athlete.avatar}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {athlete.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-sm font-medium ${
                    athlete.readiness >= 80 ? "text-accent" : 
                    athlete.readiness >= 60 ? "text-chart-4" : "text-destructive"
                  }`}>
                    {athlete.readiness}%
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-sm font-medium ${
                    athlete.fatigue <= 35 ? "text-accent" : 
                    athlete.fatigue <= 55 ? "text-chart-4" : "text-destructive"
                  }`}>
                    {athlete.fatigue}%
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-foreground">{athlete.attendance}</span>
                </td>
                <td className="px-4 py-4">
                  {getTrendIcon(athlete.trend)}
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getRiskBadge(athlete.riskStatus)}`}>
                    {athlete.riskStatus === "risk" && <AlertTriangle className="w-3 h-3" />}
                    {athlete.riskStatus.charAt(0).toUpperCase() + athlete.riskStatus.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-muted-foreground">{athlete.lastActive}</span>
                </td>
                <td className="px-4 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send Message
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        View Alerts
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

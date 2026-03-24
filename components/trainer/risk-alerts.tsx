import { AlertTriangle, Heart, TrendingDown, Battery, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const alerts = [
  {
    id: 1,
    athlete: "Emma Wilson",
    avatar: "EW",
    type: "high_fatigue",
    title: "High Fatigue Level",
    message: "Fatigue at 68% - recommend reducing training intensity",
    severity: "high",
    time: "15 min ago",
    icon: Battery,
  },
  {
    id: 2,
    athlete: "Mike Chen",
    avatar: "MC",
    type: "missed_sessions",
    title: "Declining Attendance",
    message: "Missed 3 sessions in the past week",
    severity: "medium",
    time: "2 hours ago",
    icon: Clock,
  },
  {
    id: 3,
    athlete: "Lisa Park",
    avatar: "LP",
    type: "heart_rate",
    title: "Elevated Heart Rate",
    message: "Resting HR 15% above baseline",
    severity: "high",
    time: "4 hours ago",
    icon: Heart,
  },
  {
    id: 4,
    athlete: "Emma Wilson",
    avatar: "EW",
    type: "performance_drop",
    title: "Performance Decline",
    message: "12% drop in performance metrics this week",
    severity: "medium",
    time: "1 day ago",
    icon: TrendingDown,
  },
]

export function RiskAlerts() {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Risk Alerts</h3>
            <p className="text-sm text-muted-foreground">{alerts.length} active alerts</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border cursor-pointer hover:bg-secondary/30 transition-colors ${
              alert.severity === "high"
                ? "bg-destructive/5 border-destructive/20"
                : "bg-chart-4/5 border-chart-4/20"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                alert.severity === "high" ? "bg-destructive/20" : "bg-chart-4/20"
              }`}>
                <alert.icon className={`w-5 h-5 ${
                  alert.severity === "high" ? "text-destructive" : "text-chart-4"
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-sm font-medium ${
                    alert.severity === "high" ? "text-destructive" : "text-chart-4"
                  }`}>
                    {alert.title}
                  </span>
                  <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                    alert.severity === "high" 
                      ? "bg-destructive/20 text-destructive" 
                      : "bg-chart-4/20 text-chart-4"
                  }`}>
                    {alert.severity === "high" ? "High" : "Medium"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">{alert.avatar}</span>
                    </div>
                    <span className="text-xs text-foreground">{alert.athlete}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

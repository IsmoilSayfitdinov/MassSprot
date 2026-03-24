"use client"

import { Heart, Battery, Flame, TrendingUp, AlertTriangle, Activity } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const metrics = [
  {
    icon: Battery,
    label: "Readiness Score",
    value: 87,
    status: "optimal",
    color: "text-accent",
    bgColor: "bg-accent",
  },
  {
    icon: Heart,
    label: "Recovery Status",
    value: 72,
    status: "good",
    color: "text-primary",
    bgColor: "bg-primary",
  },
  {
    icon: Flame,
    label: "Training Load",
    value: 65,
    status: "moderate",
    color: "text-chart-4",
    bgColor: "bg-chart-4",
  },
  {
    icon: TrendingUp,
    label: "Progress Index",
    value: 94,
    status: "excellent",
    color: "text-accent",
    bgColor: "bg-accent",
  },
]

const alerts = [
  { type: "success", message: "Optimal recovery - Ready for high intensity" },
  { type: "warning", message: "Sleep quality below average - Consider rest" },
  { type: "info", message: "Weekly goal: 3/5 sessions completed" },
]

export function AIAnalyticsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">AI Analytics</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Intelligent Insights,{" "}
              <span className="gradient-text">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our AI continuously analyzes your performance data to provide actionable 
              insights. From readiness scores to risk detection, every metric is designed 
              to help you train smarter and safer.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Real-time Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Track your heart rate zones, VO2 max, and performance metrics in real-time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Risk Prevention</h4>
                  <p className="text-sm text-muted-foreground">Automatic alerts when overload risk is detected based on fatigue and recovery data.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Performance Dashboard</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent pulse-live" />
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="bg-secondary/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <metric.icon className={`w-4 h-4 ${metric.color}`} />
                      <span className="text-xs text-muted-foreground">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {metric.value}%
                    </div>
                    <Progress value={metric.value} className="h-1.5" />
                  </div>
                ))}
              </div>

              {/* Alerts */}
              <div className="space-y-2">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                      alert.type === "success"
                        ? "bg-accent/10 border border-accent/20"
                        : alert.type === "warning"
                        ? "bg-chart-4/10 border border-chart-4/20"
                        : "bg-primary/10 border border-primary/20"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        alert.type === "success"
                          ? "bg-accent"
                          : alert.type === "warning"
                          ? "bg-chart-4"
                          : "bg-primary"
                      }`}
                    />
                    <span className="text-sm text-foreground">{alert.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

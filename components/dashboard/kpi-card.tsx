import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  status?: "success" | "warning" | "danger" | "neutral"
  className?: string
}

export function KPICard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  status = "neutral",
  className,
}: KPICardProps) {
  const statusColors = {
    success: "text-accent",
    warning: "text-chart-4",
    danger: "text-destructive",
    neutral: "text-primary",
  }

  const statusBg = {
    success: "bg-accent/20",
    warning: "bg-chart-4/20",
    danger: "bg-destructive/20",
    neutral: "bg-primary/20",
  }

  return (
    <div className={cn("glass-card rounded-xl p-5", className)}>
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", statusBg[status])}>
          <Icon className={cn("w-5 h-5", statusColors[status])} />
        </div>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium",
            trend.isPositive ? "text-accent" : "text-destructive"
          )}>
            <span>{trend.isPositive ? "+" : ""}{trend.value}%</span>
          </div>
        )}
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

import { AlertTriangle, X } from "lucide-react"

interface AlertBannerProps {
  type: "warning" | "danger" | "info"
  title: string
  message: string
  onDismiss?: () => void
}

export function AlertBanner({ type, title, message, onDismiss }: AlertBannerProps) {
  const styles = {
    warning: {
      bg: "bg-chart-4/10 border-chart-4/30",
      icon: "text-chart-4",
      text: "text-chart-4",
    },
    danger: {
      bg: "bg-destructive/10 border-destructive/30",
      icon: "text-destructive",
      text: "text-destructive",
    },
    info: {
      bg: "bg-primary/10 border-primary/30",
      icon: "text-primary",
      text: "text-primary",
    },
  }

  const style = styles[type]

  return (
    <div className={`flex items-start gap-4 p-4 rounded-xl border ${style.bg}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        type === "warning" ? "bg-chart-4/20" : type === "danger" ? "bg-destructive/20" : "bg-primary/20"
      }`}>
        <AlertTriangle className={`w-5 h-5 ${style.icon}`} />
      </div>
      <div className="flex-1">
        <h4 className={`text-sm font-medium ${style.text} mb-1`}>{title}</h4>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="p-1 rounded-lg hover:bg-secondary transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      )}
    </div>
  )
}

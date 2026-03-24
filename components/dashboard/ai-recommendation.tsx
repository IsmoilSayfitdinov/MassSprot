import { Brain, ArrowRight, Zap, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const recommendations = [
  {
    type: "recovery",
    icon: Moon,
    title: "Dam olish kuni tavsiya etiladi",
    description: "Tiklanish ko'rsatkichingiz 65%. Haddan tashqari mashg'ulotni oldini olish uchun bugun dam oling.",
    priority: "medium",
  },
  {
    type: "intensity",
    icon: Zap,
    title: "Intensivlikni sozlang",
    description: "HR ma'lumotlaringiz asosida kardio intensivligini 15% ga kamaytiring — optimal natija uchun.",
    priority: "high",
  },
]

export function AIRecommendation() {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Brain className="w-5 h-5 text-background" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">AI Reja bo'yicha o'zlashtirish</h3>
          <p className="text-sm text-muted-foreground">Siz uchun shaxsiy tavsiyalar</p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              rec.priority === "high"
                ? "bg-chart-4/10 border-chart-4/30"
                : "bg-primary/10 border-primary/30"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                rec.priority === "high" ? "bg-chart-4/20" : "bg-primary/20"
              }`}>
                <rec.icon className={`w-4 h-4 ${
                  rec.priority === "high" ? "text-chart-4" : "text-primary"
                }`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground">{rec.title}</h4>
                  {rec.priority === "high" && (
                    <span className="px-2 py-0.5 rounded-full bg-chart-4/20 text-chart-4 text-xs font-medium">
                      Muhim
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/10">
        Barcha tavsiyalarni ko'rish
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}

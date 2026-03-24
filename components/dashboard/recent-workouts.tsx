import { Clock, Flame, TrendingUp, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const workouts = [
  {
    id: 1,
    name: "Ertalabki yugurish",
    date: "Bugun, 07:30",
    duration: "45 daq",
    calories: 380,
    performance: 92,
  },
  {
    id: 2,
    name: "Yuqori tana kuchi",
    date: "Kecha",
    duration: "55 daq",
    calories: 420,
    performance: 88,
  },
  {
    id: 3,
    name: "HIIT mashg'uloti",
    date: "21-mart",
    duration: "30 daq",
    calories: 350,
    performance: 95,
  },
  {
    id: 4,
    name: "Pastki tana kuchi",
    date: "20-mart",
    duration: "60 daq",
    calories: 480,
    performance: 85,
  },
]

export function RecentWorkouts() {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">So'nggi mashg'ulotlar</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
          Barchasini ko'rish
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">{workout.name}</h4>
                <p className="text-xs text-muted-foreground">{workout.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{workout.duration}</span>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Flame className="w-3 h-3" />
                  <span>{workout.calories} cal</span>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${
                  workout.performance >= 90 ? "text-accent" : workout.performance >= 80 ? "text-primary" : "text-chart-4"
                }`}>
                  {workout.performance}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

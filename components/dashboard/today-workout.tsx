"use client"

import { Clock, Flame, Heart, Dumbbell, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const exercises = [
  { name: "Isitish", duration: "10 daq", completed: true },
  { name: "Kuch mashg'uloti", duration: "30 daq", completed: true },
  { name: "HIIT Kardio", duration: "20 daq", completed: false },
  { name: "Sovutish", duration: "10 daq", completed: false },
]

export function TodayWorkout() {
  const completedCount = exercises.filter((e) => e.completed).length
  const progress = (completedCount / exercises.length) * 100

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Bugungi Jadval</h3>
          <p className="text-sm text-muted-foreground">Butun tana kuchi</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
          <Flame className="w-4 h-4" />
          <span>O'rtacha</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
          <p className="text-sm font-medium text-foreground">70 daq</p>
          <p className="text-xs text-muted-foreground">Davomiylik</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <Flame className="w-5 h-5 text-chart-4 mx-auto mb-1" />
          <p className="text-sm font-medium text-foreground">450</p>
          <p className="text-xs text-muted-foreground">Kaloriya</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <Heart className="w-5 h-5 text-destructive mx-auto mb-1" />
          <p className="text-sm font-medium text-foreground">3-zona</p>
          <p className="text-xs text-muted-foreground">Maqsad HR</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Jarayon</span>
          <span className="text-sm font-medium text-foreground">{completedCount}/{exercises.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Exercise List */}
      <div className="space-y-2 mb-6">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg ${
              exercise.completed ? "bg-accent/10 border border-accent/20" : "bg-secondary/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                exercise.completed ? "bg-accent text-background" : "bg-secondary text-muted-foreground"
              }`}>
                {exercise.completed ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <Dumbbell className="w-3 h-3" />
                )}
              </div>
              <span className={`text-sm ${exercise.completed ? "text-accent" : "text-foreground"}`}>
                {exercise.name}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{exercise.duration}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        <Play className="w-4 h-4 mr-2" />
        Mashg'ulotni davom ettirish
      </Button>
    </div>
  )
}

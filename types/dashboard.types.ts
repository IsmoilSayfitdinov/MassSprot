export interface DashboardStats {
  readiness_score: number
  fatigue_score: number
  recovery_status: number
  training_load: "low" | "moderate" | "high"
  weekly_progress: number
  streak: number
  goal_progress: number
}

export interface Workout {
  id: number
  name: string
  date: string
  duration: number         // daqiqa
  calories: number
  avg_hr: number
  max_hr: number
  difficulty: number       // 1-5
  type: "strength" | "cardio" | "flexibility" | "mixed"
  performance: number      // 0-100
}

export interface WorkoutListResponse {
  count: number
  next?: string
  previous?: string
  results: Workout[]
}

export interface AIRecommendation {
  id: number
  type: "workout" | "recovery" | "nutrition" | "warning"
  title: string
  description: string
  priority: "low" | "medium" | "high"
  created_at: string
}

export interface ProgressData {
  week: string
  performance: number
  recovery: number
}

export interface RecoveryData {
  overall_recovery: number
  fatigue_index: number
  sleep_quality: number
  muscle_recovery: number
  mental_readiness: number
  hydration: number
}

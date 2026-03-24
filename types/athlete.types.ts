export interface Athlete {
  id: number
  full_name: string
  email: string
  phone?: string
  age: number
  gender: "male" | "female"
  height: number
  weight: number
  bmi: number
  fitness_level: "beginner" | "intermediate" | "advanced" | "professional"
  goal: string
  group?: string
  readiness: number
  fatigue: number
  attendance: number
  risk_level: "low" | "medium" | "high"
  vo2_max: number
  health_index: number
  streak: number
  total_workouts: number
}

export interface AthleteDetail extends Athlete {
  hr_max: number
  target_weight?: number
  health_restrictions?: string
  preferred_format?: string
}

export interface AthleteListResponse {
  count: number
  next?: string
  previous?: string
  results: Athlete[]
}

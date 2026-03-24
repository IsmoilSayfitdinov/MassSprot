export interface TrainerStats {
  total_athletes: number
  active_today: number
  at_risk: number
  avg_readiness: number
  attendance_rate: number
  performance_change: number
}

export interface RiskAlert {
  id: number
  athlete_id: number
  athlete_name: string
  type: "overload" | "injury" | "fatigue" | "attendance" | "burnout"
  severity: "low" | "medium" | "high"
  description: string
  recommendation: string
  created_at: string
}

export interface Group {
  id: number
  name: string
  sport_type: string
  level: string
  schedule: string
  location: string
  athlete_count: number
  max_athletes: number
  avg_readiness: number
}

export interface AttendanceRecord {
  id: number
  athlete_id: number
  athlete_name: string
  group: string
  status: "present" | "absent" | "late"
  time?: string
  date: string
  note?: string
}

export interface Report {
  id: number
  type: "individual" | "group" | "attendance" | "progress"
  title: string
  created_at: string
  file_url?: string
}

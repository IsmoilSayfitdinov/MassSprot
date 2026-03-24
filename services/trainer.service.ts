import api from "@/lib/api"
import type {
  TrainerStats,
  RiskAlert,
  AttendanceRecord,
} from "@/types/trainer.types"
import type { AthleteListResponse, Athlete } from "@/types/athlete.types"

export const trainerService = {
  // Trainer statistikasi
  getStats: async (): Promise<TrainerStats> => {
    const res = await api.get("/trainer/stats/")
    return res.data
  },

  // Sportchilar ro'yxati
  getAthletes: async (params?: {
    page?: number
    search?: string
    group?: string
    risk_level?: string
  }): Promise<AthleteListResponse> => {
    const res = await api.get("/trainer/athletes/", { params })
    return res.data
  },

  // Bitta sportchi
  getAthlete: async (id: number): Promise<Athlete> => {
    const res = await api.get(`/trainer/athletes/${id}/`)
    return res.data
  },

  // Xavf signallari
  getRiskAlerts: async (): Promise<RiskAlert[]> => {
    const res = await api.get("/trainer/risks/")
    return res.data
  },

  resolveRisk: async (alertId: number): Promise<void> => {
    await api.post(`/trainer/risks/${alertId}/resolve/`)
  },

  // Davomat
  getAttendance: async (params?: {
    date?: string
    group?: string
  }): Promise<AttendanceRecord[]> => {
    const res = await api.get("/trainer/attendance/", { params })
    return res.data
  },

  markAttendance: async (data: {
    athlete_id: number
    status: "present" | "absent" | "late"
    note?: string
  }): Promise<void> => {
    await api.post("/trainer/attendance/", data)
  },

  // Trener izohi
  addNote: async (athleteId: number, note: string): Promise<void> => {
    await api.post(`/trainer/athletes/${athleteId}/notes/`, { note })
  },

  getNotes: async (athleteId: number) => {
    const res = await api.get(`/trainer/athletes/${athleteId}/notes/`)
    return res.data
  },
}

import api from "@/lib/api"
import type { AthleteDetail } from "@/types/athlete.types"

export const athleteService = {
  // O'z profilini olish
  getProfile: async (): Promise<AthleteDetail> => {
    const res = await api.get("/athlete/profile/")
    return res.data
  },

  // Profilni yangilash
  updateProfile: async (data: Partial<AthleteDetail>): Promise<AthleteDetail> => {
    const res = await api.patch("/athlete/profile/", data)
    return res.data
  },

  // Maqsadlar
  getGoals: async () => {
    const res = await api.get("/athlete/goals/")
    return res.data
  },

  updateGoal: async (goalId: number, data: {
    current?: number
    target?: number
  }) => {
    const res = await api.patch(`/athlete/goals/${goalId}/`, data)
    return res.data
  },

  createGoal: async (data: {
    title: string
    category: string
    target: number
    unit: string
  }) => {
    const res = await api.post("/athlete/goals/", data)
    return res.data
  },

  deleteGoal: async (goalId: number): Promise<void> => {
    await api.delete(`/athlete/goals/${goalId}/`)
  },

  // Trening rejasi
  getTrainingPlan: async () => {
    const res = await api.get("/athlete/training-plan/")
    return res.data
  },

  // Progress tahlili
  getProgressAnalytics: async (period: "weekly" | "monthly" = "weekly") => {
    const res = await api.get("/athlete/progress/", { params: { period } })
    return res.data
  },
}

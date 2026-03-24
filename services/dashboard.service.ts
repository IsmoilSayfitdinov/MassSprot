import api from "@/lib/api"
import type {
  DashboardStats,
  Workout,
  WorkoutListResponse,
  AIRecommendation,
  ProgressData,
  RecoveryData,
} from "@/types/dashboard.types"

export const dashboardService = {
  // Dashboard statistikasi
  getStats: async (): Promise<DashboardStats> => {
    const res = await api.get("/dashboard/stats/")
    return res.data
  },

  // So'nggi mashg'ulotlar
  getRecentWorkouts: async (limit = 5): Promise<Workout[]> => {
    const res = await api.get("/workouts/", { params: { limit } })
    return res.data.results
  },

  // Barcha mashg'ulotlar (pagination)
  getWorkouts: async (params?: {
    page?: number
    type?: string
    search?: string
  }): Promise<WorkoutListResponse> => {
    const res = await api.get("/workouts/", { params })
    return res.data
  },

  // AI tavsiyalar
  getAIRecommendations: async (): Promise<AIRecommendation[]> => {
    const res = await api.get("/ai/recommendations/")
    return res.data
  },

  // Haftalik progress
  getWeeklyProgress: async (): Promise<ProgressData[]> => {
    const res = await api.get("/dashboard/weekly-progress/")
    return res.data
  },

  // Tiklanish ma'lumotlari
  getRecovery: async (): Promise<RecoveryData> => {
    const res = await api.get("/dashboard/recovery/")
    return res.data
  },

  // Mashg'ulot tugagandan keyin feedback
  submitFeedback: async (workoutId: number, data: {
    difficulty: number
    fatigue: number
    pain: number
    mood: number
    note?: string
  }): Promise<void> => {
    await api.post(`/workouts/${workoutId}/feedback/`, data)
  },
}

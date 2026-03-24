import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { dashboardService } from "@/services/dashboard.service"

// Query keys — bir joyda, xato bo'lmaydi
export const dashboardKeys = {
  all: ["dashboard"] as const,
  stats: () => [...dashboardKeys.all, "stats"] as const,
  recentWorkouts: () => [...dashboardKeys.all, "recent-workouts"] as const,
  workouts: (params?: object) => [...dashboardKeys.all, "workouts", params] as const,
  recommendations: () => [...dashboardKeys.all, "recommendations"] as const,
  weeklyProgress: () => [...dashboardKeys.all, "weekly-progress"] as const,
  recovery: () => [...dashboardKeys.all, "recovery"] as const,
}

// Dashboard statistikasi
export function useDashboardStats() {
  return useQuery({
    queryKey: dashboardKeys.stats(),
    queryFn: dashboardService.getStats,
  })
}

// So'nggi mashg'ulotlar
export function useRecentWorkouts(limit = 5) {
  return useQuery({
    queryKey: dashboardKeys.recentWorkouts(),
    queryFn: () => dashboardService.getRecentWorkouts(limit),
  })
}

// AI tavsiyalar
export function useAIRecommendations() {
  return useQuery({
    queryKey: dashboardKeys.recommendations(),
    queryFn: dashboardService.getAIRecommendations,
  })
}

// Haftalik progress
export function useWeeklyProgress() {
  return useQuery({
    queryKey: dashboardKeys.weeklyProgress(),
    queryFn: dashboardService.getWeeklyProgress,
  })
}

// Tiklanish
export function useRecovery() {
  return useQuery({
    queryKey: dashboardKeys.recovery(),
    queryFn: dashboardService.getRecovery,
  })
}

// Feedback yuborish
export function useSubmitFeedback() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ workoutId, data }: {
      workoutId: number
      data: Parameters<typeof dashboardService.submitFeedback>[1]
    }) => dashboardService.submitFeedback(workoutId, data),
    onSuccess: () => {
      // Feedback yuborilgandan keyin statsni yangilaydi
      queryClient.invalidateQueries({ queryKey: dashboardKeys.stats() })
      queryClient.invalidateQueries({ queryKey: dashboardKeys.recovery() })
    },
  })
}

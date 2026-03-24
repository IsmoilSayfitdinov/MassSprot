import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { athleteService } from "@/services/athlete.service"

export const athleteKeys = {
  all: ["athlete"] as const,
  profile: () => [...athleteKeys.all, "profile"] as const,
  goals: () => [...athleteKeys.all, "goals"] as const,
  plan: () => [...athleteKeys.all, "training-plan"] as const,
  progress: (period: string) => [...athleteKeys.all, "progress", period] as const,
}

// Profil
export function useAthleteProfile() {
  return useQuery({
    queryKey: athleteKeys.profile(),
    queryFn: athleteService.getProfile,
  })
}

// Profilni yangilash
export function useUpdateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: athleteService.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: athleteKeys.profile() })
    },
  })
}

// Maqsadlar
export function useGoals() {
  return useQuery({
    queryKey: athleteKeys.goals(),
    queryFn: athleteService.getGoals,
  })
}

export function useCreateGoal() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: athleteService.createGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: athleteKeys.goals() })
    },
  })
}

export function useDeleteGoal() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: athleteService.deleteGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: athleteKeys.goals() })
    },
  })
}

// Trening rejasi
export function useTrainingPlan() {
  return useQuery({
    queryKey: athleteKeys.plan(),
    queryFn: athleteService.getTrainingPlan,
  })
}

// Progress
export function useProgressAnalytics(period: "weekly" | "monthly" = "weekly") {
  return useQuery({
    queryKey: athleteKeys.progress(period),
    queryFn: () => athleteService.getProgressAnalytics(period),
  })
}

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { trainerService } from "@/services/trainer.service"

export const trainerKeys = {
  all: ["trainer"] as const,
  stats: () => [...trainerKeys.all, "stats"] as const,
  athletes: (params?: object) => [...trainerKeys.all, "athletes", params] as const,
  athlete: (id: number) => [...trainerKeys.all, "athlete", id] as const,
  risks: () => [...trainerKeys.all, "risks"] as const,
  attendance: (params?: object) => [...trainerKeys.all, "attendance", params] as const,
  notes: (athleteId: number) => [...trainerKeys.all, "notes", athleteId] as const,
}

// Trainer statistikasi
export function useTrainerStats() {
  return useQuery({
    queryKey: trainerKeys.stats(),
    queryFn: trainerService.getStats,
  })
}

// Sportchilar ro'yxati
export function useAthletes(params?: Parameters<typeof trainerService.getAthletes>[0]) {
  return useQuery({
    queryKey: trainerKeys.athletes(params),
    queryFn: () => trainerService.getAthletes(params),
  })
}

// Bitta sportchi
export function useAthlete(id: number) {
  return useQuery({
    queryKey: trainerKeys.athlete(id),
    queryFn: () => trainerService.getAthlete(id),
    enabled: !!id,
  })
}

// Xavf signallari
export function useRiskAlerts() {
  return useQuery({
    queryKey: trainerKeys.risks(),
    queryFn: trainerService.getRiskAlerts,
    refetchInterval: 1000 * 60 * 5, // 5 daqiqada bir yangilanadi
  })
}

export function useResolveRisk() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: trainerService.resolveRisk,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: trainerKeys.risks() })
      queryClient.invalidateQueries({ queryKey: trainerKeys.stats() })
    },
  })
}

// Davomat
export function useAttendance(params?: Parameters<typeof trainerService.getAttendance>[0]) {
  return useQuery({
    queryKey: trainerKeys.attendance(params),
    queryFn: () => trainerService.getAttendance(params),
  })
}

export function useMarkAttendance() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: trainerService.markAttendance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: trainerKeys.attendance() })
    },
  })
}

// Trener izohi
export function useAthleteNotes(athleteId: number) {
  return useQuery({
    queryKey: trainerKeys.notes(athleteId),
    queryFn: () => trainerService.getNotes(athleteId),
    enabled: !!athleteId,
  })
}

export function useAddNote(athleteId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (note: string) => trainerService.addNote(athleteId, note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: trainerKeys.notes(athleteId) })
    },
  })
}

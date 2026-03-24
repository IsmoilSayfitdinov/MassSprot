import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User } from "@/types/auth.types"
import { authService } from "@/services/auth.service"

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean

  // Actions
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  setTokens: (access: string, refresh: string) => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,

      login: async (email, password) => {
        const data = await authService.login({ email, password })

        localStorage.setItem("access_token", data.access)
        localStorage.setItem("refresh_token", data.refresh)

        set({
          user: data.user,
          accessToken: data.access,
          isAuthenticated: true,
        })
      },

      logout: async () => {
        try {
          await authService.logout()
        } finally {
          localStorage.removeItem("access_token")
          localStorage.removeItem("refresh_token")
          set({ user: null, accessToken: null, isAuthenticated: false })
        }
      },

      setTokens: (access, refresh) => {
        localStorage.setItem("access_token", access)
        localStorage.setItem("refresh_token", refresh)
        set({ accessToken: access, isAuthenticated: true })
      },

      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)

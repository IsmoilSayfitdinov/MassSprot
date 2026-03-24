import api from "@/lib/api"
import type { LoginRequest, LoginResponse, RegisterRequest, User } from "@/types/auth.types"

export const authService = {
  // Login
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post("/auth/token/", data)
    return res.data
  },

  // Register
  register: async (data: RegisterRequest): Promise<User> => {
    const res = await api.post("/auth/register/", data)
    return res.data
  },

  // Logout
  logout: async (): Promise<void> => {
    const refresh = localStorage.getItem("refresh_token")
    await api.post("/auth/logout/", { refresh })
  },

  // Joriy foydalanuvchi
  getMe: async (): Promise<User> => {
    const res = await api.get("/auth/me/")
    return res.data
  },

  // Parolni o'zgartirish
  changePassword: async (data: {
    old_password: string
    new_password: string
  }): Promise<void> => {
    await api.post("/auth/change-password/", data)
  },

  // Parolni tiklash
  forgotPassword: async (email: string): Promise<void> => {
    await api.post("/auth/forgot-password/", { email })
  },
}

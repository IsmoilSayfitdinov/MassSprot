import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
})

// ─── Request: har so'rovga token qo'sh ────────────────────────────────────────
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// ─── Response: 401 bo'lsa token refresh ──────────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true

      try {
        const refresh = localStorage.getItem("refresh_token")
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/token/refresh/`,
          { refresh }
        )

        localStorage.setItem("access_token", data.access)
        original.headers.Authorization = `Bearer ${data.access}`

        return api(original)
      } catch {
        // Refresh ham ishlamasa — logout
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  }
)

export default api

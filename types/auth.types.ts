export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access: string
  refresh: string
  user: User
}

export interface User {
  id: number
  email: string
  full_name: string
  role: "athlete" | "trainer" | "admin"
  avatar?: string
}

export interface RegisterRequest {
  email: string
  password: string
  full_name: string
  role: "athlete" | "trainer"
}

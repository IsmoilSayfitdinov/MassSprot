"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Activity, Mail, Lock, ArrowRight, User, ShieldCheck, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const TEST_ACCOUNTS = [
  {
    label: "Sportchi",
    icon: Dumbbell,
    email: "sportchi@test.uz",
    password: "test123",
    redirect: "/dashboard",
    color: "text-primary",
    bg: "bg-primary/10 hover:bg-primary/20 border-primary/30",
  },
  {
    label: "Trener",
    icon: User,
    email: "trener@test.uz",
    password: "test123",
    redirect: "/trainer",
    color: "text-secondary",
    bg: "bg-secondary/10 hover:bg-secondary/20 border-secondary/30",
  },
  {
    label: "Admin",
    icon: ShieldCheck,
    email: "admin@test.uz",
    password: "test123",
    redirect: "/admin",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/30",
  },
]

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fillTestAccount = (account: typeof TEST_ACCOUNTS[0]) => {
    setEmail(account.email)
    setPassword(account.password)
    setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Test credentials check
    const match = TEST_ACCOUNTS.find(
      (a) => a.email === email && a.password === password
    )

    if (match) {
      setTimeout(() => {
        router.push(match.redirect)
      }, 500)
      return
    }

    // TODO: real API call via auth.service
    setTimeout(() => {
      setLoading(false)
      setError("Email yoki parol noto'g'ri")
    }, 800)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Mass<span className="text-primary">Sport</span> AI
            </span>
          </Link>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">Kirish</h1>
            <p className="text-muted-foreground">
              Hisobingizga kiring va mashg'ulotlarni davom ettiring
            </p>
          </div>

          {/* Test Accounts */}
          <div className="mb-6 p-4 rounded-xl bg-card/50 border border-border/50">
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">
              Test kirish — rol tanlang
            </p>
            <div className="grid grid-cols-3 gap-2">
              {TEST_ACCOUNTS.map((account) => {
                const Icon = account.icon
                return (
                  <button
                    key={account.label}
                    type="button"
                    onClick={() => fillTestAccount(account)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border transition-all ${account.bg}`}
                  >
                    <Icon className={`w-5 h-5 ${account.color}`} />
                    <span className={`text-xs font-medium ${account.color}`}>
                      {account.label}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Parol: <code className="bg-background/60 px-1 rounded">test123</code>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email manzil
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError("") }}
                  placeholder="email@example.com"
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Parol
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError("") }}
                  placeholder="••••••••"
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-lg">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border bg-secondary text-primary focus:ring-primary/50"
                />
                <span className="text-sm text-muted-foreground">Eslab qolish</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Parolni unutdim
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {loading ? "Kirish..." : "Kirish"}
              {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Hisobingiz yo'qmi?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Bepul ro'yxatdan o'ting
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-background to-accent/20 items-center justify-center p-12">
        <div className="max-w-md text-center space-y-8">
          <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto">
            <Activity className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              AI yordamida aqlli mashq qiling
            </h2>
            <p className="text-muted-foreground">
              Shaxsiy trening tavsiyalari, real vaqtdagi natijalarni kuzatish va aqlli murabbiy ko'rsatmalari.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {TEST_ACCOUNTS.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.label} className={`p-4 rounded-xl border ${a.bg}`}>
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${a.color}`} />
                  <p className={`text-sm font-medium ${a.color}`}>{a.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{a.email}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

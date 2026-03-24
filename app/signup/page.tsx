"use client"

import { useState } from "react"
import Link from "next/link"
import { Activity, Mail, Lock, User, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "AI-powered personalized training plans",
  "Real-time performance analytics",
  "Smart recovery recommendations",
  "Progress tracking & insights",
]

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"athlete" | "trainer">("athlete")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log("[v0] Signup attempt:", { name, email, role })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-accent/20 via-background to-primary/20 items-center justify-center p-12">
        <div className="max-w-md">
          <div className="w-24 h-24 rounded-2xl bg-accent/20 flex items-center justify-center mb-8">
            <Activity className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Start your journey to peak performance
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of athletes and trainers who are already using 
            MassSport AI to achieve their fitness goals.
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Form */}
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
            <p className="text-muted-foreground">
              Start your free 14-day trial. No credit card required.
            </p>
          </div>

          {/* Role Selector */}
          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={() => setRole("athlete")}
              className={`flex-1 p-4 rounded-lg border transition-all ${
                role === "athlete"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary/30 hover:bg-secondary/50"
              }`}
            >
              <div className={`text-sm font-medium ${role === "athlete" ? "text-primary" : "text-foreground"}`}>
                I'm an Athlete
              </div>
              <p className="text-xs text-muted-foreground mt-1">Personal training & analytics</p>
            </button>
            <button
              type="button"
              onClick={() => setRole("trainer")}
              className={`flex-1 p-4 rounded-lg border transition-all ${
                role === "trainer"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary/30 hover:bg-secondary/50"
              }`}
            >
              <div className={`text-sm font-medium ${role === "trainer" ? "text-primary" : "text-foreground"}`}>
                I'm a Trainer
              </div>
              <p className="text-xs text-muted-foreground mt-1">Manage athletes & teams</p>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 rounded border-border bg-secondary text-primary focus:ring-primary/50"
              />
              <span className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Create account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

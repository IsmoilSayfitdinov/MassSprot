"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, Mail, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Parolni tiklash so'rovi:", email)
    setSubmitted(true)
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

          {submitted ? (
            /* Success State */
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-3">
                Emailingizni tekshiring
              </h1>
              <p className="text-muted-foreground mb-2">
                Parolni tiklash havolasini quyidagi manzilga yubordik:
              </p>
              <p className="text-foreground font-medium mb-8">{email}</p>
              <Card className="bg-card/50 border-border/50 rounded-xl p-5 mb-8 text-left">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Email kelmadimi? Spam papkasini tekshiring yoki kiritgan email
                  manzilingiz to'g'riligini aniqlang. Havola 60 daqiqa ichida
                  amal qiladi.
                </p>
              </Card>
              <div className="space-y-4">
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setEmail("")
                  }}
                  variant="outline"
                  className="w-full h-12"
                >
                  Boshqa email sinab ko'ring
                </Button>
                <Link href="/login" className="block">
                  <Button
                    variant="ghost"
                    className="w-full h-12 text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kirish sahifasiga qaytish
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            /* Form State */
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Parolni tiklash
                </h1>
                <p className="text-muted-foreground">
                  Email manzilingizni kiriting, parolni tiklash havolasini yuboramiz.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email manzil
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email manzilingizni kiriting"
                      className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Qayta tiklash havolasini yuborish
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <div className="mt-8 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kirish sahifasiga qaytish
                </Link>
              </div>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Hisobingiz yo'qmi?{" "}
                <Link href="/signup" className="text-primary hover:underline font-medium">
                  Bepul ro'yxatdan o'ting
                </Link>
              </p>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-background to-accent/20 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8">
            <Activity className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Xavotir olmang, bu bo'lib turadi!
          </h2>
          <p className="text-muted-foreground">
            Hisobingizga qaytishingizga va trening sayohatingizni davom
            ettirishingizga yordam beramiz.
          </p>
        </div>
      </div>
    </div>
  )
}

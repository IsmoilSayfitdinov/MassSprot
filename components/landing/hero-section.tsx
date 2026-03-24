"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react"

const stats = [
  { value: "15K+", label: "Active Athletes" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "2.5x", label: "Faster Progress" },
  { value: "40%", label: "Less Injuries" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-athlete.jpg"
          alt="Athlete in motion"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-accent pulse-live" />
              <span className="text-sm font-medium text-muted-foreground">
                AI-Powered Sports Analytics
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
              Train Smarter with{" "}
              <span className="gradient-text">AI-Powered</span>{" "}
              Analytics
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Personalized training recommendations, real-time performance monitoring, 
              and intelligent coaching insights powered by advanced AI analytics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base w-full sm:w-auto">
                  Start Training Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary h-14 text-base">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span>Data Protected</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-5 h-5 text-primary" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`glass-card rounded-2xl p-6 card-hover ${
                      index % 2 === 1 ? "mt-8" : ""
                    }`}
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}

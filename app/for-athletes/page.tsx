"use client"

import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Target,
  Activity,
  BarChart3,
  RefreshCw,
  Lightbulb,
  ShieldCheck,
  Flag,
  Flame,
  ArrowRight,
  Star,
  Check,
  X,
  Quote,
  Dumbbell,
} from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Personalized Training Plans",
    description:
      "AI-generated programs adapted to your fitness level, goals, and recovery status. Every workout is tailored just for you.",
  },
  {
    icon: Activity,
    title: "Real-Time Workout Tracking",
    description:
      "Monitor heart rate zones, intensity, and performance metrics live during every session with instant feedback.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Visual dashboards showing your VO2 max, strength gains, endurance trends, and body composition over weeks and months.",
  },
  {
    icon: RefreshCw,
    title: "Recovery & Fatigue Monitoring",
    description:
      "Track sleep quality, muscle fatigue, and readiness scores so you know exactly when to push hard and when to rest.",
  },
  {
    icon: Lightbulb,
    title: "AI Recommendations",
    description:
      "Get smart suggestions for exercise selection, load adjustments, and nutrition timing based on your data patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Overload Prevention",
    description:
      "Intelligent alerts warn you before overtraining occurs, protecting you from injury and burnout with predictive analysis.",
  },
  {
    icon: Flag,
    title: "Goal Tracking",
    description:
      "Set short-term and long-term objectives with AI-powered milestones and progress checkpoints to keep you on course.",
  },
  {
    icon: Flame,
    title: "Motivation System",
    description:
      "Streak tracking, achievement badges, and personalized encouragement keep your training consistency at peak levels.",
  },
]

const testimonials = [
  {
    name: "Alex Petrov",
    role: "Marathon Runner",
    avatar: "AP",
    rating: 5,
    text: "MassSport completely changed how I train. The AI caught early signs of overtraining that I would have missed. I shaved 12 minutes off my marathon time in 3 months.",
  },
  {
    name: "Maria Ivanova",
    role: "CrossFit Athlete",
    avatar: "MI",
    rating: 5,
    text: "The personalized recovery recommendations are incredible. I used to get injured every few months, but with MassSport's fatigue monitoring I've been injury-free for over a year.",
  },
  {
    name: "Dmitry Sokolov",
    role: "Amateur Cyclist",
    avatar: "DS",
    rating: 5,
    text: "As someone who trains alone, having an AI coach that adapts my plan daily based on my readiness score has been a game-changer. It's like having a personal trainer 24/7.",
  },
]

const comparisonFeatures = [
  { feature: "Basic workout logging", free: true, pro: true },
  { feature: "Progress charts", free: true, pro: true },
  { feature: "AI-personalized training plans", free: false, pro: true },
  { feature: "Real-time workout analytics", free: false, pro: true },
  { feature: "Recovery & fatigue monitoring", free: false, pro: true },
  { feature: "Overtraining risk alerts", free: false, pro: true },
  { feature: "Advanced goal tracking", free: false, pro: true },
  { feature: "VO2 Max & Cooper test analysis", free: false, pro: true },
  { feature: "Priority support", free: false, pro: true },
  { feature: "Unlimited training history", free: false, pro: true },
]

export default function ForAthletesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Dumbbell className="w-3 h-3 mr-1" />
              For Athletes
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Train Smarter, Reach Your{" "}
              <span className="gradient-text">Full Potential</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Whether you are a competitive athlete or a fitness enthusiast, MassSport AI gives
              you the intelligent coaching, real-time tracking, and personalized insights you
              need to perform at your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="px-8 h-14 text-base">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Excel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive suite of AI-powered tools designed to optimize every aspect of
              your athletic journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Quote className="w-3 h-3 mr-1" />
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Athletes Who <span className="gradient-text">Trust MassSport</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from real athletes who transformed their training with AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card/50 border-border/50">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free vs <span className="gradient-text">Pro</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start for free and upgrade when you are ready to unlock the full power of
              AI-driven training.
            </p>
          </div>

          <Card className="bg-card/50 border-border/50 max-w-3xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 text-center border-b border-border/50 bg-background/50">
                <div className="p-4 text-sm font-semibold text-muted-foreground text-left pl-6">
                  Feature
                </div>
                <div className="p-4">
                  <span className="text-sm font-semibold text-foreground">Free</span>
                  <p className="text-xs text-muted-foreground mt-0.5">$0/mo</p>
                </div>
                <div className="p-4">
                  <span className="text-sm font-semibold text-primary">Pro</span>
                  <p className="text-xs text-muted-foreground mt-0.5">$19/mo</p>
                </div>
              </div>
              {comparisonFeatures.map((item, index) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 text-center ${
                    index < comparisonFeatures.length - 1 ? "border-b border-border/30" : ""
                  }`}
                >
                  <div className="p-4 text-sm text-foreground text-left pl-6">
                    {item.feature}
                  </div>
                  <div className="p-4 flex justify-center items-center">
                    {item.free ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center items-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Train{" "}
              <span className="gradient-text">Smarter?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Join thousands of athletes who have already unlocked their potential with
              MassSport AI. Start your free trial and feel the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/ai-analytics">
                <Button size="lg" variant="outline" className="px-8 h-14 text-base">
                  Learn About Our AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

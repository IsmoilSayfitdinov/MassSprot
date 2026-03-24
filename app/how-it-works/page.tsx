"use client"

import { PageLayout } from "@/components/landing/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  UserPlus,
  Brain,
  ClipboardList,
  Dumbbell,
  MessageSquare,
  RefreshCw,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Sign Up & Create Profile",
    description:
      "Create your account and build a comprehensive athlete profile. Input your sport, training history, fitness level, goals, health data, and available equipment. The more data you provide, the smarter your plan becomes.",
    gradient: "from-primary to-primary/50",
    highlights: [
      "Sport-specific profiling",
      "Health & injury history intake",
      "Goal-setting framework",
    ],
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Analyzes Your Data",
    description:
      "Our AI engine processes your profile through scientifically validated models including Cooper and Apanasenko methods. It identifies your training zones, recovery baseline, and risk factors to build a foundation for your plan.",
    gradient: "from-accent to-accent/50",
    highlights: [
      "Cooper aerobic assessment",
      "Apanasenko health scoring",
      "Risk factor identification",
    ],
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Get Personalized Training Plan",
    description:
      "Receive a fully structured, periodized training plan tailored to your unique profile. Each session includes exercise selection, sets, reps, intensity targets, and rest periods -- all optimized for your goals.",
    gradient: "from-chart-3 to-chart-3/50",
    highlights: [
      "Periodized program design",
      "Intensity zone targeting",
      "Session-level detail",
    ],
  },
  {
    step: "04",
    icon: Dumbbell,
    title: "Execute Workouts",
    description:
      "Follow your guided workouts with clear instructions and real-time intensity recommendations. Log your performance data including weights, times, heart rate, and perceived exertion directly in the app.",
    gradient: "from-chart-4 to-chart-4/50",
    highlights: [
      "Guided workout interface",
      "Real-time intensity cues",
      "Seamless performance logging",
    ],
  },
  {
    step: "05",
    icon: MessageSquare,
    title: "Provide Feedback",
    description:
      "After each session, rate your perceived effort, energy levels, soreness, sleep quality, and mood. This subjective data is critical for the AI to understand how your body responds to training loads.",
    gradient: "from-primary to-accent",
    highlights: [
      "Post-session wellness check",
      "Fatigue & soreness tracking",
      "Sleep & recovery logging",
    ],
  },
  {
    step: "06",
    icon: RefreshCw,
    title: "System Adapts Your Next Workout",
    description:
      "The AI continuously recalibrates your plan based on performance data, feedback, and recovery metrics. If you are fatigued, intensity drops. If you are excelling, the system progressively challenges you.",
    gradient: "from-accent to-chart-3",
    highlights: [
      "Dynamic load adjustment",
      "Overtraining prevention",
      "Progressive overload logic",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">
                How It Works
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Your Path to{" "}
              <span className="gradient-text">Peak Performance</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From sign-up to your smartest workout yet, MassSport AI guides
              every step with science-backed intelligence. Here is how the
              journey unfolds.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.25rem] top-full w-0.5 h-8 bg-gradient-to-b from-border to-transparent hidden md:block" />
                )}

                <Card className="bg-card/50 border-border/50 rounded-2xl group card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Step Number & Icon */}
                      <div className="flex md:flex-col items-center gap-4 p-6 md:p-8 md:w-40 shrink-0">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <step.icon className="w-8 h-8 text-background" />
                        </div>
                        <span className="text-3xl font-bold text-muted-foreground/30">
                          {step.step}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 md:p-8 md:pl-0">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.highlights.map((highlight) => (
                            <Badge
                              key={highlight}
                              variant="secondary"
                              className="text-xs"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Flow */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              The <span className="gradient-text">Continuous Loop</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MassSport AI is not a static plan. It is a living system that
              learns from every rep, every rest day, and every piece of feedback
              you provide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.step} className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                  <step.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Start Your{" "}
              <span className="gradient-text">Smart Training Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Create your profile in under 5 minutes and let the AI build your
              first personalized training plan. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base"
                >
                  Create Free Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary h-14 text-base px-8"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

"use client"

import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  AlertTriangle,
  Users,
  CalendarCheck,
  FileBarChart,
  Brain,
  BookOpen,
  Clock,
  ArrowRight,
  Check,
  Shield,
  TrendingUp,
  Zap,
  ChevronRight,
  GraduationCap,
} from "lucide-react"

const benefits = [
  {
    icon: LayoutDashboard,
    title: "Athlete Management Dashboard",
    description:
      "A centralized command center to view all your athletes, their current status, training progress, and health indicators at a glance.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Alerts & Monitoring",
    description:
      "Real-time notifications when an athlete shows signs of overtraining, fatigue spikes, or health parameter anomalies so you can intervene early.",
  },
  {
    icon: Users,
    title: "Group Analytics",
    description:
      "Compare performance across groups, identify trends, and benchmark athletes against team averages with interactive visual reports.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Tracking",
    description:
      "Automated attendance logging with session participation rates, consistency scores, and engagement trend analysis per athlete.",
  },
  {
    icon: FileBarChart,
    title: "Performance Reports",
    description:
      "Generate detailed individual and team reports with VO2 max trends, strength progressions, and readiness metrics for stakeholders.",
  },
  {
    icon: Brain,
    title: "AI-Assisted Decision Making",
    description:
      "Get data-driven training load recommendations, optimal rest day suggestions, and periodization insights powered by machine learning.",
  },
  {
    icon: BookOpen,
    title: "Exercise Library Management",
    description:
      "Build and organize custom exercise libraries with video references, muscle group tags, and difficulty levels for streamlined programming.",
  },
  {
    icon: Clock,
    title: "40% Less Admin Time",
    description:
      "Automate repetitive tasks like session planning, progress tracking, and report generation so you can focus on what matters: coaching.",
  },
]

const howItHelps = [
  {
    step: "01",
    title: "Onboard Your Athletes",
    description:
      "Invite athletes to your team, set up their profiles with baseline assessments, and define training goals and health parameters.",
  },
  {
    step: "02",
    title: "Monitor in Real Time",
    description:
      "Track live training sessions, review daily readiness scores, and receive instant alerts when risk thresholds are crossed.",
  },
  {
    step: "03",
    title: "Analyze & Optimize",
    description:
      "Use AI-generated insights to adjust training loads, compare group performance, and identify athletes who need individualized attention.",
  },
  {
    step: "04",
    title: "Report & Communicate",
    description:
      "Share automated progress reports with athletes, parents, or sports organizations with professionally formatted analytics.",
  },
]

const teamPricing = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "For individual trainers getting started",
    athletes: "Up to 5 athletes",
    features: [
      "Basic athlete profiles",
      "Session logging",
      "Attendance tracking",
      "Standard reports",
    ],
    highlighted: false,
    cta: "Start Free",
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For serious coaches and small teams",
    athletes: "Up to 30 athletes",
    features: [
      "Everything in Starter",
      "AI risk alerts",
      "Group analytics",
      "Custom exercise library",
      "Performance reports",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Organization",
    price: "$149",
    period: "/month",
    description: "For sports clubs and academies",
    athletes: "Unlimited athletes",
    features: [
      "Everything in Professional",
      "Multi-trainer access",
      "Advanced AI insights",
      "API integrations",
      "Custom branding",
      "Dedicated account manager",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
]

export default function ForTrainersPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <GraduationCap className="w-3 h-3 mr-1" />
              For Trainers & Coaches
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Coach with Data,{" "}
              <span className="gradient-text">Lead with Confidence</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              MassSport AI gives you a complete athlete management platform with real-time risk
              alerts, AI-powered analytics, and automated reporting so you can focus on
              coaching, not paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="px-8 h-14 text-base">
                  View Team Pricing
                </Button>
              </Link>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">40%</div>
                <p className="text-sm text-muted-foreground mt-1">Less admin time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2,500+</div>
                <p className="text-sm text-muted-foreground mt-1">Trainers trust us</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <p className="text-sm text-muted-foreground mt-1">Satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Platform Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Complete <span className="gradient-text">Coaching Toolkit</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to manage, monitor, and optimize your athletes'
              performance in one intelligent platform.
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

      {/* How It Helps Trainers */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-3 h-3 mr-1" />
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Setup to <span className="gradient-text">Results</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get up and running in minutes. Here is how MassSport empowers your coaching
              workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItHelps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {index < howItHelps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing for Teams */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="w-3 h-3 mr-1" />
              Team Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plans That <span className="gradient-text">Scale With You</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you coach 5 athletes or 500, we have a plan that fits your needs and
              budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamPricing.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-card/50 border-border/50 relative overflow-hidden ${
                  plan.highlighted
                    ? "border-primary/50 shadow-lg shadow-primary/10 scale-[1.02]"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                )}
                <CardHeader>
                  {plan.highlighted && (
                    <Badge className="w-fit mb-2">Most Popular</Badge>
                  )}
                  <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm font-medium text-primary">{plan.athletes}</div>
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={plan.name === "Organization" ? "/contact" : "/signup"} className="block pt-2">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : ""
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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
              Elevate Your{" "}
              <span className="gradient-text">Coaching Game</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Join over 2,500 trainers who save hours every week and deliver better results
              with MassSport AI. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 h-14 text-base">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

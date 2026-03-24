"use client"

import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Heart,
  Activity,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Users,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
  ArrowRight,
  FlaskConical,
  Calculator,
  Gauge,
} from "lucide-react"

const dataSources = [
  {
    icon: Heart,
    title: "Heart Rate (HR)",
    description: "Resting, max, and zone-based heart rate monitoring for intensity tracking",
  },
  {
    icon: Activity,
    title: "VO2 Max",
    description: "Maximal oxygen uptake estimation via Cooper test and field assessments",
  },
  {
    icon: Gauge,
    title: "BMI & Body Composition",
    description: "Body mass index tracking and composition trends over time",
  },
  {
    icon: RefreshCw,
    title: "Sleep & Recovery",
    description: "Sleep duration, quality scoring, and recovery status analysis",
  },
  {
    icon: AlertTriangle,
    title: "Fatigue Index",
    description: "Multi-factor fatigue assessment combining subjective and objective data",
  },
  {
    icon: BarChart3,
    title: "Training History",
    description: "Volume, intensity, frequency patterns and progressive overload tracking",
  },
]

const aiCapabilities = [
  {
    icon: Users,
    title: "Athlete Segmentation",
    description:
      "Automatically groups athletes by fitness level, training response patterns, and risk profiles for targeted coaching strategies.",
    badge: "Clustering",
  },
  {
    icon: Shield,
    title: "Risk Prediction",
    description:
      "Predicts overtraining, injury risk, and performance plateaus before they happen using historical pattern analysis.",
    badge: "Predictive",
  },
  {
    icon: Lightbulb,
    title: "Personalized Recommendations",
    description:
      "Generates individualized training load, recovery, and nutrition suggestions based on each athlete's unique profile.",
    badge: "Generative",
  },
  {
    icon: Target,
    title: "Adaptive Planning",
    description:
      "Dynamically adjusts training plans in real-time based on readiness scores, fatigue levels, and goal progress.",
    badge: "Adaptive",
  },
]

const scientificMethods = [
  {
    name: "Cooper Test (Aerobic Fitness)",
    description:
      "12-minute maximal run distance used to estimate VO2 max. Widely validated for field-based aerobic capacity assessment.",
    source: "Cooper, K.H. (1968)",
  },
  {
    name: "Apanasenko Health Index",
    description:
      "Comprehensive somatic health scoring system that evaluates physical development, cardiovascular fitness, and functional reserves.",
    source: "Apanasenko, G.L. (1992)",
  },
]

const formulas = [
  {
    name: "Maximum Heart Rate",
    formula: "HR_max = 220 - age",
    description: "Age-predicted maximum heart rate for training zone calculation",
  },
  {
    name: "VO2 Max (Cooper)",
    formula: "VO2max = (d₁₂ - 504.9) / 44.73",
    description: "Where d₁₂ is distance in meters covered in 12-minute run",
  },
  {
    name: "Body Mass Index",
    formula: "BMI = weight (kg) / height² (m)",
    description: "Standard body composition screening metric",
  },
  {
    name: "Fatigue Index",
    formula: "FI = (P_peak - P_min) / P_peak × 100",
    description: "Percentage power drop during repeated sprint assessment",
  },
  {
    name: "Readiness Score",
    formula: "RS = 0.3×HRV + 0.25×Sleep + 0.25×Recovery + 0.2×Mood",
    description: "Weighted composite score for daily training readiness",
  },
]

const dashboardMetrics = [
  { label: "Readiness Score", value: "87%", trend: "+5%", status: "Optimal" },
  { label: "VO2 Max", value: "48.2", trend: "+1.8", status: "Above Avg" },
  { label: "Fatigue Index", value: "23%", trend: "-4%", status: "Low" },
  { label: "Training Load", value: "720 AU", trend: "+12%", status: "Moderate" },
  { label: "Recovery", value: "92%", trend: "+8%", status: "Excellent" },
  { label: "Risk Level", value: "Low", trend: "Stable", status: "Safe" },
]

export default function AIAnalyticsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Brain className="w-3 h-3 mr-1" />
              AI-Powered Analytics
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              How <span className="gradient-text">Artificial Intelligence</span> Powers MassSport
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              MassSport uses advanced machine learning and sports science methodologies to
              analyze athlete data, predict risks, and deliver personalized training
              recommendations in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Data Inputs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Source <span className="gradient-text">Data Collection</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI engine ingests diverse physiological and behavioral data streams to build a
              comprehensive athlete profile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataSources.map((source) => (
              <Card key={source.title} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <source.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{source.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {source.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Core Capabilities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">AI Can Do</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From pattern recognition to predictive modeling, our AI transforms raw data into
              actionable intelligence for athletes and coaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability) => (
              <Card
                key={capability.title}
                className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <capability.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="secondary">{capability.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Methods */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <FlaskConical className="w-3 h-3 mr-1" />
              Scientific Foundation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Evidence-Based <span className="gradient-text">Methodology</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our algorithms are grounded in validated sports science research and clinical
              assessment protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {scientificMethods.map((method) => (
              <Card key={method.name} className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{method.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                  <p className="text-sm text-primary font-medium">{method.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulas */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Calculator className="w-3 h-3 mr-1" />
              Key Formulas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Math Behind the <span className="gradient-text">Magic</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent, scientifically validated formulas power every recommendation and
              metric in MassSport.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {formulas.map((item) => (
              <Card key={item.name} className="bg-card/50 border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <div className="bg-background/80 rounded-lg px-4 py-3 font-mono text-sm text-primary border border-border/30">
                    {item.formula}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <BarChart3 className="w-3 h-3 mr-1" />
              Live Dashboard
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Metrics <span className="gradient-text">At a Glance</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A real-time overview of how our AI evaluates and tracks athlete performance.
            </p>
          </div>

          <Card className="bg-card/50 border-border/50 max-w-5xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dashboardMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border/30 bg-background/50 p-5 space-y-2"
                  >
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                      <span className="text-sm text-primary font-medium mb-0.5">
                        {metric.trend}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {metric.status}
                    </Badge>
                  </div>
                ))}
              </div>
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
              Experience AI-Driven{" "}
              <span className="gradient-text">Training Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              See how MassSport AI transforms raw data into personalized insights that help
              athletes train smarter and coaches make better decisions.
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
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

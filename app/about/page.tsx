"use client"

import { PageLayout } from "@/components/landing/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Target,
  Eye,
  Brain,
  Heart,
  Users,
  Trophy,
  ArrowRight,
  GraduationCap,
  Beaker,
  Star,
  CheckCircle2,
} from "lucide-react"

const stats = [
  { value: "15K+", label: "Athletes Trained", icon: Users },
  { value: "500+", label: "Professional Trainers", icon: GraduationCap },
  { value: "98%", label: "Satisfaction Rate", icon: Star },
  { value: "50+", label: "Sports Supported", icon: Trophy },
]

const teamMembers = [
  {
    name: "Dr. Elena Voronova",
    role: "Chief Science Officer",
    bio: "Ph.D. in Sports Physiology with 15 years of research in adaptive training systems.",
    icon: Beaker,
  },
  {
    name: "Marcus Chen",
    role: "CEO & Co-Founder",
    bio: "Former Division I athlete turned tech entrepreneur. Passionate about democratizing sports science.",
    icon: Target,
  },
  {
    name: "Aisha Patel",
    role: "Head of AI & ML",
    bio: "Led ML teams at top tech companies. Specializes in real-time predictive analytics for human performance.",
    icon: Brain,
  },
  {
    name: "Tomasz Kowalski",
    role: "VP of Product",
    bio: "10+ years building SaaS platforms for health and fitness. Former professional triathlete.",
    icon: Heart,
  },
]

const scienceMethods = [
  {
    title: "Cooper Aerobic Fitness Test",
    description:
      "The foundational Cooper 12-minute run test is integrated into our assessment pipeline to establish baseline aerobic capacity and track cardiovascular improvements over time.",
    points: [
      "VO2 max estimation",
      "Aerobic zone calibration",
      "Longitudinal fitness tracking",
    ],
  },
  {
    title: "Apanasenko Health Assessment",
    description:
      "Professor Apanasenko's somatic health level methodology enables us to quantify an athlete's overall health status, guiding safe training intensity boundaries and recovery protocols.",
    points: [
      "Somatic health scoring",
      "Safe intensity thresholds",
      "Recovery optimization",
    ],
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Redefining Athletic{" "}
              <span className="gradient-text">Performance</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              MassSport AI combines cutting-edge artificial intelligence with
              proven sports science methodologies to deliver training experiences
              that are truly personal, adaptive, and backed by research.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 border-border/50 rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-background" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To make world-class, science-backed training accessible to
                  every athlete regardless of level, location, or budget. We
                  believe intelligent technology can bridge the gap between elite
                  coaching and everyday training.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-background" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A future where every training session is optimized by AI,
                  where injuries from overtraining are preventable, and where
                  data-driven coaching empowers athletes to unlock their full
                  potential safely and sustainably.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="bg-card/50 border-border/50 rounded-2xl text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Scientific Foundation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Built on{" "}
              <span className="gradient-text">Proven Science</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI models are grounded in internationally recognized sports
              science methodologies, validated through decades of research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {scienceMethods.map((method) => (
              <Card
                key={method.title}
                className="bg-card/50 border-border/50 rounded-2xl"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-3 to-chart-3/50 flex items-center justify-center mb-6">
                    <Beaker className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              The People Behind{" "}
              <span className="gradient-text">MassSport AI</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A multidisciplinary team of scientists, engineers, and athletes
              united by a passion for smarter training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="bg-card/50 border-border/50 rounded-2xl group card-hover"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <member.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
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
              Join the Future of{" "}
              <span className="gradient-text">Athletic Training</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Experience what 15,000+ athletes already know -- AI-powered
              training is the competitive edge you have been looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary h-14 text-base px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

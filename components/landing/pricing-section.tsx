import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individual athletes getting started",
    price: "$9",
    period: "/month",
    features: [
      "Personal dashboard",
      "AI training recommendations",
      "Basic progress analytics",
      "Workout history tracking",
      "Mobile-friendly access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    description: "Advanced features for serious athletes",
    price: "$29",
    period: "/month",
    features: [
      "Everything in Starter",
      "Advanced AI analytics",
      "Recovery optimization",
      "Heart rate zone training",
      "Fatigue & readiness scores",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Team",
    description: "Complete solution for trainers and organizations",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Pro",
      "Trainer dashboard",
      "Up to 50 athletes",
      "Group analytics",
      "Risk monitoring center",
      "Custom reports",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Plans for Every{" "}
            <span className="gradient-text">Training Goal</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start with a free trial and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "gradient-border glass-card glow-primary"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/signup">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

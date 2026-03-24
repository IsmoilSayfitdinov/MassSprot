import { 
  Brain, 
  Activity, 
  Shield, 
  TrendingUp, 
  Calendar, 
  Users 
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Personalization",
    description: "Advanced algorithms analyze your profile, fitness level, and goals to create truly personalized training plans.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Activity,
    title: "Fatigue Tracking",
    description: "Real-time monitoring of your recovery status, sleep quality, and fatigue levels to optimize training intensity.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Shield,
    title: "Risk Prevention",
    description: "Intelligent overload detection and injury prevention alerts keep you training safely and consistently.",
    gradient: "from-chart-3 to-chart-3/50",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Comprehensive dashboards visualize your progress with detailed metrics and performance trends.",
    gradient: "from-chart-4 to-chart-4/50",
  },
  {
    icon: Calendar,
    title: "Adaptive Planning",
    description: "Your training plan automatically adjusts based on feedback, recovery, and real-world performance data.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Trainer Support",
    description: "Powerful tools for coaches to monitor athletes, manage groups, and make data-driven decisions.",
    gradient: "from-accent to-chart-3",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Everything You Need to{" "}
            <span className="gradient-text">Train Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our AI-powered platform combines cutting-edge sports science with intelligent 
            analytics to deliver a complete training ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-8 card-hover"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

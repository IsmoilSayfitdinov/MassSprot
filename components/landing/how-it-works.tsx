import { ClipboardList, Brain, Dumbbell, BarChart3 } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Share Your Data",
    description: "Input your fitness profile, goals, health metrics, and training history to personalize your experience.",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your data to understand your fitness level, recovery patterns, and optimal training zones.",
  },
  {
    step: "03",
    icon: Dumbbell,
    title: "Train Smart",
    description: "Follow personalized workout recommendations with real-time intensity guidance and recovery suggestions.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Track & Adapt",
    description: "Monitor your progress through detailed analytics while the system continuously adapts to your performance.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Your Journey to{" "}
            <span className="gradient-text">Peak Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From data collection to continuous improvement, our intelligent system 
            guides every step of your training journey.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <step.icon className="w-7 h-7 text-background" />
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <div className="text-sm font-mono text-primary mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Comprehensive athlete overview dashboard",
  "Real-time risk signals and alerts",
  "Attendance and activity monitoring",
  "Group progress analytics and comparison",
  "AI-powered load recommendations",
  "Detailed performance reports",
]

export function ForTrainers() {
  return (
    <section id="trainers" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">For Trainers</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Coach with{" "}
              <span className="gradient-text">Confidence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Empower your coaching with data-driven insights. Monitor your athletes, 
              identify risks early, and make informed decisions that lead to 
              better outcomes.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/athlete-cardio.jpg"
                alt="Trainer monitoring athletes with MassSport AI"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-background/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-5 max-w-[200px]">
              <div className="text-3xl font-bold gradient-text mb-1">40%</div>
              <div className="text-sm text-muted-foreground">Less time on admin tasks</div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

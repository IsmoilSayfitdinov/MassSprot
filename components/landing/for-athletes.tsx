import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Personalized training plans tailored to your goals",
  "Real-time workout intensity recommendations",
  "Progress tracking with visual analytics",
  "Injury prevention through smart load management",
  "Recovery optimization suggestions",
  "Motivation boosters and streak tracking",
]

export function ForAthletes() {
  return (
    <section id="athletes" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/athlete-training.jpg"
                alt="Athlete training with MassSport AI"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-5 max-w-[200px]">
              <div className="text-3xl font-bold gradient-text mb-1">+127%</div>
              <div className="text-sm text-muted-foreground">Average performance improvement</div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">For Athletes</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Reach Your{" "}
              <span className="gradient-text">Full Potential</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you're a fitness enthusiast or a competitive athlete, 
              MassSport AI provides the intelligent guidance you need to 
              train effectively and achieve your goals faster.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

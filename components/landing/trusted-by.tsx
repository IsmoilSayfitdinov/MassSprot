export function TrustedBy() {
  const logos = [
    "SportTech Pro",
    "FitAnalytics",
    "AthleteCore",
    "HealthSync",
    "TrainLab",
    "PerformanceAI",
  ]

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading sports organizations and fitness platforms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

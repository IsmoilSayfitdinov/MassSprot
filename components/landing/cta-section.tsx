import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your{" "}
            <span className="gradient-text">Training?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Join thousands of athletes and trainers who are already training smarter 
            with AI-powered analytics. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary h-14 text-base px-8">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

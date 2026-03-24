import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { TrustedBy } from "@/components/landing/trusted-by"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { AIAnalyticsSection } from "@/components/landing/ai-analytics-section"
import { ForAthletes } from "@/components/landing/for-athletes"
import { ForTrainers } from "@/components/landing/for-trainers"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <HowItWorks />
      <AIAnalyticsSection />
      <ForAthletes />
      <ForTrainers />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

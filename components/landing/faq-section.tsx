"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does MassSport AI personalize my training?",
    answer: "MassSport AI analyzes your fitness profile, goals, training history, recovery patterns, and real-time performance data. Our algorithms use this information to create truly personalized training recommendations that adapt as you progress.",
  },
  {
    question: "Is MassSport AI suitable for beginners?",
    answer: "Absolutely! Our platform adapts to all fitness levels. Whether you're just starting your fitness journey or are a seasoned athlete, the AI adjusts recommendations to match your current abilities and goals.",
  },
  {
    question: "How does the risk prevention system work?",
    answer: "The system monitors multiple factors including heart rate patterns, fatigue levels, recovery status, and training load. When it detects potential overtraining or injury risk, you'll receive immediate alerts with recommendations to adjust your training intensity.",
  },
  {
    question: "Can trainers manage multiple athletes?",
    answer: "Yes! Our Team plan includes a comprehensive trainer dashboard where coaches can monitor up to 50 athletes, view group analytics, track attendance, and receive risk alerts for their entire team.",
  },
  {
    question: "What data do I need to input?",
    answer: "Basic information includes your age, fitness goals, and training history. For more personalized recommendations, you can add health metrics, connect wearables for heart rate data, and provide feedback after each workout.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our priority. All data is encrypted, stored securely, and never shared with third parties. You have full control over your information and can export or delete it at any time.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

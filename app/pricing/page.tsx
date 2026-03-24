"use client"

import { useState } from "react"
import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  X,
  Zap,
  Crown,
  Users,
  ArrowRight,
  HelpCircle,
  ChevronDown,
} from "lucide-react"

const tiers = [
  {
    name: "Boshlang'ich",
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Yangi boshlaydigan sportchilar uchun ideal",
    features: [
      "5 ta mashg'ulot/oy",
      "Asosiy tavsiyalar",
      "1 trener",
      "Mobile ilova",
    ],
    cta: "Bepul boshlang",
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: "Jiddiy sportchilar uchun keng imkoniyatlar",
    features: [
      "Cheksiz mashg'ulotlar",
      "AI tavsiyalar",
      "3 trener",
      "Analytics",
      "Xavf signallari",
    ],
    cta: "Pro rejasini tanlang",
    popular: true,
  },
  {
    name: "Jamoa",
    icon: Users,
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "Katta jamoalar va tashkilotlar uchun",
    features: [
      "Hamma narsa Pro da +",
      "20 ta sportchi",
      "Admin panel",
      "Priority support",
      "Custom branding",
    ],
    cta: "Jamoa rejasini tanlang",
    popular: false,
  },
]

const comparisonFeatures = [
  { name: "Mashg'ulotlar soni", starter: "5/oy", pro: "Cheksiz", team: "Cheksiz" },
  { name: "AI tavsiyalar", starter: false, pro: true, team: true },
  { name: "Trenerlar soni", starter: "1", pro: "3", team: "Cheksiz" },
  { name: "Mobile ilova", starter: true, pro: true, team: true },
  { name: "Analytics", starter: false, pro: true, team: true },
  { name: "Xavf signallari", starter: false, pro: true, team: true },
  { name: "Admin panel", starter: false, pro: false, team: true },
  { name: "Priority support", starter: false, pro: false, team: true },
  { name: "Custom branding", starter: false, pro: false, team: true },
  { name: "Sportchilar soni", starter: "1", pro: "1", team: "20+" },
]

const faqs = [
  {
    question: "Bepul rejada kredit karta kerakmi?",
    answer:
      "Yo'q. Boshlang'ich rejada ro'yxatdan o'tish uchun hech qanday to'lov ma'lumoti talab qilinmaydi. Siz istalgan vaqt bepul foydalanishingiz mumkin.",
  },
  {
    question: "Yillik rejaga o'tish qanday ishlaydi?",
    answer:
      "Yillik rejani tanlaganingizda, to'lov bir yilga oldindan amalga oshiriladi va siz 20% chegirma olasiz. Istalgan vaqt oylik rejaga qaytishingiz mumkin.",
  },
  {
    question: "Reja o'rtasida o'zgartirish mumkinmi?",
    answer:
      "Ha, istalgan vaqt rejangizni yangilash yoki pasaytirish mumkin. Farq avtomatik hisoblab qo'shiladi yoki qaytariladi.",
  },
  {
    question: "Pul qaytarish kafolati bormi?",
    answer:
      "Ha, biz 30 kunlik pul qaytarish kafolatini taklif qilamiz. Agar siz xizmatimizdan mamnun bo'lmasangiz, to'liq to'lovni qaytaramiz.",
  },
  {
    question: "Jamoa rejasida nechta foydalanuvchi qo'shish mumkin?",
    answer:
      "Jamoa rejasida standart 20 ta sportchi va cheksiz trener qo'shish imkoniyati mavjud. Kattaroq jamoalar uchun bizning savdo bo'limiga murojaat qiling.",
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">Narxlar</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Sizga mos{" "}
              <span className="gradient-text">narx rejasini tanlang</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Har bir sportchi va jamoa uchun qulay narxlar. Bepul boshlang va
              o'sishingizga qarab yangilang.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span
                className={`text-sm font-medium transition-colors ${
                  !annual ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Oylik
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  annual ? "bg-primary" : "bg-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-6 h-6 rounded-full bg-white transition-transform ${
                    annual ? "translate-x-7" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium transition-colors ${
                  annual ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Yillik
              </span>
              {annual && (
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  20% chegirma
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => {
              const price = annual ? tier.yearlyPrice : tier.monthlyPrice
              const Icon = tier.icon
              return (
                <Card
                  key={tier.name}
                  className={`relative rounded-2xl bg-card/50 border-border/50 ${
                    tier.popular
                      ? "border-primary/50 shadow-lg shadow-primary/10 scale-[1.02]"
                      : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Eng mashhur
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                          tier.popular
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {tier.description}
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        {price === 0 ? (
                          <span className="text-5xl font-bold text-foreground">
                            Bepul
                          </span>
                        ) : (
                          <>
                            <span className="text-5xl font-bold text-foreground">
                              ${price}
                            </span>
                            <span className="text-muted-foreground">/oy</span>
                          </>
                        )}
                      </div>
                      {annual && price > 0 && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Yillik ${price * 12} to'lanadi
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/signup">
                      <Button
                        className={`w-full ${
                          tier.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80 text-foreground"
                        }`}
                      >
                        {tier.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Taqqoslash
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">
                Xususiyatlar{" "}
                <span className="gradient-text">taqqoslash jadvali</span>
              </h2>
            </div>
            <Card className="bg-card/50 border-border/50 overflow-hidden rounded-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        Xususiyat
                      </th>
                      <th className="p-4 text-center text-sm font-medium text-muted-foreground">
                        Boshlang'ich
                      </th>
                      <th className="p-4 text-center text-sm font-medium text-primary">
                        Pro
                      </th>
                      <th className="p-4 text-center text-sm font-medium text-muted-foreground">
                        Jamoa
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, i) => (
                      <tr key={feature.name} className={i % 2 === 0 ? "bg-muted/5" : ""}>
                        <td className="p-4 text-sm text-foreground">{feature.name}</td>
                        {(["starter", "pro", "team"] as const).map((plan) => (
                          <td key={plan} className="p-4 text-center">
                            {typeof feature[plan] === "boolean" ? (
                              feature[plan] ? (
                                <Check className="w-5 h-5 text-primary mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-foreground font-medium">
                                {feature[plan] as string}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto mb-24">
            <div className="text-center mb-12">
              <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <Badge variant="secondary" className="mb-4">
                Savollar
              </Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Narxlar bo'yicha{" "}
                <span className="gradient-text">tez-tez so'raladigan savollar</span>
              </h2>
              <p className="text-muted-foreground">
                Savollaringiz bormi? Javoblarimiz tayyor.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-border/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
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
              Bugun{" "}
              <span className="gradient-text">bepul boshlang</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Kredit karta shart emas. Bir daqiqada ro'yxatdan o'ting va
              MassSport AI ning kuchini his qiling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base"
                >
                  Bepul boshlang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary h-14 text-base px-8"
                >
                  Biz bilan bog'laning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

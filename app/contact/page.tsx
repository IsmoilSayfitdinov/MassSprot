"use client"

import { useState } from "react"
import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageSquare,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  CalendarDays,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@masssportai.com",
    description: "24 soat ichida javob beramiz",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+998 71 200 00 00",
    description: "Dush-Juma, 9:00–18:00",
  },
  {
    icon: MapPin,
    label: "Manzil",
    value: "Amir Temur ko'chasi, 107",
    description: "Toshkent, O'zbekiston",
  },
  {
    icon: Clock,
    label: "Ish vaqti",
    value: "Dush – Juma: 9:00 – 18:00",
    description: "Shanba: 10:00 – 14:00",
  },
]

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Aloqa formasi yuborildi:", formData)
    setSubmitted(true)
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">Aloqa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Biz bilan{" "}
              <span className="gradient-text">bog'laning</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Savolingiz, fikr-mulohazangiz yoki demo so'rashni xohlaysizmi?
              Sizdan eshitishni xohlaymiz.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto mb-20">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card/50 border-border/50 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Xabar yuborildi!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Murojaat uchun rahmat. 24 soat ichida javob beramiz.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: "", email: "", subject: "", message: "" })
                      }}
                      variant="outline"
                    >
                      Yana xabar yuborish
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Ism
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Ismingizni kiriting"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="h-12 bg-background/50 border-border/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="h-12 bg-background/50 border-border/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Mavzu
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Qanday yordam kerak?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="h-12 bg-background/50 border-border/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Xabar
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Murojaat tafsilotlarini kiriting..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="min-h-[160px] bg-background/50 border-border/50"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                      >
                        Yuborish
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                      <Button type="button" variant="outline" className="w-full sm:w-auto">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Demo so'rash
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <Card
                    key={info.label}
                    className="bg-card/50 border-border/50 rounded-xl p-6 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="font-medium text-foreground">{info.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {info.description}
                      </p>
                    </div>
                  </Card>
                )
              })}

              {/* Social Links */}
              <Card className="bg-card/50 border-border/50 rounded-xl p-6">
                <p className="text-sm font-medium text-foreground mb-4">
                  Bizni kuzating
                </p>
                <div className="flex items-center gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>

          {/* Demo Request Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <Card className="bg-card/50 border-border/50 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <Badge variant="secondary" className="mb-4">
                    Demo
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Bepul demo{" "}
                    <span className="gradient-text">so'rang</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    MassSport AI ning barcha imkoniyatlarini jonli namoyish orqali
                    ko'ring. Mutaxassislarimiz sizning savollaringizga javob berishga
                    tayyor.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "30 daqiqalik shaxsiy namoyish",
                      "Savollaringizga to'liq javob",
                      "Sizning ehtiyojlaringizga moslashtirilgan tavsiyalar",
                      "Sinov davri uchun maxsus taklif",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CalendarDays className="w-3 h-3 text-primary" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                      Demo rejalashtirish
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:flex bg-gradient-to-br from-primary/10 via-background to-accent/10 items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <CalendarDays className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-foreground font-semibold mb-2">
                      Hozir band qiling
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Istalgan qulay vaqtda demo o'tkazamiz
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <Card className="bg-card/50 border-border/50 rounded-2xl p-10">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Boshlashga tayyormisiz?
              </h2>
              <p className="text-muted-foreground mb-6">
                MassSport AI bilan allaqachon trening qilayotgan minglab
                sportchilarga qo'shiling.
              </p>
              <Link href="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Bepul boshlang
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

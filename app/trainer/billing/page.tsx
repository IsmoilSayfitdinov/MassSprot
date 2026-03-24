"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  CheckCircle2,
  Zap,
  Users,
  Star,
  Download,
  ArrowUpRight,
  Calendar,
  Shield,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const plans = [
  {
    id: "free",
    name: "Boshlang'ich",
    price: "Bepul",
    period: "",
    description: "Yakka mashg'ulot uchun",
    current: false,
    color: "border-border/50",
    badgeClass: "bg-muted text-muted-foreground",
    icon: Star,
    iconClass: "text-muted-foreground",
    features: [
      "1 ta sportchi profili",
      "Asosiy mashg'ulot rejalari",
      "Davomat kuzatuvi",
      "Haftalik hisobot",
      "Email qo'llab-quvvatlash",
    ],
    disabled: [
      "AI tahlil",
      "Kengaytirilgan hisobotlar",
      "Guruh boshqaruvi",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    period: "/oy",
    description: "Professional trenerlar uchun",
    current: true,
    color: "border-primary",
    badgeClass: "bg-primary/10 text-primary",
    icon: Zap,
    iconClass: "text-primary",
    features: [
      "Cheksiz sportchilar",
      "AI tahlil va tavsiyalar",
      "Kengaytirilgan hisobotlar",
      "Guruh boshqaruvi",
      "Xavf signallari tizimi",
      "Ustuvor qo'llab-quvvatlash",
      "Ma'lumotlar eksporti",
    ],
    disabled: [],
  },
  {
    id: "team",
    name: "Jamoa",
    price: "$99",
    period: "/oy",
    description: "Sport markazlari uchun",
    current: false,
    color: "border-border/50",
    badgeClass: "bg-purple-500/10 text-purple-500",
    icon: Users,
    iconClass: "text-purple-500",
    features: [
      "Cheksiz sportchilar",
      "Bir nechta trenerlar",
      "AI tahlil va tavsiyalar",
      "Kengaytirilgan hisobotlar",
      "Admin boshqaruv paneli",
      "Xavf signallari tizimi",
      "API integratsiyasi",
      "Maxsus qo'llab-quvvatlash",
    ],
    disabled: [],
  },
]

const paymentHistory = [
  {
    id: 1,
    date: "01.03.2025",
    description: "Pro tarif - Mart 2025",
    amount: "$29.00",
    status: "To'langan",
    invoice: "INV-2025-03",
  },
  {
    id: 2,
    date: "01.02.2025",
    description: "Pro tarif - Fevral 2025",
    amount: "$29.00",
    status: "To'langan",
    invoice: "INV-2025-02",
  },
  {
    id: 3,
    date: "01.01.2025",
    description: "Pro tarif - Yanvar 2025",
    amount: "$29.00",
    status: "To'langan",
    invoice: "INV-2025-01",
  },
  {
    id: 4,
    date: "01.04.2025",
    description: "Pro tarif - Aprel 2025",
    amount: "$29.00",
    status: "Kutilmoqda",
    invoice: "INV-2025-04",
  },
  {
    id: 5,
    date: "01.12.2024",
    description: "Pro tarif - Dekabr 2024",
    amount: "$29.00",
    status: "To'langan",
    invoice: "INV-2024-12",
  },
]

const statusColors: Record<string, string> = {
  "To'langan": "bg-emerald-500/10 text-emerald-500",
  Kutilmoqda: "bg-yellow-500/10 text-yellow-500",
}

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <>
      <DashboardHeader title="Obuna va to'lov" subtitle="Tarif rejasi va to'lov tarixi" />

      <div className="px-[32px] py-6 space-y-6">
        {/* Current Plan Banner */}
        <Card className="bg-primary/5 border-primary/30">
          <CardContent className="p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-lg">Pro tarif faol</h3>
                    <Badge className="bg-primary/10 text-primary">Joriy reja</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Keyingi to&apos;lov sanasi: <strong className="text-foreground">01.04.2025</strong> — $29.00
                  </p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Rejani boshqarish
                </Button>
                <Button size="sm">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Yangilash
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-card/50 border border-border/50">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Oylik
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yillik
              <span className="ml-1.5 text-xs bg-emerald-500/20 text-emerald-500 px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const PlanIcon = plan.icon
            return (
              <Card
                key={plan.id}
                className={`bg-card/50 relative flex flex-col ${plan.color} ${plan.current ? "shadow-lg shadow-primary/10" : ""}`}
              >
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-0.5">Joriy reja</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${plan.badgeClass}`}>
                      <PlanIcon className={`h-5 w-5 ${plan.iconClass}`} />
                    </div>
                    <Badge className={plan.badgeClass}>{plan.name}</Badge>
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-3xl font-bold">
                      {billingCycle === "yearly" && plan.price !== "Bepul"
                        ? `$${Math.floor(parseInt(plan.price.replace("$", "")) * 0.8)}`
                        : plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-0.5">{billingCycle === "yearly" ? "/oy" : plan.period}</span>
                    )}
                  </div>
                  {billingCycle === "yearly" && plan.price !== "Bepul" && (
                    <p className="text-xs text-emerald-500">Yillik to&apos;lovda 20% tejaysiz</p>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.disabled.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground/50 line-through">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4"
                    variant={plan.current ? "outline" : "default"}
                    disabled={plan.current}
                  >
                    {plan.current ? "Joriy reja" : plan.price === "Bepul" ? "Bepul boshlash" : "Obuna bo'lish"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Payment History */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                To&apos;lov tarixi
              </CardTitle>
              <CardDescription>Barcha to&apos;lov va hisob-fakturalar</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Eksport
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                      Sana
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Tavsif
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Hisob-faktura
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Miqdor
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Holat
                    </th>
                    <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                      Amal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {paymentHistory.map((payment) => (
                    <tr key={payment.id} className="hover:bg-background/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{payment.date}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm font-medium">{payment.description}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-muted-foreground font-mono">{payment.invoice}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm font-semibold">{payment.amount}</span>
                      </td>
                      <td className="px-4 py-4">
                        <Badge className={statusColors[payment.status]}>{payment.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Download className="h-3.5 w-3.5 mr-1.5" />
                          PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              To&apos;lov usuli
            </CardTitle>
            <CardDescription>Saqlangan to&apos;lov ma&apos;lumotlari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-card border border-border">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm">Visa •••• •••• •••• 4242</p>
                  <p className="text-xs text-muted-foreground">Amal qilish muddati: 12/27</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-emerald-500/10 text-emerald-500">Asosiy</Badge>
                <Button variant="outline" size="sm">
                  Yangilash
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

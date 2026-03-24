"use client"

import { useState } from "react"
import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Search,
  HelpCircle,
  Dumbbell,
  Brain,
  CreditCard,
  Shield,
  ArrowRight,
  MessageCircle,
} from "lucide-react"

const categories = [
  {
    id: "umumiy",
    label: "Umumiy",
    icon: HelpCircle,
    items: [
      {
        question: "MassSport AI nima?",
        answer:
          "MassSport AI — sun'iy intellekt asosida ishlaydi va sportchilar hamda trenerlar uchun mo'ljallangan sport analitikasi va trening platformasidir. U ilg'or mashinali o'rganish algoritmlarini sport fani metodologiyasi bilan birlashtiradi.",
      },
      {
        question: "MassSport AI kimlar uchun mo'ljallangan?",
        answer:
          "Platforma yangi boshlovchilardan tortib professional sportchilargacha, shuningdek trenerlar va sport tashkilotlari uchun mo'ljallangan. Marafonga tayyorlanayotgan bo'lsangiz yoki jamoa boshqarayotgan bo'lsangiz ham, platforma ehtiyojlaringizga moslanadi.",
      },
      {
        question: "Qanday boshlash mumkin?",
        answer:
          "Boshlash juda oson! Ro'yxatdan o'ting, maqsadlaringizni va hozirgi darajangizni ko'rsatib profilingizni to'ldiring. AI darhol sizga shaxsiy tavsiyalar bera boshlaydi. Kredit karta talab qilinmaydi.",
      },
      {
        question: "MassSport AI mobil qurilmalarda ishlaydi?",
        answer:
          "Ha! MassSport AI barcha qurilmalarda to'liq ishlaydi. Shuningdek iOS va Android uchun maxsus ilovalarimiz mavjud bo'lib, ular real vaqtda kuzatuv, bildirishnomalar va oflayn rejimni qo'llab-quvvatlaydi.",
      },
      {
        question: "Qaysi sport turlarini qo'llab-quvvatlaysiz?",
        answer:
          "Yugurish, velosiped, suzish, og'irlikni ko'tarish, basketbol, futbol, tennis va boshqa ko'plab sport turlarini qo'llab-quvvatlaymiz. AI modellari har bir sport turi uchun maxsus ma'lumotlar asosida tayyorlangan.",
      },
    ],
  },
  {
    id: "narxlar",
    label: "Narxlar",
    icon: CreditCard,
    items: [
      {
        question: "Obunani istalgan vaqt bekor qilish mumkinmi?",
        answer:
          "Ha, hisobingiz sozlamalaridan istalgan vaqt obunani bekor qilishingiz mumkin. Kirishingiz joriy hisoblash davri oxirigacha davom etadi. 30 kunlik pul qaytarish kafolatimiz ham mavjud.",
      },
      {
        question: "Yillik rejaga o'tganda tejam qancha bo'ladi?",
        answer:
          "Yillik rejani tanlashda 20% tejaysiz. Masalan, Pro rejasi oylik $29 o'rniga yillik to'lovda $23/oyga tushadi.",
      },
      {
        question: "Reja o'rtasida o'zgartirish mumkinmi?",
        answer:
          "Ha, istalgan vaqt rejangizni yangilash yoki pasaytirish mumkin. Yangilashlar darhol kuchga kiradi va to'lov proportsional hisoblanadi. Pasaytirishlar keyingi hisoblash davridan boshlab kuchga kiradi.",
      },
      {
        question: "Qanday to'lov usullari qabul qilinadi?",
        answer:
          "Barcha asosiy kredit kartalar (Visa, Mastercard, American Express), PayPal va yillik Jamoa rejalari uchun bank o'tkazmalari qabul qilinadi. Barcha to'lovlar Stripe orqali xavfsiz amalga oshiriladi.",
      },
      {
        question: "Bepul sinov muddati bormi?",
        answer:
          "Ha! Barcha rejalarda 14 kunlik bepul sinov muddati mavjud. Kredit karta talab qilinmaydi. Barcha xususiyatlarni sinab ko'ring va qaysi reja sizga mos kelishini aniqlang.",
      },
    ],
  },
  {
    id: "texnik",
    label: "Texnik",
    icon: Brain,
    items: [
      {
        question: "AI tavsiyalar qanday ishlaydi?",
        answer:
          "AI sizning trening tarixingizni, natijalar ma'lumotlarini, tiklanish naqshlarini va belgilangan maqsadlaringizni tahlil qiladi. U millionlab trening sessiyalari asosida o'rgatilgan mashinali o'rganish modellaridan foydalanadi.",
      },
      {
        question: "Boshqa fitness qurilmalari bilan integratsiya bormi?",
        answer:
          "Ha! Garmin, Apple Watch, Fitbit, Whoop, Polar, Strava va boshqa ko'plab platformalar bilan integratsiya mavjud. Bu bizga yanada aniqroq tavsiyalar berish imkonini yaratadi.",
      },
      {
        question: "Trening rejasini o'zlashtirish mumkinmi?",
        answer:
          "Albatta! AI optimallashtirilgan rejalar tuzsa ham, siz mashqlarni o'zgartirish, intensivlikni sozlash yoki sessiyalarni qayta rejalashtirish imkoniyatiga egasiz. AI keyingi tavsiyalarni o'zgarishlaringizga moslashtiradi.",
      },
      {
        question: "Tiklanishni kuzatish qanday amalga oshiriladi?",
        answer:
          "Biz yurak ritmi variabelligi (HRV), uyqu sifati, sub'ektiv sog'liq holati ko'rsatkichlari va trening yuki tarixi orqali tiklanishni kuzatamiz. AI bu ma'lumotlarni birlashtiradi va kunlik tayyor ekanlik ballini hisoblab chiqadi.",
      },
      {
        question: "Xavf signallari nima va ular qanday ishlaydi?",
        answer:
          "Xavf signallari sistemi ortiqcha treningdan kelib chiqadigan jarohatlarni oldindan aniqlaydi. AI trening yuki, tiklanish holati va boshqa ko'rsatkichlarni tahlil qilib, potensial xavf to'g'risida sizni ogohlantiradi.",
      },
    ],
  },
  {
    id: "xavfsizlik",
    label: "Xavfsizlik",
    icon: Shield,
    items: [
      {
        question: "Ma'lumotlarim qanchalik xavfsiz?",
        answer:
          "Barcha ma'lumotlar AES-256 shifrlash yordamida dam olish va uzatish paytida shifrlanadi. Biz GDPR talablariga javob beramiz va shaxsiy ma'lumotlaringizni hech qachon uchinchi tomonlarga sotmaymiz.",
      },
      {
        question: "Sog'liq ma'lumotlarim kimlar ko'ra oladi?",
        answer:
          "Sizning sog'liq va trening ma'lumotlaringizga faqat siz va siz ruxsat bergan trenerlar kirish huquqiga ega. Biz hech qachon sizning ma'lumotlaringizni tashqi tomonlarga ochmaymiz.",
      },
      {
        question: "Ma'lumotlarni o'chirish mumkinmi?",
        answer:
          "Ha, hisobingiz sozlamalaridan barcha shaxsiy ma'lumotlarni o'chirish yoki eksport qilishingizni so'rashingiz mumkin. So'rovlaringiz 30 kun ichida amalga oshiriladi.",
      },
      {
        question: "Qaysi ma'lumotlar to'planadi?",
        answer:
          "Biz trening samaradorligi ma'lumotlari, ulangan qurilmalardan biometrik ma'lumotlar, sub'ektiv fikr-mulohazalar va maqsad bilan bog'liq ko'rsatkichlarni to'playmiz. Barcha ma'lumotlar faqat trening tajribangizni yaxshilash uchun ishlatiladi.",
      },
      {
        question: "GDPR talablariga mos kelasizmi?",
        answer:
          "Ha, biz to'liq GDPR muvofiqligini ta'minlaymiz. Siz istalgan vaqt ma'lumotlaringizga kirishni, ularni to'g'rilashni, o'chirishni yoki ko'chirishni talab qilishingiz mumkin.",
      },
    ],
  },
  {
    id: "trenerlar",
    label: "Trenerlar uchun",
    icon: Dumbbell,
    items: [
      {
        question: "Trener sifatida qanday foydalana olaman?",
        answer:
          "Pro yoki Jamoa rejalari orqali trener sifatida ro'yxatdan o'tishingiz mumkin. Sportchilaringizni qo'shib, ularning natijalari va ривожланишини kuzatib boring. Maxsus trener paneli orqali barcha ma'lumotlarga osongina kiring.",
      },
      {
        question: "Nechta sportchini boshqarish mumkin?",
        answer:
          "Pro rejasida 3 tagacha sportchi, Jamoa rejasida 20 tagacha sportchi bilan ishlash mumkin. Undan ham ko'p sportchi uchun bizning savdo bo'limiga murojaat qiling.",
      },
      {
        question: "Sportchilar uchun individual rejalar tuzish mumkinmi?",
        answer:
          "Ha, har bir sportchi uchun maqsadlar, intensivlik darajalari va rivojlanish ko'rsatkichlarini maxsus sozlashingiz mumkin. AI sizning ko'rsatmalaringizni hisobga olgan holda shaxsiy tavsiyalar tayyorlaydi.",
      },
      {
        question: "Guruh analitikasi nima?",
        answer:
          "Jamoa rejasida barcha sportchilaringizning rivojlanishini bir joyda ko'ring. Guruh darajasidagi trendlarni tahlil qiling, eng faol va o'sish ko'rsatayotgan sportchilarni aniqlang.",
      },
      {
        question: "Trener paneli qanday imkoniyatlarni beradi?",
        answer:
          "Trener paneli orqali sportchilarni qo'shish va boshqarish, trening rejalari tuzish, natijalarga umumiy nazar solish, xavf signallarini kuzatish va batafsil hisobotlar olish mumkin.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          (activeCategory === "all" || activeCategory === cat.id) &&
          (searchQuery === "" ||
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.items.length > 0)

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Ko'p so'raladigan{" "}
              <span className="gradient-text">savollar</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              MassSport AI haqida bilishingiz kerak bo'lgan hamma narsa shu yerda.
              Javob topa olmadingizmi? Qo'llab-quvvatlash jamoamizga murojaat qiling.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Savol qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              Barchasi
            </button>
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto mb-24">
            {filteredCategories.length === 0 ? (
              <Card className="bg-card/50 border-border/50 rounded-2xl p-12 text-center">
                <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Natija topilmadi
                </h3>
                <p className="text-muted-foreground">
                  Qidiruvingizni o'zgartiring yoki barcha kategoriyalarni ko'rib chiqing.
                </p>
              </Card>
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <div key={cat.id}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <h2 className="text-lg font-semibold text-foreground">
                          {cat.label}
                        </h2>
                      </div>
                      <Card className="bg-card/50 border-border/50 rounded-xl">
                        <Accordion type="single" collapsible className="px-2">
                          {cat.items.map((item, idx) => (
                            <AccordionItem
                              key={idx}
                              value={`${cat.id}-${idx}`}
                              className="border-border/50"
                            >
                              <AccordionTrigger className="px-4 text-foreground hover:no-underline">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="px-4 text-muted-foreground leading-relaxed">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </Card>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <Card className="bg-card/50 border-border/50 rounded-2xl p-10 max-w-3xl mx-auto text-center">
            <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Hali ham savolingiz bormi?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Qo'llab-quvvatlash jamoamiz yordam berishga tayyor. Bizga murojaat
              qiling, 24 soat ichida javob beramiz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Biz bilan bog'laning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="px-8">
                  Narxlarni ko'rish
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}

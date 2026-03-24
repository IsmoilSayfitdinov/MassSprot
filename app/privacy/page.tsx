"use client"

import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Database,
  Eye,
  Cookie,
  UserCheck,
  Mail,
} from "lucide-react"

const sections = [
  {
    id: "malumot-yigish",
    icon: Database,
    title: "1. Ma'lumot yig'ish",
    content: `Biz siz bevosita taqdim etadigan ma'lumotlarni to'playmiz, jumladan:

**Shaxsiy ma'lumotlar:** Hisob yaratishda ko'rsatadigan ism, elektron pochta manzili, tug'ilgan sana, jins va profil ma'lumotlari.

**Sog'liq va jismoniy faollik ma'lumotlari:** Trening ma'lumotlari, mashg'ulot tarixi, samaradorlik ko'rsatkichlari, yurak urish tezligi, uyqu ma'lumotlari va ulangan qurilmalar orqali to'planadigan boshqa biometrik ma'lumotlar.

**Qurilma ma'lumotlari:** Xizmatimizdan foydalanish uchun ishlatiladigan qurilmalar haqidagi ma'lumotlar, jumladan qurilma modeli, operatsion tizim, noyob identifikatorlar va mobil tarmoq ma'lumotlari.

**Foydalanish ma'lumotlari:** Xizmatdan qanday foydalanishingiz to'g'risidagi ma'lumotlar, shu jumladan tashrif buyurilgan sahifalar, ishlatilgan xususiyatlar, sarflangan vaqt va o'zaro ta'sir naqshlari.

**Aloqa ma'lumotlari:** Qo'llab-quvvatlash jamoamizga murojaat qilishda taqdim etilgan ma'lumotlar, elektron pochta yozishmalari va fikr-mulohazalar.

**To'lov ma'lumotlari:** Uchinchi tomon to'lov protsessori (Stripe) orqali xavfsiz tarzda qayta ishlanadigan hisob-kitob tafsilotlari. Biz sizning to'liq kredit karta raqamingizni serverlarimizda saqlamaymiz.`,
  },
  {
    id: "malumotdan-foydalanish",
    icon: Eye,
    title: "2. Ma'lumotdan foydalanish",
    content: `Biz to'plagan ma'lumotlardan quyidagi maqsadlarda foydalanamiz:

**Xizmat ko'rsatish:** Xizmatni ta'minlash, saqlash va yaxshilash, jumladan shaxsiy trening tavsiyalari, analitika va samaradorlik tahlillarini yaratish.

**Sun'iy intellekt va mashinali o'rganish:** Shaxsiy tavsiyalarni boshqaradigan AI modellarimizni o'qitish va takomillashtirish. Ma'lumotlaringiz algoritmlarimizni yaxshilash uchun jamlangan va anonimlashtiring shaklda ishlatilishi mumkin.

**Muloqot:** Xizmatga oid xabarnomalar, yangilanishlar, xavfsizlik ogohlantirishlari va qo'llab-quvvatlash xabarlarini yuborish. Roziligingiz bilan reklama kommunikatsiyalarini ham yuborishimiz mumkin.

**Analitika:** Foydalanish tendentsiyalarini tahlil qilish, xizmatimiz samaradorligini kuzatish va foydalanuvchilar bazasi haqida demografik ma'lumotlar to'plash.

**Xavfsizlik:** Firibgarlik va boshqa noqonuniy faoliyatlarni aniqlash, tekshirish va oldini olish, MassSport AI va foydalanuvchilarimiz huquqlari hamda mulkini himoya qilish.

**Qonuniy muvofiqlik:** Amaldagi qonunlar, qoidalar, yuridik jarayonlar yoki hukumat so'rovlariga rioya qilish.`,
  },
  {
    id: "malumot-xavfsizligi",
    icon: Shield,
    title: "3. Ma'lumot xavfsizligi",
    content: `Shaxsiy ma'lumotlaringizni himoya qilish uchun sanoat standartidagi xavfsizlik choralarini qo'llaymiz:

**Shifrlash:** Barcha ma'lumotlar dam olish paytida AES-256 shifrlash va uzatish paytida TLS 1.3 yordamida shifrlanadi.

**Kirish nazorati:** Qat'iy kirish nazorati va autentifikatsiya mexanizmlaridan foydalanamiz. Foydalanuvchi ma'lumotlariga xodimlarning kirishi faqat o'z vazifalarini bajarish uchun zarur bo'lganlarga cheklangan.

**Infratuzilma:** Xizmatlarimiz SOC 2 Tur II sertifikatiga ega bulutli infratuzilmada joylashgan bo'lib, muntazam xavfsizlik tekshiruvlari va penetratsion testlar o'tkaziladi.

**Ma'lumotlar zahiralari:** Ma'lumotlar yo'qolishining oldini olish uchun muntazam shifrlangan zahiralar saqlanadi va geografik jihatdan taqsimlangan joylarda joylashtiriladi.

**Hodisalarga munosabat:** Biz keng qamrovli hodisalarga munosabat rejasini saqlaymiz va amaldagi qoidalarga muvofiq ma'lumotlar buzilishi haqida ta'sirlangan foydalanuvchilarga 72 soat ichida xabar beramiz.

Internet orqali uzatish yoki elektron saqlashning hech bir usuli 100% xavfsiz emasligini ta'kidlaymiz. Mutlaq xavfsizlikni kafolatlay olmaymiz.`,
  },
  {
    id: "cookie",
    icon: Cookie,
    title: "4. Cookie fayllar",
    content: `Biz cookie fayllar va shunga o'xshash kuzatuv texnologiyalaridan foydalanamiz:

**Zaruriy cookie fayllar:** Bu fayllar sayt to'g'ri ishlashi uchun kerak. Ular foydalanuvchi sessiyalarini boshqaradi va xavfsizlik xususiyatlarini ta'minlaydi.

**Funksional cookie fayllar:** Bu fayllar xizmatimizdan foydalanishingizni saqlab qoladi, masalan til tanlovingiz va boshqa sozlamalaringiz.

**Analitika cookie fayllar:** Foydalanish naqshlarini tushunish uchun Google Analytics va shunga o'xshash vositalar orqali ma'lumot to'playmiz. Bu ma'lumotlar anonimlashtirilib qayta ishlanadi.

**Marketing cookie fayllar:** Faqat roziligingiz bilan siz uchun muvofiq reklamalarni ko'rsatish maqsadida ishlatiladi.

Brauzeringiz sozlamalari orqali cookie fayllarni boshqarishingiz yoki o'chirib qo'yishingiz mumkin. Biroq, ba'zi cookie fayllarni o'chirish xizmatimizning ayrim xususiyatlariga ta'sir qilishi mumkin.`,
  },
  {
    id: "huquqlar",
    icon: UserCheck,
    title: "5. Huquqlar",
    content: `Yashash joyingizga qarab, shaxsiy ma'lumotlaringizga nisbatan quyidagi huquqlarga ega bo'lishingiz mumkin:

**Kirish huquqi:** Istalgan vaqt hisob sozlamalaringiz yoki bizga murojaat qilish orqali biz saqlagan shaxsiy ma'lumotlaringizning nusxasini so'rashingiz mumkin.

**To'g'rilash huquqi:** Hisob sozlamalaringiz orqali shaxsiy ma'lumotlaringizni yangilash yoki to'g'rilashingiz mumkin.

**O'chirish huquqi:** Hisobingiz va tegishli ma'lumotlarni o'chirishni so'rashingiz mumkin. So'rovingizni 30 kun ichida bajaramiz, qonuniy saqlash talablarini hisobga olgan holda.

**Ma'lumotlar ko'chirish huquqi:** Istalgan vaqt hisob sozlamalaringiz orqali trening ma'lumotlaringizni standart formatlarda (CSV, JSON) eksport qilishingiz mumkin.

**Qayta ishlashni cheklash huquqi:** Ma'lum sharoitlarda shaxsiy ma'lumotlaringizni qayta ishlashni cheklashimizni so'rashingiz mumkin.

**E'tiroz bildirish huquqi:** To'g'ridan-to'g'ri marketing maqsadlarida shaxsiy ma'lumotlaringizni qayta ishlashga e'tiroz bildirishingiz mumkin.

**Rozilikni qaytarib olish huquqi:** Qayta ishlash roziliknigizga asoslangan hollarda, roziligingizni istalgan vaqt qaytarib olishingiz mumkin.

Bu huquqlardan birortasini amalga oshirish uchun privacy@masssportai.com manziliga murojaat qiling.`,
  },
  {
    id: "aloqa",
    icon: Mail,
    title: "6. Aloqa",
    content: `Ushbu Maxfiylik siyosati yoki ma'lumotlar amaliyotimiz haqida savollar yoki muammolaringiz bo'lsa, bizga murojaat qiling:

**Email:** privacy@masssportai.com
**Manzil:** MassSport AI, Amir Temur ko'chasi, 107, Toshkent, O'zbekiston
**Telefon:** +998 71 200 00 00

**Ma'lumotlarni himoya qilish bo'yicha mas'ul:** GDPR bilan bog'liq so'rovlar uchun Ma'lumotlarni himoya qilish bo'yicha mas'ulimizga dpo@masssportai.com manziliga murojaat qilishingiz mumkin.

Agar javobimizdan qoniqmagan bo'lsangiz, mahalliy ma'lumotlarni himoya qilish organiga shikoyat qilish huquqingiz bor.

Ushbu Maxfiylik siyosatini istalgan vaqt o'zgartirish huquqini o'zimizda saqlaymiz. Har qanday o'zgarishlar bu sahifada e'lon qilinadi va yangilangan sana ko'rsatiladi.`,
  },
]

export default function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">Huquqiy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Maxfiylik{" "}
              <span className="gradient-text">siyosati</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Maxfiyligingiz bizga muhim. Ushbu siyosat MassSport AI
              ma'lumotlaringizni qanday to'plashi, ishlatishi va himoya qilishini
              tushuntiradi.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              So'nggi yangilanish: 24 mart, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Table of Contents */}
          <Card className="bg-card/50 border-border/50 rounded-2xl p-8 max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Mundarija
            </h2>
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg text-foreground hover:bg-muted/10 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{section.title}</span>
                  </a>
                )
              })}
            </nav>
          </Card>

          {/* Sections */}
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Card
                  key={section.id}
                  id={section.id}
                  className="bg-card/50 border-border/50 rounded-2xl p-8 scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                      >
                        {paragraph.split("**").map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="text-foreground font-medium">
                              {part}
                            </strong>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Footer Links */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Bog'liq sahifalar
            </Badge>
            <p className="text-sm text-muted-foreground">
              Shuningdek ko'ring:{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Foydalanish shartlari
              </Link>{" "}
              |{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Biz bilan bog'laning
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

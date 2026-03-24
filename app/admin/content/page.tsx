"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Search, Eye } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

type TabId = "mashqlar" | "blog" | "elonlar"

const tabs: { id: TabId; label: string }[] = [
  { id: "mashqlar", label: "Mashqlar" },
  { id: "blog", label: "Blog" },
  { id: "elonlar", label: "E'lonlar" },
]

const exercises = [
  { id: 1, name: "Squat", category: "Oyoq", difficulty: "O'rta", views: 1240, status: "Faol" },
  { id: 2, name: "Bench Press", category: "Ko'krak", difficulty: "O'rta", views: 980, status: "Faol" },
  { id: 3, name: "Deadlift", category: "Orqa", difficulty: "Qiyin", views: 1560, status: "Faol" },
  { id: 4, name: "Pull-up", category: "Yelka", difficulty: "Qiyin", views: 870, status: "Faol" },
  { id: 5, name: "Push-up", category: "Ko'krak", difficulty: "Oson", views: 2100, status: "Faol" },
  { id: 6, name: "Lunge", category: "Oyoq", difficulty: "Oson", views: 650, status: "Nofaol" },
  { id: 7, name: "Plank", category: "Qorin", difficulty: "O'rta", views: 1890, status: "Faol" },
  { id: 8, name: "Burpee", category: "Kardio", difficulty: "Qiyin", views: 720, status: "Faol" },
]

const blogArticles = [
  { id: 1, title: "Samarali sport mashg'ulotlari uchun oziqlanish", author: "Dr. Alisher Nazarov", date: "2026-03-20", views: 3450, status: "Nashr etilgan" },
  { id: 2, title: "Uyqu va tiklanishning sport ko'rsatkichlariga ta'siri", author: "Mohira Xolmatova", date: "2026-03-18", views: 2100, status: "Nashr etilgan" },
  { id: 3, title: "Chidamlilikni oshirish: 5 ta asosiy mashq", author: "Bobur Toshmatov", date: "2026-03-15", views: 4200, status: "Nashr etilgan" },
  { id: 4, title: "Sport jarohatlarini oldini olish usullari", author: "Dr. Kamola Rashidova", date: "2026-03-12", views: 1800, status: "Qoralama" },
  { id: 5, title: "Yoshlar uchun sport tanlash bo'yicha qo'llanma", author: "Sanjar Ergashev", date: "2026-03-10", views: 2750, status: "Nashr etilgan" },
]

const announcements = [
  { id: 1, title: "Yangi mashq dasturi boshlandi!", type: "Yangilik", target: "Barcha", date: "2026-03-24", status: "Faol" },
  { id: 2, title: "Texnik xizmat ko'rsatish: 25-mart kechqurun", type: "Ogohlantirish", target: "Barcha", date: "2026-03-22", status: "Faol" },
  { id: 3, title: "Trenerlar uchun seminar rejalashtirildi", type: "Tadbir", target: "Trenerlar", date: "2026-03-20", status: "Arxivlangan" },
  { id: 4, title: "Premium obuna narxlari yangilandi", type: "Muhim", target: "Sportchilar", date: "2026-03-18", status: "Faol" },
  { id: 5, title: "Ilovani yangilash: 3.2 versiya chiqarildi", type: "Yangilik", target: "Barcha", date: "2026-03-15", status: "Arxivlangan" },
]

const difficultyColors: Record<string, string> = {
  "Oson": "bg-green-500/20 text-green-400",
  "O'rta": "bg-yellow-500/20 text-yellow-400",
  "Qiyin": "bg-red-500/20 text-red-400",
}

const announcementTypeColors: Record<string, string> = {
  "Yangilik": "bg-blue-500/20 text-blue-400",
  "Ogohlantirish": "bg-yellow-500/20 text-yellow-400",
  "Tadbir": "bg-purple-500/20 text-purple-400",
  "Muhim": "bg-red-500/20 text-red-400",
}

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<TabId>("mashqlar")
  const [search, setSearch] = useState("")

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Kontent boshqaruvi"
        subtitle="Platforma kontentini boshqarish va tahrirlash"
      />

      <div className="px-[32px] py-6 space-y-6">
        {/* Tabs */}
        <div className="flex gap-1 bg-card/50 border border-border/50 rounded-xl p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mashqlar Tab */}
        {activeTab === "mashqlar" && (
          <div className="bg-card/50 border border-border/50 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
              <div>
                <h2 className="text-base font-semibold text-foreground">Mashqlar kutubxonasi</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{exercises.length} ta mashq</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Qidirish..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9 pr-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-48"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  <Plus className="w-4 h-4" />
                  Qo'shish
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-secondary/20">
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Nomi</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Kategoriya</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Qiyinlik</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Ko'rishlar</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Holat</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Amallar</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises
                    .filter((e) => !search || e.name.toLowerCase().includes(search.toLowerCase()))
                    .map((ex, i) => (
                      <tr key={ex.id} className={`border-b border-border/30 last:border-0 hover:bg-secondary/10 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/5"}`}>
                        <td className="px-4 py-3 font-medium text-foreground">{ex.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{ex.category}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[ex.difficulty]}`}>
                            {ex.difficulty}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{ex.views.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${ex.status === "Faol" ? "bg-green-500/20 text-green-400" : "bg-border text-muted-foreground"}`}>
                            {ex.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-1.5 rounded hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Blog Tab */}
        {activeTab === "blog" && (
          <div className="bg-card/50 border border-border/50 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
              <div>
                <h2 className="text-base font-semibold text-foreground">Blog maqolalari</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{blogArticles.length} ta maqola</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4" />
                Maqola qo'shish
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-secondary/20">
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Sarlavha</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Muallif</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Sana</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Ko'rishlar</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Holat</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Amallar</th>
                  </tr>
                </thead>
                <tbody>
                  {blogArticles.map((article, i) => (
                    <tr key={article.id} className={`border-b border-border/30 last:border-0 hover:bg-secondary/10 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/5"}`}>
                      <td className="px-4 py-3 font-medium text-foreground max-w-xs truncate">{article.title}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{article.author}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{article.date}</td>
                      <td className="px-4 py-3 text-muted-foreground">{article.views.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${article.status === "Nashr etilgan" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* E'lonlar Tab */}
        {activeTab === "elonlar" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-foreground">Tizim e'lonlari</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{announcements.length} ta e'lon</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4" />
                E'lon qo'shish
              </button>
            </div>
            <div className="space-y-3">
              {announcements.map((ann) => (
                <div key={ann.id} className="bg-card/50 border border-border/50 rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className={`mt-0.5 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap ${announcementTypeColors[ann.type]}`}>
                      {ann.type}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{ann.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {ann.target} • {ann.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${ann.status === "Faol" ? "bg-green-500/20 text-green-400" : "bg-border text-muted-foreground"}`}>
                      {ann.status}
                    </span>
                    <button className="p-1.5 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

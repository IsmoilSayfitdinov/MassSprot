"use client"

import { useState } from "react"
import { Send, Bell, Users, User, CheckCircle, Clock, FileText } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const sentNotifications = [
  { id: 1, title: "Yangi mashq dasturi qo'shildi", message: "5 ta yangi mashq kutubxonaga qo'shildi", target: "Hamma", type: "Yangilik", time: "2 soat oldin", status: "Yuborildi", count: 1247 },
  { id: 2, title: "Texnik xizmat haqida", message: "Tizim 25-mart kechqurun 1 soatga to'xtatiladi", target: "Hamma", type: "Ogohlantirish", time: "1 kun oldin", status: "Yuborildi", count: 1247 },
  { id: 3, title: "Trenerlar seminari", message: "27-mart kuni seminar bo'lib o'tadi", target: "Trenerlar", type: "Tadbir", time: "2 kun oldin", status: "Yuborildi", count: 45 },
  { id: 4, title: "Premium obuna eslatmasi", message: "Obunangiz 3 kunda tugaydi", target: "Sportchilar", type: "Eslatma", time: "3 kun oldin", status: "Yuborildi", count: 320 },
  { id: 5, title: "Ilovani yangilash", message: "Yangi 3.2 versiya mavjud", target: "Hamma", type: "Yangilik", time: "5 kun oldin", status: "Yuborildi", count: 1247 },
  { id: 6, title: "Xush kelibsiz!", message: "MassSport AI ga xush kelibsiz", target: "Aliyev Jamshid", type: "Shaxsiy", time: "1 hafta oldin", status: "Yuborildi", count: 1 },
]

const templates = [
  { id: 1, name: "Xush kelibsiz xabari", description: "Yangi foydalanuvchilarga yuboriladi" },
  { id: 2, name: "Obuna eslatmasi", description: "Obuna tugashidan 3 kun oldin" },
  { id: 3, name: "Mashg'ulot eslatmasi", description: "Har kuni ertalab 7:00 da" },
  { id: 4, name: "Texnik xizmat bildirishnomasi", description: "Tizim to'xtatilishidan 24 soat oldin" },
  { id: 5, name: "Haftalik hisobot", description: "Har dushanba kuni trenerlar uchun" },
]

const notificationTypeColors: Record<string, string> = {
  "Yangilik": "bg-blue-500/20 text-blue-400",
  "Ogohlantirish": "bg-yellow-500/20 text-yellow-400",
  "Tadbir": "bg-purple-500/20 text-purple-400",
  "Eslatma": "bg-cyan-500/20 text-cyan-400",
  "Shaxsiy": "bg-green-500/20 text-green-400",
}

export default function NotificationsPage() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [target, setTarget] = useState("Hamma")
  const [notifType, setNotifType] = useState("Yangilik")
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!title || !message) return
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setTitle("")
      setMessage("")
    }, 2000)
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Bildirishnomalar boshqaruvi"
        subtitle="Foydalanuvchilarga bildirishnomalar yuborish va boshqarish"
      />

      <div className="px-[32px] py-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Jami yuborilgan", value: "2,847", icon: Bell, color: "text-primary" },
            { label: "Bugun yuborilgan", value: "12", icon: Send, color: "text-green-400" },
            { label: "O'qilganlik darajasi", value: "78%", icon: CheckCircle, color: "text-cyan-400" },
            { label: "Rejalashtirilgan", value: "5", icon: Clock, color: "text-yellow-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/50 border border-border/50 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Send Form */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-4">
              <h2 className="text-base font-semibold text-foreground">Bildirishnoma yuborish</h2>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Sarlavha</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Bildirishnoma sarlavhasi..."
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Xabar matni</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Bildirishnoma matni..."
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Kimga yuborish</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "Hamma", icon: Users },
                    { value: "Trenerlar", icon: User },
                    { value: "Sportchilar", icon: User },
                    { value: "Shaxsiy", icon: User },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setTarget(opt.value)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                        target === opt.value
                          ? "bg-primary/20 border-primary text-primary"
                          : "border-border text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      <opt.icon className="w-3.5 h-3.5" />
                      {opt.value}
                    </button>
                  ))}
                </div>
              </div>

              {target === "Shaxsiy" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Foydalanuvchi</label>
                  <input
                    type="text"
                    placeholder="Foydalanuvchi nomi yoki email..."
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tur</label>
                <select
                  value={notifType}
                  onChange={(e) => setNotifType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="Yangilik">Yangilik</option>
                  <option value="Ogohlantirish">Ogohlantirish</option>
                  <option value="Tadbir">Tadbir</option>
                  <option value="Eslatma">Eslatma</option>
                  <option value="Shaxsiy">Shaxsiy</option>
                </select>
              </div>

              <button
                onClick={handleSend}
                disabled={!title || !message}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <><CheckCircle className="w-4 h-4" /> Yuborildi!</>
                ) : (
                  <><Send className="w-4 h-4" /> Yuborish</>
                )}
              </button>
            </div>

            {/* Templates */}
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <h2 className="text-base font-semibold text-foreground">Shablonlar</h2>
              </div>
              <div className="space-y-2">
                {templates.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    className="w-full text-left p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{tmpl.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{tmpl.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sent History */}
          <div className="lg:col-span-2 bg-card/50 border border-border/50 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
              <h2 className="text-base font-semibold text-foreground">Yuborilgan bildirishnomalar</h2>
              <span className="text-xs text-muted-foreground">{sentNotifications.length} ta</span>
            </div>
            <div className="divide-y divide-border/30">
              {sentNotifications.map((notif) => (
                <div key={notif.id} className="px-6 py-4 hover:bg-secondary/10 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-foreground truncate">{notif.title}</p>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium flex-shrink-0 ${notificationTypeColors[notif.type]}`}>
                            {notif.type}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{notif.message}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {notif.target} ({notif.count})
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {notif.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

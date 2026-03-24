"use client"

import { useState } from "react"
import { Save, CheckCircle, Globe, Mail, Shield, Plug, Database } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

type TabId = "umumiy" | "email" | "xavfsizlik" | "integratsiyalar" | "backup"

const tabs: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "umumiy", label: "Umumiy", icon: Globe },
  { id: "email", label: "Email", icon: Mail },
  { id: "xavfsizlik", label: "Xavfsizlik", icon: Shield },
  { id: "integratsiyalar", label: "Integratsiyalar", icon: Plug },
  { id: "backup", label: "Backup", icon: Database },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("umumiy")
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Tizim sozlamalari"
        subtitle="Platforma konfiguratsiyasi va sozlamalar"
      />

      <div className="px-[32px] py-6 space-y-6">
        {/* Tabs */}
        <div className="flex gap-1 bg-card/50 border border-border/50 rounded-xl p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Umumiy Tab */}
        {activeTab === "umumiy" && (
          <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-semibold text-foreground">Umumiy sozlamalar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Platform nomi</label>
                <input
                  type="text"
                  defaultValue="MassSport AI"
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Sayt manzili (URL)</label>
                <input
                  type="text"
                  defaultValue="https://masssport.ai"
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Asosiy til</label>
                <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="uz">O'zbek tili</option>
                  <option value="ru">Rus tili</option>
                  <option value="en">Ingliz tili</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Vaqt zonasi</label>
                <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="Asia/Tashkent">Asia/Tashkent (UTC+5)</option>
                  <option value="Europe/Moscow">Europe/Moscow (UTC+3)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Logo URL</label>
                <input
                  type="text"
                  defaultValue="/logo.png"
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Valyuta</label>
                <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="USD">USD ($)</option>
                  <option value="UZS">UZS (so'm)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Platform tavsifi</label>
              <textarea
                rows={3}
                defaultValue="MassSport AI - sport va jismoniy tarbiya boshqaruv platformasi"
                className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {saved ? <><CheckCircle className="w-4 h-4" /> Saqlandi</> : <><Save className="w-4 h-4" /> Saqlash</>}
              </button>
            </div>
          </div>
        )}

        {/* Email Tab */}
        {activeTab === "email" && (
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-6">
              <h2 className="text-base font-semibold text-foreground">SMTP sozlamalari</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">SMTP Host</label>
                  <input type="text" defaultValue="smtp.gmail.com" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">SMTP Port</label>
                  <input type="text" defaultValue="587" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">SMTP Foydalanuvchi nomi</label>
                  <input type="text" defaultValue="noreply@masssport.ai" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">SMTP Parol</label>
                  <input type="password" defaultValue="••••••••" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Jo'natuvchi nomi</label>
                  <input type="text" defaultValue="MassSport AI" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Shifrlash</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="tls">TLS</option>
                    <option value="ssl">SSL</option>
                    <option value="none">Yo'q</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-4">
              <h2 className="text-base font-semibold text-foreground">Email shablonlar</h2>
              <div className="space-y-3">
                {[
                  "Xush kelibsiz xati",
                  "Parolni tiklash",
                  "Obuna tasdiqlash",
                  "Bildirishnoma xati",
                ].map((template) => (
                  <div key={template} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                    <span className="text-sm text-foreground">{template}</span>
                    <button className="text-xs text-primary hover:underline">Tahrirlash</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                {saved ? <><CheckCircle className="w-4 h-4" /> Saqlandi</> : <><Save className="w-4 h-4" /> Saqlash</>}
              </button>
            </div>
          </div>
        )}

        {/* Xavfsizlik Tab */}
        {activeTab === "xavfsizlik" && (
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-6">
              <h2 className="text-base font-semibold text-foreground">Parol siyosati</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Minimal uzunlik</label>
                  <input type="number" defaultValue="8" min="6" max="32" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Parol muddati (kun)</label>
                  <input type="number" defaultValue="90" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { id: "uppercase", label: "Katta harf talab qilish" },
                  { id: "lowercase", label: "Kichik harf talab qilish" },
                  { id: "numbers", label: "Raqam talab qilish" },
                  { id: "special", label: "Maxsus belgi talab qilish" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-border accent-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-6">
              <h2 className="text-base font-semibold text-foreground">Kirish xavfsizligi</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-foreground">2FA majburiy</p>
                    <p className="text-xs text-muted-foreground">Barcha foydalanuvchilar uchun ikki faktorli autentifikatsiya</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-border peer-checked:bg-primary rounded-full transition-colors cursor-pointer" />
                    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                  </div>
                </label>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Session muddati (daqiqa)</label>
                  <input type="number" defaultValue="60" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Muvaffaqiyatsiz urinishlar chegarasi</label>
                  <input type="number" defaultValue="5" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                {saved ? <><CheckCircle className="w-4 h-4" /> Saqlandi</> : <><Save className="w-4 h-4" /> Saqlash</>}
              </button>
            </div>
          </div>
        )}

        {/* Integratsiyalar Tab */}
        {activeTab === "integratsiyalar" && (
          <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-semibold text-foreground">Tashqi integratsiyalar</h2>
            <div className="space-y-4">
              {[
                { name: "Stripe to'lov tizimi", key: "sk_live_••••••••••••••••", status: true },
                { name: "Twilio SMS xizmati", key: "AC••••••••••••••••", status: true },
                { name: "Firebase Push bildirishnomalar", key: "AIza••••••••••••••••", status: false },
                { name: "Google Analytics", key: "G-••••••••••", status: true },
                { name: "Telegram Bot API", key: "••••••:••••••••••••••••", status: false },
              ].map((integration) => (
                <div key={integration.name} className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{integration.name}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{integration.key}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${integration.status ? "bg-green-500/20 text-green-400" : "bg-border text-muted-foreground"}`}>
                      {integration.status ? "Faol" : "Nofaol"}
                    </span>
                    <button className="text-xs text-primary hover:underline">Tahrirlash</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                {saved ? <><CheckCircle className="w-4 h-4" /> Saqlandi</> : <><Save className="w-4 h-4" /> Saqlash</>}
              </button>
            </div>
          </div>
        )}

        {/* Backup Tab */}
        {activeTab === "backup" && (
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-6">
              <h2 className="text-base font-semibold text-foreground">Avtomatik backup</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Backup chastotasi</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="daily">Har kuni</option>
                    <option value="weekly">Har hafta</option>
                    <option value="monthly">Har oy</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Saqlash muddati (kun)</label>
                  <input type="number" defaultValue="30" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Backup manzili</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="s3">Amazon S3</option>
                    <option value="gcs">Google Cloud Storage</option>
                    <option value="local">Mahalliy server</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-4">
              <h2 className="text-base font-semibold text-foreground">So'nggi backuplar</h2>
              <div className="space-y-2">
                {[
                  { date: "2026-03-24 02:00", size: "2.4 GB", status: "Muvaffaqiyatli" },
                  { date: "2026-03-23 02:00", size: "2.3 GB", status: "Muvaffaqiyatli" },
                  { date: "2026-03-22 02:00", size: "2.3 GB", status: "Muvaffaqiyatli" },
                  { date: "2026-03-21 02:00", size: "2.2 GB", status: "Xato" },
                ].map((backup, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                    <div>
                      <p className="text-sm text-foreground">{backup.date}</p>
                      <p className="text-xs text-muted-foreground">{backup.size}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-medium ${backup.status === "Muvaffaqiyatli" ? "text-green-400" : "text-destructive"}`}>
                        {backup.status}
                      </span>
                      <button className="text-xs text-primary hover:underline">Yuklab olish</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/10 transition-colors">
                <Database className="w-4 h-4" />
                Hozir backup qilish
              </button>
            </div>
            <div className="flex justify-end">
              <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                {saved ? <><CheckCircle className="w-4 h-4" /> Saqlandi</> : <><Save className="w-4 h-4" /> Saqlash</>}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

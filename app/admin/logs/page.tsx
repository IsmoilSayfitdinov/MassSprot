"use client"

import { useState } from "react"
import { Download, Filter, Search, CheckCircle, XCircle } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const mockLogs = [
  { id: 1, time: "2026-03-24 14:32:05", user: "Azizbek Karimov", ip: "192.168.1.10", action: "Tizimga kirish", resource: "Auth", status: "success" },
  { id: 2, time: "2026-03-24 14:28:41", user: "Dilnoza Yusupova", ip: "10.0.0.25", action: "Profil yangilash", resource: "Foydalanuvchi", status: "success" },
  { id: 3, time: "2026-03-24 14:15:22", user: "Bobur Toshmatov", ip: "172.16.0.5", action: "To'lov amalga oshirish", resource: "Billing", status: "success" },
  { id: 4, time: "2026-03-24 13:58:17", user: "Noma'lum", ip: "45.33.32.156", action: "Noto'g'ri parol", resource: "Auth", status: "error" },
  { id: 5, time: "2026-03-24 13:45:09", user: "Sarvinoz Ergasheva", ip: "192.168.1.22", action: "Hisobot yuklab olish", resource: "Hisobot", status: "success" },
  { id: 6, time: "2026-03-24 13:30:55", user: "Super Admin", ip: "127.0.0.1", action: "Tizim sozlamalari o'zgartirish", resource: "Sozlamalar", status: "success" },
  { id: 7, time: "2026-03-24 13:12:43", user: "Jasur Rahimov", ip: "10.0.0.18", action: "Foydalanuvchi o'chirish", resource: "Foydalanuvchi", status: "success" },
  { id: 8, time: "2026-03-24 12:58:31", user: "Noma'lum", ip: "185.220.101.3", action: "API brute-force", resource: "API", status: "error" },
  { id: 9, time: "2026-03-24 12:45:19", user: "Muhammadali Xoliqov", ip: "192.168.1.30", action: "Mashq qo'shish", resource: "Kontent", status: "success" },
  { id: 10, time: "2026-03-24 12:30:07", user: "Feruza Qodirova", ip: "10.0.0.42", action: "Ro'yxatdan o'tish", resource: "Auth", status: "success" },
  { id: 11, time: "2026-03-24 12:15:55", user: "Otabek Mirzayev", ip: "172.16.0.11", action: "Obuna yangilash", resource: "Billing", status: "error" },
  { id: 12, time: "2026-03-24 12:00:43", user: "Super Admin", ip: "127.0.0.1", action: "Backup yaratish", resource: "Tizim", status: "success" },
  { id: 13, time: "2026-03-24 11:48:31", user: "Zulfiya Hasanova", ip: "192.168.1.55", action: "Tizimdan chiqish", resource: "Auth", status: "success" },
  { id: 14, time: "2026-03-24 11:35:19", user: "Kamol Normatov", ip: "10.0.0.67", action: "Rol o'zgartirish", resource: "Rollar", status: "success" },
  { id: 15, time: "2026-03-24 11:20:07", user: "Noma'lum", ip: "91.108.4.56", action: "SQL injection urinishi", resource: "API", status: "error" },
]

const actionTypes = [
  "Barchasi",
  "Tizimga kirish",
  "Tizimdan chiqish",
  "Profil yangilash",
  "To'lov amalga oshirish",
  "Foydalanuvchi o'chirish",
  "Tizim sozlamalari o'zgartirish",
  "API brute-force",
]

export default function LogsPage() {
  const [search, setSearch] = useState("")
  const [actionFilter, setActionFilter] = useState("Barchasi")
  const [statusFilter, setStatusFilter] = useState("barchasi")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")

  const filtered = mockLogs.filter((log) => {
    const matchesSearch =
      !search ||
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.ip.includes(search) ||
      log.action.toLowerCase().includes(search.toLowerCase())
    const matchesAction = actionFilter === "Barchasi" || log.action === actionFilter
    const matchesStatus = statusFilter === "barchasi" || log.status === statusFilter
    return matchesSearch && matchesAction && matchesStatus
  })

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Audit va loglar"
        subtitle="Tizimda amalga oshirilgan barcha amallar jurnali"
      />

      <div className="px-[32px] py-6 space-y-6">
        {/* Filters */}
        <div className="bg-card/50 border border-border/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filtrlar</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Foydalanuvchi yoki IP..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {actionTypes.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="barchasi">Barcha holatlar</option>
              <option value="success">Muvaffaqiyatli</option>
              <option value="error">Xato</option>
            </select>
            <div className="flex gap-2">
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card/50 border border-border/50 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
            <div>
              <h2 className="text-base font-semibold text-foreground">Audit jurnali</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{filtered.length} ta yozuv topildi</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors">
              <Download className="w-4 h-4" />
              Export (CSV)
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-secondary/20">
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Vaqt</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Foydalanuvchi</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">IP manzil</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Harakat</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Resurs</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Holat</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((log, i) => (
                  <tr
                    key={log.id}
                    className={`border-b border-border/30 last:border-0 hover:bg-secondary/10 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/5"}`}
                  >
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs whitespace-nowrap">{log.time}</td>
                    <td className="px-4 py-3 text-foreground whitespace-nowrap">{log.user}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs whitespace-nowrap">{log.ip}</td>
                    <td className="px-4 py-3 text-foreground">{log.action}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded bg-secondary text-foreground text-xs">{log.resource}</span>
                    </td>
                    <td className="px-4 py-3">
                      {log.status === "success" ? (
                        <span className="flex items-center gap-1.5 text-green-400 text-xs font-medium">
                          <CheckCircle className="w-3.5 h-3.5" />
                          Muvaffaqiyatli
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-destructive text-xs font-medium">
                          <XCircle className="w-3.5 h-3.5" />
                          Xato
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

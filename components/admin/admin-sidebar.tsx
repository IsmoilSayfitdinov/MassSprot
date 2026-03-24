"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Shield,
  CreditCard,
  FileText,
  Bell,
  Settings,
  Activity,
  LogOut,
} from "lucide-react"

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Bosh sahifa" },
  { href: "/admin/users", icon: Users, label: "Foydalanuvchilar" },
  { href: "/admin/trainers", icon: UserCheck, label: "Trenerlar" },
  { href: "/admin/roles", icon: Shield, label: "Rollar va huquqlar" },
  { href: "/admin/billing", icon: CreditCard, label: "Obuna va to'lov" },
  { href: "/admin/content", icon: FileText, label: "Kontent boshqaruvi" },
  { href: "/admin/notifications", icon: Bell, label: "Bildirishnomalar" },
  { href: "/admin/settings", icon: Settings, label: "Tizim sozlamalari" },
  { href: "/admin/logs", icon: Activity, label: "Audit va loglar" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 h-16 border-b border-sidebar-border">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="text-lg font-bold text-sidebar-foreground">MassSport</span>
            <span className="text-xs text-primary ml-1">Admin</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="mb-6">
            <p className="px-3 mb-2 text-xs font-medium text-sidebar-foreground/50 uppercase tracking-wider">
              Boshqaruv paneli
            </p>
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        {/* User Section */}
        <div className="p-3 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sidebar-accent">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-medium text-primary">SA</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Super Admin
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                Tizim boshqaruvchisi
              </p>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-sidebar-border transition-colors">
              <LogOut className="w-4 h-4 text-sidebar-foreground/60" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

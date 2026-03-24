"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  User,
  Target,
  Calendar,
  History,
  Heart,
  BarChart3,
  Brain,
  Bell,
  Settings,
  Activity,
  LogOut,
} from "lucide-react"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Bosh sahifa" },
  { href: "/dashboard/profile", icon: User, label: "Profilim" },
  { href: "/dashboard/goals", icon: Target, label: "Maqsadlarim" },
  { href: "/dashboard/plan", icon: Calendar, label: "Trening rejasi" },
  { href: "/dashboard/history", icon: History, label: "Mashg'ulot tarixi" },
  { href: "/dashboard/recovery", icon: Heart, label: "Tiklanish va Charchoq" },
  { href: "/dashboard/progress", icon: BarChart3, label: "Progress tahlili" },
  { href: "/dashboard/ai", icon: Brain, label: "AI Tavsiyalar" },
  { href: "/dashboard/notifications", icon: Bell, label: "Bildirishnomalar" },
  { href: "/dashboard/settings", icon: Settings, label: "Sozlamalar" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 h-16 border-b border-sidebar-border">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">
            Mass<span className="text-primary">Sport</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
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
        </nav>

        {/* User Section */}
        <div className="p-3 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sidebar-accent">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Alex Johnson
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                Pro Sportchi
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

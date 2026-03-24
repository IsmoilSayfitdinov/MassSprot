"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  title: string
  subtitle?: string
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur-lg border-b border-border flex items-center px-6">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile menu button */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
          <Menu className="w-5 h-5 text-foreground" />
        </button>

        <div>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border w-64">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Qidirish..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none flex-1"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive" />
        </Button>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-sm font-medium text-primary">AJ</span>
        </div>
      </div>
    </header>
  )
}

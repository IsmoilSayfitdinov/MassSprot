"use client"

import { useState } from "react"
import { Shield, Save, CheckCircle } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const permissions = [
  { id: "dashboard_view", label: "Dashboard ko'rish" },
  { id: "profile_edit", label: "Profil tahrirlash" },
  { id: "athletes_manage", label: "Sportchilar boshqaruvi" },
  { id: "trainers_manage", label: "Trenerlar boshqaruvi" },
  { id: "reports_view", label: "Hisobotlarni ko'rish" },
  { id: "reports_create", label: "Hisobot yaratish" },
  { id: "content_manage", label: "Kontent boshqaruvi" },
  { id: "users_manage", label: "Foydalanuvchilar boshqaruvi" },
  { id: "billing_view", label: "To'lovlarni ko'rish" },
  { id: "billing_manage", label: "To'lovlarni boshqarish" },
  { id: "notifications_send", label: "Bildirishnoma yuborish" },
  { id: "system_settings", label: "Tizim sozlamalari" },
  { id: "logs_view", label: "Loglarni ko'rish" },
  { id: "roles_manage", label: "Rollar boshqaruvi" },
]

const initialRoles = [
  {
    id: "sportchi",
    name: "Sportchi",
    description: "Asosiy foydalanuvchi",
    color: "bg-blue-500/20 text-blue-400",
    permissions: ["dashboard_view", "profile_edit", "reports_view"],
  },
  {
    id: "trener",
    name: "Trener",
    description: "Sport mashg'ulotlari mutaxassisi",
    color: "bg-green-500/20 text-green-400",
    permissions: [
      "dashboard_view",
      "profile_edit",
      "athletes_manage",
      "reports_view",
      "reports_create",
      "content_manage",
      "notifications_send",
    ],
  },
  {
    id: "admin",
    name: "Admin",
    description: "Tizim boshqaruvchisi",
    color: "bg-primary/20 text-primary",
    permissions: permissions.map((p) => p.id),
  },
]

export default function RolesPage() {
  const [roles, setRoles] = useState(initialRoles)
  const [saved, setSaved] = useState<string | null>(null)

  const togglePermission = (roleId: string, permId: string) => {
    setRoles((prev) =>
      prev.map((role) => {
        if (role.id !== roleId) return role
        const has = role.permissions.includes(permId)
        return {
          ...role,
          permissions: has
            ? role.permissions.filter((p) => p !== permId)
            : [...role.permissions, permId],
        }
      })
    )
  }

  const handleSave = (roleId: string) => {
    setSaved(roleId)
    setTimeout(() => setSaved(null), 2000)
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Rollar va huquqlar"
        subtitle="Foydalanuvchi rollarini va ularning huquqlarini boshqarish"
      />

      <div className="px-[32px] py-6 space-y-6">
        {/* Info Card */}
        <div className="bg-card/50 border border-border/50 rounded-xl p-4 flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Rollar haqida</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Har bir rol uchun ruxsatlarni belgilang. O'zgarishlar darhol kuchga kiradi.
            </p>
          </div>
        </div>

        {/* Roles */}
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.id} className="bg-card/50 border border-border/50 rounded-xl p-6">
              {/* Role Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${role.color}`}>
                    {role.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{role.description}</span>
                </div>
                <button
                  onClick={() => handleSave(role.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  {saved === role.id ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Saqlandi
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Saqlash
                    </>
                  )}
                </button>
              </div>

              {/* Permissions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {permissions.map((perm) => {
                  const isChecked = role.permissions.includes(perm.id)
                  return (
                    <label
                      key={perm.id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => togglePermission(role.id, perm.id)}
                        className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                      />
                      <span className="text-sm text-foreground">{perm.label}</span>
                    </label>
                  )
                })}
              </div>

              {/* Summary */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground">
                  Jami: <span className="text-foreground font-medium">{role.permissions.length}</span> ta ruxsat
                  berilgan / {permissions.length} ta mavjud
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

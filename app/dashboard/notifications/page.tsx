"use client"

import { useState } from "react"
import { 
  AlertTriangle, 
  Bell, 
  BellOff, 
  Check, 
  CheckCheck, 
  Clock,
  Filter,
  MessageSquare,
  Sparkles,
  Trash2,
  TrendingUp,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

interface Notification {
  id: string
  type: "ai" | "workout" | "risk" | "progress" | "message"
  title: string
  description: string
  time: string
  read: boolean
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "risk",
    title: "Yuqori charchoq darajasi aniqlandi",
    description: "Bugungi mashg'ulotni yengillashtirishni tavsiya qilamiz. Tiklash ko'rsatkichlaringiz past.",
    time: "5 daqiqa oldin",
    read: false,
  },
  {
    id: "2",
    type: "ai",
    title: "Yangi AI tavsiya",
    description: "Tezkorligingizni oshirish uchun interval yugurish mashg'ulotini rejangizga qo'shdik.",
    time: "30 daqiqa oldin",
    read: false,
  },
  {
    id: "3",
    type: "workout",
    title: "Mashg'ulot vaqti yaqinlashmoqda",
    description: "Bugungi kuch mashg'ulotingiz 1 soatda boshlanadi.",
    time: "1 soat oldin",
    read: false,
  },
  {
    id: "4",
    type: "progress",
    title: "Yangi rekord o'rnatdingiz!",
    description: "Bench press mashqida 85kg yangi shaxsiy rekordingiz. Tabriklaymiz!",
    time: "2 soat oldin",
    read: true,
  },
  {
    id: "5",
    type: "message",
    title: "Trener xabari",
    description: "Rustam Qodirov: \"Ajoyib natijalar ko'rsatyapsiz, shu zahmatda davom eting!\"",
    time: "3 soat oldin",
    read: true,
  },
  {
    id: "6",
    type: "ai",
    title: "Haftalik tahlil tayyor",
    description: "O'tgan hafta progress tahlili tayyor. Ko'rib chiqing va tavsiyalarni oling.",
    time: "Kecha",
    read: true,
  },
  {
    id: "7",
    type: "workout",
    title: "Mashg'ulot yakunlandi",
    description: "Kechagi kardio mashg'ulotingiz muvaffaqiyatli yakunlandi. 450 kaloriya sarflandi.",
    time: "Kecha",
    read: true,
  },
  {
    id: "8",
    type: "progress",
    title: "Haftalik maqsad bajarildi",
    description: "Bu hafta 5 ta mashg'ulot bajarib, maqsadingizga erishdingiz!",
    time: "2 kun oldin",
    read: true,
  },
]

const typeConfig = {
  ai: { 
    icon: Sparkles, 
    color: "text-purple-400", 
    bg: "bg-purple-500/20",
    label: "AI" 
  },
  workout: { 
    icon: Zap, 
    color: "text-primary", 
    bg: "bg-primary/20",
    label: "Mashg'ulot" 
  },
  risk: { 
    icon: AlertTriangle, 
    color: "text-destructive", 
    bg: "bg-destructive/20",
    label: "Ogohlantirish" 
  },
  progress: { 
    icon: TrendingUp, 
    color: "text-secondary", 
    bg: "bg-secondary/20",
    label: "Progress" 
  },
  message: { 
    icon: MessageSquare, 
    color: "text-blue-400", 
    bg: "bg-blue-500/20",
    label: "Xabar" 
  },
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [filter, setFilter] = useState<string>("all")

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  const filteredNotifications = filter === "all" 
    ? notifications 
    : filter === "unread"
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter)

  return (
    <>
      <DashboardHeader title="Bildirishnomalar" subtitle={unreadCount > 0 ? `${unreadCount} ta o'qilmagan xabar` : "Barcha xabarlar o'qilgan"} />
      <div className="px-[32px] py-6 space-y-6">
        <div className="flex items-center justify-end gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtr
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilter("all")}>
                Barchasi
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("unread")}>
                O'qilmaganlar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("ai")}>
                AI tavsiyalar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("workout")}>
                Mashg'ulotlar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("risk")}>
                Ogohlantirishlar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("progress")}>
                Progress
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead} className="gap-2">
              <CheckCheck className="h-4 w-4" />
              Barchasini o'qish
            </Button>
          )}

          {notifications.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearAll} className="gap-2 text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
              Tozalash
            </Button>
          )}
        </div>

        {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{notifications.length}</p>
                <p className="text-xs text-muted-foreground">Jami xabarlar</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-destructive/20">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">{unreadCount}</p>
                <p className="text-xs text-muted-foreground">O'qilmagan</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {notifications.filter(n => n.type === "ai").length}
                </p>
                <p className="text-xs text-muted-foreground">AI tavsiyalar</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/20">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {notifications.filter(n => n.type === "progress").length}
                </p>
                <p className="text-xs text-muted-foreground">Progress xabarlari</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="all" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            Barchasi
          </TabsTrigger>
          <TabsTrigger value="unread" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            O'qilmagan
            {unreadCount > 0 && (
              <Badge className="ml-2 bg-destructive text-destructive-foreground text-xs">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            AI
          </TabsTrigger>
          <TabsTrigger value="alerts" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            Ogohlantirishlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          <NotificationList 
            notifications={filteredNotifications}
            onMarkAsRead={markAsRead}
            onDelete={deleteNotification}
          />
        </TabsContent>

        <TabsContent value="unread" className="space-y-3">
          <NotificationList 
            notifications={notifications.filter(n => !n.read)}
            onMarkAsRead={markAsRead}
            onDelete={deleteNotification}
          />
        </TabsContent>

        <TabsContent value="ai" className="space-y-3">
          <NotificationList 
            notifications={notifications.filter(n => n.type === "ai")}
            onMarkAsRead={markAsRead}
            onDelete={deleteNotification}
          />
        </TabsContent>

        <TabsContent value="alerts" className="space-y-3">
          <NotificationList 
            notifications={notifications.filter(n => n.type === "risk")}
            onMarkAsRead={markAsRead}
            onDelete={deleteNotification}
          />
        </TabsContent>
      </Tabs>
      </div>
    </>
  )
}

function NotificationList({ 
  notifications, 
  onMarkAsRead, 
  onDelete 
}: { 
  notifications: Notification[]
  onMarkAsRead: (id: string) => void
  onDelete: (id: string) => void
}) {
  if (notifications.length === 0) {
    return (
      <Card className="bg-card/50 border-border/50">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="p-4 rounded-full bg-muted/50 mb-4">
            <BellOff className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">Bildirishnomalar yo'q</h3>
          <p className="text-sm text-muted-foreground">
            Yangi bildirishnomalar bu yerda ko'rinadi
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {notifications.map((notification) => {
        const config = typeConfig[notification.type]
        const Icon = config.icon

        return (
          <Card 
            key={notification.id}
            className={`bg-card/50 border-border/50 transition-all hover:bg-card/80 ${
              !notification.read ? "border-l-2 border-l-primary" : ""
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${config.bg} shrink-0`}>
                  <Icon className={`h-5 w-5 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-medium ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}>
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <span className="h-2 w-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {notification.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                        <Badge variant="outline" className="text-xs">
                          {config.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {!notification.read && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => onMarkAsRead(notification.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => onDelete(notification.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

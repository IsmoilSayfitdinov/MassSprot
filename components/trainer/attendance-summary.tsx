"use client"

import { Calendar, Users, UserCheck, UserX } from "lucide-react"

const weeklyData = [
  { day: "Mon", present: 38, absent: 4 },
  { day: "Tue", present: 35, absent: 7 },
  { day: "Wed", present: 40, absent: 2 },
  { day: "Thu", present: 36, absent: 6 },
  { day: "Fri", present: 32, absent: 10 },
  { day: "Sat", present: 28, absent: 14 },
  { day: "Sun", present: 20, absent: 22 },
]

export function AttendanceSummary() {
  const totalSessions = weeklyData.reduce((acc, day) => acc + day.present + day.absent, 0)
  const totalPresent = weeklyData.reduce((acc, day) => acc + day.present, 0)
  const attendanceRate = Math.round((totalPresent / totalSessions) * 100)

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Weekly Attendance</h3>
          <p className="text-sm text-muted-foreground">This week overview</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-accent">{attendanceRate}%</p>
          <p className="text-xs text-muted-foreground">Attendance Rate</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <Users className="w-5 h-5 text-primary mx-auto mb-1" />
          <p className="text-lg font-semibold text-foreground">42</p>
          <p className="text-xs text-muted-foreground">Total Athletes</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <UserCheck className="w-5 h-5 text-accent mx-auto mb-1" />
          <p className="text-lg font-semibold text-foreground">{totalPresent}</p>
          <p className="text-xs text-muted-foreground">Present</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <UserX className="w-5 h-5 text-destructive mx-auto mb-1" />
          <p className="text-lg font-semibold text-foreground">{totalSessions - totalPresent}</p>
          <p className="text-xs text-muted-foreground">Absent</p>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="space-y-3">
        {weeklyData.map((day) => {
          const total = day.present + day.absent
          const percentage = Math.round((day.present / total) * 100)
          return (
            <div key={day.day} className="flex items-center gap-3">
              <span className="w-10 text-sm text-muted-foreground">{day.day}</span>
              <div className="flex-1 h-4 rounded-full bg-secondary/50 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="w-12 text-sm font-medium text-foreground text-right">
                {day.present}/{total}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { TrainerSidebar } from "@/components/trainer/trainer-sidebar"

export default function TrainerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <TrainerSidebar />
      <main className="lg:pl-64">
        {children}
      </main>
    </div>
  )
}

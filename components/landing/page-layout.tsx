import { Header } from "./header"
import { Footer } from "./footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20 lg:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShowcaseCards } from "@/components/showcase-cards"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      <main className="flex-1">
        <ShowcaseCards />
      </main>

      <Footer />
    </div>
  )
}

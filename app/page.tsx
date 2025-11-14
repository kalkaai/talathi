import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShowcaseCards } from "@/components/showcase-cards"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <ShowcaseCards />
      </main>
      
      <Footer />
    </div>
  )
}

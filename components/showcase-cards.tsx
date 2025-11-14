import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const websites = [
  {
    title: "KalkaAI.com",
    description: "AI-powered platform for intelligent business solutions and automation.",
    image: "/kalkaai-preview.jpg",
    url: "https://kalkaai.com",
  },
  {
    title: "SuperHeed.com",
    description: "Advanced productivity tools and workflow management for modern teams.",
    image: "/superheed-preview.jpg",
    url: "https://superheed.com",
  },
  {
    title: "AriaTimer.com",
    description: "Elegant time tracking and project management solution for professionals.",
    image: "/ariatimer-preview.jpg",
    url: "https://ariatimer.com",
  },
  {
    title: "GuardHero.app",
    description: "Comprehensive security monitoring and protection for your digital assets.",
    image: "/guardhero-preview.jpg",
    url: "https://guardhero.app",
  },
]

export function ShowcaseCards() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {websites.map((website, index) => (
            <a
              key={index}
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                className="bg-card border-border hover:border-accent transition-all duration-300 group cursor-pointer overflow-hidden h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={website.image || "/placeholder.svg"}
                    alt={website.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {website.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {website.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

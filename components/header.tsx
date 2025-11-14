import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold tracking-tight text-foreground transition-all group-hover:text-primary">
              Talathi
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

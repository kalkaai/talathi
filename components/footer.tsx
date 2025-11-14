export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-muted-foreground/80 text-center font-medium">
          © {new Date().getFullYear()} Talathi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

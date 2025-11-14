export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Talathi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

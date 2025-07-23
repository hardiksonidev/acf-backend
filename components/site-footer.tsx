export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t border-border mt-6 bg-background">
      <p>&copy; {currentYear} Hardik S. All rights reserved. Freelance Web Application Developer</p>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { primaryMenuItems, dropdownMenuItems } from "@/lib/navigation" // Import from shared navigation
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 hidden md:flex items-center justify-between h-20 px-8 bg-background/90 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-extrabold text-foreground hover:text-primary transition-colors">
          Hardik S.
        </Link>
      </div>
      {/* <nav className="flex items-center gap-6">
        {primaryMenuItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            scroll={false} // Important for smooth scrolling to anchor IDs
            className={cn(
              "text-md font-medium transition-colors hover:text-primary",
              pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url.split("#")[0]))
                ? "text-primary"
                : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        ))}
        {dropdownMenuItems.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-md font-medium text-muted-foreground hover:text-primary">
                More <MoreHorizontal className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {dropdownMenuItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link href={item.url} scroll={false} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <ModeToggle /> 
      </nav> */}
            <ModeToggle /> 
    </header>
  )
}

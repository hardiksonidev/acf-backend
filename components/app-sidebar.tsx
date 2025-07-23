"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { primaryMenuItems, dropdownMenuItems } from "@/lib/navigation" // Import from shared navigation

export function AppSidebar() {
  const pathname = usePathname()

  // Combine all menu items for the sidebar
  const allMenuItems = [...primaryMenuItems, ...dropdownMenuItems]

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h1 className="text-md font-bold">Hardik S. – Advanced Custom Fields (ACF) Expert</h1>
        <p className="text-sm text-muted-foreground">ACF • Gravity Form • Elementor <br>
        </br> PHP  • Payment Gateway • Laravel<br>
        </br> Azure •   Node.js • Next.js  • React <br>
        </br> Dot Net • Angular
        </p>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {allMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 flex justify-center">
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

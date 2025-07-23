import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { BackgroundEffects } from "@/components/background-effects"
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Hardik Soni - Senior Software Technologist",
  description:
    "Senior Software Engineer specializing in .NET, Angular, and cloud technologies with 6+ years of experience in FinTech, Healthcare, and Enterprise solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <BackgroundEffects />
          <div className="relative min-h-screen">
            <Navigation />
            <main className="transition-all duration-300">{children}</main>
          </div>
          <Toaster />          
        </ThemeProvider>
      </body>
    </html>
  )
}

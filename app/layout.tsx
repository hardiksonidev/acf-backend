import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { BackgroundEffects } from "@/components/background-effects"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/dist/client/script"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Hardik S. – ACF Expert & Microsoft Certified Full Stack Developer",
  description: "Helping agencies and businesses build scalable, custom WordPress and Next.js solutions using Advanced Custom Fields (ACF), React, and ASP.NET Core.",
  generator: "acf.hardiksoni.dev",
  keywords: [
    "acf", "acf pro", "acf expert", "advanced custom fields", "acf developer", "wordpress developer", "custom fields wordpress",
    "Hardik Soni", "Senior Software Engineer", "Freelancer", "Next.js", "React", "Angular", "ASP.NET Core", "Azure", "acf wordpress", "acf plugin wordpress", 
    "acf wordpress plugin", "acf in wordpress", "wordpress acf", "hire wordpress developer india","wordpress developer india", "hire wordpress developer usa",
    "hire acf developer india", "hire acf developer usa"
  ],
  authors: [{ name: "Hardik Soni" }],
  creator: "Hardik Soni",
  publisher: "Hardik Soni",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-32x32", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acf.hardiksoni.dev",
    title: "Hardik S. – ACF Expert & Full Stack Developer",
    description: "WordPress and ACF development specialist with expertise in custom fields, schemas, and scalable front-end/backend systems.",
    images: [
      {
        url: "https://acf.hardiksoni.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Hardik Soni – ACF Expert Portfolio"
      }
    ],
    siteName: "Hardik Soni Developer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik S. – ACF Expert & Microsoft Certified Full Stack Developer",
    description: "Custom ACF-based WordPress solutions, scalable backends, and modern front-end interfaces built with Next.js and .NET Core.",
    creator: "@hardiksonidev",
    images: ["https://acf.hardiksoni.dev/preview.png"]
  },
  metadataBase: new URL('https://acf.hardiksoni.dev')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    // Google Analytics Measurement ID from environment variables
  // const "G-7VHTQ7SMGN" = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-7VHTQ7SMGN";

  return (
    <html lang="en" suppressHydrationWarning>
            
            <head>
                    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${"G-7VHTQ7SMGN"}`} />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${"G-7VHTQ7SMGN"}');
              `,
            }}
             />
         {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-7VHTQ7SMGN`}
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7VHTQ7SMGN', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      <Script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hardik Soni",
    url: "https://acf.hardiksoni.dev",
    jobTitle: "Hardik S. ACF Expert & Microsoft Certified Full Stack Developer",
    sameAs: ["https://github.com/hardiksonidev/"]
  })
}} />
</head>
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

import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { CreativeFooter } from "@/components/creative-footer"
import { SEOHead } from "@/components/seo-head"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Kayu Ceria - Mainan Kayu Edukatif Berkualitas",
  description:
    "Mainan kayu edukatif handmade berkualitas untuk tumbuh kembang anak Indonesia. Ramah lingkungan, aman, dan terjangkau.",
  keywords: "mainan kayu, mainan edukatif, mainan anak, kayu ceria, handmade indonesia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream">
        <LanguageProvider>
          <SEOHead />
          <Header />
          <main className="pb-16 md:pb-0">{children}</main>
          <CreativeFooter />
          <BottomNavigation />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  )
}

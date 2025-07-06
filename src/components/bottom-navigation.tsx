"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Info, MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const navItems = [
  {
    href: "/",
    icon: Home,
    labelKey: "nav.home",
  },
  {
    href: "/products",
    icon: Package,
    labelKey: "nav.products",
  },
  {
    href: "/about",
    icon: Info,
    labelKey: "nav.about",
  },
  {
    href: "/contact",
    icon: Phone,
    labelKey: "nav.contact",
  },
]

export function BottomNavigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleWhatsApp = () => {
    const message = `Halo Kayu Ceria, saya ingin bertanya tentang produk Anda.`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xs border-t border-wood-200 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } ${mounted ? "animate-slide-up" : ""}`}
    >
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105 active:scale-95 ${
                isActive ? "text-wood-700 bg-wood-50" : "text-wood-500 hover:text-wood-700 hover:bg-wood-50"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <item.icon
                className={`h-5 w-5 transition-transform duration-300 ${
                  isActive ? "animate-wiggle" : "hover:scale-110"
                }`}
              />
              <span className="text-xs font-medium">{t(item.labelKey)}</span>
            </Link>
          )
        })}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center gap-1 text-green-600 hover:text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 active:scale-95 group"
          style={{ animationDelay: "200ms" }}
        >
          <MessageCircle className="h-5 w-5 group-hover:animate-bounce-gentle" />
          <span className="text-xs font-medium">WhatsApp</span>
        </button>
      </div>
    </nav>
  )
}

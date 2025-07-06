"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/i18n"

const productCategories = [
  { id: "mainan-edukatif", href: "/products/mainan-edukatif" },
  { id: "rak-buku", href: "/products/rak-buku" },
  { id: "meja-kursi", href: "/products/meja-kursi" },
  { id: "papan-data", href: "/products/papan-data" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-wood-200 bg-cream/95 backdrop-blur-sm supports-backdrop-filter:bg-cream/60 animate-fade-in-down">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg wood-texture flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <span className="text-white font-bold text-lg">KC</span>
          </div>
          <span className="font-playfair font-bold text-xl text-wood-800 transition-colors duration-300 group-hover:text-wood-600">
            Kayu Ceria
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="relative text-wood-700 hover:text-wood-900 font-medium transition-colors duration-300 group"
          >
            {t("nav.home")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center space-x-1 text-wood-700 hover:text-wood-900 font-medium transition-colors duration-300 relative">
              <span>{t("nav.products")}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-wood-200 py-2 transition-all duration-300 ${
                isProductsOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              {productCategories.map((category, index) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="block px-4 py-3 text-wood-700 hover:text-wood-900 hover:bg-wood-50 transition-all duration-200 transform hover:translate-x-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {t(`category.${category.id}`)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="relative text-wood-700 hover:text-wood-900 font-medium transition-colors duration-300 group"
          >
            {t("nav.about")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className="relative text-wood-700 hover:text-wood-900 font-medium transition-colors duration-300 group"
          >
            {t("nav.contact")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className={mounted ? "animate-slide-in-right" : ""}>
            <LanguageToggle />
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`h-5 w-5 absolute transition-all duration-300 ${
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`h-5 w-5 absolute transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t border-wood-200 bg-cream transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container py-4 space-y-4">
          <Link
            href="/"
            className="block text-wood-700 hover:text-wood-900 font-medium transition-all duration-200 hover:translate-x-2 animate-fade-in-up"
            onClick={() => setIsOpen(false)}
            style={{ animationDelay: "100ms" }}
          >
            {t("nav.home")}
          </Link>

          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="text-wood-700 font-medium">{t("nav.products")}</div>
            <div className="pl-4 space-y-2">
              {productCategories.map((category, index) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="block text-wood-600 hover:text-wood-800 transition-all duration-200 hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${200 + index * 50}ms` }}
                >
                  {t(`category.${category.id}`)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="block text-wood-700 hover:text-wood-900 font-medium transition-all duration-200 hover:translate-x-2 animate-fade-in-up"
            onClick={() => setIsOpen(false)}
            style={{ animationDelay: "300ms" }}
          >
            {t("nav.about")}
          </Link>

          <Link
            href="/contact"
            className="block text-wood-700 hover:text-wood-900 font-medium transition-all duration-200 hover:translate-x-2 animate-fade-in-up"
            onClick={() => setIsOpen(false)}
            style={{ animationDelay: "350ms" }}
          >
            {t("nav.contact")}
          </Link>
        </nav>
      </div>
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav
      className={`flex items-center space-x-2 text-sm text-wood-600 mb-6 ${mounted ? "animate-slide-up" : "opacity-0"}`}
    >
      <Link
        href="/"
        className="flex items-center hover:text-wood-800 transition-all duration-200 hover:scale-105 group"
      >
        <Home className="h-4 w-4 group-hover:animate-bounce-gentle" />
      </Link>

      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-2 ${mounted ? "animate-slide-in-right" : ""}`}
          style={{ animationDelay: `${(index + 1) * 100}ms` }}
        >
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-wood-800 transition-all duration-200 hover:translate-x-1 relative group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ) : (
            <span className="text-wood-800 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

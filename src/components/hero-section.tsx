"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import { LazyImage } from "@/components/lazy-image"

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 wood-texture opacity-10" />

      {/* Floating Toys Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-toy-yellow rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-toy-red rounded-full opacity-20 animate-float-delayed" />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-toy-blue rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-toy-green rounded-full opacity-20 animate-float-delayed" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-wood-800 leading-tight ${
                  mounted ? "animate-stagger-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                {t("hero.title")}
              </h1>
              <p
                className={`text-lg md:text-xl text-wood-600 max-w-2xl ${
                  mounted ? "animate-stagger-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "400ms" }}
              >
                {t("hero.subtitle")}
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                mounted ? "animate-stagger-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-wood-600 hover:bg-wood-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group"
              >
                <Link href="/products">
                  <span className="group-hover:animate-bounce-gentle">{t("hero.cta")}</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-wood-300 text-wood-700 hover:bg-wood-50 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95"
              >
                <Link href="/about">{t("common.learnmore")}</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-wood-600 ${
                mounted ? "animate-stagger-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "800ms" }}
            >
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
                <span className="group-hover:text-wood-800 transition-colors duration-200">100% Kayu Alami</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
                <span className="group-hover:text-wood-800 transition-colors duration-200">Cat Non-Toxic</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
                <span className="group-hover:text-wood-800 transition-colors duration-200">Handmade Indonesia</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div
              className={`relative aspect-square max-w-lg mx-auto ${mounted ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="absolute inset-0 toy-gradient rounded-full opacity-20 animate-pulse-soft" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-102 hover:rotate-1">
                <LazyImage
                  src="/placeholder.svg?height=500&width=500"
                  alt="Kayu Ceria Educational Toys"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { LazyImage } from "@/components/lazy-image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export interface Product {
  id: string
  name_id: string
  name_en: string
  description_id: string
  description_en: string
  images: string[]
  category: string
  price: number
  ageRange: string
  dimensions: {
    length: number
    width: number
    height: number
  }
  materials: string[]
  weight: number
  inStock: boolean
  featured: boolean
}

interface ProductCardProps {
  product: Product
  onQuickView: (product: Product) => void
  index?: number
}

export function ProductCard({ product, onQuickView, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { language, t } = useLanguage()

  const productName = language === "id" ? product.name_id : product.name_en
  const productDescription = language === "id" ? product.description_id : product.description_en

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya tertarik dengan produk: ${productName}`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-xl shadow-xs border border-wood-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-102 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <LazyImage
          src={product.images[0] || "/placeholder.svg?height=300&width=300"}
          alt={productName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-toy-yellow text-wood-800 hover:bg-toy-yellow/90 animate-bounce-gentle">Featured</Badge>
          )}
          {!product.inStock && <Badge variant="destructive">{t("product.outofstock")}</Badge>}
        </div>

        {/* Hover Actions */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300 ${
            isHovered ? "opacity-100 backdrop-blur-xs" : "opacity-0"
          }`}
        >
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onQuickView(product)}
            className="gap-2 transition-all duration-200 hover:scale-105 active:scale-95 animate-scale-in"
          >
            <Eye className="h-4 w-4" />
            {t("product.quickview")}
          </Button>

          {product.inStock && (
            <Button
              size="sm"
              onClick={handleWhatsAppOrder}
              className="gap-2 bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95 animate-scale-in"
              style={{ animationDelay: "100ms" }}
            >
              <MessageCircle className="h-4 w-4" />
              {t("product.order")}
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-playfair font-semibold text-lg text-wood-800 mb-2 line-clamp-2 group-hover:text-wood-600 transition-colors duration-300">
          {productName}
        </h3>

        <p className="text-wood-600 text-sm mb-3 line-clamp-2">{productDescription}</p>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-lg font-bold text-wood-800 group-hover:text-wood-600 transition-colors duration-300">
              Rp {product.price.toLocaleString("id-ID")}
            </div>
            <div className="text-xs text-wood-500">
              {t("product.age")}: {product.ageRange}
            </div>
          </div>

          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              product.inStock ? "bg-green-500 animate-pulse-soft" : "bg-red-500"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

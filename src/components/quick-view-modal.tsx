"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import type { Product } from "@/components/product-card"
import { ImageZoom } from "@/components/image-zoom"

interface QuickViewModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    } else {
      setMounted(false)
    }
  }, [isOpen])

  if (!product) return null

  const productName = language === "id" ? product.name_id : product.name_en
  const productDescription = language === "id" ? product.description_id : product.description_en

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya tertarik dengan produk: ${productName}`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto p-4 md:p-6 animate-modal-bounce">
        <DialogHeader>
          <DialogTitle
            className={`font-playfair text-2xl text-wood-800 ${mounted ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "100ms" }}
          >
            {productName}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Gallery with Zoom */}
          <div className={`space-y-4 ${mounted ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-wood-50 group">
              <ImageZoom
                src={product.images[currentImageIndex] || "/placeholder.svg?height=400&width=400"}
                alt={productName}
                className="object-cover w-full h-full"
              />

              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      index === currentImageIndex
                        ? "border-wood-500 ring-2 ring-wood-300"
                        : "border-wood-200 hover:border-wood-400"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=64&width=64"}
                      alt={`${productName} ${index + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className={`flex gap-2 ${mounted ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "300ms" }}>
              {product.featured && (
                <Badge className="bg-toy-yellow text-wood-800 animate-bounce-gentle">Featured</Badge>
              )}
              <Badge
                variant={product.inStock ? "default" : "destructive"}
                className={product.inStock ? "animate-pulse-soft" : ""}
              >
                {product.inStock ? t("product.instock") : t("product.outofstock")}
              </Badge>
            </div>

            {/* Price */}
            <div
              className={`text-3xl font-bold text-wood-800 ${mounted ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "400ms" }}
            >
              Rp {product.price.toLocaleString("id-ID")}
            </div>

            {/* Description */}
            <p
              className={`text-wood-600 leading-relaxed ${mounted ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "500ms" }}
            >
              {productDescription}
            </p>

            {/* Specifications */}
            <div className={`space-y-3 ${mounted ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "600ms" }}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-wood-800">{t("product.age")}:</span>
                  <div className="text-wood-600">{product.ageRange}</div>
                </div>
                <div>
                  <span className="font-medium text-wood-800">Berat:</span>
                  <div className="text-wood-600">{product.weight}g</div>
                </div>
              </div>

              <div>
                <span className="font-medium text-wood-800">{t("product.dimensions")}:</span>
                <div className="text-wood-600">
                  {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} cm
                </div>
              </div>

              <div>
                <span className="font-medium text-wood-800">{t("product.materials")}:</span>
                <div className="text-wood-600">{product.materials.join(", ")}</div>
              </div>
            </div>

            {/* Order Button */}
            {product.inStock && (
              <Button
                onClick={handleWhatsAppOrder}
                className={`w-full gap-2 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 active:scale-95 group ${
                  mounted ? "animate-fade-in-up" : ""
                }`}
                size="lg"
                style={{ animationDelay: "700ms" }}
              >
                <MessageCircle className="h-5 w-5 group-hover:animate-bounce-gentle" />
                {t("product.order")}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

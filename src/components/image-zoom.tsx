"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageZoomProps {
  src: string
  alt: string
  className?: string
}

export function ImageZoom({ src, alt, className }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isZoomed || !imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setZoomPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) })
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
    if (!isZoomed) {
      setZoomPosition({ x: 50, y: 50 })
    }
  }

  return (
    <div className="relative group">
      <div
        ref={imageRef}
        className={`relative overflow-hidden cursor-${isZoomed ? "zoom-out" : "zoom-in"} ${className}`}
        onClick={toggleZoom}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoomPosition({ x: 50, y: 50 })}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={`transition-transform duration-300 ${isZoomed ? "scale-200" : "scale-100"}`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : {}
          }
        />

        {/* Zoom Indicator */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/50 text-white p-1 rounded-md text-xs flex items-center gap-1">
            {isZoomed ? <ZoomOut className="h-3 w-3" /> : <ZoomIn className="h-3 w-3" />}
            {isZoomed ? "Click to zoom out" : "Click to zoom in"}
          </div>
        </div>
      </div>

      {/* Mobile Zoom Toggle */}
      <Button variant="secondary" size="sm" className="absolute bottom-2 right-2 md:hidden" onClick={toggleZoom}>
        {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
      </Button>
    </div>
  )
}

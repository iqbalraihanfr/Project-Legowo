"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = message || `Halo Kayu Ceria, saya ingin bertanya tentang produk Anda.`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const quickMessages = [
    "Saya ingin bertanya tentang produk mainan edukatif",
    "Apakah ada diskon untuk pembelian dalam jumlah banyak?",
    "Berapa lama waktu pengerjaan untuk pesanan custom?",
    "Saya ingin melihat katalog produk terbaru",
  ]

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="bg-white shadow-lg border border-wood-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-wood-800">Kayu Ceria</div>
                    <div className="text-sm text-green-600">Online sekarang</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-sm text-wood-600 mb-3">
                  Halo! Ada yang bisa kami bantu? Pilih pesan cepat di bawah atau ketik pesan Anda sendiri.
                </div>

                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleWhatsApp(message)}
                    className="w-full text-left p-2 text-sm bg-wood-50 hover:bg-wood-100 rounded-lg transition-colors text-wood-700"
                  >
                    {message}
                  </button>
                ))}
              </div>

              <Button onClick={() => handleWhatsApp()} className="w-full bg-green-600 hover:bg-green-700 gap-2">
                <MessageCircle className="h-4 w-4" />
                Mulai Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none md:bottom-6 md:right-6"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/i18n"
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { t } = useLanguage()

  const breadcrumbItems = [{ label: t("nav.contact") }]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleWhatsApp = () => {
    const message = `Halo Kayu Ceria, saya ingin bertanya tentang produk Anda.`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-wood-800 mb-4">{t("contact.title")}</h1>
          <p className="text-lg text-wood-600 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-wood-800">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2 bg-wood-600 hover:bg-wood-700">
                  <Send className="h-4 w-4" />
                  {t("contact.form.send")}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-wood-200">
                <Button onClick={handleWhatsApp} className="w-full gap-2 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4" />
                  Chat via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-playfair font-semibold text-xl text-wood-800 mb-6">Informasi Kontak</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-wood-600 mt-1" />
                    <div>
                      <div className="font-medium text-wood-800">Alamat</div>
                      <div className="text-wood-600">
                        Jl. Kerajinan Kayu No. 123
                        <br />
                        Kelurahan Sumber Rejeki
                        <br />
                        Jakarta Timur 13450
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-wood-600" />
                    <div>
                      <div className="font-medium text-wood-800">Telepon</div>
                      <div className="text-wood-600">+62 812-3456-7890</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-wood-600" />
                    <div>
                      <div className="font-medium text-wood-800">Email</div>
                      <div className="text-wood-600">info@kayuceria.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-playfair font-semibold text-xl text-wood-800 mb-6">{t("contact.hours")}</h2>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-wood-700">Senin - Jumat</span>
                    <span className="text-wood-600">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-wood-700">Sabtu</span>
                    <span className="text-wood-600">08:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-wood-700">Minggu</span>
                    <span className="text-red-600">Tutup</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-700 font-medium text-sm">Saat ini sedang buka</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-playfair font-semibold text-xl text-wood-800 mb-4">Lokasi Kami</h2>
                <div className="aspect-video bg-wood-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-wood-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Google Maps akan ditampilkan di sini</p>
                    <p className="text-sm">Jl. Kerajinan Kayu No. 123, Jakarta Timur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

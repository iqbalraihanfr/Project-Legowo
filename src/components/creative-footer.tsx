"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"
import { Heart, Clock, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Star } from "lucide-react"

export function CreativeFooter() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const footer = document.getElementById("creative-footer")
    if (footer) {
      observer.observe(footer)
    }

    return () => observer.disconnect()
  }, [])

  const currentHour = new Date().getHours()
  const isOpen = currentHour >= 8 && currentHour < 17

  const handleWhatsApp = () => {
    const message = `Halo Kayu Ceria, saya ingin bertanya tentang produk Anda.`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/kayuceria",
      color: "hover:text-pink-500",
      hoverEffect: "hover:rotate-12",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/kayuceria",
      color: "hover:text-blue-600",
      hoverEffect: "hover:scale-110",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/kayuceria",
      color: "hover:text-red-500",
      hoverEffect: "hover:animate-bounce-gentle",
    },
  ]

  const quickLinks = [
    { href: "/", labelKey: "nav.home" },
    { href: "/products", labelKey: "nav.products" },
    { href: "/about", labelKey: "nav.about" },
    { href: "/contact", labelKey: "nav.contact" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <footer
      id="creative-footer"
      className={`relative bg-linear-to-br from-wood-50 via-cream to-wood-100 border-t border-wood-200 overflow-hidden ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-toy-yellow/10 rounded-full animate-float" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-toy-red/10 rounded-full animate-float-delayed" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-toy-blue/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-toy-green/10 rounded-full animate-float-delayed" />
      </div>

      <div className="container relative z-10 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "100ms" }}>
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl wood-texture flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-white font-bold text-xl">KC</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-2xl text-wood-800 group-hover:text-wood-600 transition-colors duration-300">
                  Kayu Ceria
                </h3>
                <p className="text-sm text-wood-600 flex items-center gap-1">
                  <Heart className="h-3 w-3 text-red-500 animate-pulse-soft" />
                  Handmade with Love
                </p>
              </div>
            </div>

            <p className="text-wood-600 leading-relaxed">
              🧸 Menciptakan mainan kayu edukatif berkualitas untuk tumbuh kembang anak Indonesia. Setiap produk dibuat
              dengan cinta dan perhatian detail oleh pengrajin lokal terbaik.
            </p>

            {/* Business Status */}
            {/* <div className="flex items-center gap-2 p-3 bg-white/50 rounded-lg border border-wood-200">
              <div className={`w-3 h-3 rounded-full ${isOpen ? "bg-green-500 animate-pulse-soft" : "bg-red-500"}`} />
              <span className="text-sm font-medium text-wood-700">{isOpen ? "🟢 Sedang Buka" : "🔴 Tutup"}</span>
              <Clock className="h-4 w-4 text-wood-500 ml-auto" />
            </div> */}
          </div>

          {/* Quick Links */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "200ms" }}>
            <h4 className="font-playfair font-semibold text-lg text-wood-800 flex items-center gap-2">
            Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-wood-600 hover:text-wood-800 transition-all duration-300 hover:translate-x-2 hover:scale-105 flex items-center gap-2 group relative"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:bg-wood-600 transition-colors duration-300"></span> */}
                    {link.labelKey ? t(link.labelKey) : link.label}
                    {/* <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "300ms" }}>
            <h4 className="font-playfair font-semibold text-lg text-wood-800 flex items-center gap-2">
              📞 Hubungi Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-wood-500 mt-0.5 group-hover:text-wood-700 transition-colors duration-300" />
                <div className="text-sm text-wood-600 group-hover:text-wood-800 transition-colors duration-300">
                  <div className="font-medium">Alamat</div>
                  <div>Jl. Kerajinan Kayu No. 123</div>
                  <div>Jakarta Timur 13450</div>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-wood-500 group-hover:text-wood-700 transition-colors duration-300" />
                <div className="text-sm text-wood-600 group-hover:text-wood-800 transition-colors duration-300">
                  <div className="font-medium">Telepon</div>
                  <div>+62 812-3456-7890</div>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-wood-500 group-hover:text-wood-700 transition-colors duration-300" />
                <div className="text-sm text-wood-600 group-hover:text-wood-800 transition-colors duration-300">
                  <div className="font-medium">Email</div>
                  <div>info@kayuceria.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Language */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "400ms" }}>
            <h4 className="font-playfair font-semibold text-lg text-wood-800 flex items-center gap-2">Ikuti Kami</h4>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-wood-500 transition-all duration-300 hover:shadow-lg ${social.color} ${social.hoverEffect} hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-wood-700 flex items-center gap-2">Bahasa</div>
              <LanguageToggle />
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="h-5 w-5 group-hover:animate-bounce-gentle" />Chat WhatsApp
            </button>

            {/* Rating Display */}
            <div className="bg-white/50 rounded-lg p-3 border border-wood-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-wood-700">5.0</span>
              </div>
              <p className="text-xs text-wood-600">⭐ Rating dari 100+ pelanggan</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-12 pt-8 border-t border-wood-200 ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "500ms" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-wood-600 text-center md:text-left">
              <p className="flex items-center gap-1 justify-center md:justify-start">
                © 2024 Kayu Ceria. Made with
                <Heart className="h-4 w-4 text-red-500 animate-pulse-soft" />
                in Indonesia 🇮🇩
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-wood-600">
              <Link href="/privacy" className="hover:text-wood-800 transition-colors duration-300 relative group">
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/terms" className="hover:text-wood-800 transition-colors duration-300 relative group">
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-wood-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

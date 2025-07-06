"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "id" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.products": "Produk",
    "nav.about": "Tentang Kami",
    "nav.contact": "Kontak",

    // Product Categories
    "category.mainan-edukatif": "Mainan Edukatif",
    "category.rak-buku": "Rak Buku",
    "category.meja-kursi": "Meja & Kursi",
    "category.papan-data": "Papan Data",

    // Homepage
    "hero.title": "Mainan Kayu Edukatif Berkualitas",
    "hero.subtitle": "Handmade dengan cinta untuk tumbuh kembang anak Indonesia",
    "hero.cta": "Jelajahi Produk",
    "featured.title": "Produk Unggulan",
    "featured.subtitle": "Pilihan terbaik untuk si kecil",
    "categories.title": "Kategori Produk",
    "categories.subtitle": "Temukan mainan edukatif yang tepat",
    "values.title": "Mengapa Memilih Kayu Ceria?",
    "values.eco.title": "Ramah Lingkungan",
    "values.eco.desc": "Terbuat dari kayu berkualitas dan cat non-toxic",
    "values.local.title": "Produk Lokal",
    "values.local.desc": "Dibuat dengan bangga oleh pengrajin Indonesia",
    "values.educational.title": "Edukatif",
    "values.educational.desc": "Mengembangkan kreativitas dan motorik anak",
    "values.affordable.title": "Terjangkau",
    "values.affordable.desc": "Kualitas premium dengan harga bersahabat",

    // Product
    "product.quickview": "Lihat Detail",
    "product.order": "Pesan via WhatsApp",
    "product.price": "Harga",
    "product.age": "Usia",
    "product.materials": "Bahan",
    "product.dimensions": "Dimensi",
    "product.instock": "Tersedia",
    "product.outofstock": "Stok Habis",

    // Contact
    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Siap membantu Anda menemukan mainan edukatif terbaik",
    "contact.form.name": "Nama",
    "contact.form.email": "Email",
    "contact.form.message": "Pesan",
    "contact.form.send": "Kirim Pesan",
    "contact.hours": "Jam Operasional",
    "contact.address": "Alamat",

    // About
    "about.title": "Tentang Kayu Ceria",
    "about.story": "Cerita Kami",
    "about.mission": "Misi Kami",
    "about.vision": "Visi Kami",

    // Common
    "common.loading": "Memuat...",
    "common.close": "Tutup",
    "common.viewall": "Lihat Semua",
    "common.learnmore": "Pelajari Lebih Lanjut",
    "common.readmore": "Baca Selengkapnya",

    // Blog
    "blog.title": "Blog Kayu Ceria",
    "blog.subtitle": "Tips parenting dan panduan mainan edukatif",
    "blog.readmore": "Baca Selengkapnya",
    "blog.share": "Bagikan",
    "blog.like": "Suka",
    "blog.comment": "Komentar",
    "blog.related": "Artikel Terkait",
    "blog.backtoblog": "Kembali ke Blog",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    // Product Categories
    "category.mainan-edukatif": "Educational Toys",
    "category.rak-buku": "Book Shelves",
    "category.meja-kursi": "Tables & Chairs",
    "category.papan-data": "Data Boards",

    // Homepage
    "hero.title": "Quality Wooden Educational Toys",
    "hero.subtitle": "Handmade with love for Indonesian children's development",
    "hero.cta": "Explore Products",
    "featured.title": "Featured Products",
    "featured.subtitle": "Best choices for your little ones",
    "categories.title": "Product Categories",
    "categories.subtitle": "Find the right educational toys",
    "values.title": "Why Choose Kayu Ceria?",
    "values.eco.title": "Eco-Friendly",
    "values.eco.desc": "Made from quality wood and non-toxic paint",
    "values.local.title": "Local Product",
    "values.local.desc": "Proudly made by Indonesian craftsmen",
    "values.educational.title": "Educational",
    "values.educational.desc": "Develops children's creativity and motor skills",
    "values.affordable.title": "Affordable",
    "values.affordable.desc": "Premium quality at friendly prices",

    // Product
    "product.quickview": "Quick View",
    "product.order": "Order via WhatsApp",
    "product.price": "Price",
    "product.age": "Age",
    "product.materials": "Materials",
    "product.dimensions": "Dimensions",
    "product.instock": "In Stock",
    "product.outofstock": "Out of Stock",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to help you find the best educational toys",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.hours": "Business Hours",
    "contact.address": "Address",

    // About
    "about.title": "About Kayu Ceria",
    "about.story": "Our Story",
    "about.mission": "Our Mission",
    "about.vision": "Our Vision",

    // Common
    "common.loading": "Loading...",
    "common.close": "Close",
    "common.viewall": "View All",
    "common.learnmore": "Learn More",
    "common.readmore": "Read More",

    // Blog
    "blog.title": "Kayu Ceria Blog",
    "blog.subtitle": "Parenting tips and educational toy guides",
    "blog.readmore": "Read More",
    "blog.share": "Share",
    "blog.like": "Like",
    "blog.comment": "Comment",
    "blog.related": "Related Articles",
    "blog.backtoblog": "Back to Blog",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "id" || saved === "en")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["id"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

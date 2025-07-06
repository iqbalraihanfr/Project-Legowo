"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProductCard, type Product } from "@/components/product-card"
import { QuickViewModal } from "@/components/quick-view-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Heart, GraduationCap, DollarSign, Star, Clock, MapPin, Mail, Phone } from "lucide-react"

// Mock data - in real app, this would come from API
const featuredProducts: Product[] = [
  {
    id: "1",
    name_id: "Puzzle Angka Kayu",
    name_en: "Wooden Number Puzzle",
    description_id: "Puzzle edukatif untuk belajar angka 1-10 dengan desain menarik",
    description_en: "Educational puzzle for learning numbers 1-10 with attractive design",
    images: ["/placeholder.svg?height=300&width=300"],
    category: "mainan-edukatif",
    price: 75000,
    ageRange: "3-6 tahun",
    dimensions: { length: 30, width: 20, height: 2 },
    materials: ["Kayu Pinus", "Cat Non-Toxic"],
    weight: 500,
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name_id: "Rak Buku Mini",
    name_en: "Mini Book Shelf",
    description_id: "Rak buku kecil untuk kamar anak dengan 3 tingkat",
    description_en: "Small bookshelf for children's room with 3 levels",
    images: ["/placeholder.svg?height=300&width=300"],
    category: "rak-buku",
    price: 250000,
    ageRange: "2+ tahun",
    dimensions: { length: 60, width: 25, height: 80 },
    materials: ["Kayu Jati", "Finishing Natural"],
    weight: 3000,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name_id: "Meja Belajar Anak",
    name_en: "Children's Study Table",
    description_id: "Meja belajar ergonomis dengan kursi untuk anak usia sekolah",
    description_en: "Ergonomic study table with chair for school-age children",
    images: ["/placeholder.svg?height=300&width=300"],
    category: "meja-kursi",
    price: 450000,
    ageRange: "5-12 tahun",
    dimensions: { length: 80, width: 60, height: 65 },
    materials: ["Kayu Mahoni", "Cat Water Based"],
    weight: 8000,
    inStock: true,
    featured: true,
  },
]

const categories = [
  {
    id: "mainan-edukatif",
    href: "/products/mainan-edukatif",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-toy-yellow",
  },
  {
    id: "rak-buku",
    href: "/products/rak-buku",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-toy-red",
  },
  {
    id: "meja-kursi",
    href: "/products/meja-kursi",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-toy-blue",
  },
  {
    id: "papan-data",
    href: "/products/papan-data",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-toy-green",
  },
]

const values = [
  {
    icon: Leaf,
    key: "eco",
    color: "text-green-600",
  },
  {
    icon: Heart,
    key: "local",
    color: "text-red-500",
  },
  {
    icon: GraduationCap,
    key: "educational",
    color: "text-blue-600",
  },
  {
    icon: DollarSign,
    key: "affordable",
    color: "text-yellow-600",
  },
]

const testimonials = [
  {
    name: "Ibu Sarah",
    location: "Jakarta",
    rating: 5,
    text: "Kualitas mainan kayu dari Kayu Ceria sangat bagus! Anak saya suka sekali dengan puzzle angkanya.",
    text_en: "The quality of wooden toys from Kayu Ceria is excellent! My child loves the number puzzle.",
  },
  {
    name: "Bapak Ahmad",
    location: "Surabaya",
    rating: 5,
    text: "Pelayanan ramah dan produk sesuai ekspektasi. Recommended untuk mainan edukatif anak!",
    text_en: "Friendly service and products meet expectations. Recommended for children's educational toys!",
  },
  {
    name: "Ibu Dina",
    location: "Bandung",
    rating: 5,
    text: "Rak buku untuk anak saya sangat kokoh dan finishing-nya rapi. Terima kasih Kayu Ceria!",
    text_en: "The bookshelf for my child is very sturdy and well-finished. Thank you Kayu Ceria!",
  },
]

const faqs = [
  {
    question_id: "Apakah produk Kayu Ceria aman untuk anak?",
    question_en: "Are Kayu Ceria products safe for children?",
    answer_id: "Ya, semua produk kami menggunakan bahan kayu alami dan cat non-toxic yang aman untuk anak-anak.",
    answer_en: "Yes, all our products use natural wood materials and non-toxic paint that are safe for children.",
  },
  {
    question_id: "Berapa lama waktu pengerjaan pesanan?",
    question_en: "How long does it take to process orders?",
    answer_id: "Waktu pengerjaan biasanya 3-7 hari kerja tergantung jenis dan jumlah produk yang dipesan.",
    answer_en: "Processing time is usually 3-7 working days depending on the type and quantity of products ordered.",
  },
  {
    question_id: "Apakah ada garansi untuk produk?",
    question_en: "Is there a warranty for the products?",
    answer_id: "Kami memberikan garansi 6 bulan untuk kerusakan produksi dan 1 bulan untuk kepuasan pelanggan.",
    answer_en: "We provide a 6-month warranty for manufacturing defects and 1 month for customer satisfaction.",
  },
]

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t, language } = useLanguage()

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">{t("featured.title")}</h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">{t("featured.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">{t("common.viewall")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-wood-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">{t("categories.title")}</h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">{t("categories.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} className="group block">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <div className={`absolute inset-0 ${category.color} opacity-20`} />
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={t(`category.${category.id}`)}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-playfair font-semibold text-xl text-wood-800">
                      {t(`category.${category.id}`)}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">{t("values.title")}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.key} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-wood-100 mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                  {t(`values.${value.key}.title`)}
                </h3>
                <p className="text-wood-600">{t(`values.${value.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-wood-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">Testimoni Pelanggan</h2>
            <p className="text-lg text-wood-600">Apa kata mereka tentang produk Kayu Ceria</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-wood-600 mb-4 italic">
                    "{language === "id" ? testimonial.text : testimonial.text_en}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-wood-200 rounded-full flex items-center justify-center">
                      <span className="text-wood-700 font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-wood-800">{testimonial.name}</div>
                      <div className="text-sm text-wood-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      {/* <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-wood-800 mb-6">Jam Operasional</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-wood-600" />
                  <div>
                    <div className="font-semibold text-wood-800">Senin - Jumat</div>
                    <div className="text-wood-600">08:00 - 17:00 WIB</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-wood-600" />
                  <div>
                    <div className="font-semibold text-wood-800">Sabtu</div>
                    <div className="text-wood-600">08:00 - 15:00 WIB</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-wood-600" />
                  <div>
                    <div className="font-semibold text-wood-800">Minggu</div>
                    <div className="text-wood-600">Tutup</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-semibold text-wood-800 mb-4">Hubungi Kami</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-wood-600" />
                  <span className="text-wood-700">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-wood-600" />
                  <span className="text-wood-700">info@kayuceria.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-wood-600" />
                  <span className="text-wood-700">Jl. Kerajinan No. 123, Jakarta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-16 bg-wood-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-lg text-wood-600">Jawaban untuk pertanyaan yang sering diajukan</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-wood-200">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-800 hover:no-underline">
                  {language === "id" ? faq.question_id : faq.question_en}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-wood-600">
                  {language === "id" ? faq.answer_id : faq.answer_en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

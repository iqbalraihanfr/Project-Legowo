"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import { Heart, Target, Eye, Award, Users, Leaf } from "lucide-react"
import Image from "next/image"

const milestones = [
  {
    year: "2018",
    title: "Berdirinya Kayu Ceria",
    description: "Memulai usaha kecil dari rumah dengan 2 orang pengrajin",
  },
  {
    year: "2019",
    title: "Ekspansi Produk",
    description: "Menambah kategori rak buku dan furniture anak",
  },
  {
    year: "2020",
    title: "Sertifikasi Keamanan",
    description: "Mendapat sertifikat SNI untuk keamanan mainan anak",
  },
  {
    year: "2021",
    title: "Tim Berkembang",
    description: "Tim berkembang menjadi 10 pengrajin ahli",
  },
  {
    year: "2022",
    title: "Ekspor Perdana",
    description: "Mulai mengekspor ke Malaysia dan Singapura",
  },
  {
    year: "2023",
    title: "Penghargaan UMKM",
    description: "Meraih penghargaan UMKM Terbaik Kategori Kerajinan",
  },
]

const values = [
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description: "Setiap produk dibuat dengan perhatian detail dan cinta untuk anak-anak Indonesia",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description: "Menggunakan bahan kayu berkelanjutan dan proses produksi yang ramah lingkungan",
  },
  {
    icon: Users,
    title: "Memberdayakan Lokal",
    description: "Memberikan lapangan kerja untuk pengrajin lokal dan mengembangkan ekonomi daerah",
  },
  {
    icon: Award,
    title: "Kualitas Terjamin",
    description: "Standar kualitas tinggi dengan sertifikasi keamanan untuk mainan anak",
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

  const breadcrumbItems = [{ label: t("nav.about") }]

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-wood-800 mb-6">{t("about.title")}</h1>
            <p className="text-lg text-wood-600 mb-6 leading-relaxed">
              Kayu Ceria adalah UMKM yang bergerak di bidang pembuatan mainan kayu edukatif dan furniture anak.
              Didirikan pada tahun 2018, kami berkomitmen untuk menyediakan produk berkualitas tinggi yang aman,
              edukatif, dan ramah lingkungan untuk mendukung tumbuh kembang anak-anak Indonesia.
            </p>
            <p className="text-lg text-wood-600 leading-relaxed">
              Dengan tim pengrajin berpengalaman dan dedikasi tinggi terhadap kualitas, kami telah memproduksi ribuan
              mainan edukatif yang tersebar di seluruh Indonesia dan mulai merambah pasar internasional.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Kayu Ceria Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-wood-600" />
                <h2 className="text-2xl font-playfair font-bold text-wood-800">{t("about.mission")}</h2>
              </div>
              <p className="text-wood-600 leading-relaxed">
                Menyediakan mainan kayu edukatif berkualitas tinggi yang aman, ramah lingkungan, dan terjangkau untuk
                mendukung perkembangan kreativitas, motorik, dan kognitif anak-anak Indonesia, sambil memberdayakan
                pengrajin lokal dan melestarikan budaya kerajinan kayu tradisional.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-wood-600" />
                <h2 className="text-2xl font-playfair font-bold text-wood-800">{t("about.vision")}</h2>
              </div>
              <p className="text-wood-600 leading-relaxed">
                Menjadi produsen mainan kayu edukatif terdepan di Indonesia yang dikenal secara internasional, dengan
                produk-produk inovatif yang berkontribusi positif terhadap pendidikan anak usia dini dan pemberdayaan
                ekonomi kreatif lokal.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap langkah perjalanan Kayu Ceria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wood-100 mb-4 group-hover:bg-wood-200 transition-colors">
                    <value.icon className="h-8 w-8 text-wood-600" />
                  </div>
                  <h3 className="font-playfair font-semibold text-lg text-wood-800 mb-3">{value.title}</h3>
                  <p className="text-wood-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">Perjalanan Kami</h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Milestone penting dalam perjalanan Kayu Ceria dari tahun ke tahun
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-wood-300 md:transform md:-translate-x-0.5" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-wood-600 rounded-full md:transform md:-translate-x-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="bg-white">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-wood-600 mb-2">{milestone.year}</div>
                        <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">{milestone.title}</h3>
                        <p className="text-wood-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wood-800 mb-4">Tim Kami</h2>
          <p className="text-lg text-wood-600 mb-8 max-w-2xl mx-auto">
            Didukung oleh tim pengrajin berpengalaman dan profesional muda yang berdedikasi
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-wood-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wood-700">10+</span>
                </div>
                <h3 className="font-playfair font-semibold text-lg text-wood-800 mb-2">Pengrajin Ahli</h3>
                <p className="text-wood-600 text-sm">Berpengalaman lebih dari 5 tahun dalam kerajinan kayu</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-wood-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wood-700">3</span>
                </div>
                <h3 className="font-playfair font-semibold text-lg text-wood-800 mb-2">Desainer Produk</h3>
                <p className="text-wood-600 text-sm">Menciptakan desain inovatif dan edukatif</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-wood-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wood-700">5</span>
                </div>
                <h3 className="font-playfair font-semibold text-lg text-wood-800 mb-2">Tim Operasional</h3>
                <p className="text-wood-600 text-sm">Memastikan kualitas dan pengiriman tepat waktu</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

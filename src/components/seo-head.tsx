"use client"

import Head from "next/head"
import { useLanguage } from "@/lib/i18n"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export function SEOHead({
  title = "Kayu Ceria - Mainan Kayu Edukatif Berkualitas",
  description = "Mainan kayu edukatif handmade berkualitas untuk tumbuh kembang anak Indonesia. Ramah lingkungan, aman, dan terjangkau.",
  keywords = "mainan kayu, mainan edukatif, mainan anak, kayu ceria, handmade indonesia, wooden toys, educational toys",
  image = "/og-image.jpg",
  url = "https://kayuceria.com",
  type = "website",
}: SEOHeadProps) {
  const { language } = useLanguage()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kayu Ceria",
    description: description,
    url: url,
    telephone: "+62-812-3456-7890",
    email: "info@kayuceria.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kerajinan Kayu No. 123",
      addressLocality: "Jakarta Timur",
      postalCode: "13450",
      addressCountry: "ID",
    },
    openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-15:00"],
    priceRange: "$$",
    servedCuisine: "Educational Toys",
    image: image,
    sameAs: ["https://www.instagram.com/kayuceria", "https://www.facebook.com/kayuceria"],
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kayu Ceria" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language} />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Kayu Ceria" />
      <meta property="og:locale" content={language === "id" ? "id_ID" : "en_US"} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#c4a882" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Kayu Ceria" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Head>
  )
}

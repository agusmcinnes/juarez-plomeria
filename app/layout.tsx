import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Omar Juárez - Plomería y Gasista Matriculado en Córdoba | Urgencias 24/7",
  description:
    "Servicio profesional de plomería, gas y electricidad en Córdoba Capital. Gasista matriculado, urgencias 24/7, instalaciones con termofusión, service de calefones y más.",
  keywords:
    "plomería Córdoba, gasista matriculado Córdoba, urgencias plomería, instalaciones gas, service calefones, electricidad Córdoba",
  authors: [{ name: "Omar Juárez" }],
  creator: "Omar Juárez",
  publisher: "Omar Juárez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://omarjuarez-plomeria.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omar Juárez - Plomería y Gasista Matriculado en Córdoba",
    description: "Servicio profesional de plomería, gas y electricidad. Urgencias 24/7 en Córdoba Capital.",
    url: "https://omarjuarez-plomeria.vercel.app",
    siteName: "Omar Juárez Plomería",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omar Juárez - Plomería y Gasista Matriculado",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Juárez - Plomería y Gasista Matriculado en Córdoba",
    description: "Servicio profesional de plomería, gas y electricidad. Urgencias 24/7 en Córdoba Capital.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Plumber", "Electrician"],
              name: "Omar Juárez - Plomería y Gasista",
              image: "https://omarjuarez-plomeria.vercel.app/og-image.jpg",
              telephone: "+54-351-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Córdoba Capital",
                addressLocality: "Córdoba",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -31.4201,
                longitude: -64.1888,
              },
              url: "https://omarjuarez-plomeria.vercel.app",
              areaServed: [
                "Centro",
                "Nueva Córdoba",
                "General Paz",
                "Alta Córdoba",
                "Cofico",
                "Alberdi",
                "Güemes",
                "Villa Cabrera",
              ],
              availableService: [
                "Plomería",
                "Instalaciones de gas",
                "Electricidad",
                "Service de calefones",
                "Urgencias 24/7",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
              currenciesAccepted: "ARS",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

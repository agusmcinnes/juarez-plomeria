"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Clock, Shield, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroPrincipal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/5493511234567?text=Hola%20Omar,%20necesito%20un%20presupuesto%20urgente", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+5493511234567"
  }

  const scrollToForm = () => {
    document.getElementById("presupuesto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-20">
      {/* Patrón técnico de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            {/* Badges de confianza */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="flex items-center space-x-2 px-3 py-1">
                <Shield className="w-4 h-4" />
                <span>Gasista Matriculado</span>
              </Badge>
              <Badge variant="outline" className="flex items-center space-x-2 px-3 py-1 border-accent text-accent">
                <Clock className="w-4 h-4" />
                <span>Urgencias 24/7</span>
              </Badge>
              <Badge variant="outline" className="flex items-center space-x-2 px-3 py-1">
                <MapPin className="w-4 h-4" />
                <span>Cobertura en tu zona</span>
              </Badge>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                <span className="text-primary">Plomería y Gasista</span>{" "}
                <span className="text-foreground">Matriculado en Córdoba</span>
                <span className="block text-accent mt-2">Urgencias 24/7</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
                Instalaciones, refacciones y pruebas de hermeticidad con garantía. Servicio profesional y confiable para
                tu hogar.
              </p>
            </div>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Pedir Presupuesto
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCall}
                className="text-lg px-8 py-6 flex items-center space-x-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar Ahora</span>
              </Button>
            </div>

            {/* WhatsApp destacado */}
            <div className="pt-4">
              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Imagen profesional */}
          <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-plumber-working-with-tools-and-pipes-.jpg"
                alt="Omar Juárez trabajando en instalación de plomería profesional"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Profesional Matriculado</p>
                      <p className="text-sm text-muted-foreground">+10 años de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

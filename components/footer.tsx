"use client"

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, MapPin, Shield, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleWhatsApp = () => {
    window.open("https://wa.me/5493511234567?text=Hola%20Omar,%20vi%20tu%20página%20web", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+5493511234567"
  }

  const handleEmail = () => {
    window.location.href = "mailto:omar.juarez.plomeria@gmail.com"
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Información principal */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OJ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Omar Juárez</h3>
                <p className="text-primary-foreground/80 text-sm">Plomería & Gasista Matriculado</p>
              </div>
            </div>

            <p className="text-primary-foreground/90 text-sm">
              Más de 10 años de experiencia en Córdoba Capital. Calidad y garantía en cada trabajo.
            </p>

            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                <Shield className="w-3 h-3 mr-1" />
                Matriculado
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                <Clock className="w-3 h-3 mr-1" />
                24/7
              </Badge>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex-shrink-0 w-full md:w-64 space-y-4 text-center md:text-left">
            <h4 className="text-lg font-bold">Contacto</h4>
            <div className="space-y-3">
              <button
                onClick={handleCall}
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+54 9 351 123-4567</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">WhatsApp</span>
              </button>

              <button
                onClick={handleEmail}
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium text-sm">omar.juarez.plomeria@gmail.com</span>
              </button>
            </div>
          </div>

          {/* Servicios */}
          <div className="flex-shrink-0 w-full md:w-48 space-y-4 text-center md:text-left">
            <h4 className="text-lg font-bold">Servicios</h4>
            <div className="text-sm text-primary-foreground/90 space-y-1">
              <p>• Plomería y sanitarios</p>
              <p>• Instalaciones de gas</p>
              <p>• Service de calefones</p>
              <p>• Electricidad básica</p>
              <p>• Urgencias 24/7</p>
            </div>

            <div className="pt-2">
              <p className="text-xs text-primary-foreground/70 flex items-center justify-center md:justify-start">
                <MapPin className="w-3 h-3 mr-1" />
                Córdoba Capital y alrededores
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-primary-foreground/20" />

        {/* Footer bottom */}
        <div className="text-center">
          <p className="text-sm text-primary-foreground/80 mb-2">
            © {currentYear} Omar Juárez - Plomería y Gasista Matriculado
          </p>
          <div className="flex items-center justify-center space-x-2 text-accent">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Disponible para urgencias las 24 horas</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

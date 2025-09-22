"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, Clock, MapPin, Calendar } from "lucide-react"

export function ContactoRapido() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5493511234567?text=Hola%20Omar,%20necesito%20información", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+5493511234567"
  }

  const handleEmail = () => {
    window.location.href = "mailto:omar.juarez.plomeria@gmail.com"
  }

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Contacto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Hablemos de tu proyecto</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Estamos disponibles para atenderte. Elegí la forma de contacto que más te convenga.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-green-800">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">La forma más rápida de contactarnos. Respuesta inmediata.</p>
                <div className="space-y-2">
                  <p className="font-semibold">+54 9 351 123-4567</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Disponible 24/7
                  </Badge>
                </div>
                <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                  Escribir por WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Teléfono */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-blue-800">Teléfono</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Hablá directamente conmigo para consultas urgentes.</p>
                <div className="space-y-2">
                  <p className="font-semibold">+54 9 351 123-4567</p>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Urgencias 24/7
                  </Badge>
                </div>
                <Button
                  onClick={handleCall}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  Llamar ahora
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200 md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-purple-800">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Para consultas detalladas o envío de documentos.</p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">omar.juarez.plomeria@gmail.com</p>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Respuesta en 2-4 hs
                  </Badge>
                </div>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                >
                  Enviar email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Información adicional */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Horarios</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Lun-Vie: 8:00 - 18:00</p>
                  <p>Sáb: 8:00 - 13:00</p>
                  <p className="font-semibold text-accent">Urgencias: 24/7</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Cobertura</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Córdoba Capital</p>
                  <p>Todos los barrios</p>
                  <p className="font-semibold text-secondary">Radio: 15 km</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Disponibilidad</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Trabajos programados</p>
                  <p>Urgencias inmediatas</p>
                  <p className="font-semibold text-accent">Sin feriados</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

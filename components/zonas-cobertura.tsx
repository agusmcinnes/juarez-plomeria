"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, MessageCircle } from "lucide-react"

const zonas = [
  { nombre: "Centro", disponible: true },
  { nombre: "Nueva Córdoba", disponible: true },
  { nombre: "General Paz", disponible: true },
  { nombre: "Alta Córdoba", disponible: true },
  { nombre: "Cofico", disponible: true },
  { nombre: "Alberdi", disponible: true },
  { nombre: "Güemes", disponible: true },
  { nombre: "Villa Cabrera", disponible: true },
  { nombre: "Cerro de las Rosas", disponible: true },
  { nombre: "Barrio Jardín", disponible: true },
  { nombre: "Villa Belgrano", disponible: true },
  { nombre: "Urca", disponible: true },
]

export function ZonasCobertura() {
  const [selectedZona, setSelectedZona] = useState<string | null>(null)

  const handleConsulta = () => {
    const mensaje = selectedZona
      ? `Hola Omar, estoy en ${selectedZona} y necesito un servicio de plomería`
      : "Hola Omar, quiero consultar si atienden en mi zona"
    window.open(`https://wa.me/5493511234567?text=${encodeURIComponent(mensaje)}`, "_blank")
  }

  return (
    <section id="zonas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Cobertura
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Atendemos en toda Córdoba Capital</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Llegamos a todos los barrios de Córdoba Capital. Consultá si atendemos en tu zona.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Mapa placeholder */}
            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Mapa de Cobertura</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-80 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src="/map-of-cordoba-argentina-with-marked-zones-and-cov.jpg"
                    alt="Mapa de cobertura en Córdoba Capital"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <p className="text-center font-semibold text-primary">Cobertura en toda Córdoba Capital</p>
                      <p className="text-sm text-muted-foreground text-center">Tiempo de respuesta: 30-60 minutos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lista de zonas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Barrios que atendemos:</h3>

              <div className="grid grid-cols-2 gap-3">
                {zonas.map((zona, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedZona(zona.nombre)}
                    className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedZona === zona.nombre
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{zona.nombre}</span>
                      {zona.disponible && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>

              {selectedZona && (
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-3">
                    Zona seleccionada: <span className="font-semibold text-primary">{selectedZona}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    ✅ Atendemos en esta zona con tiempo de respuesta de 30-60 minutos
                  </p>
                </div>
              )}

              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3">¿No encontrás tu zona?</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Consultanos por WhatsApp. Evaluamos cada caso y podemos hacer excepciones para urgencias o trabajos
                    grandes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleConsulta}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Consultar por WhatsApp</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => (window.location.href = "tel:+5493511234567")}
                      className="flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Llamar</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

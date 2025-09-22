"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const trabajos = [
  {
    id: 1,
    titulo: "Instalación completa de gas",
    categoria: "Gas",
    antes: "/old-gas-installation-before-repair.jpg",
    despues: "/new-professional-gas-installation-after-repair.jpg",
    descripcion: "Instalación completa de gas natural con termofusión en vivienda familiar",
  },
  {
    id: 2,
    titulo: "Refacción de baño completo",
    categoria: "Plomería",
    antes: "/old-bathroom-plumbing-before-renovation.jpg",
    despues: "/modern-bathroom-plumbing-after-renovation.jpg",
    descripcion: "Renovación completa de plomería en baño con nuevas instalaciones",
  },
  {
    id: 3,
    titulo: "Service de calefón",
    categoria: "Gas",
    antes: "/broken-water-heater-before-service.jpg",
    despues: "/repaired-water-heater-after-professional-service.jpg",
    descripcion: "Reparación y mantenimiento de calefón a gas con cambio de piezas",
  },
  {
    id: 4,
    titulo: "Instalación eléctrica",
    categoria: "Electricidad",
    antes: "/old-electrical-installation-before-upgrade.jpg",
    despues: "/new-electrical-installation-after-professional-wor.jpg",
    descripcion: "Actualización de instalación eléctrica con nuevos tableros y cableado",
  },
  {
    id: 5,
    titulo: "Desagote y cámara séptica",
    categoria: "Plomería",
    antes: "/clogged-drain-before-cleaning.jpg",
    despues: "/clean-septic-system-after-professional-work.jpg",
    descripcion: "Construcción de cámara séptica y sistema de desagote completo",
  },
  {
    id: 6,
    titulo: "Aire acondicionado",
    categoria: "Electricidad",
    antes: "/room-without-air-conditioning-before-installation.jpg",
    despues: "/room-with-professionally-installed-air-conditionin.jpg",
    descripcion: "Instalación completa de aire acondicionado split con carga de gas",
  },
]

export function GaleriaTrabajo() {
  const [filtro, setFiltro] = useState<string>("Todos")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [imagenActual, setImagenActual] = useState<string>("")
  const [trabajoActual, setTrabajoActual] = useState<any>(null)
  const [vistaAntes, setVistaAntes] = useState(true)

  const categorias = ["Todos", "Plomería", "Gas", "Electricidad"]

  const trabajosFiltrados = filtro === "Todos" ? trabajos : trabajos.filter((trabajo) => trabajo.categoria === filtro)

  const abrirLightbox = (trabajo: any, esAntes = true) => {
    setTrabajoActual(trabajo)
    setImagenActual(esAntes ? trabajo.antes : trabajo.despues)
    setVistaAntes(esAntes)
    setLightboxOpen(true)
  }

  const cambiarVista = () => {
    if (trabajoActual) {
      const nuevaVista = !vistaAntes
      setVistaAntes(nuevaVista)
      setImagenActual(nuevaVista ? trabajoActual.antes : trabajoActual.despues)
    }
  }

  return (
    <section id="trabajos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Nuestros Trabajos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Antes y después de nuestro trabajo</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Mirá la calidad de nuestros trabajos. Cada proyecto es una muestra de nuestro compromiso con la excelencia.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={filtro === categoria ? "default" : "outline"}
              onClick={() => setFiltro(categoria)}
              className="transition-all duration-200"
            >
              {categoria}
            </Button>
          ))}
        </div>

        {/* Grid de trabajos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trabajosFiltrados.map((trabajo) => (
            <Card key={trabajo.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Imagen principal (después) */}
                  <div className="relative overflow-hidden">
                    <img
                      src={trabajo.despues || "/placeholder.svg"}
                      alt={`${trabajo.titulo} - Después`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => abrirLightbox(trabajo, false)}
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Después
                      </Badge>
                    </div>
                  </div>

                  {/* Imagen antes (overlay) */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => abrirLightbox(trabajo, true)}
                      className="bg-white/90 hover:bg-white"
                    >
                      Ver Antes
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {trabajo.categoria}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-balance">{trabajo.titulo}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{trabajo.descripcion}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && trabajoActual && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={imagenActual || "/placeholder.svg"}
                    alt={`${trabajoActual.titulo} - ${vistaAntes ? "Antes" : "Después"}`}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={vistaAntes ? "destructive" : "secondary"}>{vistaAntes ? "Antes" : "Después"}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{trabajoActual.titulo}</h3>
                      <p className="text-muted-foreground">{trabajoActual.descripcion}</p>
                    </div>
                    <Button onClick={cambiarVista} variant="outline">
                      Ver {vistaAntes ? "Después" : "Antes"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

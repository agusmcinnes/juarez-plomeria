"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Wrench, Flame, Zap, Droplets, ShieldCheck, Clock, CheckCircle } from "lucide-react"

const servicios = {
  plomeria: {
    icon: Droplets,
    title: "Plomería",
    color: "text-blue-600",
    services: [
      "Instalaciones con termofusión en agua (con y sin albañilería)",
      "Refacciones en general",
      "Desagotes",
      "Pozos absorbentes con aros",
      "Cámara séptica con albañilería",
      "Plomería en general",
    ],
  },
  gas: {
    icon: Flame,
    title: "Gas",
    color: "text-orange-600",
    services: [
      "Instalaciones con termofusión en gas (con y sin albañilería)",
      "Service de calefones, termotanques y calderas",
      "Instalación de gas domiciliario",
      "Pruebas de hermeticidad",
    ],
  },
  electricidad: {
    icon: Zap,
    title: "Electricidad",
    color: "text-yellow-600",
    services: [
      "Electricidad de obra",
      "Instalación de aire acondicionado",
      "Carga de gas y service de aire",
      "Colocación de cerámicos",
    ],
  },
}

export function SeccionServicios() {
  const [activeTab, setActiveTab] = useState("plomeria")

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Servicios Profesionales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Todo lo que necesitás para tu hogar</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Ofrecemos servicios completos de plomería, gas y electricidad con la garantía de un profesional matriculado
            y más de 10 años de experiencia.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-2">
              {Object.entries(servicios).map(([key, servicio]) => {
                const IconComponent = servicio.icon
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex flex-col items-center space-y-2 py-4 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <IconComponent className={`w-6 h-6 ${servicio.color}`} />
                    <span className="font-semibold">{servicio.title}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(servicios).map(([key, servicio]) => {
              const IconComponent = servicio.icon
              return (
                <TabsContent key={key} value={key} className="animate-fade-in">
                  <Card className="border-2 shadow-lg">
                    <CardHeader className="text-center pb-8">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className={`w-8 h-8 ${servicio.color}`} />
                        </div>
                      </div>
                      <CardTitle className="text-3xl mb-2">{servicio.title}</CardTitle>
                      <CardDescription className="text-lg">
                        Servicios profesionales con garantía y materiales de primera calidad
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {servicio.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">{service}</span>
                          </div>
                        ))}
                      </div>

                  
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

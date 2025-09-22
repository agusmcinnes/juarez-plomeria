import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Search, CheckCircle } from "lucide-react"

const pasos = [
  {
    numero: "01",
    icon: MessageCircle,
    title: "Nos contás tu problema",
    description: "Llamanos o escribinos por WhatsApp. Describí qué está pasando y te orientamos sobre la urgencia.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    numero: "02",
    icon: Search,
    title: "Diagnosticamos y cotizamos",
    description: "Vamos a tu domicilio, evaluamos el problema y te damos un presupuesto claro sin sorpresas.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    numero: "03",
    icon: CheckCircle,
    title: "Lo resolvemos y garantizamos",
    description: "Realizamos el trabajo con materiales de primera y te entregamos la garantía por escrito.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

export function Proceso3Pasos() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Proceso Simple
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Así de fácil trabajamos</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Un proceso transparente y profesional en solo 3 pasos. Desde el primer contacto hasta la garantía final.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Línea conectora en desktop */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-green-200" />

            {pasos.map((paso, index) => {
              const IconComponent = paso.icon
              return (
                <Card
                  key={index}
                  className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
                >
                  {/* Número del paso */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-16 h-16 ${paso.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className={`w-8 h-8 ${paso.color}`} />
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-4xl font-bold text-muted-foreground/30">{paso.numero}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-balance">{paso.title}</h3>

                    <p className="text-muted-foreground leading-relaxed text-pretty">{paso.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Proceso garantizado y transparente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Clock, FileText, Award, DollarSign, CreditCard } from "lucide-react"

const diferenciales = [
  {
    icon: ShieldCheck,
    title: "Matriculado y Habilitado",
    description: "Gasista matriculado con todas las habilitaciones al día para trabajar con seguridad.",
    color: "text-green-600",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida 24/7",
    description: "Atendemos urgencias todos los días del año. Tu problema no puede esperar.",
    color: "text-blue-600",
  },
  {
    icon: FileText,
    title: "Garantía por Escrito",
    description: "Todos nuestros trabajos incluyen garantía por escrito para tu tranquilidad.",
    color: "text-purple-600",
  },
  {
    icon: Award,
    title: "Materiales de Primera",
    description: "Trabajamos solo con materiales de marcas reconocidas y primera calidad.",
    color: "text-orange-600",
  },
  {
    icon: DollarSign,
    title: "Presupuesto Claro",
    description: "Sin sorpresas. Presupuesto detallado antes de comenzar cualquier trabajo.",
    color: "text-green-600",
  },
  {
    icon: CreditCard,
    title: "Medios de Pago",
    description: "Aceptamos efectivo, transferencia, débito y crédito para tu comodidad.",
    color: "text-indigo-600",
  },
]

export function SeccionDiferenciales() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            ¿Por qué elegirnos?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">La diferencia está en los detalles</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Más de 10 años de experiencia nos respaldan. Conocé por qué somos la opción preferida de cientos de familias
            en Córdoba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {diferenciales.map((diferencial, index) => {
            const IconComponent = diferencial.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`w-8 h-8 ${diferencial.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-balance">{diferencial.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{diferencial.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-6 py-3 rounded-full">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold">+500 trabajos realizados con éxito</span>
          </div>
        </div>
      </div>
    </section>
  )
}

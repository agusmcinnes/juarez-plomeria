import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonios = [
  {
    nombre: "María González",
    barrio: "Nueva Córdoba",
    rating: 5,
    comentario:
      "Excelente servicio. Omar vino en menos de una hora por una urgencia de gas. Muy profesional y el precio fue justo. Lo recomiendo 100%.",
    servicio: "Urgencia de gas",
  },
  {
    nombre: "Carlos Rodríguez",
    barrio: "Centro",
    rating: 5,
    comentario:
      "Hizo toda la instalación de plomería de mi casa nueva. Trabajo impecable, materiales de primera y cumplió con los tiempos. Un profesional de verdad.",
    servicio: "Instalación completa",
  },
  {
    nombre: "Ana Martínez",
    barrio: "Güemes",
    rating: 5,
    comentario:
      "Me solucionó un problema de calefón que otros no pudieron. Muy honesto con el presupuesto y la garantía que me dio se cumplió al pie de la letra.",
    servicio: "Service de calefón",
  },
  {
    nombre: "Roberto Silva",
    barrio: "Villa Cabrera",
    rating: 5,
    comentario:
      "Instaló el aire acondicionado en mi oficina. Trabajo prolijo, limpio y rápido. Además me explicó todo el mantenimiento que tengo que hacer.",
    servicio: "Instalación de aire",
  },
  {
    nombre: "Laura Fernández",
    barrio: "Alberdi",
    rating: 5,
    comentario:
      "Urgencia un domingo a la noche y vino igual. Solucionó la pérdida de agua en minutos. Precio justo para un domingo. Muy agradecida.",
    servicio: "Urgencia plomería",
  },
]

export function Testimonios() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Testimonios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Leé lo que opinan sobre nuestro
            servicio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 relative overflow-hidden"
            >
              {/* Icono de comillas */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comentario */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  "{testimonio.comentario}"
                </blockquote>

                {/* Info del cliente */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonio.nombre}</p>
                      <p className="text-sm text-muted-foreground">{testimonio.barrio}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonio.servicio}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Trabajos realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Rating promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Atención urgencias</div>
          </div>
        </div>
      </div>
    </section>
  )
}

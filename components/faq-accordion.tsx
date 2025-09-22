"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    pregunta: "¿Atienden urgencias 24/7?",
    respuesta:
      "Sí, cubrimos urgencias en Córdoba Capital todos los días del año. Para urgencias reales como pérdidas de gas, agua o problemas eléctricos que pongan en riesgo la seguridad, atendemos las 24 horas.",
  },
  {
    pregunta: "¿Trabajan con gas natural?",
    respuesta:
      "Sí, soy gasista matriculado habilitado para trabajar con gas natural y envasado. Realizamos instalaciones, reparaciones, service de artefactos y pruebas de hermeticidad con certificación.",
  },
  {
    pregunta: "¿Qué zonas de Córdoba atienden?",
    respuesta:
      "Atendemos Centro, Nueva Córdoba, General Paz, Alta Córdoba, Cofico, Alberdi, Güemes, Villa Cabrera y zonas aledañas. Para otras zonas consultá por WhatsApp, evaluamos cada caso.",
  },
  {
    pregunta: "¿Dan garantía por los trabajos?",
    respuesta:
      "Sí, todos nuestros trabajos incluyen garantía por escrito. La duración depende del tipo de trabajo: instalaciones nuevas 12 meses, reparaciones 6 meses, service de artefactos 3 meses.",
  },
  {
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta:
      "Aceptamos efectivo, transferencia bancaria, débito y crédito. Para trabajos grandes podemos acordar formas de pago especiales. Siempre entregamos factura o recibo.",
  },
  {
    pregunta: "¿Cobran la visita para presupuestar?",
    respuesta:
      "La visita para presupuesto es gratuita en trabajos de más de $50.000. Para trabajos menores o diagnósticos específicos, la visita tiene un costo mínimo que se descuenta si contratan el servicio.",
  },
  {
    pregunta: "¿Cuánto tiempo tardan en venir?",
    respuesta:
      "Para urgencias reales: 30-60 minutos. Para trabajos programados: coordinamos horario según tu disponibilidad, generalmente dentro de las 48hs. Siempre confirmamos antes de ir.",
  },
  {
    pregunta: "¿Traen los materiales o los tengo que comprar yo?",
    respuesta:
      "Podemos trabajar de ambas formas. Si querés, nosotros compramos todos los materiales (con factura) o podés comprarlos vos y nosotros solo cobramos la mano de obra.",
  },
]

export function FAQAccordion() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Resolvemos tus dudas</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Las preguntas más comunes que nos hacen nuestros clientes. Si no encontrás tu respuesta, contactanos
            directamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-lg text-balance pr-4">{faq.pregunta}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-pretty">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA adicional */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col items-center space-y-4 bg-primary/5 p-8 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-primary">¿Tenés otra pregunta?</h3>
              <p className="text-muted-foreground text-center max-w-md">
                No dudes en contactarnos. Estamos para ayudarte y resolver todas tus dudas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    window.open("https://wa.me/5493511234567?text=Hola%20Omar,%20tengo%20una%20consulta", "_blank")
                  }
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Preguntar por WhatsApp
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+5493511234567")}
                  className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-lg transition-colors"
                >
                  Llamar directamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

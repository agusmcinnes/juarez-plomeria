"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FileText, Phone, MessageCircle, Mail, CheckCircle, Clock } from "lucide-react"

export function FormularioPresupuesto() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    whatsapp: "",
    email: "",
    domicilio: "",
    tipoServicio: "",
    descripcion: "",
    urgencia: false,
    contacto: "whatsapp",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Enviar por WhatsApp también
    const mensaje = `Hola Omar, te envío mi solicitud de presupuesto:
    
Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Domicilio: ${formData.domicilio}
Servicio: ${formData.tipoServicio}
Descripción: ${formData.descripcion}
${formData.urgencia ? "URGENCIA 24/7" : "No es urgencia"}

Preferencia de contacto: ${formData.contacto === "whatsapp" ? "WhatsApp" : formData.contacto === "telefono" ? "Teléfono" : "Email"}`

    setTimeout(() => {
      window.open(`https://wa.me/5493511234567?text=${encodeURIComponent(mensaje)}`, "_blank")
    }, 1000)
  }

  const formatTelefono = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
  }

  if (isSubmitted) {
    return (
      <section id="presupuesto" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">¡Presupuesto enviado con éxito!</h3>
                <p className="text-green-700 mb-6">
                  Te contactamos en los próximos minutos. También te redirigimos a WhatsApp para que tengas nuestro
                  contacto directo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Enviar otro presupuesto
                  </Button>
                  <Button
                    onClick={() => window.open("https://wa.me/5493511234567", "_blank")}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ir a WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="presupuesto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Presupuesto Gratuito
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Pedí tu presupuesto</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Completá el formulario y te contactamos en minutos con un presupuesto detallado y sin compromiso.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulario */}
            <div className="lg:col-span-2">
              <Card className="border-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span>Datos del presupuesto</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Datos personales */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder="Tu nombre y apellido"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: formatTelefono(e.target.value) })}
                          placeholder="351-123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
                        <Input
                          id="whatsapp"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: formatTelefono(e.target.value) })}
                          placeholder="Si es diferente al teléfono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    {/* Ubicación y servicio */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="domicilio">Domicilio/Barrio *</Label>
                        <Input
                          id="domicilio"
                          value={formData.domicilio}
                          onChange={(e) => setFormData({ ...formData, domicilio: e.target.value })}
                          placeholder="Dirección o barrio"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="servicio">Tipo de servicio *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, tipoServicio: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccioná el servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plomeria">Plomería</SelectItem>
                            <SelectItem value="gas">Gas</SelectItem>
                            <SelectItem value="electricidad">Electricidad/Aire</SelectItem>
                            <SelectItem value="otros">Otros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Descripción */}
                    <div className="space-y-2">
                      <Label htmlFor="descripcion">Descripción del problema *</Label>
                      <Textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                        placeholder="Contanos en 2 líneas qué está pasando..."
                        rows={4}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Mientras más detalles nos des, mejor presupuesto te podemos hacer
                      </p>
                    </div>

                    {/* Opciones adicionales */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="urgencia"
                          checked={formData.urgencia}
                          onCheckedChange={(checked) => setFormData({ ...formData, urgencia: checked as boolean })}
                        />
                        <Label htmlFor="urgencia" className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-red-500" />
                          <span>Es una urgencia 24/7</span>
                        </Label>
                      </div>

                      <div className="space-y-3">
                        <Label>Preferencia de contacto:</Label>
                        <RadioGroup
                          value={formData.contacto}
                          onValueChange={(value) => setFormData({ ...formData, contacto: value })}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                            <Label htmlFor="whatsapp-contact" className="flex items-center space-x-2">
                              <MessageCircle className="w-4 h-4 text-green-600" />
                              <span>WhatsApp (recomendado)</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="telefono" id="telefono-contact" />
                            <Label htmlFor="telefono-contact" className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-blue-600" />
                              <span>Llamada telefónica</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email-contact" />
                            <Label htmlFor="email-contact" className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-gray-600" />
                              <span>Email</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    {/* Botón de envío */}
                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Enviando presupuesto...
                        </>
                      ) : (
                        <>
                          <FileText className="w-5 h-5 mr-2" />
                          Enviar presupuesto gratuito
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar con info adicional */}
            <div className="space-y-6">
              {/* Contacto rápido */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">¿Necesitás ayuda ya?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-700 text-sm">Si es una urgencia o preferís hablar directamente:</p>
                  <div className="space-y-3">
                    <Button
                      onClick={() =>
                        window.open(
                          "https://wa.me/5493511234567?text=Hola%20Omar,%20necesito%20ayuda%20urgente",
                          "_blank",
                        )
                      }
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp directo
                    </Button>
                    <Button
                      onClick={() => (window.location.href = "tel:+5493511234567")}
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Garantías */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Tu presupuesto incluye:</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Visita gratuita para evaluar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Presupuesto detallado por escrito</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Sin compromiso de contratación</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Respuesta en menos de 2 horas</span>
                    </div>
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

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export function BarraStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar la barra después de scroll inicial
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/5493511234567?text=Hola%20Omar,%20necesito%20ayuda%20con%20plomería", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+5493511234567"
  }

  const scrollToForm = () => {
    document.getElementById("presupuesto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="bg-white border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-3">
            <Button
              onClick={handleWhatsApp}
              className="flex flex-col items-center space-y-1 bg-green-600 hover:bg-green-700 text-white py-3 h-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs">WhatsApp</span>
            </Button>

            <Button
              onClick={handleCall}
              variant="outline"
              className="flex flex-col items-center space-y-1 py-3 h-auto hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs">Llamar</span>
            </Button>

            <Button
              onClick={scrollToForm}
              className="flex flex-col items-center space-y-1 bg-accent hover:bg-accent/90 py-3 h-auto"
            >
              <FileText className="w-5 h-5" />
              <span className="text-xs">Presupuesto</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

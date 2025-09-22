"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function NavbarSticky() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/5493511234567?text=Hola%20Omar,%20necesito%20un%20presupuesto%20de%20plomería", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+5493511234567"
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OJ</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-foreground">Omar Juárez</h1>
                <p className="text-xs text-muted-foreground">Plomería & Gas</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#zonas" className="text-foreground hover:text-primary transition-colors">
                Zonas
              </a>
              <a href="#trabajos" className="text-foreground hover:text-primary transition-colors">
                Trabajos
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCall}
                className="flex items-center space-x-2 bg-transparent"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar</span>
              </Button>
              <Button onClick={handleWhatsApp} className="flex items-center space-x-2 bg-accent hover:bg-accent/90">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#servicios"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#zonas"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Zonas
              </a>
              <a
                href="#trabajos"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trabajos
              </a>
              <a
                href="#contacto"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="flex space-x-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCall}
                  className="flex-1 flex items-center justify-center space-x-2 bg-transparent"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar</span>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="flex-1 flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

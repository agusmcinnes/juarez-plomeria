import { NavbarSticky } from "@/components/navbar-sticky"
import { HeroPrincipal } from "@/components/hero-principal"
import { BarraStickyCTA } from "@/components/barra-sticky-cta"
import { SeccionServicios } from "@/components/seccion-servicios"
import { SeccionDiferenciales } from "@/components/seccion-diferenciales"
import { ZonasCobertura } from "@/components/zonas-cobertura"
import { Proceso3Pasos } from "@/components/proceso-3-pasos"
import { GaleriaTrabajo } from "@/components/galeria-trabajo"
import { Testimonios } from "@/components/testimonios"
import { FAQAccordion } from "@/components/faq-accordion"
import { FormularioPresupuesto } from "@/components/formulario-presupuesto"
import { ContactoRapido } from "@/components/contacto-rapido"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavbarSticky />
      <HeroPrincipal />
      <BarraStickyCTA />
      <SeccionServicios />
      <SeccionDiferenciales />
      <ZonasCobertura />
      <Proceso3Pasos />
      <Testimonios />
      <FAQAccordion />
      <FormularioPresupuesto />
      <ContactoRapido />
      <Footer />
    </main>
  )
}

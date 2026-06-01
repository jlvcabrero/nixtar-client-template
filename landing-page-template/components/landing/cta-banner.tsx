import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import config from "@/lib/siteConfig"

export function CtaBanner() {
  return (
    <section id="contacto" className="py-20 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          ¿Listo para visitarnos?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Contáctanos ahora y recibe atención personalizada
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all"
        >
          <Link href={`https://wa.me/${config.whatsapp}`} target="_blank">
            <MessageCircle className="w-6 h-6 mr-3" />
            {config.cta}
          </Link>
        </Button>
      </div>
    </section>
  )
}

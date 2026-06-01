import { Wrench, Sparkles, Truck, Shield, Clock, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import config from "@/lib/siteConfig"

const icons = [Wrench, Sparkles, Truck, Shield, Clock, Heart]

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para satisfacer tus necesidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.servicios.map((servicio, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Card
                key={index}
                className="group bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {servicio.nombre}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

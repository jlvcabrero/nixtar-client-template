import { Wrench, Sparkles, Truck, Shield, Clock, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Wrench,
    title: "SERVICIO_1",
    description: "Descripción del servicio que ofreces a tus clientes con calidad garantizada.",
  },
  {
    icon: Sparkles,
    title: "SERVICIO_2",
    description: "Descripción del servicio que ofreces a tus clientes con calidad garantizada.",
  },
  {
    icon: Truck,
    title: "SERVICIO_3",
    description: "Descripción del servicio que ofreces a tus clientes con calidad garantizada.",
  },
  {
    icon: Shield,
    title: "SERVICIO_4",
    description: "Descripción del servicio que ofreces a tus clientes con calidad garantizada.",
  },
  {
    icon: Clock,
    title: "SERVICIO_5",
    description: "Descripción del servicio que ofreces a tus clientes con calidad garantizada.",
  },
  {
    icon: Heart,
    title: "SERVICIO_6",
    description: "Descripción del servicio que ofreces a tus clientes con calidad garantizada.",
  },
]

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
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

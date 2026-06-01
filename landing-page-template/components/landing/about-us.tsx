import { Users, Clock, ThumbsUp } from "lucide-react"

const stats = [
  { icon: Clock, value: "10+", label: "años" },
  { icon: Users, value: "500+", label: "clientes" },
  { icon: ThumbsUp, value: "100%", label: "recomendado" },
]

export function AboutUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos <strong className="text-foreground">NOMBRE_NEGOCIO</strong>, tu aliado de confianza en CIUDAD. 
              DESCRIPCION_DEL_NEGOCIO. Nos dedicamos a ofrecer servicios de la más alta calidad, 
              con un enfoque personalizado para cada uno de nuestros clientes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Con más de una década de experiencia en el mercado, hemos construido 
              relaciones duraderas basadas en la confianza, profesionalismo y 
              resultados excepcionales.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary rounded-xl px-5 py-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                <span className="text-muted-foreground text-sm">IMAGEN_ABOUT</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

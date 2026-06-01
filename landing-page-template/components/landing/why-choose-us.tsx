import { Award, UserCheck, CalendarCheck } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Calidad garantizada",
    description: "Utilizamos los mejores materiales y técnicas para asegurar resultados excepcionales.",
  },
  {
    icon: UserCheck,
    title: "Servicio personalizado",
    description: "Nos adaptamos a tus necesidades específicas para brindarte la mejor experiencia.",
  },
  {
    icon: CalendarCheck,
    title: "Años de experiencia",
    description: "Más de una década respaldando a nuestros clientes con profesionalismo y dedicación.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Razones por las que somos la mejor opción para tu negocio
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

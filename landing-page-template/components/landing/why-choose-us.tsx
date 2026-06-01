import { Award, UserCheck, CalendarCheck } from "lucide-react"
import config from "@/lib/siteConfig"

const icons = [Award, UserCheck, CalendarCheck]

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
            Razones por las que somos la mejor opción para ti
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {config.por_que_elegirnos.map((feature, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.titulo}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-sm mx-auto">
                  {feature.descripcion}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

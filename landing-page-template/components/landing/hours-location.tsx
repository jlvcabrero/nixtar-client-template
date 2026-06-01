import { Clock, MapPin, Map } from "lucide-react"

const schedule = [
  { day: "Lunes - Viernes", hours: "HH:MM - HH:MM" },
  { day: "Sábado", hours: "HH:MM - HH:MM" },
  { day: "Domingo", hours: "CERRADO" },
]

export function HoursLocation() {
  return (
    <section id="horarios" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Horarios y Ubicación
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visítanos en nuestras instalaciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Schedule */}
          <div className="bg-card rounded-2xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Horarios de atención</h3>
            </div>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <span className="text-foreground font-medium">{item.day}</span>
                  <span className={`${item.hours === "CERRADO" ? "text-destructive" : "text-muted-foreground"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-card rounded-2xl shadow-md overflow-hidden">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] bg-muted flex flex-col items-center justify-center">
              <Map className="w-12 h-12 text-muted-foreground mb-3" />
              <span className="text-muted-foreground text-sm">GOOGLE_MAPS_EMBED</span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>DIRECCION_COMPLETA, CIUDAD, ESTADO</span>
          </div>
        </div>
      </div>
    </section>
  )
}

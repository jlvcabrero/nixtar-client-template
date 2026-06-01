"use client"

import { useState } from "react"
import { ImageIcon } from "lucide-react"

const galleryItems = [
  { id: 1, label: "IMAGEN_1" },
  { id: 2, label: "IMAGEN_2" },
  { id: 3, label: "IMAGEN_3" },
  { id: 4, label: "IMAGEN_4" },
  { id: 5, label: "IMAGEN_5" },
  { id: 6, label: "IMAGEN_6" },
]

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galería
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce nuestro trabajo y nuestras instalaciones
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Blurred gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-primary/5 blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-blue-500/20 to-blue-600/10" />
              
              {/* Image icon and label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <ImageIcon className="w-10 h-10 text-primary/60" />
                <span className="text-primary/70 text-sm font-medium">{item.label}</span>
              </div>
              
              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-white font-medium">Ver más</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

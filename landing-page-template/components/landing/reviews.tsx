import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    quote: "RESENA_1",
    name: "CLIENTE_1",
    rating: 5,
  },
  {
    id: 2,
    quote: "RESENA_2",
    name: "CLIENTE_2",
    rating: 5,
  },
  {
    id: 3,
    quote: "RESENA_3",
    name: "CLIENTE_3",
    rating: 5,
  },
]

export function Reviews() {
  return (
    <section id="resenas" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-4 leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Reviewer Name */}
              <p className="text-primary font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

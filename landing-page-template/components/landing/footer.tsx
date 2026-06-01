import Link from "next/link"
import { Phone, MapPin, Instagram, Facebook, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">NN</span>
              </div>
              <span className="font-bold text-xl">NOMBRE_NEGOCIO</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Tu aliado de confianza en CIUDAD. Brindando servicios de calidad desde hace más de 10 años.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>TELEFONO</span>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>DIRECCION_COMPLETA, CIUDAD, ESTADO</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/USUARIO_INSTAGRAM"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/PAGINA_FACEBOOK"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2026 NOMBRE_NEGOCIO. Todos los derechos reservados.
          </p>
          <Link
            href="https://nixtar.mx"
            target="_blank"
            className="text-white/50 text-sm hover:text-primary transition-colors flex items-center gap-1"
          >
            Sitio web desarrollado por NixTar.mx
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

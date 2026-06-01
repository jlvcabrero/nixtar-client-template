"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import config from "@/lib/siteConfig"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#horarios", label: "Horarios" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const initials = config.nombre
    .split(" ")
    .slice(0, 2)
    .map((w: string) => w[0])
    .join("")
    .toUpperCase()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">{initials}</span>
            </div>
            <span className={`font-bold text-lg hidden sm:block transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              {config.nombre}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden sm:flex bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl"
            >
              <Link href={`https://wa.me/${config.whatsapp}`} target="_blank">
                <MessageCircle className="w-4 h-4 mr-2" />
                Escríbenos
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background rounded-xl shadow-lg mb-4 p-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl mt-2"
              >
                <Link href={`https://wa.me/${config.whatsapp}`} target="_blank">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Escríbenos
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

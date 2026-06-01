import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { AboutUs } from "@/components/landing/about-us"
import { Services } from "@/components/landing/services"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { Gallery } from "@/components/landing/gallery"
import { Reviews } from "@/components/landing/reviews"
import { HoursLocation } from "@/components/landing/hours-location"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <HoursLocation />
      <CtaBanner />
      <Footer />
    </main>
  )
}

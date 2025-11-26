"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedSweets from "@/components/featured-sweet"
// import Categories from "@/components/categories"
import BestSellers from "@/components/best-sellers"
import Testimonials from "@/components/testimonials"
import SpecialOffers from "@/components/special-offer"
import Footer from "@/components/footer"
import PromoBanner from "@/components/promo-banner"
import MaidaItems from "@/components/maida-items"
import Mithai from "@/components/mithai"
import Namkeens from "@/components/namkeens"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <Header />
      <Hero />
      <FeaturedSweets />
      <BestSellers />
      <MaidaItems />
      <Mithai />
      <Namkeens />
      <SpecialOffers />
      {/* <Categories /> */}
      <Testimonials />
      <Footer />
    </main>
  )
}


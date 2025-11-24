import Header from "@/components/header"
import Footer from "@/components/footer"
import LocationsMap from "@/components/locations-map"
import PromoBanner from "@/components/promo-banner"

export default function VisitUsPage() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <Header />
      <div className="pt-10 pb-16">
        <LocationsMap />
      </div>
      <Footer />
    </main>
  )
}


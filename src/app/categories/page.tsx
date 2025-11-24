import Header from "@/components/header"
import Footer from "@/components/footer"
import AllCategories from "@/components/all-categories"
import PromoBanner from "@/components/promo-banner"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <Header />
      <div className="pt-24 pb-16">
        <AllCategories />
      </div>
      <Footer />
    </main>
  )
}


"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function FeaturedSweets() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const sweets = [
    {
      id: 1,
      title: "Kaju Katli",
      category: "Cashew Based",
      price: "₹650/kg",
      thumbnail: "/images/kaju_katli.jpg",
    },
    {
      id: 2,
      title: "Gulab Jamun",
      category: "Milk Based",
      price: "₹450/kg",
      thumbnail: "/images/gulab_jamun.jpg",
    },
    {
      id: 3,
      title: "Rasgulla",
      category: "Bengali Sweet",
      price: "₹500/kg",
      thumbnail: "/images/rasgulla.jpg",
    },
    {
      id: 4,
      title: "Motichoor Ladoo",
      category: "Gram Flour Based",
      price: "₹550/kg",
      thumbnail: "/images/laddoo.jpg",
    },
    {
      id: 5,
      title: "Ghewar",
      category: "Fried Sweet",
      price: "₹400/kg",
      thumbnail: "/images/ghewar.jpg",
    },
    {
      id: 6,
      title: "Modak",
      category: "Pooja Sweet",
      price: "₹400/kg",
      thumbnail: "/images/modak.jpg",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const scrollContainer = (direction:unknown) => {
    const container = document.getElementById("featured-sweets-container")
    if (container) {
      const scrollAmount = direction === "left" ? -container.offsetWidth / 2 : container.offsetWidth / 2
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-[#e94560]/10 via-[#ffa500]/10 to-accent/10 px-4 md:px-8 lg:px-16 :bg-gray-900">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Featured Sweets</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scrollContainer("left")} aria-label="Scroll left">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scrollContainer("right")} aria-label="Scroll right">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            id="featured-sweets-container"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sweets.map((sweet) => (
              <motion.div key={sweet.id} variants={item} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start">
                <div className="sweet-[#ffffff] group">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      height={400}
                      width={600}
                      src={sweet.thumbnail || "/placeholder.svg"}
                      alt={sweet.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" className="bg-[#e94560] hover:bg-[#e94560]/90 text-white rounded-full h-12 w-12">
                        <Eye className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-xs text-white/80">{sweet.price}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">{sweet.title}</h3>
                    <p className="text-sm text-gray-500 :text-gray-400">{sweet.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


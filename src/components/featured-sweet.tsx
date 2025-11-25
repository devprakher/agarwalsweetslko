"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function FeaturedSweets() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const sweets = [
    {
      id: 1,
      title: "Madhumati",
      category: "हर बाइट में मधुर लखनवी सा प्यार !",
      price: "₹640/kg",
      thumbnail: "/images/madhumati_640.jpg",
    },
    {
      id: 2,
      title: "Mughal-E-Azam",
      category: "शाही स्वाद, जो दिल पर हुकूमत करे !",
      price: "₹640/kg",
      thumbnail: "/images/mughleazam_640.png",
    },
    {
      id: 3,
      title: "Paakiza",
      category: "नर्म, नाज़ुक और बिल्कुल लखनवी मिठास !",
      price: "₹640/kg",
      thumbnail: "/images/paakiza_640.jpg",
    },
    {
      id: 4,
      title: "Chena Toast",
      category: "पुराना स्वाद, नया लखनवी अंदाज़ !",
      price: "₹640/kg",
      thumbnail: "/images/chenatoast_640.png",
    },
    {
      id: 5,
      title: "Pista Kali",
      category: "नवबी पिसता की हरी भरी नुमाइश !",
      price: "₹640/kg",
      thumbnail: "/images/pistakali_640.png",
    },
    {
      id: 6,
      title: "Chena Chaap",
      category: "मुलायम छेना, अवधि नज़ाकत के साथ !",
      price: "₹640/kg",
      thumbnail: "/images/chenachaap_640.png",
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
    <section ref={sectionRef} className="py-8 bg-gradient-to-r from-[#e94560]/10 via-[#ffa500]/10 to-accent/10 px-4 md:px-8 lg:px-16 :bg-gray-900">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Chena Mithai</h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">नर्म, मुलायम और दिल को सुकून देने वाली मिठास !</p>
          </div>
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


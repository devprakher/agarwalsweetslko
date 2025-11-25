"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function Premium() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const items = [
    {
      id: 1,
      title: "Premium Kaju Katli",
      category: "शाही काजू कतली, असली स्वाद !",
      price: "₹850/kg",
      thumbnail: "/images/kaju_katli.jpg",
    },
    {
      id: 2,
      title: "Premium Pista Barfi",
      category: "पिस्ता की मिठास, प्रीमियम गुणवत्ता !",
      price: "₹900/kg",
      thumbnail: "/images/tricolor_barfi.jpg",
    },
    {
      id: 3,
      title: "Premium Khoya Sweets",
      category: "गाढ़ा खोया, शाही स्वाद !",
      price: "₹750/kg",
      thumbnail: "/images/khoya.jpg",
    },
    {
      id: 4,
      title: "Premium Dry Fruits Mix",
      category: "सूखे मेवे की मिठास, हेल्थी और टेस्टी !",
      price: "₹1200/kg",
      thumbnail: "/images/kaju_katli.jpg",
    },
    {
      id: 5,
      title: "Premium Gift Box",
      category: "खास तोहफ़ा, प्रीमियम मिठाई का बॉक्स !",
      price: "₹1500/box",
      thumbnail: "/images/tricolor_barfi.jpg",
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

  const scrollContainer = (direction: unknown) => {
    const container = document.getElementById("premium-container")
    if (container) {
      const scrollAmount = direction === "left" ? -container.offsetWidth / 2 : container.offsetWidth / 2
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="pt-8 pb-2 bg-white px-4 md:px-8 lg:px-16 :bg-gray-900 border-b border-gray-200">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Premium</h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">शाही गुणवत्ता, असली स्वाद और बेहतरीन अनुभव !</p>
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
            id="premium-container"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((sweet) => (
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


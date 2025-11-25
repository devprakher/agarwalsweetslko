"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function MaidaItems() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const items = [
    {
      id: 1,
      title: "Bada Khasta",
      category: "कुरकुरा और भरपूर स्वाद वाला लखनवी क्लासिक !",
      price: "₹280/kg",
      thumbnail: "/images/badakhasta_280.jpg",
    },
    {
        id: 2,
        title: "Bhel Papdi",
        category: "हल्का, मज़ेदार और चटपटा स्वाद !",
        price: "₹240/kg",
        thumbnail: "/images/bhelpapdi_240.jpg",
      },
      {
        id: 3,
        title: "Chota Khasta",
        category: "छोटा आकार, बड़ी कुरकुराहट !",
        price: "₹280/kg",
        thumbnail: "/images/chotakhasta_280.jpg",
      },
      {
        id: 4,
        title: "Kaalimirch Mathri",
        category: "काली मिर्च की हल्की तीख़ी चटकारा !",
        price: "₹220/kg",
        thumbnail: "/images/kaalimirchmathri_220.jpg",
      },
      {
        id: 5,
        title: "Mini Samosa",
        category: "हर बाइट में मसालेदार मज़ा !",
        price: "₹280/kg",
        thumbnail: "/images/minisamosa_280.jpg",
      },
      {
        id: 6,
        title: "Namak Para",
        category: "पारंपरिक नमकीन, एकदम करारा !",
        price: "₹240/kg",
        thumbnail: "/images/namakpara_240.jpg",
      },
      {
        id: 7,
        title: "Saakhe",
        category: "पारंपरिक नमकीन, एकदम करारा !",
        price: "₹240/kg",
        thumbnail: "/images/namakpara_240.jpg",
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
    const container = document.getElementById("maida-items-container")
    if (container) {
      const scrollAmount = direction === "left" ? -container.offsetWidth / 2 : container.offsetWidth / 2
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="pt-8 pb-2 bg-gradient-to-r from-[#e94560]/10 via-[#ffa500]/10 to-accent/10 px-4 md:px-8 lg:px-16 :bg-gray-900 border-b border-gray-200">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Lakhnawi Maida Nivaale</h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">तीखा, कुरकुरा, बिल्कुल असली लखनवी अंदाज़ !</p>
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
            id="maida-items-container"
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


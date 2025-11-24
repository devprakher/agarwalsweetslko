"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Gift, ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"


export default function SpecialOffers() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const offers = [
    {
      id: 1,
      title: "Diwali Special Box",
      description: "A premium collection of 12 varieties of traditional sweets perfect for Diwali celebrations.",
      price: "₹1,200",
      image: "/images/bhujia.jpg",
      badge: "Limited Edition",
    },
    {
      id: 2,
      title: "Assorted Gift Pack",
      description: "Our bestselling assortment featuring 8 varieties of handcrafted sweets in an elegant box.",
      price: "₹850",
      image: "/images/peda.jpg",
      badge: "Popular",
    },
    {
      id: 3,
      title: "Wedding Collection",
      description: "Luxurious sweet boxes perfect for wedding gifts and special occasions.",
      price: "₹1,500",
      image: "/images/kaju_katli.jpg",
      badge: "Premium",
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

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#e94560]/10 via-[#ffa500]/10 to-accent/10">
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className=" section-title text-2xl md:text-3xl font-bold mb-4"
        >
          Special Gift Collections
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={item}
              className="bg-white :bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image height={400} width={600} src={offer.image || "/placeholder.svg"} alt={offer.title} className="w-full h-48 object-cover" />
                {offer.badge && (
                  <div className="absolute top-4 right-4 bg-[#e94560] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {offer.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 :text-gray-400 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#e94560]">{offer.price}</span>
                  <Button className="bg-[#e94560] text-white font-bold hover:bg-[#e94560]/90">
                    <Gift className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-[#e94560] text-white font-bold hover:bg-[#e94560]/90">
            <ShoppingBag className="mr-2 h-5 w-5" /> View All Collections
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


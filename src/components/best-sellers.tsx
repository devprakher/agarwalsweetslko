"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Star, Eye } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function BestSellers() {
  const sectionRef = useRef(null)
  // const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const bestSellers = [
    {
      id: 1,
      title: "Kaju Barfi",
      category: "Cashew Based",
      rating: 4.8,
      price: "₹750/kg",
      thumbnail: "/images/kaju_katli.jpg",
    },
    {
      id: 2,
      title: "Soan Papdi",
      category: "Flaky Sweet",
      rating: 4.6,
      price: "₹450/kg",
      thumbnail: "/images/sonpapdi.jpg",
    },
    {
      id: 3,
      title: "Rabri",
      category: "Indian Sweet",
      rating: 4.9,
      price: "₹650/kg",
      thumbnail: "/images/rabri.jpg",
    },
    {
      id: 4,
      title: "Besan Ladoo",
      category: "Gram Flour Based",
      rating: 4.7,
      price: "₹550/kg",
      thumbnail: "/images/panjeeri_laddo.jpg",
    },
    {
      id: 5,
      title: "Nariyal laddo",
      category: "South Indian",
      rating: 4.5,
      price: "₹600/kg",
      thumbnail: "/images/nariyal_laddoo.jpg",
    },
    {
      id: 6,
      title: "Peda",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/peda.jpg",
    },
    {
      id: 7,
      title: "Chena",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/chenna_cherry.jpg",
    },
    {
      id: 8,
      title: "Chamcham",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/chamcham.jpg",
    },
    {
      id: 8.5,
      title: "Barfi",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/tricolor_barfi.jpg",
    },
    {
      id: 9,
      title: "Paan",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/paan.jpg",
    },
    {
      id: 10,
      title: "Nariyal Laddoo",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/nariyal_laddoo.jpg",
    },{
      id: 11,
      title: "Khoya Special Barfi",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/khoya.jpg",
    },
    {
      id: 12,
      title: "Bhujia",
      category: "Gram Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/bhujia.jpg",
    },
    {
      id: 13,
      title: "Khasta",
      category: "WHeat Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/khasta.jpg",
    },
    {
      id: 14,
      title: "Mathri",
      category: "Wheat Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/images/matri.jpg",
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
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gray :bg-gray-900">
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5 }}
          className=" section-title text-2xl md:text-3xl font-bold mb-4"
        >
          Our Best Sellers
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          // animate={isInView ? "show" : "hidden"}
          animate={"show"}

          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-3 gap-2"
        >
          {bestSellers.map((sweet) => (
            <motion.div
              key={sweet.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="sweet-[#ffffff] group"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
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
                  <div className="text-white font-bold">{sweet.price}</div>
                </div>
              </div>
              <div className="p-4 bg-white :bg-gray-800">
                <h3 className="font-semibold text-lg mb-1">{sweet.title}</h3>
                <p className="text-sm text-gray-500 :text-gray-400 mb-2">{sweet.category}</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-sm font-medium">{sweet.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


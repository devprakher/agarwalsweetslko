"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {Droplet, Gift, Slice, Nut, Wheat, Sparkles } from "lucide-react"

export default function Categories() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const categories = [
    {
      name: "Milk Sweets",
      icon: <Droplet className="h-8 w-8" />, // new icon
      color: "bg-[#e94560]",
      count: "25+ varieties",
    },
    {
      name: "Gift Boxes",
      icon: <Gift className="h-8 w-8" />,
      color: "bg-[#ffa500]",
      count: "15+ options",
    },
    {
      name: "Bengali Sweets",
      icon: <Slice className="h-8 w-8" />, // new icon
      color: "bg-accent",
      count: "20+ varieties",
    },
    {
      name: "Dry Fruit Sweets",
      icon: <Nut className="h-8 w-8" />, // new icon
      color: "bg-green-500",
      count: "12+ varieties",
    },
    {
      name: "Flour Based",
      icon: <Wheat className="h-8 w-8" />,
      color: "bg-amber-500",
      count: "18+ varieties",
    },
    {
      name: "Festival Special",
      icon: <Sparkles className="h-8 w-8" />,
      color: "bg-red-500",
      count: "Seasonal",
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
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16">
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className=" section-title text-2xl md:text-3xl font-bold mb-4"
        >
          Browse by Category
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white :bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div className="p-6 text-center">
                <div
                  className={`${category.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                >
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500 :text-gray-400">{category.count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


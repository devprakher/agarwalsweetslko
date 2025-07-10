"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Candy, Gift, Cake, Leaf, Wheat, Sparkles, Coffee, Milk, Droplet, Utensils, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AllCategories() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const categories = [
    {
      name: "Milk Sweets",
      icon: <Candy className="h-10 w-10" />,
      color: "bg-brand-[#e94560]",
      count: "25+ varieties",
      description:
        "Traditional sweets made from milk solids, sugar, and flavorings. Includes popular items like Gulab Jamun, Rasmalai, and Peda.",
      popular: ["Gulab Jamun", "Rasmalai", "Peda", "Kalakand", "Rabri"],
    },
    {
      name: "Gift Boxes",
      icon: <Gift className="h-10 w-10" />,
      color: "bg-brand-[#ffa500]",
      count: "15+ options",
      description:
        "Beautifully packaged assortments of our finest sweets, perfect for gifting on special occasions, festivals, and celebrations.",
      popular: ["Diwali Special", "Wedding Collection", "Assorted Mix", "Premium Box", "Festival Pack"],
    },
    {
      name: "Bengali Sweets",
      icon: <Cake className="h-10 w-10" />,
      color: "bg-brand-accent",
      count: "20+ varieties",
      description:
        "Delicate and delicious sweets from Bengal, known for their unique textures and subtle flavors. Famous for Rasgulla and Sandesh.",
      popular: ["Rasgulla", "Sandesh", "Cham Cham", "Rajbhog", "Mishti Doi"],
    },
    {
      name: "Dry Fruit Sweets",
      icon: <Leaf className="h-10 w-10" />,
      color: "bg-green-500",
      count: "12+ varieties",
      description:
        "Luxurious sweets made with premium nuts and dry fruits. Rich in flavor and perfect for those who appreciate gourmet treats.",
      popular: ["Kaju Katli", "Badam Barfi", "Pista Roll", "Dry Fruit Ladoo", "Anjeer Barfi"],
    },
    {
      name: "Flour Based",
      icon: <Wheat className="h-10 w-10" />,
      color: "bg-amber-500",
      count: "18+ varieties",
      description:
        "Traditional sweets made from various flours including gram flour, wheat flour, and semolina. Includes favorites like Besan Ladoo.",
      popular: ["Besan Ladoo", "Mysore Pak", "Soan Papdi", "Boondi Ladoo", "Mohanthal"],
    },
    {
      name: "Festival Special",
      icon: <Sparkles className="h-10 w-10" />,
      color: "bg-red-500",
      count: "Seasonal",
      description:
        "Special collections created for Indian festivals like Diwali, Holi, Raksha Bandhan, and more. Limited edition treats available seasonally.",
      popular: ["Diwali Hamper", "Holi Gujiya", "Rakhi Special", "Ganesh Chaturthi Modak", "Navratri Pack"],
    },
    {
      name: "South Indian",
      icon: <Coffee className="h-10 w-10" />,
      color: "bg-orange-500",
      count: "10+ varieties",
      description:
        "Delicious sweets from South India featuring coconut, jaggery, and rice flour. Known for their unique flavors and textures.",
      popular: ["Mysore Pak", "Adhirasam", "Poli", "Kozhukattai", "Payasam"],
    },
    {
      name: "Khoya Based",
      icon: <Milk className="h-10 w-10" />,
      color: "bg-blue-500",
      count: "15+ varieties",
      description:
        "Rich and indulgent sweets made from reduced milk solids (khoya). Known for their creamy texture and deep flavor.",
      popular: ["Peda", "Kalakand", "Burfi", "Gulab Jamun", "Milk Cake"],
    },
    {
      name: "Syrup Soaked",
      icon: <Droplet className="h-10 w-10" />,
      color: "bg-purple-500",
      count: "8+ varieties",
      description:
        "Sweets soaked in sugar syrup for a juicy, sweet experience. Includes popular items like Jalebi and Imarti.",
      popular: ["Jalebi", "Imarti", "Malpua", "Pantua", "Balushahi"],
    },
    {
      name: "Savory Snacks",
      icon: <Utensils className="h-10 w-10" />,
      color: "bg-yellow-500",
      count: "20+ varieties",
      description:
        "Complementing our sweet offerings, we also provide a range of savory Indian snacks perfect for any occasion.",
      popular: ["Samosa", "Kachori", "Namkeen", "Mathri", "Chakli"],
    },
    {
      name: "Quick Bites",
      icon: <Zap className="h-10 w-10" />,
      color: "bg-teal-500",
      count: "12+ varieties",
      description: "Ready-to-eat sweet and savory snacks that are perfect for a quick energy boost or casual snacking.",
      popular: ["Chivda", "Gajak", "Rewdi", "Chikki", "Mathri"],
    },
    {
      name: "Sugar Free",
      icon: <Heart className="h-10 w-10" />,
      color: "bg-pink-500",
      count: "8+ varieties",
      description:
        "Specially crafted sweets for those watching their sugar intake. Made with natural sweeteners without compromising on taste.",
      popular: ["Sugar-free Peda", "Stevia Barfi", "Diet Ladoo", "Khajoor Roll", "Low-sugar Rasmalai"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Sweet Categories</h1>
          <p className="text-lg text-gray-600 :text-gray-400 max-w-3xl mx-auto">
            Explore our extensive range of authentic Indian sweets, carefully crafted using traditional recipes and the
            finest ingredients.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white :bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`${category.color} text-white rounded-full w-16 h-16 flex items-center justify-center mr-4`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{category.name}</h3>
                    <p className="text-sm text-gray-500 :text-gray-400">{category.count}</p>
                  </div>
                </div>
                <p className="text-gray-600 :text-gray-300 mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-500 mb-2">POPULAR ITEMS:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.popular.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 :bg-gray-700 text-gray-800 :text-gray-200 text-xs px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button className="w-full bg-[#e94560] hover:bg-[#e94560]/90">View All {category.name}</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


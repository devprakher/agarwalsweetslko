"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Sweet Lover",
      avatar: "/placeholder.svg",
      content:
        "Agarwal Sweets has the most authentic taste of traditional Indian sweets. Their Kaju Katli reminds me of my grandmother's recipe. Will definitely order again!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Patel",
      role: "Regular Customer",
      avatar: "/placeholder.svg",
      content:
        "I ordered a gift box for Diwali and everyone loved it. The sweets were fresh, perfectly sweet, and beautifully packaged. Highly recommend their festive collections.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ananya Gupta",
      role: "Food Blogger",
      avatar: "/placeholder.svg",
      content:
        "As someone who reviews food for a living, I can confidently say that Agarwal Sweets offers some of the finest Indian sweets in the city. Pure ingredients and authentic taste.",
      rating: 4,
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
          What Our Customers Say
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-white :bg-gray-800 rounded-lg shadow-lg p-6 relative"
            >
              <div className="absolute top-6 right-6 text-[#e94560] opacity-20">
                <Quote className="h-12 w-12" />
              </div>
              <div className="flex items-center mb-4">
                {/* <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 :text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700 :text-gray-300 relative z-10">{testimonial.content}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 :text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


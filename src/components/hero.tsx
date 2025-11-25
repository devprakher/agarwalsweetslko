"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// import { ShoppingBag, Info } from "lucide-react"
// import { Button } from "./ui/button"
// import Link from "next/link"
import Image from "next/image"

type Slide = {
  title: string
  description: string
  image: string
  color?: string
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      title: "Authentic Indian Sweets Made with Love",
      description:
        "पीढ़ियों से चली आ रही पारंपरिक विधियों से बने। शुद्ध सामग्री, असली स्वाद !",
      image: "/images/banner_1.PNG",
      // color: "from-[#e94560]/80 to-[#ffa500]/80",
    },
    {
      title: "Special Festive Collections",
      description: "त्योहारों की रौनक बढ़ाइए हमारी पारंपरिक और आधुनिक भारतीय मिठाइयों के खास संग्रह के साथ !",
      image: "/images/banner_2.JPG",
      // color: "from-[#ffa500]/80 to-accent/80",
    },
    {
      title: "Perfect Gifts for Every Occasion",
      description: "खूबसूरती से सजे मिठाई के डिब्बे, अपने अपनों को देने के लिए एकदम परफ़ेक्ट तोहफ़ा !",
      image: "/images/ghewar.JPG", 
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="w-full relative h-screen pt-24 overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{ display: currentSlide === index ? "block" : "none" }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          {slide.color && <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-multiply z-20`} />}
          <Image height={800} width={1600} src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-30 h-full w-full flex flex-col justify-center items-center text-center text-white px-4 md:px-0">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <Button size="lg" className="bg-[#e94560] hover:bg-[#e94560]/90 text-white font-semibold px-6">
            <Link href="/categories" className="flex gap-1">
              <ShoppingBag className="mr-2 h-5 w-5" /> Explore Sweets
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="[#e2e8f0]-white text-white hover:bg-white/20">
            <Link href="/about" className="flex gap-1"><Info className="mr-2 h-5 w-5" /> Our Story</Link>

              
            </Button> */}
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


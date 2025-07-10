"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Store banner state in localStorage
  useEffect(() => {
    const bannerState = localStorage.getItem("promoBannerClosed")
    if (bannerState === "true") {
      setIsVisible(false)
    }
  }, [])

  const closeBanner = () => {
    setIsVisible(false)
    localStorage.setItem("promoBannerClosed", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#e94560] text-white text-center py-3 px-4 relative"
        >
          <div className="container flex justify-center items-center ">
            <p className="text-sm md:text-base font-medium">
              Special Festive Offer - 15% Off on All Sweet Boxes for Diwali!
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-black text-white px-3 py-1 text-sm font-medium rounded"
            >
              Order Now
            </motion.button> */}
            <button
              onClick={closeBanner}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
              aria-label="Close banner"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


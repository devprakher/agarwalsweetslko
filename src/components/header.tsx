"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Search, ShoppingBag, Phone } from "lucide-react"
import { Button } from "./ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    // { name: "Sweets", href: "/categories" },
    // { name: "Gift Boxes", href: "/gift-boxes" },
    // { name: "Seasonal", href: "/seasonal" },
    { name: "About Us", href: "/about" },
    // { name: "Contact", href: "/contact" },
    { name: "Visit Us", href: "/visit-us" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 :bg-gray-900/95 shadow-md backdrop-blur-sm" : "bg-white/95 :bg-gray-900/95 shadow-md backdrop-blur-sm"
      }`}
      // style={{ marginTop: "46px" }} // Account for promo banner height
    >
      <div className="px-4 md:px-8 lg:px-16 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#e94560]">
              Agarwal <span className="text-[#ffa500]"> Sweets</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 :text-gray-200 hover:text-[#e94560] :hover:text-[#e94560] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-2"
          >
            {/* <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button> */}
            <Button variant="ghost" size="icon" aria-label="Call us">
              <Link href={"/contact"}>
              <Phone className="h-5 w-5" /></Link>
            </Button>
            <Button className="bg-[#e94560] hover:bg-[#e94560]/90 text-white font-bold">
              <Link href={"/visit-us"} className="flex gap-1"><ShoppingBag className="h-5 w-5 mr-2" /> Visit Shop</Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white :bg-gray-900 shadow-lg"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 :text-gray-200 hover:text-[#e94560] :hover:text-[#e94560]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-2 pt-2 [#e2e8f0]-t [#e2e8f0]-gray-200 :[#e2e8f0]-gray-700 mt-2">
                  <Button variant="ghost" size="icon" aria-label="Search">
                    <Search className="h-5 w-5" />
                  </Button>
                  {/* <Button variant="ghost" size="icon" aria-label="Call us">
                    <Phone className="h-5 w-5" />
                  </Button> */}
                  <Button className="bg-[#e94560] hover:bg-[#e94560]/90 text-white font-bold">
                    <ShoppingBag className="h-5 w-5 mr-2" /> Visit Shop
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


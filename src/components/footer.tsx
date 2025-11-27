"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Sweets", href: "/sweets" },
        { name: "Gift Boxes", href: "/gift-boxes" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Shipping Policy", href: "/shipping" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "FAQs", href: "/faqs" },
        { name: "Store Locations", href: "/locations" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Milk Sweets", href: "/categories/milk-sweets" },
        { name: "Bengali Sweets", href: "/categories/bengali-sweets" },
        { name: "Dry Fruit Sweets", href: "/categories/dry-fruit-sweets" },
        { name: "Festival Specials", href: "/categories/festival-specials" },
        { name: "Gift Packs", href: "/categories/gift-packs" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold text-[#e94560]">
                Agarwal <span className="text-[#ffa500]">Sweets</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
              लखनऊ के दिल से आपके घर तक —
              हम लेकर आते हैं असली अवधी मिठास।<br/>

              शुद्ध दूध, ताज़ा खोया, हाथों की कारीगरी
              और अपनापन से भरा स्वागत —
              यही हमारी पहचान है।<br/>

              क्योंकि यहाँ मिठाई सिर्फ़ खाई नहीं जाती…
              महसूस की जाती है, जी ली जाती है।
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    whileHover={{ y: -3 }}
                    className="bg-gray-800 p-2 rounded-full hover:bg-[#e94560] transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 hover:text-[#e94560] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="[#e2e8f0]-t [#e2e8f0]-gray-800 pt-8 mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Agarwal Sweets. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end" style={{ display: "none" }}>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@Agarwal Sweets.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}


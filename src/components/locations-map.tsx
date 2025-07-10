"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"


export default function LocationsMap() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeLocation, setActiveLocation] = useState(0)

  const locations = [
    {
      id: 1,
      name: "Connaught Place",
      address: "123 Sweet Lane, Connaught Place, New Delhi, 110001",
      phone: "+91 98765 43210",
      hours: "9:00 AM - 9:00 PM (Mon-Sat), 10:00 AM - 6:00 PM (Sun)",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8034239809326!2d77.21762641508096!3d28.63108148241655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1647339490089!5m2!1sen!2sin",
      image: "/placeholder.svg?height=300&width=400",
      popular: ["Kaju Katli", "Gulab Jamun", "Rasgulla"],
    },
    {
      id: 2,
      name: "South Extension",
      address: "456 Dessert Avenue, South Extension Part II, New Delhi, 110049",
      phone: "+91 98765 43211",
      hours: "9:00 AM - 9:00 PM (Mon-Sat), 10:00 AM - 6:00 PM (Sun)",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0238874042456!2d77.22308231508002!3d28.570161784418283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26e01e8e2fb%3A0x9e9b35f4a3d0b2a!2sSouth%20Extension%20II%2C%20New%20Delhi%2C%20Delhi%20110049!5e0!3m2!1sen!2sin!4v1647339567089!5m2!1sen!2sin",
      image: "/placeholder.svg?height=300&width=400",
      popular: ["Soan Papdi", "Besan Ladoo", "Jalebi"],
    },
    {
      id: 3,
      name: "Noida Sector 18",
      address: "789 Mithai Market, Sector 18, Noida, Uttar Pradesh, 201301",
      phone: "+91 98765 43212",
      hours: "10:00 AM - 10:00 PM (All days)",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0376874686394!2d77.32559231508085!3d28.56830128442651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44d95e77c7d%3A0x75e6c6f6ead7c63a!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1647339626089!5m2!1sen!2sin",
      image: "/placeholder.svg?height=300&width=400",
      popular: ["Rasmalai", "Milk Cake", "Peda"],
    },
    {
      id: 4,
      name: "Gurgaon Galleria",
      address: "101 Sweet Corner, DLF Galleria, Gurgaon, Haryana, 122002",
      phone: "+91 98765 43213",
      hours: "10:00 AM - 10:00 PM (All days)",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2608157040313!2d77.09066231507842!3d28.467742984866196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a1d6a8a5a5%3A0x87f6d9c3b3d8a2f1!2sDLF%20Galleria%2C%20DLF%20Phase%20IV%2C%20Sector%2027%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1647339686089!5m2!1sen!2sin",
      image: "/placeholder.svg?height=300&width=400",
      popular: ["Kaju Barfi", "Motichoor Ladoo", "Mysore Pak"],
    },
  ]

  // const fadeIn = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  // }

  return (
    <div className="bg-white :bg-gray-900">
      <section ref={sectionRef} className="py-16">
        <div className="px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Visit Our Stores</h1>
            <p className="text-lg text-gray-600 :text-gray-400 max-w-3xl mx-auto">
              Experience the aroma and taste of our freshly made sweets at any of our conveniently located stores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white :bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <div
                        key={location.id}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeLocation === index
                            ? "bg-brand-[#e94560]/10 border-l-4 border-brand-[#e94560]"
                            : "bg-gray-50 :bg-gray-700 hover:bg-gray-100 :hover:bg-gray-600"
                        }`}
                        onClick={() => setActiveLocation(index)}
                      >
                        <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                        <div className="flex items-start text-sm text-gray-600 :text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{location.address}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white :bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src={locations[activeLocation].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={`Map of ${locations[activeLocation].name} location`}
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Image
                        src={locations[activeLocation].image || "/placeholder.svg"}
                        alt={locations[activeLocation].name}
                        className="w-full h-auto rounded-lg"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">{locations[activeLocation].name}</h3>
                      <div className="space-y-3 text-gray-600 :text-gray-400">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-brand-[#e94560]" />
                          <span>{locations[activeLocation].address}</span>
                        </div>
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-brand-[#e94560]" />
                          <span>{locations[activeLocation].phone}</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-brand-[#e94560]" />
                          <span>{locations[activeLocation].hours}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Popular at this location:</h4>
                        <div className="flex flex-wrap gap-2">
                          {locations[activeLocation].popular.map((item, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 :bg-gray-700 text-gray-800 :text-gray-200 text-xs px-2 py-1 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button className="bg-brand-[#e94560] hover:bg-brand-[#e94560]/90">
                          <ExternalLink className="mr-2 h-4 w-4" /> Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


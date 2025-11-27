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
      name: "Agarwal Sweets - Lucknow",
      address: "309, Aminabad Road, Ganeshganj, Lucknow, India, 226018",
      phone: "+91 98391 81313",
      hours: "9:00 AM - 10:00 PM (All days)",
      mapUrl:
        "https://www.google.com/maps/place/Agarwal+Sweets/@26.8421572,80.9207123,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfdb588e41ed3:0xa1637a0f5b5f0150!8m2!3d26.8421524!4d80.9232926!16s%2Fg%2F1tdlfpx0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1234567890!2d80.9232926!3d26.8421524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb588e41ed3%3A0xa1637a0f5b5f0150!2sAgarwal%20Sweets!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
      image: "/images/peda.JPG",
      popular: ["Kaju Katli11", "Gulab Jamun", "Rasgulla"],
    },
  ]

  // const fadeIn = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  // }

  return (
    <div className="bg-white :bg-gray-900">
      <section ref={sectionRef} className="pt-16 pb-2">
        <div className="px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Visit Our Store</h1>
            <p className="text-lg text-gray-600 :text-gray-400 max-w-3xl mx-auto">
              Experience the aroma and taste of our freshly made sweets at our store.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white :bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
                  <div className="space-y-4 flex-1">
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
                        <div className="flex items-start text-sm text-gray-600 :text-gray-400 mb-2">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{location.address}</span>
                        </div>
                        <div className="mt-8 space-y-3">
                          <Image
                            src={"/images/contact_1.JPG"}
                            alt={location.name}
                            className="w-full h-auto rounded-lg"
                            width={400}
                            height={300}
                          />
                          
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
              <div className="bg-white :bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1234567890!2d80.9232926!3d26.8421524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb588e41ed3%3A0xa1637a0f5b5f0150!2sAgarwal%20Sweets!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`}
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
                      <div className="mt-4" style={{ display: "none" }}>
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
                      <div className="mt-6" style={{ display: "none" }}>
                        <Button 
                          className="bg-brand-[#e94560] hover:bg-brand-[#e94560]/90"
                          onClick={() => window.open(locations[activeLocation].mapUrl, '_blank', 'noopener,noreferrer')}
                        >
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


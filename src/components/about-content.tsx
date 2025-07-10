"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, ThumbsUp, Clock } from "lucide-react"
import Image from "next/image"

export default function AboutContent() {
  const sectionRef = useRef(null)
  const valuesRef = useRef(null)
  const processRef = useRef(null)
  const teamRef = useRef(null)

  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.1 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.1 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 })

  const values = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "Quality",
      description:
        "We use only the finest ingredients, sourced from trusted suppliers to ensure authentic taste and premium quality.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Tradition",
      description:
        "Our recipes have been passed down through generations, preserving the authentic taste of traditional Indian sweets.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: "Customer Satisfaction",
      description:
        "We're committed to exceeding expectations with exceptional service and consistently delicious products.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Freshness",
      description:
        "All our sweets are made fresh daily, ensuring you experience the best taste and quality with every bite.",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Ingredient Selection",
      description:
        "We carefully select the finest ingredients from trusted suppliers, ensuring quality and authenticity.",
    },
    {
      number: "02",
      title: "Traditional Preparation",
      description:
        "Our skilled sweet makers follow time-honored recipes and techniques passed down through generations.",
    },
    {
      number: "03",
      title: "Quality Control",
      description:
        "Each batch undergoes strict quality checks to ensure consistency in taste, texture, and appearance.",
    },
    {
      number: "04",
      title: "Artful Presentation",
      description:
        "Our sweets are beautifully arranged and packaged to enhance your gifting and consumption experience.",
    },
  ]

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Master Sweet Maker",
      image: "/images/founder_2.jpg",
      description:
        "With over 30 years of experience, Rajesh leads our production with unmatched expertise in traditional sweet making.",
    },
    {
      name: "Amit Singh",
      role: "Quality Manager",
      image: "/images/founder.jpg",
      description: "Ensures that every sweet meets our strict quality standards before reaching our customers.",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="bg-white ">
      {/* Hero Section */}
      <section ref={sectionRef} className="py-16 bg-gradient-to-r from-[#e94560]/10 via-[#ffa500]/10 to-accent/10 px-4 md:px-8 lg:px-16">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Sweet Journey</h1>
            <p className="text-lg text-gray-600  max-w3xl mx-auto">
              Discover the story behind Agarwal Sweets and our passion for authentic Indian sweets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/shop.jpg?height=600&width=800" height={800} width={800} alt="Sweet shop heritage" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 ">
                <p>
                  {`Founded in 1985 by Mr. Harish Patel, Agarwal Sweets began as a small family shop in the heart of Delhi.
                  With a passion for preserving traditional sweet-making techniques and a commitment to quality, our
                  humble beginnings quickly blossomed into a beloved establishment.`}
                </p>
                <p>
                  {`For over three decades, we've been crafting authentic Indian sweets using recipes passed down through
                  generations. What sets us apart is our unwavering dedication to using only the finest ingredients and
                  traditional methods to create sweets that transport you back to the flavors of home.`}
                </p>
                <p>
                  {`Today, with multiple locations across the country and an online presence, we continue to serve our
                  community with the same passion and commitment to excellence that has defined us from day one. While
                  we've grown in size, our core values remain unchanged – quality, tradition, and customer satisfaction.`}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section ref={teamRef} className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 :text-gray-400 max-w-3xl mx-auto">
              The talented individuals behind our delicious creations.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center "
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white :bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <Image height={800} width={800} src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#e94560] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 :text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 :text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at Agarwal Sweets.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white :bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="bg-brand-[#e94560]/10 text-brand-[#e94560] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 :text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-16 bg-gray-50 :bg-gray-800 px-4 md:px-8 lg:px-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 :text-gray-400 max-w-3xl mx-auto">
              How we create our delicious sweets from start to finish.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                <div className="bg-white :bg-gray-900 p-6 rounded-lg shadow-md h-full">
                  <div className="text-5xl font-bold text-brand-[#e94560]/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 :text-gray-400">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-brand-[#e94560]/20"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </div>
  )
}


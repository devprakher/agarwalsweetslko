"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "./ui/button"


export default function Pricing() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "Basic",
      price: "$7.99",
      period: "per month",
      description: "Perfect for casual viewers",
      features: [
        "HD streaming",
        "Watch on 1 device at a time",
        "Cancel anytime",
        "First month free",
        "Limited content library",
      ],
      popular: false,
      buttonText: "Start Free Trial",
    },
    {
      name: "Standard",
      price: "$12.99",
      period: "per month",
      description: "Best for individuals",
      features: [
        "Full HD streaming",
        "Watch on 2 devices at a time",
        "Cancel anytime",
        "First month free",
        "Full content library",
        "Download for offline viewing",
      ],
      popular: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Premium",
      price: "$18.99",
      period: "per month",
      description: "Ideal for families",
      features: [
        "4K Ultra HD streaming",
        "Watch on 4 devices at a time",
        "Cancel anytime",
        "First month free",
        "Full content library",
        "Download for offline viewing",
        "Family sharing",
      ],
      popular: false,
      buttonText: "Start Free Trial",
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
    <section ref={sectionRef} className="py-16 bg-gray-50 :bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 :text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your viewing needs. All plans include a free trial period.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`bg-white :bg-gray-800 rounded-lg shadow-lg overflow-hidden relative ${
                plan.popular ? "[ #e94560]-2 [ #e94560]-[#e94560]" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-[#e94560] text-white text-xs font-semibold py-1 text-center">MOST POPULAR</div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 :text-gray-400"> {plan.period}</span>
                </div>
                <p className="text-gray-600 :text-gray-400 mb-6">{plan.description}</p>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#e94560] hover:bg-[#e94560]-"
                      : "bg-gray-800 :bg-gray-700 hover:bg-gray-700 :hover:bg-gray-600"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
              <div className="p-6 bg-gray-50 :bg-gray-900/50">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 :text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


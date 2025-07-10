"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "./ui/input"

export default function ContactContent() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 })

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@sweetdelights.com", "orders@sweetdelights.com"],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Main Office",
      details: ["123 Sweet Lane, Connaught Place", "New Delhi, 110001, India"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 9:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
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
    <div className="bg-white :bg-gray-900">
      {/* Hero Section */}
      <section ref={sectionRef} className="py-16 bg-gradient-to-r from-[#e94560]/10 via-[#ffa500]/10 to-accent/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 :text-gray-400 max-w-3xl mx-auto">
            {`We'd love to hear from you! Reach out with any questions, feedback, or to place a special order.`}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white :bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-brand-[#e94560]/10 text-brand-[#e94560] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 :text-gray-400">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white :bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inquiry">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Information</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="bulk">Bulk Order</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." className="min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full bg-brand-[#e94560] hover:bg-brand-[#e94560]/90">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you offer delivery services?</h3>
                  <p className="text-gray-600 :text-gray-400">
                    Yes, we offer delivery within the city limits for a nominal fee. For bulk orders and special
                    occasions, delivery charges may be waived. We also ship our dry sweets nationwide through courier
                    services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">How far in advance should I place an order?</h3>
                  <p className="text-gray-600 :text-gray-400">
                    For regular orders, 24 hours notice is appreciated. For large orders or during festival seasons, we
                    recommend placing orders 3-5 days in advance to ensure availability.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you cater for events?</h3>
                  <p className="text-gray-600 :text-gray-400">
                    Yes, we offer catering services for weddings, corporate events, and other special occasions. Please
                    contact us directly to discuss your requirements and get a custom quote.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Are your sweets suitable for people with dietary restrictions?
                  </h3>
                  <p className="text-gray-600 :text-gray-400">
                    We offer a range of options including sugar-free sweets and some vegan alternatives. Please inform
                    us about any specific dietary requirements when placing your order.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What is the shelf life of your sweets?</h3>
                  <p className="text-gray-600 :text-gray-400">
                    Most of our milk-based sweets are best consumed within 2-3 days when refrigerated. Dry sweets like
                    Soan Papdi and Kaju Katli can last up to 2 weeks when stored properly in an airtight container.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


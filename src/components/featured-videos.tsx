
// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { ChevronLeft, ChevronRight, Play } from "lucide-react"
// import { Button } from "./ui/button"
// import Image from "next/image"

// export default function FeaturedVideos() {
//   const sectionRef = useRef(null)
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

//   const videos = [
//     {
//       id: 1,
//       title: "The Last Journey",
//       category: "Adventure",
//       duration: "2h 15m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 2,
//       title: "Cosmic Odyssey",
//       category: "Sci-Fi",
//       duration: "1h 58m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 3,
//       title: "Midnight Mystery",
//       category: "Thriller",
//       duration: "2h 05m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 4,
//       title: "Eternal Love",
//       category: "Romance",
//       duration: "1h 48m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 5,
//       title: "Urban Legends",
//       category: "Documentary",
//       duration: "1h 30m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//   ]

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   const scrollContainer = (direction:any) => {
//     const container = document.getElementById("featured-videos-container")
//     if (container) {
//       const scrollAmount = direction === "left" ? -container.offsetWidth / 2 : container.offsetWidth / 2
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" })
//     }
//   }

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-50 :bg-gray-900">
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="flex justify-between items-center mb-8"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold">Featured Videos</h2>
//           <div className="flex gap-2">
//             <Button variant="outline" size="icon" onClick={() => scrollContainer("left")} aria-label="Scroll left">
//               <ChevronLeft className="h-5 w-5" />
//             </Button>
//             <Button variant="outline" size="icon" onClick={() => scrollContainer("right")} aria-label="Scroll right">
//               <ChevronRight className="h-5 w-5" />
//             </Button>
//           </div>
//         </motion.div>

//         <div className="relative">
//           <motion.div
//             id="featured-videos-container"
//             variants={container}
//             initial="hidden"
//             animate={isInView ? "show" : "hidden"}
//             className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {videos.map((video) => (
//               <motion.div key={video.id} variants={item} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start">
//                 <div className="video-[#ffffff] group">
//                   <div className="relative aspect-video overflow-hidden rounded-lg">
//                     <Image
//                     height={800}
//                     width={800}
//                       src={video.thumbnail || "/placeholder.svg"}
//                       alt={video.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <Button
//                         size="icon"
//                         className="bg-[#e94560] hover:bg-[#e94560]- text-white rounded-full h-12 w-12"
//                       >
//                         <Play className="h-6 w-6" fill="currentColor" />
//                       </Button>
//                     </div>
//                     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
//                       <span className="text-xs text-white/80">{video.duration}</span>
//                     </div>
//                   </div>
//                   <div className="p-3">
//                     <h3 className="font-semibold text-lg mb-1 line-clamp-1">{video.title}</h3>
//                     <p className="text-sm text-gray-500 :text-gray-400">{video.category}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


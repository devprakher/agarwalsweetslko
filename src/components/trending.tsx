// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Star, Clock } from "lucide-react"

// export default function Trending() {
//   const sectionRef = useRef(null)
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

//   const trendingVideos = [
//     {
//       id: 1,
//       title: "The Forgotten Kingdom",
//       category: "Fantasy",
//       rating: 4.8,
//       views: "1.2M",
//       duration: "2h 10m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 2,
//       title: "Cyber Revolution",
//       category: "Sci-Fi",
//       rating: 4.6,
//       views: "980K",
//       duration: "1h 55m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 3,
//       title: "Echoes of the Past",
//       category: "Drama",
//       rating: 4.9,
//       views: "1.5M",
//       duration: "2h 25m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 4,
//       title: "Urban Legends: The Truth",
//       category: "Documentary",
//       rating: 4.7,
//       views: "850K",
//       duration: "1h 40m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 5,
//       title: "Midnight Runners",
//       category: "Action",
//       rating: 4.5,
//       views: "1.1M",
//       duration: "2h 05m",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//     },
//     {
//       id: 6,
//       title: "The Last Summer",
//       category: "Romance",
//       rating: 4.4,
//       views: "920K",
//       duration: "1h 48m",
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

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-50 :bg-gray-900">
//       <div className="container">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="section-title"
//         >
//           Trending Now
//         </motion.h2>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate={isInView ? "show" : "hidden"}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {trendingVideos.map((video) => (
//             <motion.div
//               key={video.id}
//               variants={item}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               className="video-[#ffffff] group"
//             >
//               <div className="relative aspect-video overflow-hidden rounded-t-lg">
//                 <img
//                   src={video.thumbnail || "/placeholder.svg"}
//                   alt={video.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
//                   <div className="flex items-center text-white">
//                     <Clock className="h-4 w-4 mr-1" />
//                     <span className="text-xs">{video.duration}</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-4 bg-white :bg-gray-800">
//                 <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
//                 <p className="text-sm text-gray-500 :text-gray-400 mb-2">{video.category}</p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
//                     <span className="text-sm font-medium">{video.rating}</span>
//                   </div>
//                   <span className="text-sm text-gray-500 :text-gray-400">{video.views} views</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


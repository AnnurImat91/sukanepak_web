"use client"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"
import KamisImg from "../public/images/Kamis_manis.jpg"
import PSG from "../public/images/PSG.jpg"


const schedule = [
  {
    day: "KAMIS",
    time: "18.00 - 22.00 WIB",
    place: "GOR As Shafa",
    type: "Regular Training & Fun Game",
    image: KamisImg,
    color: "from-neutral-300 to-neutral-600",
    adress: "Komplek Bukit Permata, Cinunuk, Cileunyi, Bandung Regency"
  },
  {
    day: "SABTU",
    time: "17.00 - 21.00 WIB",
    place: "GOR Pasanggrahan",
    type: "Weekend Match & Sparring",
    image: PSG,
    color: "from-neutral-300 to-neutral-600",
    adress: "Jl. Pasanggrahan Indah, Pasanggrahan, Kec. Ujung Berung, Kota Bandung"
  },
]

export const Activity = () => {
  return (
    <section id="activity" className="py-24 bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Jadwal Main Rutin</h2>
          <p className="text-gray-400">Siapkan raketmu, pilih jadwal yang cocok, dan datanglah ke lapangan.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group rounded-3xl overflow-hidden h-96 cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.place}
                  fill // This makes it fill the parent container (replaces w-full h-full)
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center space-x-2 text-white/80 mb-2 font-mono">
                  <Calendar size={16} />
                  <span className="uppercase tracking-widest text-sm font-bold">{item.day}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{item.place}</h3>
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-gray-200">
                    <Clock size={18} className="mr-2 text-green-400" />
                    {item.time}
                  </div>
                  <div className="flex items-center text-gray-200">
                    <MapPin size={18} className="mr-2 text-blue-400" />
                    {item.adress}
                  </div>
                </div>
                <div className="inline-flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                  Join Session <ChevronRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

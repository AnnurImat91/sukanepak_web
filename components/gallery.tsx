"use client"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import wika1 from "../public/images/wika.jpg";
import suneo from "../public/images/sunoe.jpg";
import psg1 from "../public/images/psg1.jpg";
import hik1 from "../public/images/pangradinan.jpg";
import hik2 from "../public/images/kbp.jpeg";
import ngops from "../public/images/ngops.jpg";

const images = [
  suneo,
  wika1,
  psg1,
  hik1,
  hik2,
  ngops,
]

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Momen Kami</h2>
            <p className="text-gray-400">Dokumentasi keseruan di dalam dan luar lapangan.</p>
          </div>
          <button className="hidden md:block text-green-400 border border-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition mt-4 md:mt-0">
            Lihat Instagram @suka_nepak
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // Note: item is passed here, but we check its type below
              className={`rounded-xl overflow-hidden relative group ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img
                // FIX: Check if 'item' is a string (URL) or an object (Import)
                src={typeof item === "string" ? item : item.src}
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 aspect-square md:aspect-auto"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-neutral-300 to-neutral-600 opacity-80 mix-blend-multiply`}></div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="text-green-400 border border-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition">
            Lihat Instagram
          </button>
        </div>
      </div>
    </section>
  )
}
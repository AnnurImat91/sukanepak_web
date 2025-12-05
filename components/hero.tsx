"use client"
import { motion } from "framer-motion"
import BGCourt from "../public/images/badminton-concept-with-racket-shuttlecock.jpg"

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-300/50 via-black/50 to-black z-10"></div>
        <img
          src={BGCourt.src}
          alt="Badminton Court"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Komunitas Badminton Bandung
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            PUKUL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">KERAS</span>,{" "}
            <br />
            TAWA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">LEPAS</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Wadah bagi pecinta badminton di Bandung. Bukan sekadar olahraga, tapi tentang kebersamaan, keringat, dan
            keseruan di lapangan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#activity"
              className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-full hover:bg-green-400 transition shadow-[0_0_20px_rgba(74,222,128,0.5)]"
            >
              Lihat Jadwal
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition"
            >
              Gabung Sekarang
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

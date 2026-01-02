"use client"
import { motion } from "framer-motion"
import { Instagram, Mail, ChevronRight, Facebook, Flame } from "lucide-react"
import Tiktok from "../public/tiktok.svg"

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl font-black mb-6">SIAP UNTUK NEPAK?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Jangan ragu untuk bertanya. <br />
            DM kami di Instagram atau kontak Whatsapp untuk info slot pemain!
          </p>

          <div className="bg-zinc-800/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm inline-block w-full max-w-lg">
            <div className="flex flex-col space-y-6">
              <a
                href="https://instagram.com/suka_nepak"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Instagram size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white/80">FOLLOW US</p>
                    <p className="font-bold">@suka_nepak</p>
                  </div>
                </div>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.tiktok.com/@suka_nepak?_t=8pMNo0kzZdH&_r=1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-black p-4 rounded-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <img
                      src={Tiktok.src}
                      alt="tiktok"
                      className="w-7 object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white/80">FOLLOW US</p>
                    <p className="font-bold">suka_nepak</p>
                  </div>
                </div>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61569412176450"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-900 p-4 rounded-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Facebook size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white/80">FOLLOW US</p>
                    <p className="font-bold">Sukha Nepak</p>
                  </div>
                </div>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="wa.me/+6289659437501"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-neutral-600 p-4 rounded-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white/80">CONTACT WHATSAPP</p>
                    <p className="font-bold">Admin (Iyan)</p>
                  </div>
                </div>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

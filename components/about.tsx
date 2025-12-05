"use client"
import { motion } from "framer-motion"
import { Users, Zap, Trophy } from "lucide-react"

const features = [
  {
    icon: <Users size={32} className="text-green-400" />,
    title: "Komunitas Solid",
    desc: "Terbuka untuk semua level, dari pemula hingga mahir. Kita tumbuh bersama.",
  },
  {
    icon: <Zap size={32} className="text-blue-500" />,
    title: "Rutin & Aktif",
    desc: "Jadwal main rutin dua kali seminggu untuk menjaga kebugaranmu.",
  },
  {
    icon: <Trophy size={32} className="text-purple-500" />,
    title: "Fun Match",
    desc: "Sering mengadakan sparring dan internal tournament yang seru.",
  },
]

export const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-green-400 font-bold mb-2 uppercase tracking-wide">Tentang Kami</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lebih Dari Sekadar <br />
              Komunitas Badminton.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              <span className="text-white font-bold">Suka Nepak</span> hadir di Bandung sebagai rumah bagi mereka yang
              ingin mencari keringat sekaligus teman baru. Kami percaya bahwa kesehatan fisik dan mental bisa didapatkan
              melalui satu pukulan shuttlecock.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mulai dari GOR As Shafa hingga GOR Pasanggrahan, tawa dan semangat kami selalu menggema. Tidak peduli
              skillmu, yang penting semangat nepaknya!
            </p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-colors flex items-start space-x-4"
              >
                <div className="p-3 bg-zinc-950 rounded-lg">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

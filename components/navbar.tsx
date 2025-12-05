"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Tentang", href: "#about" },
  { title: "Jadwal", href: "#activity" },
  { title: "Galeri", href: "#gallery" },
  { title: "Kontak", href: "#contact" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter">
            <span className="text-white">SUKA</span>
            <span className="text-white">NEPAK</span>
  
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-white hover:text-green-400 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-400 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-green-400 block px-3 py-4 rounded-md text-base font-bold"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

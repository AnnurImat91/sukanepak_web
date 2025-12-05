"use client"

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="mb-4 md:mb-0">
          <span className="text-white font-bold text-lg">
            SUKA<span className="text-green-400">NEPAK</span>
          </span>
          <p className="mt-2">Komunitas Badminton Bandung © {new Date().getFullYear()}</p>
        </div>
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>
          <a href="#activity" className="hover:text-green-400 transition">
            Activity
          </a>
          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

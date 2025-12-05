"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Activity } from "@/components/activity"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  // Load Tailwind CSS for development environments
  useEffect(() => {
    if (!document.getElementById("tailwind-cdn")) {
      const script = document.createElement("script")
      script.id = "tailwind-cdn"
      script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-green-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Activity />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

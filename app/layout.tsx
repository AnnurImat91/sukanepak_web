import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Suka Nepak — Pukul Keras, Tawa Lepas",
  description: "Komunitas badminton Bandung untuk mabar, sparring, dan turnamen.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}<Analytics /></body></html>
}

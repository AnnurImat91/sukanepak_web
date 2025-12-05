import type React from "react"
// ... existing code ...
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for the badminton community website
  title: "Suka Nepak - Komunitas Badminton Bandung",
  description:
    "Komunitas badminton di Bandung. Wadah untuk pecinta badminton bersama-sama bermain, berlatih, dan bersenang-senang.",
  icons: {
    icon: [
      {
        url: "/logo-removebg-preview-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-removebg-preview-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo-removebg-preview.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo-removebg-preview-180x180.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

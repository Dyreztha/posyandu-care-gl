import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fredoka, Nunito } from "next/font/google"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Posyandu Ceria - Monitoring Kesehatan Anak",
  description:
    "Aplikasi Posyandu Ceria untuk memantau tumbuh kembang dan kesehatan balita dengan lebih mudah, ramah, dan edukatif.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#f7a8c4",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${fredoka.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

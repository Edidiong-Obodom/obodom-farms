import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Obodom Integrated Farms - Sustainable Agriculture",
  description:
    "Premium sustainable farming solutions combining traditional wisdom with modern innovation. Quality agriculture for a better future.",
  keywords: "sustainable farming, organic agriculture, integrated farms, quality produce",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Obodom Integrated Farms LTD",
    description: "Leading sustainable agricultural solutions",
    type: "website",
    images: [
      {
        url: "/Obodom_Integrated_farms_logo.png",
        width: 512,
        height: 512,
        alt: "Obodom Integrated Farms Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

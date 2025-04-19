import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Plant Status Monitor",
  description: "Track and monitor the hydration status of your plants",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto py-4 px-4">
              <h1 className="text-xl font-bold">Plant Status Monitor</h1>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}

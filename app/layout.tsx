import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'blai - Your Crypto AI',
  description: 'AI-powered Crypto Trading Agent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <body className={inter.className}>
    <nav className="top-0 left-0 right-0 z-50 px-4 py-4 bg-[#c3f53b]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold border-r-2 border-black pr-2">blai</span>
          <span className="text-sm">Your Crypto AI</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="/about" className="text-sm hover:opacity-80">About</a>
          <a href="/community" className="text-sm hover:opacity-80">Community</a>
          <a href="/research" className="text-sm hover:opacity-80">Research</a>
          <a
            href="#"
            className="relative rounded border border-black px-4 py-2 text-sm text-black hover:bg-black hover:text-white transition duration-300"
          >
            Get <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black">
              blai
            </span>
          </a>
        </div>
      </div>
    </nav>
    <main>{children}</main>
  </body>
</html>

  )
}


import { Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">blai</h3>
            <p className="text-sm text-gray-400">
              Revolutionizing crypto trading with AI-powered insights and automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#c3f53b] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c3f53b] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-[#c3f53b] transition-colors">About</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-[#c3f53b] transition-colors">Community</Link></li>
              <li><Link href="/research" className="text-gray-400 hover:text-[#c3f53b] transition-colors">Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#c3f53b] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c3f53b] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c3f53b] transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest in AI-powered crypto trading.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#c3f53b]"
              />
              <button
                type="submit"
                className="bg-[#c3f53b] text-black px-4 py-2 rounded-r-md hover:bg-[#a3d52b] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} blai. All rights reserved. 
            <a href="#" className="text-[#c3f53b] hover:underline ml-2">Privacy Policy</a>
            <a href="#" className="text-[#c3f53b] hover:underline ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}


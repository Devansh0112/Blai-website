"use client"; // This makes it a Client Component

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 right-0 z-50 px-4 py-4 bg-[#c3f53b]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="text-sm hover:opacity-80">
            <span className="text-2xl font-bold border-r-2 border-black pr-2">blai</span>
          </a>
          <span className="text-sm hidden sm:inline">Your Crypto AI</span>
        </div>

        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className={`flex-col sm:flex sm:flex-row items-center space-x-8 ${isOpen ? 'flex' : 'hidden'}`}>
          <a href="/about" className="text-sm hover:opacity-80">About</a>
          <a href="/community" className="text-sm hover:opacity-80">Community</a>
          <a href="/research" className="text-sm hover:opacity-80">Team</a>
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
  );
}

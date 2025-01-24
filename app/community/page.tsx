"use client";
import React from "react";

export default function CommunityPage(): JSX.Element {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen relative">
      {/* Gradient Border Container */}
      <div className="relative z-10 w-full max-w-[600px] p-1 bg-gradient-to-b from-[#00EFFF] via-[#C4FF61] via-38% to-[#5C24FF] to-75% rounded-[20px]">
        {/* Inner White Container */}
        <div className="bg-black rounded-[18px] p-8">
          {/* Text Section */}
          <div className="mb-12 text-center">
            <h2 className="text-[#c4ff61] font-extrabold text-[58.9px] leading-[88.3px]">
              Join the revolution
            </h2>
            <p className="text-white font-black italic text-[80px] leading-[96px]">
              1000+ users
            </p>
          </div>

          {/* Form Section */}
          <div className="flex flex-col items-center space-y-5">
            <input
              type="text"
              placeholder="Type your first name"
              className="w-[328px] h-[40px] px-4 py-2 border border-[#2f2f2f] rounded-[8px] text-[#b3b3b3] text-sm"
            />
            <input
              type="email"
              placeholder="Type your email address"
              className="w-[328px] h-[40px] px-4 py-2 border border-[#2f2f2f] rounded-[8px] text-[#b3b3b3] text-sm"
            />
          </div>

          {/* Get Started Button Section */}
          <div className="mt-8 flex items-center justify-center">
            <button className="relative rounded-full bg-gradient-to-r p-[0.1rem] from-blue-500 via-purple-500 to-pink-500">
              <div className="flex items-center justify-center rounded-full bg-black px-8 py-3">
                <span className="text-white">Join Waitlist</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

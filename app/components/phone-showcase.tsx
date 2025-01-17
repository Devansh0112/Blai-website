'use client';

import Image from 'next/image';

export default function PhoneShowcase() {
  return (
    <section className="relative bg-black px-4 py-24 overflow-hidden h-[1000px] content-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-black to-green-400 animate-gradient-blur opacity-70"></div>

      <div className="container mx-auto relative z-10">
        {/* Centered Phone Image with Jump Animation */}
        <div className="relative flex justify-center items-center space-x-8 animate-jump">
          <div className="relative w-[250px] h-auto rounded-xl shadow-lg">
            {/* Gradient Shadow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 blur-lg opacity-[55%]"></div>
            {/* Image */}
            <Image
              src="/assets/iPhone 16 - 24.png"
              width={500}
              height={500}
              alt="Phone Interface"
              className="relative w-full h-full rounded-xl"
            />
          </div>
        </div>

        {/* Top Left Card */}
        <div className="absolute left-[10%] top-[20%] -translate-y-1/2">
          <div className="rounded-full p-[2px] bg-gradient-to-br from-green-400 to-blue-500">
            <div className="rounded-full bg-black p-4 min-h-[100px] flex items-center justify-center">
              <p className="text-white text-sm text-center max-w-xs">
                Track your balance day by day
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left Card */}
        <div className="absolute left-[10%] bottom-[20%] translate-y-1/2">
          <div className="rounded-xl p-[2px] bg-gradient-to-br from-orange-400 to-purple-500">
            <div className="rounded-xl bg-black p-4 min-h-[100px] flex items-center justify-center">
              <p className="text-white text-sm text-center max-w-xs">
                Navigate throughout the app to learn about the crypto world
              </p>
            </div>
          </div>
        </div>

        {/* Top Right Card */}
        <div className="absolute right-[10%] top-[25%] -translate-y-1/2">
          <div className="rounded-xl p-[2px] bg-gradient-to-br from-purple-400 to-green-500">
            <div className="rounded-xl bg-black p-4 min-h-[100px] flex items-center justify-center">
              <p className="text-white text-sm text-center max-w-xs">
                View all AI crypto transactions real time
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="absolute right-[10%] bottom-[25%] translate-y-1/2">
          <div className="rounded-full p-[2px] bg-gradient-to-br from-green-400 to-blue-500">
            <div className="rounded-full bg-black p-4 min-h-[100px] flex items-center justify-center">
              <p className="text-white text-sm text-center max-w-xs">
                Keep track of your assets and coins in your watchlist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes gradient-blur {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-blur {
          animation: gradient-blur 8s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes jump {
          0%, 100% {
            transform: translateY(20px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-jump {
          animation: jump 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

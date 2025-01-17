'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative bg-black px-4 py-24 overflow-hidden min-h-[800px] content-center">
      {/* Top Semi-Circle */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-br from-green-400 to-green-700 rounded-full blur-[60px] opacity-50"></div>

      {/* Bottom Semi-Circle */}
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-br from-green-400 to-green-700 rounded-full blur-[60px] opacity-50"></div>

      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-center relative z-10">
        {/* Column 1: Text Content */}
        <motion.div
          className="space-y-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* Card 1 */}
          <motion.div
            className="rounded-xl p-[2px] bg-gradient-to-br from-green-400 to-blue-500"
            variants={cardVariants}
          >
            <div className="rounded-xl bg-black p-6 min-h-[150px]">
              <p className="mb-2 text-sm text-gray-400">WHAT</p>
              <h3 className="mb-2 text-lg font-medium text-white">Welcome to blai →</h3>
              <p className="text-sm text-white/80">
                BLAI is an AI-powered crypto trading app designed for Gen Z and Millennials.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="rounded-xl p-[2px] bg-gradient-to-br from-green-400 to-blue-500"
            variants={cardVariants}
          >
            <div className="rounded-xl bg-black p-6 min-h-[150px]">
              <p className="mb-2 text-sm text-gray-400">WHY</p>
              <h3 className="mb-2 text-lg font-medium text-white">Why choose blai →</h3>
              <p className="text-sm text-white/80">
                Crypto can be overwhelming. BLAI breaks down the barriers by giving anyone the power to confidently invest in cryptocurrency with confidence.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="rounded-xl p-[2px] bg-gradient-to-br from-green-400 to-blue-500"
            variants={cardVariants}
          >
            <div className="rounded-xl bg-black p-6 min-h-[150px]">
              <p className="mb-2 text-sm text-gray-400">HOW</p>
              <h3 className="mb-2 text-lg font-medium text-white">Discover blai →</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• AI Agents trade for you</li>
                <li>• Intuitive app guides you from start to finish</li>
                <li>• Powered by trusted partners like Coinbase and MoonPay</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Column 2: Images with Gradient Shadows */}
        <div className="relative flex justify-center items-center space-x-8">
          {/* Image 1 */}
          <div className="relative w-[250px] h-auto rounded-xl shadow-lg transform rotate-[-5deg] translate-x-[10px] translate-y-[10px]">
            {/* Gradient Shadow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 blur-lg opacity-[55%]"></div>
            {/* Image */}
            <Image
              src="/assets/iPhone 16 - 4.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="relative w-full h-full rounded-xl"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-[250px] h-auto rounded-xl shadow-lg transform rotate-[5deg] translate-x-[-10px] translate-y-[10px]">
            {/* Gradient Shadow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 blur-lg opacity-[55%]"></div>
            {/* Image */}
            <Image
              src="/assets/iPhone 16 - 26.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="relative w-full h-full rounded-xl"
            />
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
          animation: gradient-blur 4s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}

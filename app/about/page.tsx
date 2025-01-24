'use client';

import React from "react";

const About = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <main className="bg-black w-full max-w-[1728px] h-[1117px] relative">
        {/* Header Section */}
        <header className="absolute w-full max-w-[1635px] h-[86px] top-[63px] left-12 flex items-center justify-between">
          {/* Placeholder image */}
          <img
            className="w-[68px] h-8 object-cover"
            alt="Logo"
            src="https://via.placeholder.com/150" // Replace with your image URL or leave it as is
          />
          <nav className="flex gap-7">
            <a
              href="#about"
              className="font-heading text-[#c4ff61] text-lg tracking-wide"
            >
              About
            </a>
            <a
              href="#community"
              className="font-heading text-white text-lg tracking-wide"
            >
              Community
            </a>
            <a
              href="#team"
              className="font-heading text-white text-lg tracking-wide"
            >
              Team
            </a>
          </nav>
          <div className="relative">
            <button className="w-[138px] h-[53px] rounded-[9px] border-2 border-white flex items-center justify-center">
              <span className="font-semibold text-white text-lg">
                Get <span className="underline font-heading">blai</span>
              </span>
            </button>
          </div>
          <div className="absolute left-[98px] text-white font-heading text-lg">
            Your Crypto AI
          </div>
          <div className="absolute left-[81px] w-1 h-[60px] bg-white"></div>
        </header>

        {/* Main Content */}
        <section className="absolute w-[1028px] h-[647px] top-[223px] left-1/4 md:left-10">
          <div>
            <h1 className="text-[58.9px] font-extrabold text-transparent leading-[88.3px]">
              <span className="text-[#c4ff61]">Joi </span>
              <span className="text-[#6d6d6d]">will take care of your </span>
              <span className="text-[#c4ff61]">one-click crypto</span>
              <span className="text-[#6d6d6d]">&nbsp;</span>
              <span className="text-[#c4ff61]">investing</span>
              <span className="text-[#6d6d6d]"> with</span>
              <span className="text-[#c4ff61]"> precision</span>
              <span className="text-[#6d6d6d]">,</span>
              <span className="text-[#c4ff61]">
                {" "}
                innovation &amp; unmatched simplicity.
              </span>
            </h1>
            <p className="text-white text-[22.7px] leading-[34.0px] mt-4">
              Joi is your personalized AI trading agent, designed to handle all
              the complexities of crypto investing. By combining multifaceted
              strategies such as sentiment analysis, risk management, and
              portfolio optimization, Joi ensures every trade is tailored to
              your preferences and goals. With seamless integration into the
              Coinbase platform, Joi offers a secure and straightforward way to
              navigate the crypto market.
              <br />
              <br />
              Joi exclusively trades coins supported by Coinbase, ensuring
              transparency and reliability. From real-time monitoring to
              automated actions like stop-loss and portfolio rebalancing, Joi
              simplifies the crypto investing experience, empowering you to
              invest confidently with ease and innovation.
            </p>
          </div>
        </section>

        {/* Side Content */}
        <aside className="absolute w-[333px] h-[411px] top-[214px] left-[1281px]">
          <h2 className="text-[223.2px] font-semibold text-white leading-[267.9px]">
            Joi
          </h2>
          <p className="text-white text-lg mt-4">
            Introducing Joi: The cutting-edge AI trader redefining how you
            invest, one smart decision at a time.
          </p>
        </aside>

        {/* Call to Action */}
        <div className="absolute w-[239px] h-[72px] top-[804px] left-[1338px] flex items-center justify-center bg-black rounded-full border-2 border-transparent bg-gradient-to-b from-cyan-400 via-lime-400 to-purple-500">
          <button className="text-white text-xl font-normal">Get blai</button>
        </div>
      </main>
    </div>
  );
};

export default About; // Ensure you're using default export

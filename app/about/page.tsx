import React from "react";

const About = (): JSX.Element => {
  return (
    <div className="bg-black flex">
      <main className="bg-black w-full max-w-[1728px] min-h-[90vh] px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] pt-10 lg:pt-10">
          {/* Main Content */}
          <section className="order-2 lg:order-1 ml-8 mt-[5rem]">
            <div>
              <h1 className="text-[32px] sm:text-[35px] lg:text-[45px] font-extrabold leading-tight">
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
              <p className="text-white text-base sm:text-sm lg:text-lg leading-relaxed mt-4">
                Joi is your personalized AI trading agent, designed to handle
                all the complexities of crypto investing. By combining
                multifaceted strategies such as sentiment analysis, risk
                management, and portfolio optimization, Joi ensures every trade
                is tailored to your preferences and goals. With seamless
                integration into the Coinbase platform, Joi offers a secure and
                straightforward way to navigate the crypto market.
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
          <aside className="order-1 lg:order-2 flex flex-col items-center justify-center text-center">
            <h2 className="text-[100px] sm:text-[150px] lg:text-[253.2px] font-semibold text-white leading-none">
              Joi
            </h2>
            <p className="text-white text-base sm:text-lg mt-4 max-w-sm text-center">
              The cutting-edge AI trader redefining how you invest, one smart
              decision at a time.
            </p>

            {/* Call to Action */}
            <div className="mt-8 flex items-center justify-center">
              <button className="relative rounded-full bg-gradient-to-r p-[0.1rem] from-blue-500 via-purple-500 to-pink-500">
                <div className="flex items-center justify-center rounded-full bg-black px-8 py-3">
                  <span className="text-white">Get started</span>
                </div>
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default About;

'use client';

import React from "react";

export const Research = (): JSX.Element => {
  const teamMembers = [
    {
      name: "Julian Caro",
      title: "CEO",
      description:
        "JJ Caro, previously the CEO of GMEX in Mexico, leads BLAI with a strong background in strategic direction and project management. His expertise ensures regulatory compliance and drives the company’s overall vision.",
      image: "/assets/pixel_art/jjpixel.png", // Team member image
    },
    {
      name: "Francesco",
      title: "COO",
      description:
        "Francesco Marzorati brings experience from McKinsey and Summit Partners, where he honed his skills in economic strategy and operations. At BLAI, he oversees trading strategies, financial planning, and team coordination.",
      image: "/assets/pixel_art/francepixel.png", // Team member image
    },
    {
      name: "Samy Fallah",
      title: "CTO",
      description:
        "With prior experience at McKinsey, Bain, and BCG, Samy Fallah focuses on bridging technical and business needs. As CTO, he leads UI/UX design, manages the product roadmap, and ensures seamless execution of development timelines.",
      image: "/assets/pixel_art/samypixel.png", // Team member image
    },
    {
      name: "Narasimha Teja Reddy",
      title: "Head of AI",
      description:
        "Narasimha Teja Reddy, with a Master’s degree in Information Systems and previous experience at Reddy Games, heads the AI development at BLAI. He is responsible for building sophisticated AI agents and implementing advanced trading logic.",
      image: "/assets/pixel_art/tejapixel.png", // Team member image
    },
    {
      name: "Devansh Srivastava",
      title: "Head Engineer",
      description:
        "Devansh Srivastava, a former engineer at Dell with a Master’s degree in Software Engineering Systems, is instrumental in developing BLAI's core infrastructure. He specializes in API integrations and full-stack development.",
      image: "/assets/pixel_art/devanshpixel.png", // Team member image
    },
    {
      name: "Niraj Nadarasa",
      title: "Research Lead",
      description:
        "Niraj Nadarasa, with prior roles at RevRoad, ASTA, and Outlier AI, leads BLAI’s research initiatives. His contributions support the technical development and strategic objectives of the platform.",
      image: "/assets/pixel_art/nirajpixel.png", // Team member image
    },
  ];

  return (
    <div className="bg-black flex flex-col items-center w-full">
      <header className="flex justify-between items-center w-full max-w-7xl py-4 px-6">
        <div className="text-white text-2xl font-bold">
          blai | Your Crypto AI
        </div>
        <nav className="flex gap-8">
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#community" className="text-white">
            Community
          </a>
          <a href="#team" className="text-[#c4ff61]">
            Team
          </a>
        </nav>
        <button className="border border-white text-white px-4 py-2 rounded-md">
          Get blai
        </button>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl py-8 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-black border border-[#c4ff61] rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={member.image} // Team member image
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-white font-semibold">{member.name}</h3>
            <p className="text-white text-sm">{member.title}</p>
            <p className="text-white text-xs mt-2">{member.description}</p>
            <div className="flex gap-4 mt-4">
              {/* LinkedIn icon */}
              <img
                src="/assets/linkedin_logo.png" // LinkedIn logo
                alt="LinkedIn"
                className="w-8 h-8" // Ensure it's consistent size
              />
              {/* Twitter icon with white circle wrapper */}
              <img
                src="/assets/x_logo.png" // Twitter logo
                alt="Twitter"
                className="w-8 h-8 p-1 bg-white rounded-full" // Add padding and white circle around the icon
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Research; // Ensure you're using default export

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
      linkedin: "https://www.linkedin.com/in/juliancaro", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/juliancaro", // Replace with actual Twitter URL
    },
    {
      name: "Francesco",
      title: "COO",
      description:
        "Francesco Marzorati brings experience from McKinsey and Summit Partners, where he honed his skills in economic strategy and operations. At BLAI, he oversees trading strategies, financial planning, and team coordination.",
      image: "/assets/pixel_art/francepixel.png", // Team member image
      linkedin: "https://www.linkedin.com/in/francescomarzorati", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/francescomarzorati", // Replace with actual Twitter URL
    },
    {
      name: "Samy Fallah",
      title: "CTO",
      description:
        "With prior experience at McKinsey, Bain, and BCG, Samy Fallah focuses on bridging technical and business needs. As CTO, he leads UI/UX design, manages the product roadmap, and ensures seamless execution of development timelines.",
      image: "/assets/pixel_art/samypixel.png", // Team member image
      linkedin: "https://www.linkedin.com/in/samyfallah", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/samyfallah", // Replace with actual Twitter URL
    },
    {
      name: "Narasimha Teja Reddy",
      title: "Head of AI",
      description:
        "Narasimha Teja Reddy, with a Master’s degree in Information Systems and previous experience at Reddy Games, heads the AI development at BLAI. He is responsible for building sophisticated AI agents and implementing advanced trading logic.",
      image: "/assets/pixel_art/tejapixel.png", // Team member image
      linkedin: "https://www.linkedin.com/in/narasimhatejareddy", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/narasimhatejareddy", // Replace with actual Twitter URL
    },
    {
      name: "Devansh Srivastava",
      title: "Head Engineer",
      description:
        "Devansh Srivastava, a former engineer at Dell with a Master’s degree in Software Engineering Systems, is instrumental in developing BLAI's core infrastructure. He specializes in API integrations and full-stack development.",
      image: "/assets/pixel_art/devanshpixel.png", // Team member image
      linkedin: "https://www.linkedin.com/in/devanshsrivastava", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/devanshsrivastava", // Replace with actual Twitter URL
    },
    {
      name: "Niraj Nadarasa",
      title: "Research Lead",
      description:
        "Niraj Nadarasa, with prior roles at RevRoad, ASTA, and Outlier AI, leads BLAI’s research initiatives. His contributions support the technical development and strategic objectives of the platform.",
      image: "/assets/pixel_art/nirajpixel.png", // Team member image
      linkedin: "https://www.linkedin.com/in/nirajnadarasa", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/nirajnadarasa", // Replace with actual Twitter URL
    },
  ];

  return (
    <div className="bg-black flex flex-col items-center w-full">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl py-8 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-black border border-amber-200 rounded-xl p-4 flex flex-col items-center text-center">
            <img
              src={member.image} // Team member image
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-white font-semibold">{member.name}</h3>
            <p className="text-white text-sm">{member.title}</p>
            <p className="text-white text-xs mt-2">{member.description}</p>
            <div className="flex mt-4">
              {/* LinkedIn Icon */}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/linkedin_logo.png" // LinkedIn logo
                  alt="LinkedIn"
                  className="w-12 h-12 hover:opacity-80 transition-opacity"
                />
              </a>

              {/* Twitter Icon */}
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 p-[2px] bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors mt-2">
                  <img
                    src="/assets/x_logo.png" // Twitter logo (formerly Twitter)
                    alt="Twitter"
                    className="w-4 h-4"
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Research;

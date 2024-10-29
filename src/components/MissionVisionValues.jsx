import React from "react";
import { FaBullseye, FaLightbulb, FaHeart } from "react-icons/fa";

const MissionVisionValues = () => {
  const data = [
    {
      title: "Our Mission",
      icon: <FaBullseye size={100} className="text-gray-700 mx-auto" />,
      description:
        "Our mission is to make marvels in the world of business leaving no stone unturned. We aim at setting up the greatest consumer-centric business hub at Qatar to pursue alliances and acquisitions that would build strength of our business groups. To serve as a platform that welcomes innovations and transformations is one of our most desirable idea.",
    },
    {
      title: "Our Vision",
      icon: <FaLightbulb size={100} className="text-gray-700 mx-auto" />,
      description:
        "Few years from now, we see ourselves as a firm known for its inspiringly sustainable and environment friendly business practices. Establishing strong values and ethical practices would be our gesture to make a community that would grow and glow together. We wish to accomplish novel ideas with a cultural touch, as we always believe in our values.",
    },
    {
      title: "Our Values",
      icon: <FaHeart size={100} className="text-gray-700 mx-auto" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-yhin text-gray-800 mb-10">
        To transform dreams into a <br />
        progressive reality
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center shadow-lg p-2">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-custom-red mb-2">
              {item.title}
            </h3>
            <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
            <p className="text-gray-600 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionValues;

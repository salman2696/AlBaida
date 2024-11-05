import React from "react";

const ContentWithImage = ({ title, description1, description2, image, reverse = false }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse md:space-x-0" : ""
      } md:space-x-8 space-y-4 md:space-y-0 p-4`}
    >
      <div className={`md:w-1/2 text-center md:text-left ${
        reverse ? "md:ml-10" : ""
      }`}>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-lg mb-2">{description1}</p>
        <p className="text-gray-700 text-lg">{description2}</p>
      </div>
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ContentWithImage;

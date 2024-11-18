import React from "react";

const Services1 = ({ title, description, services, images }) => {
  return (
    <div className="flex flex-col lg:flex-row px-4 py-8">
      {/* Left Section */}
      <div className="left-section w-full lg:w-1/2 p-10 flex flex-col justify-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
        <ul className="list-none p-0">
          {services.map((service, index) => (
            <li key={index} className="flex items-center mb-4">
              <span className="text-3xl mr-3 text-custom-red">
                {service.icon}
              </span>
              <span className="text-lg">{service.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Image Grid) */}
      <div className="right-section w-full lg:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services1;

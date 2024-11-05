import React from "react";
import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services1 = ({ title, description, services, images }) => {
  // Image slider settings
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    waitForAnimate: false,
    arrows: false,
  };

  return (
    <div className="flex flex-col md:flex-row px-4 py-8">
      <div className="left-section w-full md:w-1/2 p-10 flex flex-col justify-center bg-gray-100">
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
      <div className="right-section w-full md:w-1/2">
        <Slider {...settings} className="h-full">
          {images.map((image, index) => (
            <div key={index} className="h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services1;

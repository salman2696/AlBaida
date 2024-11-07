import React from "react";
import { motion } from "framer-motion";

const ServiceCard1 = ({ MainTitle, services }) => {
    
  return (
    <div>
      {" "}
      <h2 className="text-2xl md:text-4xl font-bold mb-14 text-center center-title">
        {MainTitle}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:text-white group"
            initial={{ opacity: 0, y: 80 }} // Start from below and transparent
            whileInView={{ opacity: 1, y: 0 }} // On hover, fully visible and no translation
            transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition
          >
            {/* Background Image with Dark Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${service.bgImage})`,
              }}
            ></div>

            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Icon, Title, and Description */}
            <div className="relative z-10 text-black transition-colors duration-300 group-hover:text-white text-center flex flex-col justify-center items-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard1;

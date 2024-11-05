import React from 'react';

const Services = ({ services }) => {
  return (
    <div className="max-w-7xl mx-auto my-10 p-6">
      <h2 className="text-center text-3xl font-bold mb-10 center-title">SERVICES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-5xl text-custom-red mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

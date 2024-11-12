import React from 'react';

const Services = ({ title, description, services }) => {
  return (
    <div className="max-w-7xl mx-auto my-10 p-6">
      <h2 className="text-center text-4xl font-bold mb-4 center-title  max-w-4xl mx-auto">{title}</h2>
      <h2 className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">{description}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="text-5xl text-custom-red mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-sm text-center mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

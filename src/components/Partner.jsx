import React from 'react';

const Partner = ({ name, description, logo }) => {
  return (
    <div className="max-w-3xl mx-auto my-10 p-6">
      <h2 className="text-center text-3xl font-bold mb-8">Our Valuable Partner</h2>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-32 h-32 object-contain mb-6"
        />
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{name}</h3>
        <p className="text-center text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Partner;

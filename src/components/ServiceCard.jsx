// ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md m-6 flex flex-col items-center">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <div className='m-2'>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 min-h-32">{description}</p>
      <button className="bg-custom-red text-white px-4 py-2 mb-4 rounded hover:bg-red-700 transition duration-300">
        {buttonText}
      </button>
      </div>
    </div>
  );
};

export default ServiceCard;

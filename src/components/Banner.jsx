import React from 'react';

const Banner = ({ title, className = '' }) => {
  return (
    <div className={`bg-custom-red p-8 flex justify-between items-center max-w-7xl mx-auto my-10 ${className}`}>
      <h2 className="text-white text-2xl font-bold capitalize">
        {title}
      </h2>
      <button className="bg-white font-semibold py-2 px-4 rounded">
        Get a Quote
      </button>
    </div>
  );
};

export default Banner;

import React from 'react';

const HeroSection = ({ title, subtitle }) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('path_to_your_image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;

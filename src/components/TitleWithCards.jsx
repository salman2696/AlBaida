import React from "react";

const TitleWithCards = ({ title, cards }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-14 text-center center-title">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            <img
              src={card.image}
              alt="product"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-lg font-semibold">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleWithCards;

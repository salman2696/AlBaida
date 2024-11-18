import React from "react";
import { Link } from "react-router-dom";


const Card = ({ imageUrl, description, title, link }) => {
  return (
      <div className="3xl:min-w-[400px] lg:max-w-[400px] rounded overflow-hidden shadow-md transition-all transform hover:translate-y-[-10px] hover:shadow-xl duration-300 ease-in-out">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="p-4">
          <p className="text-gray-900 text-xl font-semibold mb-2 min-h-14">{title}</p>
          <p className="text-gray-500 text-sm mb-4 min-h-36">{description}</p>
          {/* <a
          href="#"
          className="text-[#c20001] font-semibold text-sm flex items-center mt-"
        >
          Read More
          <IoIosArrowDroprightCircle size={32} />
        </a> */}
        </div>
      </div>
  );
};

export default Card;

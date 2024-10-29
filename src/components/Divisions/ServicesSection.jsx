import React from "react";
import {
  FaTools,
  FaThermometerHalf,
  FaArtstation,
  FaBuilding,
  FaShieldAlt,
  FaUsers,
  FaConciergeBell,
  FaBug,
} from "react-icons/fa";

const services = [
  { name: "Infrastructure Maintenance", icon: <FaTools /> },
  { name: "AC & Ventilation", icon: <FaThermometerHalf /> },
  { name: "Aesthetics", icon: <FaArtstation /> },
  { name: "Elevator", icon: <FaBuilding /> }, // Replaced with FaBuilding
  { name: "Security", icon: <FaShieldAlt /> },
  { name: "Human Resources", icon: <FaUsers /> },
  { name: "Catering", icon: <FaConciergeBell /> },
  { name: "Pest Control", icon: <FaBug /> },
  { name: "Fire Alarm", icon: <FaShieldAlt /> },
];

const ServicesSection = ({ title, description }) => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-6 text-lg">{description}</p>
         
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:ml-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-4 border rounded-lg shadow-md"
            >
              <div className="text-[#ab1218] text-3xl mr-4">{service.icon}</div>
              <span className="text-gray-800">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

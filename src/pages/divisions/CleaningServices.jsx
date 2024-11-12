import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/cleaningServices/heroImage.jpg";
import Banner from "../../components/Banner";
import ServicesSection from "../../components/Divisions/ServicesSection";
import {
  MdCleaningServices,
  MdRestaurant,
  MdMeetingRoom,
  MdBuild,
} from "react-icons/md";
import {
  FaWindowMaximize,
  FaCouch,
  FaBroom,
  FaWarehouse,
  FaLightbulb,
} from "react-icons/fa";
import { GiVacuumCleaner, GiChemicalDrop } from "react-icons/gi";
import { FiGrid } from "react-icons/fi";

const CleaningServices = () => {
  const services = [
    { name: "General Cleaning Services", icon: <MdCleaningServices /> },
    { name: "Dining and Cafeteria Cleaning", icon: <MdRestaurant /> },
    { name: "Facade and Window Cleaning", icon: <FaWindowMaximize /> },
    { name: "Floor and Carpet Care", icon: <GiVacuumCleaner /> },
    { name: "Furniture and Accessories Cleaning", icon: <FaCouch /> },
    { name: "Office and Workspace Cleaning", icon: <MdMeetingRoom /> },
    {
      name: "Laboratory and Specialized Area Cleaning",
      icon: <GiChemicalDrop />,
    },
    { name: "Industrial and Equipment Cleaning", icon: <MdBuild /> },
    { name: "Janitorial and Housekeeping Services", icon: <FaBroom /> },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Cleaning Services"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <Banner title="We deliver reliable solutions across Facility Management" />
      <ServicesSection
        title="20 Years of Excellence in Comprehensive Cleaning Solutions"
        description="Al Baida is a team of professionals and experts committed to providing supreme cleaning services. We offer complete cleaning solutions and always strive to achieve the best in class customer service to our clients using the latest technologies. Our excellence in the field of cleaning services in Qatar is unparalleled. Our passion and attention to details differentiate us from other cleaning service providers."
        services={services}
      />
    </div>
  );
};

export default CleaningServices;

import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/facilityManagement/heroImage.jpg";
import ServicesSection from "../../components/Divisions/ServicesSection";
import AreasOfExpertise from "../../components/Divisions/AreasOfExpertise";
import Banner from "../../components/Banner";
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


const FacilityManagement = () => {

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

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Facility Management"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <Banner title="We deliver reliable solutions across Facility Management" />
      <ServicesSection
        title="Comprehensive Facility Solutions for Seamless Business Operations"
        description=" We provide a wide range of services to ensure that your facility runs smoothly and efficiently. Explore our offerings tailored to meet your needs."
        services={services}
      />
      <AreasOfExpertise
        title="Areas of Expertise"
        description="Every business need is handled with utmost care and precision. Through the coordination of multiple work streams, people management processes and integrated delivery systems, Al Baida adds value to the customer organization, allowing increased focus on core competences by unleashing the potential of outsourcing."
      />
    </div>
  );
};

export default FacilityManagement;

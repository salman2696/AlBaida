import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/facilityManagement/heroImage.jpg";
import ServicesSection from "../../components/Divisions/ServicesSection";
import AreasOfExpertise from "../../components/Divisions/AreasOfExpertise";

const FacilityManagement = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Facility Management"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <div className="bg-custom-red p-8 flex justify-between items-center max-w-7xl mx-auto my-10">
        <h2 className="text-white text-2xl font-bold capitalize">
          We deliver reliable solutions across Facility Management
        </h2>
        <button className="bg-white font-semibold py-2 px-4 rounded">
          Get a Quote
        </button>
      </div>
      <ServicesSection
        title="Comprehensive Facility Solutions for Seamless Business Operations"
        description=" We provide a wide range of services to ensure that your facility runs smoothly and efficiently. Explore our offerings tailored to meet your needs."
      />
      <AreasOfExpertise
        title="Areas of Expertise"
        description="Every business need is handled with utmost care and precision. Through the coordination of multiple work streams, people management processes and integrated delivery systems, Al Baida adds value to the customer organization, allowing increased focus on core competences by unleashing the potential of outsourcing."
      />
    </div>
  );
};

export default FacilityManagement;

import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/facilityManagement/heroImage.jpg";

const FacilityManagement = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Facility Management"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
        descriptionClass="max-w-md"
      />
    </div>
  );
};

export default FacilityManagement;

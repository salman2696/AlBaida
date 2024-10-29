import React from 'react'
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/cleaningServices/heroImage.jpg";

const CleaningServices = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Cleaning Services"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
    </div>
  )
}

export default CleaningServices

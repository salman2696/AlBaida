import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/engineeringConsultancy/heroImage.jpg";

const EngineeringConsultancy = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Engineering Consultancy"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <p className="p-4 md:p-6 max-w-7xl mx-auto text-lg">
        Al Baida Group Engineering Consultancy team is made up of well
        experienced, qualified and dedicated team of Architects and Engineers
        and familiarized in obtaining approvals from concerned Government
        Authorities. Al Baida Group provides quality graded engineering services
        in the areas of Architectural, Structural Services, Landscape, Drafting
        Services, Electro-mechanical services.
        <br />
        AL Baida Group has developed expertise in analyzing, designing,
        providing and implementing innovative solutions. To increase the profile
        of our services to construction industry, we intend to cater to the
        needs of key contributors such as companies We are a unique organization
        capable of taking on prime engineering consultancy work. This includes
        conceptual design, management and completion.
      </p>
    </div>
  );
};

export default EngineeringConsultancy;

import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/agencyRepresentation/heroImage.jpg";

const AgencyRepresentation = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Agency Representation"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <p className="p-4 md:p-6 max-w-7xl mx-auto text-lg">
        Al Baida has been a Business conglomerate since 1970. So, has a good
        hold over businesses in Qatar. AL Baida has been assisting agencies to
        represent in Qatar. Al Baida is competent to represent agencies and help
        them in any type of complexities, challenges, and open a great
        opportunity for them. Such a dynamic, productive, and performative
        character of representation. potentialities build huge profits for
        agencies across the world.
        <br />
        Al Baida also forms Joint Venture with the agencies to help them,
        support them in all possible ways to bag bigger contracts and projects.
        Such a Joint Venture with a company like Al Baida proves to be too
        profitable and earns a brand name for the agency. Al Baida also has the
        capacity to enter into Joint Venture on multiple projects with various
        agencies at a given point in time.
      </p>
    </div>
  );
};

export default AgencyRepresentation;

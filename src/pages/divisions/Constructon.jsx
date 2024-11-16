import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/construction/heroImage.jpg";
import gridImage1 from "../../assets/images/divisions/construction/gridImage1.png";
import gridImage2 from "../../assets/images/divisions/construction/gridImage2.png";
import gridImage3 from "../../assets/images/divisions/construction/gridImage3.png";
import gridImage4 from "../../assets/images/divisions/construction/gridImage4.png";

const Constructon = () => {
  const gridImages = [gridImage1, gridImage2, gridImage3, gridImage4];
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Construction"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-4">
        <div className="w-full md:w-2/4 p-2">
          <p className="text-lg">
            Al Baida has been more striving for more than 15 years in offering
            the highest quality standards and customer satisfaction.
            <br /> We expertise in building construction, ground plus two
            stored, warehouse, mosque, Villa complex fencing, and other
            construction projects.
            <br />
            We have done more than 10 projects with a team of architects,
            project engineers, and skilled engineers. We also use only branded
            material for our projects. Our tech technologies perform an
            extremely good job and every step from planning to handover is done
            with due consideration and on-time completion. Weekly planners and
            schedules are in place for stress-free project management.
            <br />
            Al baida group was established in 1970 and is a general contractor
            offering construction services in terms of Site Analysis,
            Feasibility Studies, Preliminary Design Studies, Permit/Zoning
            Applications, etc. We handle various industrial, distribution,
            manufacturing, office, retail, recreational, healthcare and
            commercial projects in Doha.We are leaders in providing value-added
            construction services to our customers by creating a successful
            partnership with them throughout the construction process. Our
            pledge is to establish lasting relationships with our customers by
            exceeding their expectations and gaining their trust through
            exceptional performance by every member of the construction team
          </p>
        </div>
        <div className="w-full md:w-2/4 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md transform transition hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructon;

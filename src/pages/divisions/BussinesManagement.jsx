import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/businessManagementConsultancy/heroImage.jpg";

const BussinesManagement = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Business Management"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <p className="p-4 md:p-6 max-w-7xl mx-auto text-lg">
        We offer a variety of business and management consulting services that
        support your business needs. We offer a variety of solutions to support
        your growth plan and the optimization of your organization.
        <br />
        Our management consultants take the time to understand your current
        position and future goals, allowing us to help you bridge that gap,
        create roadmaps, and put your organization in a position of industry
        leadership and scalable growth. Our strategists have decades of
        experience spanning across wide range of industries — from nonprofits
        and educational institutions to government systems, healthcare systems,
        technology companies, and professional services firms. Through our
        business and management consulting services, will help you to manage and
        improve your business operations cost-effectively, so you can focus on
        providing the highest quality services for your clients.
      </p>
    </div>
  );
};

export default BussinesManagement;

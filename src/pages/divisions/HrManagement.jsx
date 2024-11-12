import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/HrManagement/heroImage.jpg";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import { FaHandshake, FaTruckLoading, FaUsersCog } from "react-icons/fa";

const HrManagement = () => {
  const services = [
    {
      name: "Functional Outsourcing",
      icon: <FaHandshake />,
      description:
        "Comprehensive outsourcing of specific business functions, covering back-office tasks like HR and payroll, as well as front-office services such as staffing for drivers, office support, and reception.",
    },
    {
      name: "Logistics Outsourcing",
      icon: <FaTruckLoading />,
      description:
        "Solutions for logistical needs, including visa processing, mobilization, employee services, insurance, and travel arrangements, allowing clients to concentrate on their core business.",
    },
    {
      name: "HR Outsourcing",
      icon: <FaUsersCog />,
      description:
        "Tailored HR services for companies looking to efficiently manage HR functions without the need for an in-house team, from specific HR tasks to entire HR operations.",
    },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="HR Management & Outsourcing"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <div className="max-w-7xl mx-auto">
        <Banner title="Agriculture is the sole reason of our very existence." />
        <Services
          title="Comprehensive Workforce Solutions for Project-Based and Strategic Staffing Needs"
          description="Offering a skilled workforce ranging from clerks to Project Managers, Al Baida manages hiring, logistics, and placement, providing flexible staffing solutions to meet clients' dynamic project needs without long-term commitments."
          services={services}
        />
        <p className="p-4 text-lg">
          With a stringent selection procedure, we can provide a range of
          workforce to meet our clients’ needs, ranging from clerks and
          extending to IT professionals and Project Managers. This is especially
          useful to clients who are in need of additional resources for specific
          projects of limited duration or clients who prefer not to hire certain
          functions or positions within their organizations for their own
          business strategy. Al Baida hires the resources, handles all logistics
          and outsources them to the client for whatever duration required,
          allowing for the flexibility to mobilize and demobilize according to
          the client’s current needs.
        </p>
      </div>
    </div>
  );
};

export default HrManagement;

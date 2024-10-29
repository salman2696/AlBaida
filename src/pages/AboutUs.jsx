import React from "react";
import HeroSection from "../components/HeroSection";
import MissionVisionValues from "../components/MissionVisionValues";
import Partners from "../components/Partners";
import ChairmanMsg from "../components/ChairmanMsg";
import heroImage from "../assets/images/AboutUs/heroImage.jpg";

const AboutUs = () => {
  return (
    <div>
      <HeroSection
      heroImage={heroImage}
        title="Your Trusted Partner in"
        subtitle=" Comprehensive Project Solutions"
        descripton="At Al Baida, we deliver reliable solutions across Facility Management, Agriculture, Contracting, Infrastructure, and more. From HR Outsourcing to Engineering Consultancy, our expertise drives impactful, high-quality results for every project."
      />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 center-title">
            Our History
          </h2>
          <p className="text-lg text-gray-600">
            Discover the journey that has shaped us into a trusted leader in
            comprehensive project solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              The Beginning
            </h3>
            <p className="text-gray-600">
              Established in 1990, our company began with a vision to provide
              unparalleled services across various industries. We laid our
              foundation on values of integrity, quality, and innovation,
              quickly gaining the trust of clients and partners alike.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Expansion and Growth
            </h3>
            <p className="text-gray-600">
              Through the early 2000s, we expanded our capabilities, integrating
              cutting-edge technology and a commitment to sustainable practices.
              Our team grew, bringing in expertise and talent that propelled our
              company forward, allowing us to serve a global client base.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              A Commitment to Innovation
            </h3>
            <p className="text-gray-600">
              In the past decade, we have embraced new technologies and
              innovative approaches, reinforcing our position as industry
              leaders. Our projects reflect our dedication to providing
              forward-thinking solutions that adapt to the ever-evolving
              landscape of global markets.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Today and Beyond
            </h3>
            <p className="text-gray-600">
              Today, we stand as a trusted partner in comprehensive project
              solutions. Looking ahead, our focus remains on delivering
              value-driven services that not only meet but exceed expectations,
              ensuring a legacy of excellence for future generations.
            </p>
          </div>
        </div>
      </section>
      <Partners />
      <MissionVisionValues />
      <ChairmanMsg />
    </div>
  );
};

export default AboutUs;

import React from "react";
import Herosection from "../components/HomePage/Herosection";
import CompanyNum from "../components/HomePage/CompanyNum";
import OurServices from "../components/HomePage/OurServices";
import ImageWithDesc from "../components/HomePage/ImageWithDesc";
import AboutUsImage from "../assets/images/AboutUsImage.jpg";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <ImageWithDesc
        title="About Our Company"
        subtitle="Business is in our breath. That's how we always make it the best."
        description="We are a paramount group of business services in various genres as facility management, transport & logistics, construction & engineering, plan hire & heavy machinery rental, real estate and agriculture trading. Established in 1970, Al Baida Group has built and maintained a group of companies encompassing various commercial sectors ranging from facility management to infrastructure services and a lot more."
        buttonText="Learn More"
        imageSrc={AboutUsImage}
        reverseLayout={false} // Change to true to reverse the layout
        bgColor="bg-[#e9eae5]" // Optional: Set the background color
      />
      <CompanyNum />
      <OurServices />
      <ContactUs />
    </div>
  );
};

export default HomePage;

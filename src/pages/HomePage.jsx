import React from "react";
import Herosection from "../components/HomePage/Herosection";
import CompanyNum from "../components/HomePage/CompanyNum";
import OurServices from "../components/HomePage/OurServices";
import ImageWithDesc from "../components/HomePage/ImageWithDesc";
import AboutUsImage from "../assets/images/AboutUsImage.jpg";
import ContactUs from "../components/ContactUs";
import Blogs from "../components/Blogs";
import { useTranslation } from "react-i18next";

const HomePage = () => {

  const { t, i18n } = useTranslation();
  

  return (
    <div>
      <Herosection />
      <ImageWithDesc
        title={t("home.about.companyTitle")}
        subtitle={t("home.about.companySubtitle")}
        description={t("home.about.companyDescription")}
        buttonText={t("home.about.learnMore")}
        imageSrc={AboutUsImage}
        reverseLayout={false} // Change to true to reverse the layout
        bgColor="bg-[#e9eae5]" // Optional: Set the background color
      />
      <CompanyNum />
      <OurServices />
      <ContactUs />
      <Blogs/>
    </div>
  );
};

export default HomePage;

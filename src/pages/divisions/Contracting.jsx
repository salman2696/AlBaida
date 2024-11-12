import React from 'react'
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/contracting/heroImage.jpg";
import Banner from '../../components/Banner';

const Contracting = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Contracting & Trading"
        descripton="Al Baida Group is a company driven by a vision aligned to the National Vision of Qatar."
      />
      <Banner title="We deliver reliable solutions across Contracting & Trading" />
    </div>
  )
}

export default Contracting

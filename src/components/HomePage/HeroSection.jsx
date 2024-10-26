import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTransition, animated } from "@react-spring/web";
import { LuConstruction } from "react-icons/lu";
import {
  FaTools,
  FaBuilding,
  FaRoad,
  FaBroom,
  FaSeedling,
  FaTruck,
  FaUsers,
  FaWrench,
  FaBusinessTime,
  FaIndustry,
  FaCogs,
} from "react-icons/fa"; // Example icons
import { motion as motionMarquee } from "framer-motion"; // Import for marquee animation

const heroData = [
  {
    headline: "Comprehensive Solutions for Every Industry",
    subHeadline:
      "From infrastructure to logistics, AL BAIDA GROUP leads the way.",
    bgImage: "projects/project1.jpg",
  },
  {
    headline: "Expertise in Construction and Engineering",
    subHeadline: "Building roads, bridges, and more with unmatched precision.",
    bgImage: "projects/project2.jpg",
  },
  {
    headline: "Reliable HR and Outsourcing Services",
    subHeadline:
      "Providing top-tier human resource solutions across industries.",
    bgImage: "projects/project3.jpg",
  },
  // Add more slides here
];

const categories = [
  { title: "Facility Management", icon: <FaBuilding /> },
  { title: "Construction", icon: <LuConstruction />},
  { title: "Agriculture Projects & Training", icon: <FaSeedling /> },
  { title: "Contracting & Trading", icon: <FaTools /> },
  { title: "Infrastructure Roads & Project Development", icon: <FaRoad /> },
  { title: "Cleaning Services", icon: <FaBroom /> },
  { title: "Heavy Equipment Rental", icon: <FaTruck /> },
  { title: "HR Management & Outsourcing", icon: <FaUsers /> },
  { title: "Cargo Logistics & Custom Clearance", icon: <FaWrench /> },
  { title: "Engineering Consultancy", icon: <FaCogs /> },
  { title: "Business Management & Consultancy", icon: <FaBusinessTime /> },
  { title: "Agency Representation", icon: <FaIndustry /> },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(currentSlide, {
    keys: currentSlide,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }, // Adjust this for smoother fade
  });

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      {transitions((style, index) => (
        <animated.div
          key={heroData[index].bgImage}
          style={{ ...style, position: "absolute", inset: 0 }}
          className="w-full h-full object-cover"
        >
          <img
            src={heroData[index].bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay */}
        </animated.div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 h-full">
        <AnimatePresence exitBeforeEnter>
          <motion.h1
            key={heroData[currentSlide].headline}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="text-white text-4xl md:text-5xl font-bold"
          >
            {heroData[currentSlide].headline}
          </motion.h1>

          <motion.p
            key={heroData[currentSlide].subHeadline}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto"
          >
            {heroData[currentSlide].subHeadline}
          </motion.p>
        </AnimatePresence>

        {/* Arrow Navigation */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button onClick={handlePrev}>
            <FaChevronLeft className="text-red-600 text-4xl hover:text-5xl transition-all duration" />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button onClick={handleNext}>
            <FaChevronRight className="text-red-600 text-4xl" />
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button className="px-6 py-3 bg-custom-red text-white rounded hover:bg-red-700">
            Explore Our Services
          </button>
          <button className="px-6 py-3 bg-custom-red text-white rounded hover:bg-red-700">
            Get in Touch
          </button>
        </div>
      </div>
      {/* Marquee Section */}

      {/* Fading effect on both sides */}
      {/* <div className="absolute bottom-0 left-0 w-16 h-32 z-20 bg-gradient-to-r from-white"></div>
        <div className="absolute bottom-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-white"></div> */}

      {/* Marquee Container */}
      <motion.div
        className="flex space-x-8 absolute z-10 bottom-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="min-w-[250px] backdrop-blur-sm h-32 flex flex-col items-center justify-center border-2 shadow-md rounded-lg p-4"
          >
            <div className="text-4xl text-red-600">{category.icon}</div>
            <h3 className="text-lg font-bold mt-2 text-center text-white">{category.title}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

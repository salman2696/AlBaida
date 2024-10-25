import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = ({
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  reverseLayout = false,
  bgColor = "bg-gray-100",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will trigger only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <section className={`w-full ${bgColor} py-12`} ref={ref}>
      <div className="container mx-auto max-w-7xl px-4">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
            reverseLayout ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left Section: Title, Subtitle, Description, Button */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.h3
                className="text-2xl font-semibold mb-4 text-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {subtitle}
              </motion.h3>
            )}
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.button
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              animate={{ opacity: inView ? 1 : 0 }} // Fade in the button
            >
              {buttonText}
            </motion.button>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2">
            <motion.img
              src={imageSrc}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

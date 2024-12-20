import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaSpinner,
  FaCheckCircle,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const icons = [
  <FaHandshake className="text-custom-red text-5xl md:text-6xl mb-4" />,
  <FaUsers className="text-custom-red text-5xl md:text-6xl mb-4" />,
  <FaSpinner className="text-custom-red text-5xl md:text-6xl mb-4" />,
  <FaCheckCircle className="text-custom-red text-5xl md:text-6xl mb-4" />,
  <FaCalendarAlt className="text-custom-red text-5xl md:text-6xl mb-4" />,
  <FaBuilding className="text-custom-red text-5xl md:text-6xl mb-4" />
];


const CompanyNum = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t, i18n } = useTranslation();
  const services = t("home.companyNum.services", { returnObjects: true });

  return (
    <section className="bg-gray-100">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto py-8 px-4 transition-transform duration-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Heading Section */}
        <div className="flex items-center mb-8 justify-center">
          <h2 className="text-xl md:text-3xl xl:text-4xl font-bold text-black center-title">
            {t("home.companyNum.title")}
          </h2>
        </div>

        {/* Services Containers - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 md:p-8 border rounded-lg shadow-lg transition-transform duration-1000 bg-white ${
                inView
                  ? "translate-x-0 opacity-100"
                  : index % 2 === 0
                  ? "translate-y-10 opacity-0"
                  : "-translate-y-28 opacity-0"
              }`}
            >
              {icons[index]}
              <div className="text-center">
                <h3 className="text-lg md:text-2xl xl:text-3xl font-semibold">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={service.count}
                      suffix={service.suffix}
                      duration={2}
                    />
                  ) : (
                    `${service.count}${service.suffix}`
                  )}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyNum;

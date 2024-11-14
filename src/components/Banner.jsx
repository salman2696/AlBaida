import React from 'react';
import { useTranslation } from "react-i18next"

const Banner = ({ title, className = '', }) => {
  const { t } = useTranslation();
  return (
    <div className={`bg-custom-red p-4 md:p-8 flex justify-between items-center max-w-7xl mx-auto my-10 ${className}`}>
      <h2 className="text-white md:text-2xl font-bold capitalize">
        {title}
      </h2>
      <button className="bg-white text-xs md:text-base font-semibold py-2 px-4 rounded">
      {t("division.facilityManagement.banner.button")}
      </button>
    </div>
  );
};

export default Banner;

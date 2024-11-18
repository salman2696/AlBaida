import React from "react";
import chaimanImage from "../assets/images/AboutUs/chairman.jpg";
import { useTranslation } from "react-i18next";

const ChairmanMsg = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-white relative">
      <div className="absolute right-0 hidden w-3/4 min-h-screen bg-gray-100 lg:block rounded-xl"></div>
      <div className="relative flex max-w-7xl mx-auto">
        <div className="min-h-screen lg:w-1/3"></div>

        <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
            <img
              className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
              src={chaimanImage}
              alt="chairman image"
            />

            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-4xl font-semibold text-gray-800 lg:w-72">
                {t("aboutUs.chairmanMsg.title")}
              </h1>

              <p className=" mt-6 text-gray-500 ">
                {t("aboutUs.chairmanMsg.paragraph")}
              </p>

              <h3 className="mt-6 text-lg font-medium text-custom-red">
                {t("aboutUs.chairmanMsg.name")}
              </h3>
              <p className="text-gray-600 ">
                {t("aboutUs.chairmanMsg.position")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMsg;

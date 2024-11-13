import React from "react";
import qatarUniversityLogo from "../assets/images/qataruniversitylogo.png";
import mwaniLogo from "../assets/images/mwaniLogo.png";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#e9eae5]">
      <div className="container px-6 py-10 mx-auto max-w-7xl">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div className="">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl ">
                {t("aboutUs.partners.title1")}
                <br /> {t("aboutUs.partners.title2")}
              </h1>

              <div className="mt-2">
                <span className="inline-block w-48 h-1 bg-custom-red rounded-full"></span>
                <span className="inline-block w-5 h-1 ml-1 bg-custom-red rounded-full"></span>
                <span className="inline-block w-2 h-1 ml-1 bg-custom-red rounded-full"></span>
              </div>
            </div>
            <div className="">
              <p className="text-lg md:text-xl">
              {t("aboutUs.partners.subTitle")}
              </p>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] object-cover xl:w-[32rem] xl:h-[32rem] rounded-full"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
              alt=""
            />
          </div>
        </div>

        <hr className="my-12 border-gray-800" />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-24"
              src={qatarUniversityLogo} // Replace with your PNG logo path
              alt="Logo 1"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-24"
              src={mwaniLogo} // Replace with your PNG logo path
              alt="Logo 2"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-24"
              src={qatarUniversityLogo} // Replace with your PNG logo path
              alt="Logo 1"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-24"
              src={mwaniLogo} // Replace with your PNG logo path
              alt="Logo 2"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-24"
              src={mwaniLogo} // Replace with your PNG logo path
              alt="Logo 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

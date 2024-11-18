import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Faqs = ({ faqs }) => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    t("projects.mwaniProject.FAQS.QnA.0.category")
  ); // Track the selected category


  // Filter FAQs based on the selected category
  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
            {t("projects.mwaniProject.FAQS.title")}
          </h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800">
                {t("projects.mwaniProject.FAQS.tableOfContent.title")}
              </h1>

              <div className="mt-4 space-y-4 lg:mt-8">
                <button
                  onClick={() =>
                    setSelectedCategory(
                      t("projects.mwaniProject.FAQS.QnA.0.category")
                    )
                  }
                  className={`block ${
                    selectedCategory ===
                    t("projects.mwaniProject.FAQS.QnA.0.category")
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  {t(
                    "projects.mwaniProject.FAQS.tableOfContent.contents.0.title"
                  )}
                </button>
                <button
                  onClick={() =>
                    setSelectedCategory(
                      t("projects.mwaniProject.FAQS.QnA.2.category")
                    )
                  }
                  className={`block ${
                    selectedCategory ===
                    t("projects.mwaniProject.FAQS.QnA.2.category")
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  {t(
                    "projects.mwaniProject.FAQS.tableOfContent.contents.1.title"
                  )}
                </button>
                <button
                  onClick={() =>
                    setSelectedCategory(
                      t("projects.mwaniProject.FAQS.QnA.4.category")
                    )
                  }
                  className={`block ${
                    selectedCategory ===
                    t("projects.mwaniProject.FAQS.QnA.4.category")
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  {t(
                    "projects.mwaniProject.FAQS.tableOfContent.contents.2.title"
                  )}
                </button>
                <button
                  onClick={() =>
                    setSelectedCategory(
                      t("projects.mwaniProject.FAQS.QnA.6.category")
                    )
                  }
                  className={`block ${
                    selectedCategory ===
                    t("projects.mwaniProject.FAQS.QnA.6.category")
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  {t(
                    "projects.mwaniProject.FAQS.tableOfContent.contents.3.title"
                  )}
                </button>
                <button
                  onClick={() =>
                    setSelectedCategory(
                      t("projects.mwaniProject.FAQS.QnA.8.category")
                    )
                  }
                  className={`block ${
                    selectedCategory ===
                    t("projects.mwaniProject.FAQS.QnA.8.category")
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  {t(
                    "projects.mwaniProject.FAQS.tableOfContent.contents.4.title"
                  )}
                </button>
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full focus:outline-none"
                  >
                    <div className="flex items-center">
                      <span
                        className={`transition-transform duration-300 transform ease-in-out ${
                          openIndex === index ? "rotate-0" : "rotate-90"
                        } text-custom-red text-2xl`}
                      >
                        {openIndex === index ? "-" : "+"}
                      </span>
                      <h1 className="mx-4 md:text-xl text-gray-700 font-semibold text-left">
                        {faq.question}
                      </h1>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-800 ease-in-out ${
                      openIndex === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                    style={{
                      overflow: "hidden",
                      transition: "max-height 0.5s ease, opacity 0.5s ease",
                    }}
                  >
                    <div className="flex mt-4 md:mx-10">
                      <span className="border-l-2 border-custom-red"></span>
                      <p className="ml-4 text-gray-500">{faq.answer}</p>
                    </div>
                  </div>

                  <hr className="my-8 border-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;

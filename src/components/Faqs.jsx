import React, { useState } from "react";

const Faqs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("General"); // Track the selected category

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
            Have any Questions?
          </h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800">
                Table of Content
              </h1>

              <div className="mt-4 space-y-4 lg:mt-8">
                <button
                  onClick={() => setSelectedCategory("General")}
                  className={`block ${
                    selectedCategory === "General"
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  General
                </button>
                <button
                  onClick={() => setSelectedCategory("Trust & Safety")}
                  className={`block ${
                    selectedCategory === "Trust & Safety"
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  Trust & Safety
                </button>
                <button
                  onClick={() => setSelectedCategory("Services")}
                  className={`block ${
                    selectedCategory === "Services"
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  Services
                </button>
                <button
                  onClick={() => setSelectedCategory("Billing")}
                  className={`block ${
                    selectedCategory === "Billing"
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  Billing
                </button>
                <button
                  onClick={() => setSelectedCategory("Office Cleaning")}
                  className={`block ${
                    selectedCategory === "Office Cleaning"
                      ? "text-custom-red"
                      : "text-gray-500"
                  } hover:underline focus:outline-none`}
                >
                  Office Cleaning
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

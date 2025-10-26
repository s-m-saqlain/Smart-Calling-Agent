import { useState } from "react";
import FAQS from "../assets/images/FAQ.png";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Doodle Content Writing Tool?",
      answer:
        "Sed mattis eros lectus, eu fermentum felis laborties convallis. Nam felis arcu, sed mi faucibus quis. Fusco id dui nisl. Sed ac lorem a dolor incident suscipit quis purus.",
    },
    {
      question: "What Languages Does It Supports?",
      answer:
        "The platform supports over 20 languages including English, Spanish, French, German, Hindi, and Japanese, making it truly global.",
    },
    {
      question: "How are AI writers impacting the writing industry?",
      answer:
        "AI writers are transforming the industry by accelerating content creation, automating routine tasks, and providing data-driven insights to improve SEO and engagement.",
    },
    {
      question: "Does Doodle Write Long Articles?",
      answer:
        "Yes, our tool is capable of generating long-form content, including comprehensive articles, reports, and detailed guides, up to 5,000 words per request.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight text-center lg:text-left">
              Frequently Asked Questions.
            </h2>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 aspect-square">
              <img
                alt="3D FAQ Graphic"
                decoding="async"
                className="object-contain object-center rounded-2xl absolute inset-0 w-full h-full"
                src={FAQS}
              />
            </div>
          </div>

          <div className="lg:col-span-3 mt-8 lg:mt-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="rounded-xl overflow-hidden mb-4 cursor-pointer transition-all duration-300 bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex justify-between items-center p-4 sm:p-5">
                  <h3 className="sm:block hidden text-base sm:text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>

                  {/* For Mobile */}

                  <h3 className="sm:hidden text-base sm:text-lg font-semibold text-gray-800 w-48">
                    {faq.question}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";

const faqData = [
  {
    question: "What services does NIPOJ Global Services Limited offer?",
    answer:
      "NIPOJ specializes in Renewable Energy, Engineering and Construction, Underwater Engineering & Maritime Services, and Training & Capacity Development.",
  },
  {
    question:
      "Is NIPOJ Global Services Limited certified to handle engineering and construction projects?",
    answer:
      "Yes, NIPOJ is certified by COREN, DPR, NOSDRA, and the Federal Ministry of Environment, ensuring compliance with industry standards.",
  },
  {
    question: "Does NIPOJ Global Services operate internationally?",
    answer:
      "Yes, NIPOJ has affiliates in Spain and China, allowing us to deliver services beyond Nigeria.",
  },
  {
    question: "How can I request a consultation or service from NIPOJ?",
    answer:
      "You can contact us via email at info@nipojglobalservicesltd.org or call +234 8035306165 / +234 8033223754. Alternatively, visit our office at No. 30 Omerelu Street, GRA, Phase II, Port Harcourt, Rivers State.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mt-10 space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border rounded-lg p-3">
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full text-left font-semibold flex justify-between items-center"
          >
            {item.question}
            <span>
              {openIndex === index ? (
                <FaAngleUp size={25} className="text-yellow-500" />
              ) : (
                <FaAngleDown size={25} className="text-yellow-500" />
              )}
            </span>
          </button>
          <div
            className={`mt-2 text-gray-600 transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

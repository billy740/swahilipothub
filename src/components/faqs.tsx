"use client";

import { useState } from "react";

const FAQs = () => {
  // State to manage which accordion item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle open state, explicitly defining the parameter type
  const toggleAccordion = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <>
      {/* FAQ */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <img
            className="mb-5 mx-auto"
            src="/faqs.svg"
            alt="Illustration"
            style={{ maxWidth: "15rem" }}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-7">
          <h3 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h3>
        </div>
        {/* End Heading */}

        {/* Accordion */}
        <div className="mx-auto w-full md:w-4/5 lg:w-3/5">
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className="border border-gray-300 rounded-md">
              <div
                className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAccordion(0)}
              >
                <h4 className="text-lg font-medium text-gray-800">What is Swahilipot Hub?</h4>
                <span className="text-xl">{openIndex === 0 ? "-" : "+"}</span>
              </div>
              {openIndex === 0 && (
                <div className="p-4 bg-white text-gray-600">
                  Swahilipot Hub is an innovation and technology hub located in Mombasa, Kenya. It serves as a community-driven space that promotes technology, entrepreneurship, and skills development in the coastal region of Kenya.
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div className="border border-gray-300 rounded-md">
              <div
                className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAccordion(1)}
              >
                <h4 className="text-lg font-medium text-gray-800">What programs and services does Swahilipot Hub offer?</h4>
                <span className="text-xl">{openIndex === 1 ? "-" : "+"}</span>
              </div>
              {openIndex === 1 && (
                <div className="p-4 bg-white text-gray-600">
                  SwahiliPot Hub offers a range of programs and services, including training workshops, mentorship programs, networking events, access to co-working spaces, and maker labs. These initiatives aim to empower individuals by providing them with the necessary resources and skills to participate in the digital economy.
                </div>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div className="border border-gray-300 rounded-md">
              <div
                className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAccordion(2)}
              >
                <h4 className="text-lg font-medium text-gray-800">Who can benefit from Swahilipot Hub?</h4>
                <span className="text-xl">{openIndex === 2 ? "-" : "+"}</span>
              </div>
              {openIndex === 2 && (
                <div className="p-4 bg-white text-gray-600">
                  Swahilipot Hub is open to entrepreneurs, developers, creatives, and anyone interested in technology and innovation. It caters to individuals who are looking to enhance their digital skills, collaborate on projects, and connect with like-minded individuals in the tech ecosystem.
                </div>
              )}
            </div>

            {/* Accordion Item 4 */}
            <div className="border border-gray-300 rounded-md">
              <div
                className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAccordion(3)}
              >
                <h4 className="text-lg font-medium text-gray-800">Can I visit Swahilipot Hub as a visitor?</h4>
                <span className="text-xl">{openIndex === 3 ? "-" : "+"}</span>
              </div>
              {openIndex === 3 && (
                <div className="p-4 bg-white text-gray-600">
                  Yes, Swahilipot Hub welcomes visitors who are interested in learning more about their initiatives and the local tech ecosystem. You can visit the hub to attend events, participate in workshops, or simply network with professionals in the field. Swahilipot Hub promotes an inclusive and vibrant community where individuals can exchange ideas and explore opportunities in technology and innovation.
                </div>
              )}
            </div>
          </div>
        </div>
        {/* End Accordion */}

        {/* Info */}
        <div className="text-center mt-8">
          <p className="mb-2 text-lg text-gray-700">Still have questions?</p>
          <a className="text-blue-600 hover:text-blue-800 font-medium" href="mailto:info@swahilipothub.co.ke">
            Contact our friendly support team{" "}
            <i className="bi-chevron-right small ms-1" />
          </a>
        </div>
        {/* End Info */}
      </div>
      {/* End FAQ */}
    </>
  );
};

export default FAQs;

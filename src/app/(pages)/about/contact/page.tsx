import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#fdf7ee] min-h-screen">
      <HeroSection />
      <ContactDetails />
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-soft-warning">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary">
          Let's <span className="text-warning">talk</span>
        </h1>
        <p className="text-lg mt-3 text-gray-700">
          Got a question? Want to learn more about us? Get in touch.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {contactItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img className="h-10 w-10 mb-4" src={item.imgSrc} alt={item.title} />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <a href={item.email} className="text-primary font-medium mt-2 inline-block">
              {item.linkText} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactDetails: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="text-gray-700">Discuss your interests with us.</p>
      <div className="mt-6 space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center">
            <img className="h-6 w-6 mr-3" src={detail.imgSrc} alt="Icon" />
            <span className="text-gray-800">{detail.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Contact Partnerships by Email</h2>
        <p className="text-gray-700">
          If you wish to write us an email instead, please use{" "}
          <a href="mailto:partnership@swahilipothub.co.ke" className="text-blue-600">
            partnership@swahilipothub.co.ke
          </a>
        </p>
      </div>
    </div>
  );
};

// Contact Data
const contactItems = [
  {
    imgSrc: "/com006.svg",
    title: "Our Activities",
    description: "Get help understanding what we do on a daily basis",
    email: "mailto:info@swahilipothub.co.ke",
    linkText: "Get in touch",
  },
  {
    imgSrc: "/com007.svg",
    title: "Our Space",
    description: "Learn about our spaces and how they can help you organize a better event",
    email: "mailto:info@swahilipothub.co.ke",
    linkText: "Get help",
  },
  {
    imgSrc: "/fin006.svg",
    title: "Partnerships",
    description: "Let's team up to boost productivity and accelerate business growth",
    email: "mailto:partnership@swahilipothub.co.ke",
    linkText: "Become a partner",
  },
];

const contactDetails = [
  {
    imgSrc: "/gb.svg",
    text: "Mombasa, Kenya",
  },
  {
    imgSrc: "/gen018.svg",
    text: "Swahilipot Hub Foundation, Swahili Cultural Center",
  },
  {
    imgSrc: "/elc002.svg",
    text: "+254 11 4635505",
  },
];

export default Contact;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <Hero />
      <ContactInfo />
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="shape-container bg-soft-warning">
      <div className="position-relative zi-2">
        <div className="container content-space-1 content-space-md-3">
          {/* Heading */}
          <div className="w-lg-50 mb-5 mb-sm-10">
            <h1 className="display-3 text-primary">
              Let&apos;s <span className="text-warning">talk</span>
            </h1>
            <p className="lead">
              Got a question? Want to learn more about us? Get in touch.
            </p>
          </div>
          {/* End Heading */}
          <div className="row">
            {contactItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-5 mb-md-0">
                <div className="me-md-6">
                  <img className="svg-icon text-primary mb-3" src={item.imgSrc} />
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <a href={item.email}>
                    {item.linkText} <i className="bi-chevron-right small ms-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Shape */}
      <div className="shape shape-bottom zi-1">
        <svg width={3000} height={600} viewBox="0 0 3000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 600H3000V0L0 600Z" fill="#fff" />
        </svg>
      </div>
      {/* End Shape */}
    </div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="container content-space-1 content-space-b-md-3">
      {/* Heading */}
      <div className="w-lg-65 mb-7">
        <h3>Contact Us</h3>
        <p>Discuss your interests with us.</p>
      </div>
      {/* End Heading */}
      <div className="row justify-content-md-between">
        <div className="">
          <div className="mb-4">
            <h6>Contact Partnerships</h6>
          </div>
          <ul className="list-unstyled list-py-1">
            {contactDetails.map((detail, index) => (
              <li key={index}>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 text-center" style={{ width: "1.5rem" }}>
                    <img className="avatar avatar-xss avatar-circle" src={detail.imgSrc} alt="Icon" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <span>{detail.text}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <hr className="my-5" />
          <div className="mt-5">
            <h6>Contact Partnerships by Emails</h6>
            <p>
              If you wish to write us an email instead please use{" "}
              <a href="mailto:partnership@swahilipothub.co.ke">partnership@swahilipothub.co.ke</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const contactItems = [
  {
    imgSrc: "./assets/vendor/duotone-icons/com/com006.svg",
    title: "Our Activities",
    description: "Get help understanding what we do on a daily basis",
    email: "mailto:info@swahilipothub.co.ke",
    linkText: "Get in touch",
  },
  {
    imgSrc: "./assets/vendor/duotone-icons/com/com007.svg",
    title: "Our Space",
    description: "Learn about our spaces and how they can help you organize a better event",
    email: "mailto:info@swahilipothub.co.ke",
    linkText: "Get help",
  },
  {
    imgSrc: "./assets/vendor/duotone-icons/fin/fin006.svg",
    title: "Partnerships",
    description: "Let's team up to boost productivity and accelerate business growth",
    email: "mailto:partnership@swahilipothub.co.ke",
    linkText: "Become a partner",
  },
];

const contactDetails = [
  {
    imgSrc: "./node_modules/flag-icon-css/flags/1x1/gb.svg",
    text: "Mombasa, Kenya",
  },
  {
    imgSrc: "./assets/vendor/duotone-icons/gen/gen018.svg",
    text: "Swahilipot Hub Foundation, Swahili Cultural Center",
  },
  {
    imgSrc: "./assets/vendor/duotone-icons/elc/elc002.svg",
    text: "+254 11 4635505",
  },
];

export default Contact;

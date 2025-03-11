"use client"; // ✅ Add this line at the top

import { useState } from "react";

interface CardItem {
  title: string;
  badgeText: string;
  href: string;
  description: string;
}

const Cards: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const cardsPerPage: number = 3;

  const cardData: CardItem[] = [
    {
      title: "Talent to Income Entrepreneurship Training",
      badgeText: "29.08.2024",
      href: "#",
      description: "Learn more",
    },
    {
      title: "Heritage FDG",
      badgeText: "29.08.2024",
      href: "#",
      description: "Learn more",
    },
    {
      title: "Case Managers On boarding",
      badgeText: "29.08.2024",
      href: "#",
      description: "Learn more",
    },
    {
      title: "Website Design Training",
      badgeText: "27.08.2024 - 29.08.2024",
      href: "#",
      description: "Learn more",
    },
    {
      title: "Business Idea Competition",
      badgeText: "24.08.2024 - 28.08.2024",
      href: "#",
      description: "Learn more",
    },
    {
      title: "KIEP SKIES",
      badgeText: "26.08.2024 - 31.08.2024",
      href: "#",
      description: "Learn more",
    },
    {
      title: "Mega Dance Battle",
      badgeText: "30.08.2024 - 31.08.2024",
      href: "#",
      description: "Learn more",
    },
  ];

  const totalPages: number = Math.ceil(cardData.length / cardsPerPage);
  const currentCards: CardItem[] = cardData.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const handleNextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {/* Blog */}
      <div className="container content-space-1">
        {/* Heading */}
        <div className="w-lg-65 text-center mx-lg-auto mb-10">
          <h2 className="text-primary mb-5">
            Past Events at
            <br />
            <h3>
              <span className="text-warning">Swahilipothub</span>
            </h3>
          </h2>
          <p className="fs-6 text-secondary">
            SwahiliPotHub has a rich history of hosting dynamic and impactful
            events that have significantly contributed to the growth of the
            local tech and creative communities. These events have not only
            served as platforms for knowledge sharing but also fostered
            collaboration, innovation, and cultural exchange among participants.
          </p>
        </div>
        {/* End Heading */}
        <div className="row mb-5 mb-sm-5">
          {currentCards.map((card) => (
            <div key={card.title} className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
              <a
                className="card card-lg card-transition bg-primary-dark shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 rounded-lg"
                href={card.href}
                style={{ minHeight: "22rem", padding: "20px" }}
              >
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill shadow-sm">
                      {card.badgeText}
                    </span>
                  </div>
                  <h4 className="text-white font-bold mb-5">{card.title}</h4>
                  <span className="card-link link-light font-semibold text-decoration-underline">
                    {card.description}{" "}
                    <i className="bi-chevron-right small ms-1" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
        {/* End Row */}
        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button
            onClick={handlePrevPage}
            className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            disabled={currentPage === 0}
          >
            <i className="bi bi-chevron-left"></i> {/* Left Icon */}
          </button>
          <span className="font-semibold text-gray-800">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            disabled={currentPage === totalPages - 1}
          >
            <i className="bi bi-chevron-right"></i> {/* Right Icon */}
          </button>
        </div>
      </div>
      {/* End Blog */}
    </>
  );
};

export default Cards;

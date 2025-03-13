"use client";
import React from "react";

const donations = [
  {
    amount: 100,
    title: "A PAD",
    description: "A Packet of Pad",
    details: ["✓ 1 Pad packet"],
    link: "https://flutterwave.com/pay/fsxxrsiu1hvk",
  },
  {
    amount: 2000,
    title: "Box of Pads",
    description: "1 Box of Pads",
    details: ["✓ 1 Box of Pads"],
    link: "https://flutterwave.com/pay/qlpsgprb9zr3",
  },
  {
    amount: 2499,
    title: "Hygiene Pack",
    description: "A Hygiene Pack Donation",
    details: [
      "✓ Pack of Pads",
      "✓ Pair of Panties",
      "✓ Toothbrush and Toothpaste",
      "✓ Tissue, Razor & Bar of Soap",
    ],
    link: "https://flutterwave.com/pay/zcmuut85e3bj",
  },
  {
    amount: 5000,
    title: "Half Mentorship Support Package",
    description: "Support women in tech mentorship programs",
    details: [
      "✓ Funds mentorship programs",
      "✓ Provides hygiene products to those in need",
    ],
    link: "https://flutterwave.com/pay/wiqpywjiz2w5",
  },
  {
    amount: 10000,
    title: "Full Mentorship Support Package",
    description: "Empower women through mentorship and tech education",
    details: [
      "✓ Directly funds mentorship programs",
      "✓ Supports hygiene and education programs",
    ],
    link: "https://flutterwave.com/pay/4nvphchgpofl",
  },
];

export default function SupportSwahiliTechWomen() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-900 to-purple-800 text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center">
        Support <span className="text-pink-400">Swahili Tech Women</span>
      </h1>
      <p className="text-lg text-center mt-2">
        Support us by contributing to our mission of empowering women in tech.
      </p>

      <div className="mt-8 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center">
          Donate to Support a Girl's Hygiene
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {donations.slice(0, 3).map((donation, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">KES {donation.amount}</h3>
              <p className="text-lg text-center mt-2">{donation.title}</p>
              <p className="text-gray-600 text-center text-sm">{donation.description}</p>
              <ul className="mt-4 text-gray-700 text-sm">
                {donation.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <a
                href={donation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full block bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700"
              >
                Donate Now
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-center mt-12">
          Donate to Mentor a Woman in Tech
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {donations.slice(3).map((donation, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">KES {donation.amount}</h3>
              <p className="text-lg text-center mt-2">{donation.title}</p>
              <p className="text-gray-600 text-center text-sm">{donation.description}</p>
              <ul className="mt-4 text-gray-700 text-sm">
                {donation.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <a
                href={donation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full block bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700"
              >
                Donate Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Make a Custom Donation</h2>
          <p className="text-sm text-gray-300 max-w-md mx-auto mt-2">
            Want to contribute a custom amount? Click the button below to enter your own donation amount.
          </p>
          <a
            href="https://flutterwave.com/donate/moihmphwlo5o"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
          >
            Donate Any Amount
          </a>
        </div>
      </div>
    </div>
  );
}
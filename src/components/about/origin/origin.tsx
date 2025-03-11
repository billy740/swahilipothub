/* eslint-disable @next/next/no-img-element */
import React from "react";

const Origin: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
      {/* Description */}
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-900">How did Swahilipot Hub come to be?</h2>
          <p className="text-gray-700 mt-4">
            Why are all technology, innovation, and incubation hubs based in Nairobi? Nairobi is not Kenya and Kenya is not Nairobi. Something has to change. Aha moment that inspired the founding of Swahilipot.
          </p>
          <p className="text-gray-700 mt-2">
            In 2016, Mahmoud Noor (alias Mentor001) took action and founded Swahilipot with support from National Museums of Kenya (NMK), Seacom, ICT Authority, and Cisco.
          </p>
          <p className="text-gray-700 mt-2">
            Swahilipot started as a community-based organization (CBO) with programs focused on technology & innovation. It has grown over the years to become a non-profit organization (NGO) with diverse program areas and reach.
          </p>
        </div>

        {/* Timeline */}
        <h3 className="text-xl font-semibold text-blue-900 mt-6">Timeline</h3>
        <ul className="mt-4 space-y-4 border-l-4 border-blue-600 pl-6">
          {[
            { year: "2016", text: "Swahilipot Hub founded as a community-based organization (CBO) with programs/activities focused on technology and innovation." },
            { year: "2017", text: "The ambitions of Swahilipot Hub grow and it upgrades from a community-based organization (CBO) to a Non-Governmental Organization (NGO) regulated by The Non-Governmental Organizations Co-ordination Board of Kenya. The official name becomes Swahilipot Hub Foundation." },
            { year: "2018", text: "Swahilipot Hub hosts the first edition of Pwani Innovation Week, its first major activity focused on promoting technology and innovation in the Coastal region of Kenya. On the last day of PIW, Swahilipot hosts Pwani Got Talent, its major event focused on promoting arts in the coastal region of Kenya." },
            { year: "2021", text: "Swahilipot Hub Foundation becomes the anchor partner for the Global Opportunity Youth Network (GOYN) in Mombasa and secures its first grant as an NGO." },
            { year: "2022", text: "Swahilipot Hub Foundation hosts the Modern Heritage of Africa (MoHoA) workshop, its first major event under the program area of heritage." },
            { year: "2023", text: "Swahilipot Hub Foundation gets certified as being equivalent to a Certified Public Charity in the United States of America." },
          ].map((event, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-7 top-0 w-4 h-4 bg-blue-600 rounded-full"></span>
              <span className="font-bold text-blue-900">{event.year}:</span> {event.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Origin;

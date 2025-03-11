import Image from "next/image";

export default function MombasaTourismLab() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 bg-blue-50 flex items-center justify-center px-10 py-20">
          <h1 className="text-4xl font-bold text-gray-800 text-left">
            Mombasa Tourism Innovation Lab
          </h1>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/tourism.png" // ✅ Correct path
            alt="Tourism Lab Event"
            width={800}
            height={405}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900">About</h2>
          <p className="mt-4 text-lg leading-relaxed">
            The Mombasa Innovation Lab, hosted at Swahilipot Hub Foundation, seeks
            to inspire the interest of opportunity youth in Mombasa in culture and
            heritage tourism as a means of job creation.
          </p>

          {/* Quote Box */}
          <div className="bg-gray-200 p-6 rounded-lg mt-6 max-w-lg mx-auto shadow-md">
            <p className="italic text-lg text-gray-800">
              "It is no longer possible for travel and tourism providers, or destinations,
              to continue in a ‘business as usual’ model or mindset..."
            </p>
            <p className="mt-3 font-bold text-right text-gray-900">
              Hon. Najib Balala <br />
              <span className="text-sm text-gray-600">EGH Cabinet Secretary</span>
            </p>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            The inexistence of a structured way to innovate and scale new tourism products
            that entice the modern youthful traveller, who is more interested in the experience
            and less on the physical possessions, has led to a reduction of touristic numbers.
            With support from the European Union, Camoes IP, Jumuia ya county Za Pwani, and the
            Go-Blue project, we aim to incubate innovative ideas in cultural and heritage
            tourism in Mombasa County.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            Objectives of the Mombasa Tourism Innovation Lab
          </h2>
          <ul className="mt-6 space-y-4 text-lg text-gray-700 text-left md:text-center list-disc md:list-none">
            {[
              "Create jobs for young people by developing new tourism products that are yet to be developed.",
              "Become a vehicle to incubate grassroots tourism ideas in Mombasa County.",
              "Develop research and key data points for the advancement of the tourism industry.",
              "Contribute to rejuvenating the coastal tourism product."
            ].map((item, index) => (
              <li key={index} className="relative pl-6 md:pl-0 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full md:before:hidden">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-blue-50 shadow-lg rounded-xl p-8 max-w-lg mx-auto my-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 drop-shadow-lg">
          Talk to Us
        </h2>
        <p className="text-center text-gray-700 mt-2">
          Have questions? Reach out, and we'll get back to you.
        </p>

        <form className="mt-6 flex flex-col gap-5">
          {["Name", "Organization", "Phone Number", "Message"].map((label, index) => (
            <div key={index}>
              <label className="block font-semibold text-gray-800">{label}</label>
              {label === "Message" ? (
                <textarea
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-28 shadow-sm transition-all"
                ></textarea>
              ) : (
                <input
                  type="text"
                  placeholder={`Enter your ${label.toLowerCase()}...`}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Apply Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold text-blue-800">Apply</h2>
        <p className="mt-4 text-gray-700">
          We are receiving proposals from organizations and businesses in
          tourism, hospitality, and cultural heritage that can benefit from the
          pilot.
        </p>
        <p className="mt-4">
          Kindly click on this link to make your application:{" "}
          <a
            href="https://airtable.com/shru9sDlnYXqHsL1g"
            target="_blank"
            className="text-blue-600 font-semibold hover:underline"
          >
            Apply Here
          </a>
        </p>
      </section>

      {/* Shortlisting Sections */}
      {[
        { title: "Applicants", links: ["Preliminary Short Listed Applications", "Applications Dropped from the Preliminary Short List"] },
        { title: "Panel Shortlisting", links: ["Organizations Made to the Panel Shortlist", "Organizations Did Not Make It to the Panel Shortlist"] }
      ].map((section, idx) => (
        <section key={idx} className="text-center py-12 px-6">
          <h2 className="text-2xl font-bold text-blue-800">{section.title}</h2>
          <ul className="mt-4 space-y-2">
            {section.links.map((link, i) => (
              <li key={i}>
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

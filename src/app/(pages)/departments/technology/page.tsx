import Head from "next/head";

export default function TechnologyDepartment() {
  return (
    <>
      <Head>
        <title>Technology Department | SwahiliPot Hub</title>
        <meta
          name="description"
          content="Empowering young individuals in technology through digital literacy, data research, industrial attachment, and startup pitching."
        />
      </Head>

      <section className="bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] bg-gradient-to-r from-blue-600 to-purple-700 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Technology <span className="text-yellow-300">Department</span>
          </h1>
          <p className="mt-4 text-2xl md:text-3xl">
            Kuwezesha Ustadi wa Teknolojia, Kukuza Vipaji
          </p>
        </div>

        {/* About Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Empowering Young Individuals in Technology
          </h2>
          <p className="mt-6 text-2xl text-gray-700">
            Building skills, fostering innovation, and creating opportunities in the digital space.
          </p>
        </div>

        {/* Programs Section */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-3xl font-semibold text-blue-700">{program.title}</h3>
              <p className="mt-4 text-xl text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        

        {/* Call to Action */}
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Join Us & Shape the Future of Tech!
          </h2>
          <p className="mt-6 text-2xl text-gray-700">
            Be part of our programs and explore endless opportunities in technology.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-blue-600 text-white text-2xl font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get Involved
          </a>
        </div>
      </section>
    </>
  );
}

// Data for Programs
const programs = [
  {
    title: "Data & Research",
    description:
      "We offer data collection and analysis training through partnerships with Decodis and UN Habitat.",
  },
  {
    title: "Digital Literacy",
    description:
      "Training in digital skills with Cisco, Huawei, and Red Cross Innovation Unit, benefiting 150+ youths.",
  },
  {
    title: "Industrial Attachment",
    description:
      "Well-structured internships providing hands-on experience in web development, networking, and soft skills.",
  },
  {
    title: "Campus Ambassador",
    description:
      "A collaboration with universities to engage students in tech through workshops and hackathons.",
  },
  {
    title: "Pitching Thursday",
    description:
      "A platform for young innovators to pitch startup ideas and receive expert feedback.",
  },
];

// Partner Logos
const partners = [
  { name: "Ministry of ICT", logo: "/images/ict-ministry.png" },
  { name: "SEACOM", logo: "/images/seacom.png" },
  { name: "National Museums of Kenya", logo: "/images/nmk.png" },
];
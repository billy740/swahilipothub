import { useEffect, useState } from "react";
import Image from "next/image";

const EngineeringPage = () => {
  // Counter states
  const [traffic, setTraffic] = useState(0);
  const [platformsDev, setPlatformsDev] = useState(0);
  const [platformsLive, setPlatformsLive] = useState(0);

  // Animate counters
  useEffect(() => {
    const animateCount = (setter: Function, target: number) => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const step = Math.ceil(target / (duration / 50)); // Smooth animation step

      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(start);
        }
      }, 50);
    };

    animateCount(setTraffic, 5000);
    animateCount(setPlatformsDev, 9);
    animateCount(setPlatformsLive, 4);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-white shadow-md py-8 text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Engineering <span className="text-orange-500">Department</span>
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          Mafundi wa Teknolojia, mabadiliko ya kesho
        </p>
      </header>

      {/* Hero Image */}
      <section className="bg-white py-10 flex justify-center">
        <Image
          src="/workspace.png" // Update with actual image path
          width={900}
          height={450}
          alt="Engineering Department Illustration"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-6 py-10 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
        <p className="text-xl text-gray-700 mt-4 max-w-4xl mx-auto">
          We are the Engineering Team under the Technology Department at Swahilipot Hub Foundation, 
          dedicated to developing and maintaining the organization's platforms as well as managing 
          and configuring the network infrastructure.
        </p>
      </section>

      {/* The Team Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center text-gray-800">The Team</h2>

        <div className="grid md:grid-cols-3 gap-12 mt-10">
          {/* Role of the Team */}
          <div className="bg-white shadow-lg p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-600">Role of the Team</h3>
            <ul className="mt-6 text-lg text-gray-700 space-y-4">
              <li>✔ The team is crucial to the organization, leading software, web, and digital product development.</li>
              <li>✔ We design and create technologies that meet the organization’s needs.</li>
              <li>✔ Continuously optimizing solutions to enhance product performance.</li>
            </ul>
          </div>

          {/* Team Goals */}
          <div className="bg-white shadow-lg p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-600">Team Goals</h3>
            <ul className="mt-6 text-lg text-gray-700 space-y-4">
              <li>✔ Developing sustainable solutions</li>
              <li>✔ Innovation and sustainability</li>
              <li>✔ Ethical and Inclusive Designs</li>
              <li>✔ Network and System Configuration</li>
              <li>✔ Resource Efficiency</li>
              <li>✔ Documentation and Knowledge Sharing</li>
            </ul>
          </div>

          {/* Impact of the Team */}
          <div className="bg-white shadow-lg p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-600">Impact of the Team</h3>
            <ul className="mt-6 text-lg text-gray-700 space-y-4">
              <li>✔ The team integrates and manages platforms for various activities.</li>
              <li>✔ Our efforts have streamlined processes and improved efficiency.</li>
              <li>✔ Strong collaboration with other departments like Creatives and Communications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress of the Team */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue-600">Progress of the Team (in numbers)</h2>
          <p className="text-xl text-gray-700 mt-4">All metrics recorded are up to May 2024:</p>

          <div className="grid md:grid-cols-3 gap-16 mt-12 text-blue-800">
            {/* Traffic Reach */}
            <div>
              <h3 className="text-6xl font-bold">{traffic.toLocaleString()}+</h3>
              <p className="text-2xl mt-4">Traffic in terms of reach</p>
            </div>

            {/* Platforms in Development */}
            <div>
              <h3 className="text-6xl font-bold">{platformsDev}+</h3>
              <p className="text-2xl mt-4">Platforms in development</p>
            </div>

            {/* Platforms that are Live */}
            <div>
              <h3 className="text-6xl font-bold">{platformsLive}</h3>
              <p className="text-2xl mt-4">Platforms that are live</p>
            </div>
          </div>

          <h3 className="text-6xl font-bold text-blue-700 mt-16">Meet the Team</h3>
        </div>
      </section>

      {/* Meet the Team */}
      
<section className="container mx-auto py-10">
  <div className="grid md:grid-cols-3 gap-12 px-10">
    {teamMembers.map((member, index) => (
      <div key={index} className="flex flex-col items-center text-center bg-white shadow-2xl p-8 rounded-lg">
        {/* Bigger Image with Border & Shadow */}
        <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl border-8 border-blue-600">
          <Image
            src={member.image}
            alt={member.name}
            width={256} // Bigger image
            height={256} // Bigger image
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-3xl font-bold mt-6">{member.name}</h3>
        <p className="text-lg text-gray-600">{member.role}</p>
        <p className="text-md text-gray-500">{member.description}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

const teamMembers = [
  { name: "Chris Achinga", role: "Dude", description: "Maker of Softwares, Breaker of Systems.", image: "/chris.jpg" },
  { name: "Jesse Amianda", role: "Software Developer", description: "Frontend & UX design.", image: "/jesse.jpg" },
  { name: "Joy Ngugi", role: "Software Developer", description: "Focused on frontend frameworks.", image: "/joy.jpg" },
  { name: "Rose Ndinda", role: "Software Developer", description: "Passionate about cloud computing.", image: "/rose.jpg" },
  { name: "Muky Mohamed", role: "Technical Support & Mentor", description: "Volunteer & Tech Support.", image: "/muky.jpg" },
  { name: "Chris Mwalimo", role: "Software Engineer", description: "Specializes in AI technologies and machine learning models..", image: "/mwalimo.jpg" },
  { name: "Bianca Gatwiri", role: "Tech Finance", description: "Oversees financial strategies and tech funding initiatives.", image: "/bianca.jpg" },
  { name: "Micky Maria", role: "Cybersecurity Engineer", description: "Dedicated to enhancing system security and data protection.", image: "/micky.jpg" },
  { name: "Aaron Wanje", role: "Technical Support", description: "Ensures smooth operations and rapid troubleshooting, incharge of Digital Literacy classes.", image: "/aaron.jpg" },

];

export default EngineeringPage;

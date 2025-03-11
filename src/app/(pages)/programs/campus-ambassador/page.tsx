import Head from "next/head";
import Image from "next/image";

const teamMembers = [
  { name: "Ayubu Mohamed", role: "Program Coordinator", image: "/ayubu.webp" },
  { name: "Amina Mahmud", role: "Assistant Coordinator", image: "/amina.webp" },
  { name: "Chris Achinga", role: "Program Technical Lead", image: "/chris.webp" },
  { name: "Rehema Said", role: "Student Engagement Lead", image: "/rehema.webp" },
  { name: "Swaleh Athuman", role: "Program Insight Specialist", image: "/swaleh.webp" }
];

export default function CampussAmbassador() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Head>
        <title>Campus Ambassador Program</title>
      </Head>

      <main>
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 bg-blue-50 flex items-center justify-center px-10 py-20">
            <h1 className="text-4xl font-bold text-gray-800 text-left">
            Campus Ambassador
            </h1>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 relative">
            <Image src="/campusambassador.png" alt="Campus Ambassador" width={800} height={405} className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-700">About</h2>
          <p className="mt-4 text-lg leading-relaxed">
            The Swahilipot Hub Campus Ambassador Program fosters in-demand skills, effective communication, and teamwork
            while encouraging self-discovery, networking, and open-mindedness among ambassadors.
          </p>
        </section>

        {/* Program Expectations */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Program Expectations</h2>
          <ul className="list-disc ml-6 mt-4 text-lg">
            <li><strong>Skill Development:</strong> Enhance technical, communication, and leadership skills.</li>
            <li><strong>Networking Opportunities:</strong> Connect with IT professionals and industry leaders.</li>
            <li><strong>Community Engagement:</strong> Organize events and foster positive team dynamics.</li>
          </ul>
        </section>

       {/* Program Objectives */}
       <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Program Objectives</h2>
          <ul className="list-disc ml-6 mt-4 text-lg">
            <li><strong>Enhance Awareness of Swahilipot Hub and its Capacities - </strong> To enrich the understanding and appreciation of Swahilipot Hub, the focus is on its diverse array of skill-building opportunities and resources. </li>
            <li><strong>Foster Young Innovators -</strong>Cultivate a supportive ecosystem where aspiring innovators and techpreneurs can thrive, exchanging ideas, collaborating on projects, and igniting the sparks of creativity.</li>
            <li><strong>Empower Talent Showcase - </strong>Provide a dynamic platform for students to showcase their innovations and talents, connecting them with potential job prospects and industry leaders for invaluable career opportunities </li>
          </ul>
        </section>

         {/* Core Values */}
      <section className="bg-blue-50 shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-3xl font-bold text-blue-700">Program Core Values</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {["Leadership", "Communication", "Teamwork", "Adaptability", "Integrity"].map((value) => (
            <span key={value} className="bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-semibold shadow-md">
              {value}
            </span>
          ))}
        </div>
      </section>

        {/* Roles */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Roles</h2>
          <ul className="list-disc ml-6 mt-4 text-lg">
            <li>Oversee the implementation of the campus ambassador program within the SPH club.</li>
            <li>Offer support to members in navigating their career journey and addressing challenges.</li>
            <li>Establish and maintain relationships with university faculty, administration, and student organizations.</li>
            <li>Plan and organize events, workshops, and activities related to leveraging technology.</li>
            <li>Serve as a representative and advocate for the campus ambassador program.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Benefits</h2>
          <ul className="list-disc ml-6 mt-4 text-lg">
            <li>Gain exclusive access to Swahilipot Hub's latest events and programs.</li>
            <li>Develop valuable technical and soft skills.</li>
            <li>Expand your network with fellow student leaders and entrepreneurs.</li>
            <li>Receive special invitations to exclusive events and training opportunities.</li>
            <li>Enhance your resume with the Campus Ambassador Program experience.</li>
            <li>Earn certificates showcasing your participation in the program.</li>
          </ul>
        </section>

          {/* Qualification */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Qualification</h2>
          <ul className="list-disc ml-6 mt-4 text-lg">
            <li>Currently enrolled in a University/College program within the target school.</li>
            <li>Second-year student or above in any department.</li>
            <li>Genuine enthusiasm for the university or organization, eager to share experiences and promote campus life.</li>
            <li>Demonstrated initiative, responsibility, and capacity to inspire and guide others.</li>
            <li>Either currently pursuing an IT-related course or demonstrating a strong passion for technology.</li>
          </ul>
        </section>



        {/* Overview Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-center text-blue-700">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Quarter One (Feb-May)", details: ["Baseline survey", "Workshops & training", "Meet & greet", "Learning platforms", "Mentorship"] },
              { title: "Quarter Two (May-Sep)", details: ["Professional development", "Tech talks", "Community building", "Pitching sessions", "Enterprise support"] },
              { title: "Quarter Three (Sep-Jan)", details: ["Talent showcasing", "Feedback roundtable", "Skill-based competitions", "Recognition ceremony", "Program evaluation"] }
            ].map((quarter, index) => (
              <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-blue-800">{quarter.title}</h3>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {quarter.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

       
{/* Campus Team Section */}
<section className="bg-white shadow-lg rounded-lg p-8">
  <h2 className="text-3xl font-bold text-center text-blue-700">Campus Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {teamMembers.map((member) => (
      <div
        key={member.name}
        className="bg-blue-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
      >
        <div className="relative w-48 h-48 mx-auto"> {/* Adjust size as needed */}
          <Image
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="contain" // Ensures full image is shown
            className="rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-blue-800">{member.name}</h3>
        <p className="text-gray-700">{member.role}</p>
      </div>
    ))}
  </div>
</section>

      </main>
    </div>
  );
}

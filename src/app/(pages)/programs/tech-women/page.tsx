import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

export default function SwahiliTechWomen() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 py-16">
        {/* Left Side - Text & Button */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-purple-700 leading-tight">
            Empowering <span className="text-blue-700">Swahili Tech Women</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Join a movement that bridges the gender gap in tech. Connect, learn, and grow with a supportive community.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="/stwdonate/membership"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg py-3 px-6 rounded-lg transition-all shadow-lg transform hover:scale-105"
            >
              Join Us
            </a>
            <a
              href="/support"
              className="border border-purple-600 hover:bg-purple-600 hover:text-white text-purple-700 font-semibold text-lg py-3 px-6 rounded-lg transition-all shadow-lg transform hover:scale-105"
            >
              Support Us
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <Image
            src="/micky.jpeg"
            alt="Swahili Tech Women"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/image-10.jpg"
              alt="Women in Tech Event"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900">
              About Our Initiative
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              <em className="font-semibold text-purple-700">
                "Hakuna kikwazo kinachoweza kusimamisha mbele ya ndoto zetu zinazounganishwa na teknolojia."
              </em>
              <br />
              Empowering women in technology is more than providing tools. It’s about nurturing a community where women
              thrive, innovate, and lead. Join us in rewriting the narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Activities
          </h2>
          <p className="text-center text-lg text-gray-700 mt-2">
            Explore our initiatives and opportunities.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <span className="text-purple-600 text-sm font-bold uppercase">
                Donation
              </span>
              <h3 className="text-xl font-semibold mt-2">Donate</h3>
              <p className="text-gray-700 mt-2">
                Support our Pad Initiative and help provide essential products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <span className="text-blue-600 text-sm font-bold uppercase">
                Knowledge
              </span>
              <h3 className="text-xl font-semibold mt-2">Training Programs</h3>
              <p className="text-gray-700 mt-2">
                Access a diverse range of digital skills training and mentorship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <span className="text-green-600 text-sm font-bold uppercase">
                Guidance
              </span>
              <h3 className="text-xl font-semibold mt-2">Mentorship & Guidance</h3>
              <p className="text-gray-700 mt-2">
                Connect with experienced tech professionals for guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
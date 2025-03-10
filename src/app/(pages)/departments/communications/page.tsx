import Image from 'next/image';

const Communications = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Communications Department</h1>
        <p className="text-xl mt-2 opacity-90">Kujenga Mawasiliano, Kueneza Sauti</p>
      </section>

      {/* Image Section */}
      <div className="w-full flex justify-center mt-10">
        <Image 
          src="/com10.jpg" 
          alt="Creating an Inclusive Community"
          width={900} 
          height={500} 
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* About Communications */}
      <section className="px-8 py-16 bg-gray-100 rounded-xl shadow-lg mx-4 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700">Creating an Inclusive Community</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Welcome to the Community Department at Swahilipot Hub! We are thrilled to have you join our vibrant community. 
            Here, we believe in minding other people's business in the best way possible - by enabling community members to develop themselves 
            and create an environment where talents can thrive and expertise can be shared.
          </p>
        </div>
      </section>

      {/* Community Vision */}
      <section className="px-8 py-16 bg-white rounded-xl shadow-lg mx-4 mt-10">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Commitment</h3>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            We provide a platform for every individual to express their thoughts, ideas, and opinions. 
            Regardless of tribe, religion, political affiliation, or social status, we create a safe space where everyone feels included and valued. 
            At the heart of our community lies our commitment to love, unity, and peaceful coexistence.
          </p>
        </div>
      </section>

      {/* Collaboration & Partnerships */}
      <section className="py-16 px-8 bg-blue-600 text-white text-center rounded-xl shadow-lg mx-4 mt-10">
        <h2 className="text-4xl font-bold">Collaboration and Partnerships</h2>
        <p className="text-lg mt-3 opacity-90">
          Swahilipot Hub is not just a building; it is the people who make up our community. 
          By working together, sharing skills, and building meaningful partnerships, we unlock incredible achievements.
        </p>
      </section>

      {/* Community Pillars */}
      <section className="px-8 py-16 bg-white rounded-xl shadow-lg mx-4 mt-10">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">How We Empower Our Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-100 rounded-xl shadow-md text-center transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-700">Inclusion</h4>
              <p className="text-gray-600 mt-2">Creating a space where everyone belongs.</p>
            </div>
            <div className="p-6 bg-blue-100 rounded-xl shadow-md text-center transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-700">Collaboration</h4>
              <p className="text-gray-600 mt-2">Encouraging teamwork for bigger impact.</p>
            </div>
            <div className="p-6 bg-blue-100 rounded-xl shadow-md text-center transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-700">Empowerment</h4>
              <p className="text-gray-600 mt-2">Providing opportunities for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal & Professional Development */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center rounded-xl shadow-lg mx-4 mt-10">
        <h2 className="text-4xl font-bold">Personal and Professional Development</h2>
        <p className="text-lg mt-3 opacity-90">
          We support our community with programs, workshops, and mentorship, ensuring growth and career success.
        </p>
      </section>

      {/* Join Us Section */}
      <section className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl mt-10">
        <h3 className="text-2xl font-semibold text-blue-700 text-center mb-6">Become Part of Our Community</h3>
        <form className="flex flex-col space-y-6">
          <div className="relative">
            <input type="text" required className="peer w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <label className="absolute left-4 top-4 text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm transition-all">
              Full Name
            </label>
          </div>
          <div className="relative">
            <input type="email" required className="peer w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <label className="absolute left-4 top-4 text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm transition-all">
              Email Address
            </label>
          </div>
          <div className="relative">
            <input type="tel" required className="peer w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <label className="absolute left-4 top-4 text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm transition-all">
              Phone Number
            </label>
          </div>
          <button type="submit" className="bg-blue-700 text-white py-4 rounded-md font-bold hover:bg-blue-800 transition-all">
            Join Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 mt-10">© {new Date().getFullYear()} Swahili Pot Hub. All rights reserved.</footer>
    </div>
  );
};

export default Communications;

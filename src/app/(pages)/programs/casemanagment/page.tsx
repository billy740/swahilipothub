import Image from 'next/image';

const CaseManagement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-center bg-blue-100">
        <h1 className="text-5xl font-bold text-blue-700">Case Management</h1>
        <p className="text-xl text-gray-700 mt-2">Anyone, Anywhere</p>
      </section>

      {/* Image Section */}
      <div className="w-full flex justify-center mt-6">
        <Image 
          src="/casemgt.jpg" 
          alt="Case Management Program"
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* About Case Management */}
      <section className="px-8 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700">About Case Management</h2>
          <p className="text-lg text-gray-700 mt-4">
            At the Swahili Pot Hub Foundation (SPH), we are committed to making a positive impact on the lives of young individuals in Mombasa County and its six sub-counties. 
            Through strategic partnerships with communities, government entities, CSOs, and local leaders, SPH has been a beacon of hope for young people from diverse backgrounds.
          </p>
        </div>
      </section>

      {/* Case Management Project */}
      <section className="px-8 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800">The Case Management Project: A Path to Empowerment</h3>
          <p className="text-lg text-gray-700 mt-4">
            The primary objective of the Case Management Project is to connect 60,000 youth in Mombasa County and its sub-counties to a wide range of opportunities and sustainable employment. 
            We emphasize a personalized case management approach to offer customized support, helping young individuals thrive in various educational, vocational, and entrepreneurial pathways.
          </p>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-12 px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Interested to Offer Mentorship?</h2>
        <p className="text-lg mt-2">Let's get to work.</p>
      </section>

      {/* Mentorship Form */}
      <section className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-md rounded-lg mt-6">
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="border p-3 rounded-lg w-full" required />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg w-full" required />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg w-full" required />
          <textarea placeholder="Tell us about your experience/background" className="border p-3 rounded-lg w-full" rows={4} required></textarea>
          <button type="submit" className="bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600">© {new Date().getFullYear()} Swahili Pot Hub. All rights reserved.</footer>
    </div>
  );
};

export default CaseManagement;

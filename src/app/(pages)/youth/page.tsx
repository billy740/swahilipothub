import Image from "next/image";

export default function JoinYouth() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-8 py-20">
        {/* Right Side - Text & Button */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-900 leading-snug">
            Be Part of the Future
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Connect with other young innovators and explore amazing opportunities. Sign up now!
          </p>
          <a
            href="/signup"
            className="mt-6 inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-lg transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Left Side - Image */}
        <div className="flex-1">
          <Image
            src="/image." // Changed the image filename slightly
            alt="Innovative Youth Community"
            width={550}
            height={380}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

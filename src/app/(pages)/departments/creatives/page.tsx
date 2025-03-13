import Image from "next/image";

const programs = [
  {
    title: "Theatre Zone: Cultivating the Acting Stars of Tomorrow",
    description: `If you have a passion for acting, our Theatre Zone program is the perfect place to nurture your talent. 
    Through comprehensive training and educational initiatives, we empower aspiring actors to shine on both stage and screen. 
    Join us on this transformative journey and unlock your full potential.`,
    image: "/cre 1.jpg",
  },
  {
    title: "SoundPot: Amplifying Young Voices",
    description: `At SoundPot, we believe that every voice deserves to be heard. 
    Our dedicated team of mentors and trainers will guide you on a melodic journey of self-expression and artistic growth. 
    Whether you're a singer, poet, or voice artist, join us and let your voice resound in the hearts of others.`,
    image: "/cre 2.jpg",
  },
  {
    title: "Pot Culture: Unveiling the Arts",
    description: `Immerse yourself in the vibrant world of arts at Pot Culture, our periodic event that celebrates creativity in all its forms. 
    Experience captivating performances of dance, music, and poetry as we showcase the rich tapestry of artistic expression within our community. 
    Prepare to be inspired and amazed.`,
    image: "/cre 3.jpg",
  },
];

const CreativesDepartment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Creatives Department</h1>
        <p className="text-xl mt-2 opacity-90">Ubunifu Unaong&apos;ara, Sanaa Inabadilisha Dunia</p>
      </section>


      {/* Dynamic Programs Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Programs that Offer Creative Opportunities</h2>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } space-y-6 md:space-y-0 md:space-x-8`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreativesDepartment;

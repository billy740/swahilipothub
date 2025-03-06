import Image from 'next/image'

const MekatililiSpace: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="container mx-auto py-12 px-4 md:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Mekatilili Space</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Discover the Spirit of Mekatilili.
              </p>
            </div>
            <div className="mt-5">
              <Image
                className="rounded-lg shadow-lg"
                src="/images/spaces/mekatilili/Mekatilili2.jpg"
                alt="Mekatilili Space"
                width={800}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 3000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 600H3000V0L0 600Z" fill="#fff" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <blockquote className="text-2xl font-semibold text-gray-800">
            Discover the Spirit of Mekatilili
          </blockquote>
        </div>

        <div className="max-w-3xl mx-auto text-gray-700 mb-8">
          <p className="mb-6">
            The Mekatilili Community Space is a versatile and welcoming area
            designed to host a wide range of activities and events. With its
            open, airy design and ample natural light, it's the perfect
            setting for gatherings, workshops, and cultural celebrations.
          </p>

          <div className="my-8">
            <Image
              className="rounded-lg shadow-lg"
              src="/images/spaces/mekatilili/Mekatilili.jpg"
              alt="Mekatilili Community Space"
              width={800}
              height={450}
            />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Benefits to the Community:</h3>

          <div className="mb-8">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">1: Education and Empowerment:</h5>
            <p className="text-gray-700">
              Mekatilili Space is dedicated to promoting education and
              empowerment through workshops, seminars, and skill-building sessions.
            </p>
          </div>

          <div className="mb-8">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">2: Cultural Celebrations:</h5>
            <p className="text-gray-700">
              From traditional dance performances to storytelling sessions,
              Mekatilili Space is the place where our rich cultural heritage comes to life.
            </p>
          </div>

          <div className="mb-8">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">3: Community Meetings:</h5>
            <p className="text-gray-700">
              A welcoming environment for neighborhood meetings and community discussions.
            </p>
          </div>

          <div className="mb-8">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">4: Unity and Collaboration:</h5>
            <p className="text-gray-700">
              A space for collaboration, sharing ideas, and working on community initiatives.
            </p>
          </div>

          <div className="mb-8">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">Mekatilili wa Menza: A Legacy of Strength</h5>
            <p className="text-gray-700">
              Mekatilili wa Menza was a fearless Kenyan woman who fought for the rights and freedom of her people during the colonial era. Her legacy lives on in the Mekatilili Community Space.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MekatililiSpace

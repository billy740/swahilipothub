import Image from 'next/image'
import React from 'react'

const AmphitheatreSpace: React.FC = () => {
  return (
    <>
      <div className="bg-primary-dark">
        <div className="container mx-auto py-8 px-4 md:py-16 md:px-8">
          <div className="flex justify-center relative z-20">
            <div className="max-w-4xl">
              <div className="mb-6 text-center">
                <h1 className="text-2xl md:text-3xl text-white font-bold">Swahilipot Hub Amphitheater</h1>
                <p className="text-white text-lg">Where Art Meets the Heart</p>
              </div>

              <div className="mt-5">
                <Image
                  className="rounded-lg shadow-lg"
                  src="/images/spaces/amp/Amp3.jpg"
                  alt="Swahilipot Hub Amphitheater"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 w-full">
          <svg
            width="100%"
            height="200"
            viewBox="0 0 3000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 600H3000V0L0 600Z" fill="#fff" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 md:py-16 md:px-8">
        <div className="flex justify-center">
          <div className="max-w-4xl">
            <figure className="mb-3 text-center">
              <blockquote className="text-xl font-semibold italic text-gray-700">
                Where Art and Entertainment Flourish
              </blockquote>
            </figure>

            <p className="text-gray-800 mb-6">
              Step into the Community Hub Amphitheater, an enchanting space
              where art, culture, and entertainment come to life. This
              amphitheater is a testament to the creative spirit of our
              community and the celebration of the performing arts.
            </p>

            <div className="my-5">
              <Image
                className="rounded-lg shadow-lg"
                src="/images/spaces/amp/Amp1.jpg"
                alt="Community Hub Amphitheater"
                width={800}
                height={400}
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits to the Community:</h3>

            <div className="mb-5">
              <h5 className="text-xl font-semibold text-gray-800">1: Cultural Enrichment:</h5>
              <p className="text-gray-700">
                The amphitheater celebrates the creative spirit of our community, bringing art, culture, and entertainment to life.
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-xl font-semibold text-gray-800">2: Entertainment For All Ages:</h5>
              <p className="text-gray-700">
                From family-friendly events to cutting-edge performances, the amphitheater offers a diverse range of entertainment.
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-xl font-semibold text-gray-800">3: Community Unity:</h5>
              <p className="text-gray-700">
                A space where the community gathers to celebrate the arts, fostering a sense of togetherness.
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-xl font-semibold text-gray-800">4: Inspiration and Aspiration:</h5>
              <p className="text-gray-700">
                Young talents can showcase their potential, dream big, and draw inspiration from the surrounding creativity.
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-xl font-semibold text-gray-800">The Heart of Art and Entertainment:</h5>
              <p className="text-gray-700">
                The amphitheater is a reflection of our shared love for art and entertainment, where moments of wonder and inspiration are created.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AmphitheatreSpace

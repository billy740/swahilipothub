import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SpacesCard: React.FC = () => {
  return (
    <>
      {/* Blog */}
      <div className="container mx-auto py-12 px-4">
        {/* Heading */}
        <div className="max-w-2xl text-center mx-auto mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Swahilipot Spaces</h3>
          <p className="text-gray-600 text-lg">Explore all Space guides and resources.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card */}
          <Link
            className="relative bg-primary-dark rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            href="/Mekatilili"
          >
            <div className="p-6 relative z-10">
              <div className="mb-3">
                <span className="bg-soft-light text-gray-800 py-1 px-3 rounded-full text-sm">Mekatilili</span>
              </div>
              <h4 className="text-white text-2xl mb-4">
                Swahilipot HUB <br />
                Mekatilili Space
              </h4>
              <span className="text-light text-sm flex items-center">
                Learn more <i className="bi-chevron-right ml-1"></i>
              </span>
            </div>
            <div className="absolute inset-0 opacity-20">
              <Image
                className="w-full h-full object-cover"
                src="/shape-4-soft-light.svg"
                alt="Image Description"
                width={400}
                height={400}
              />
            </div>
          </Link>

          <Link
            className="relative bg-primary-dark rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            href="/spaces/Mazurui"
          >
            <div className="p-6 relative z-10">
              <div className="mb-3">
                <span className="bg-soft-light text-gray-800 py-1 px-3 rounded-full text-sm">Ali Mazurui</span>
              </div>
              <h4 className="text-white text-2xl mb-4">
                Swahilipot HUB <br />
                Ali Mazurui Space
              </h4>
              <span className="text-light text-sm flex items-center">
                Learn more <i className="bi-chevron-right ml-1"></i>
              </span>
            </div>
            <div className="absolute inset-0 opacity-20">
              <Image
                className="w-full h-full object-cover"
                src="/shape-5-soft-light.svg"
                alt="Image Description"
                width={400}
                height={400}
              />
            </div>
          </Link>

          <Link
            className="relative bg-primary-dark rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            href="/spaces/Amphitheater"
          >
            <div className="p-6 relative z-10">
              <div className="mb-3">
                <span className="bg-soft-light text-gray-800 py-1 px-3 rounded-full text-sm">Amphitheatre</span>
              </div>
              <h4 className="text-white text-2xl mb-4">
                Swahilipot HUB <br />
                Amphitheatre Space
              </h4>
              <span className="text-light text-sm flex items-center">
                Learn more <i className="bi-chevron-right ml-1"></i>
              </span>
            </div>
            <div className="absolute inset-0 opacity-20">
              <Image
                className="w-full h-full object-cover"
                src="/shape-6-soft-light.svg"
                alt="Image Description"
                width={400}
                height={400}
              />
            </div>
          </Link>

          <Link
            className="relative bg-primary-dark rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            href="/spaces/Amphitheater"
          >
            <div className="p-6 relative z-10">
              <div className="mb-3">
                <span className="bg-soft-light text-gray-800 py-1 px-3 rounded-full text-sm">Mwwana Kupona</span>
              </div>
              <h4 className="text-white text-2xl mb-4">
                Swahilipot HUB <br />
                Mwana Kupona Space
              </h4>
              <span className="text-light text-sm flex items-center">
                Learn more <i className="bi-chevron-right ml-1"></i>
              </span>
            </div>
            <div className="absolute inset-0 opacity-20">
              <Image
                className="w-full h-full object-cover"
                src="/shape-6-soft-light.svg"
                alt="Image Description"
                width={400}
                height={400}
              />
            </div>
          </Link>

          <Link
            className="relative bg-primary-dark rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            href="/spaces/Amphitheater"
          >
            <div className="p-6 relative z-10">
              <div className="mb-3">
                <span className="bg-soft-light text-gray-800 py-1 px-3 rounded-full text-sm">Community</span>
              </div>
              <h4 className="text-white text-2xl mb-4">
                Swahilipot HUB <br />
                Community Space
              </h4>
              <span className="text-light text-sm flex items-center">
                Learn more <i className="bi-chevron-right ml-1"></i>
              </span>
            </div>
            <div className="absolute inset-0 opacity-20">
              <Image
                className="w-full h-full object-cover"
                src="/shape-6-soft-light.svg"
                alt="Image Description"
                width={400}
                height={400}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SpacesCard


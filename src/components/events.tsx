import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Event {
  id: number
  title: string
  description: string
  banner_image?: string
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('https://www.platform.swahilipothub.org/api/programs/')
      .then((response) => response.json())
      .then((data: Event[]) => {
        setEvents(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching events:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary">
            Recent <span className="text-warning">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Swahilipot Hub has hosted numerous impactful events and programs. 
            Here are three of the most recent ones!
          </p>
        </div>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {loading ? (
            <p className="text-lg text-center text-gray-500">Loading events...</p>
          ) : events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-80 transform transition duration-300 hover:scale-105"
              >
                {event.banner_image && (
                  <Image
                    src={event.banner_image}
                    alt={event.title}
                    width={320}
                    height={180}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{event.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-500">Programs will pop up here soon. Visit later.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Events

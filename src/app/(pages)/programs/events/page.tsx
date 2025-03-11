import Cards from '@/components/Cards'

const Events: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Explore Our Exciting <span className="text-warning">Events</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with our past and upcoming programs at Swahilipot Hub. 
          Engage, Learn, and Grow with our community!
        </p>

        {/* Render Cards Component */}
        <div className="mt-6">
          <Cards />
        </div>
      </div>
    </section>
  )
}

export default Events

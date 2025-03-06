const BecomeMember = () => {
    return (
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center">
          <img
            className="mb-5 mx-auto"
            src="joinmember.svg"
            alt="Illustration"
            style={{ width: '15rem' }}
          />
        </div>
        
        {/* Heading */}
        <div className="text-center mb-7">
          <h3 className="text-3xl font-semibold text-gray-800">
            Start your journey with Swahilipot
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            Register with us to become a member of the Swahilipot community and get access to amazing opportunities.
          </p>
        </div>
        {/* End Heading */}
  
        {/* Button */}
        <div className="text-center">
          <a
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            href="https://www.platform.swahilipothub.org/youth-registration/"
            target="_blank"
          >
            Join Now
          </a>
        </div>
      </div>
    );
  };
  
  export default BecomeMember;
  
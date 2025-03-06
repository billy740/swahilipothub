import Link from 'next/link'

const CaseManagement = () => {
  return (
    <>
      {/* Features */}
      <div className="bg-[#0b1e33] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              className="rounded-lg shadow-lg w-full"
              src="/casemgnt.jpg"
              alt="Case Management Project"
            />
          </div>
          {/* End Image Section */}

          {/* Text Section */}
          <div className="md:w-1/2">
            <div className="mb-6">
              <span className="uppercase text-sm text-gray-400">Swahilipot Hub</span>
              <h3 className="text-2xl font-bold text-white mb-4">Case Management Project</h3>
              <p className="text-gray-300 mb-6">
                Our primary objective is to connect 60,000 youths in the Kenyan Coast to a wide range of
                opportunities and sustainable employment. We understand that each young person is unique,
                and to empower them effectively, we emphasize a personalized mentorship approach.
              </p>
            </div>

            <p className="text-gray-300 mb-2">
              Learn{' '}
              <a
                className="text-blue-400 hover:text-blue-500 transition"
                href="https://www.platform.swahilipothub.org/mentorship/"
                target="_blank"
                rel="noopener noreferrer"
              >
                more about the project here
              </a>
            </p>
            <p className="text-gray-300">
              You can Join in{' '}
              <a
                className="text-blue-400 hover:text-blue-500 transition"
                href="https://www.platform.swahilipothub.org/accounts/register/casemanager"
                target="_blank"
                rel="noopener noreferrer"
              >
                as a Mentor
              </a>
            </p>
          </div>
          {/* End Text Section */}
        </div>
      </div>
      {/* End Features */}
    </>
  )
}

export default CaseManagement

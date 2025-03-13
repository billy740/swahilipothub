// Add the "use client" directive to make this a client component
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear()
  const pathname = usePathname()
  const isDonatePage = pathname === '/stwdonate/donate'

  if (isDonatePage) return null

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div>
            <Link href="/" aria-label="Swahilipot Hub">
              <img
                height={35}
                width={200}
                src="/sphlogo.png"
                alt="Swahilipot Hub Foundation"
                className="mb-6"
              />
            </Link>
          </div>

          {/* About Swahilipot */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">About Us</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/about/aboutus" className="text-gray-400 hover:text-white transition">
                  About Swahilipot hub
                </Link>
              </li>
              <li>
                <Link href="/about/origin" className="text-gray-400 hover:text-white transition">
                  Our Origin Story
                </Link>
              </li>
              <li>
                <Link href="/about/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Departments</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/departments/communications"
                  className="text-gray-400 hover:text-white transition"
                >
                  Communication
                </Link>
              </li>
              <li>
                <Link
                  href="/departments/creatives"
                  className="text-gray-400 hover:text-white transition"
                >
                  Creatives
                </Link>
              </li>
              <li>
                <Link
                  href="/departments/technology"
                  className="text-gray-400 hover:text-white transition"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/departments/community"
                  className="text-gray-400 hover:text-white transition"
                >
                  Community Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/departments/engineering"
                  className="text-gray-400 hover:text-white transition"
                >
                  Engineering Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">We are located here:</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7893833802746!2d39.67731977474537!3d-4.063306044967009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840131ba0153b67%3A0x75a36ee817c3f38b!2sSwahilipot%20Hub!5e0!3m2!1sen!2ske!4v1718785438427!5m2!1sen!2ske"
              width="100%"
              height="200"
              className="border-0 rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-gray-400">
            © Swahilipot Hub Foundation. {year}. Mombasa, Kenya.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Swahilipothub/" className="text-gray-400 hover:text-white transition">
               <FaFacebook className="text-xl" />
            </a>
            <a href="https://twitter.com/swahilipothub" className="text-gray-400 hover:text-white transition">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/company/swahilipot-hub" className="text-gray-400 hover:text-white transition">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

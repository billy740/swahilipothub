import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 mb-3">
            <Image src="/logo.png" alt="Swahilipot Logo" width={150} height={50} />
          </div>

          {/* About Swahilipot */}
          <div className="col-md-3 mb-3">
            <h5 className="text-uppercase">About Swahilipot</h5>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white text-decoration-none">Contact us</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">About us</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Our Origin Story</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="col-md-3 mb-3">
            <h5 className="text-uppercase">Departments</h5>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white text-decoration-none">Communication</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Creatives</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Technology</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Community Experience</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Engineering Team</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div className="col-md-3 mb-3">
            <h5 className="text-uppercase">We are located here:</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.639660276353!2d39.66452826331368!3d-4.060877834407424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d44122bbbe1%3A0xd2383681b2d76484!2sSwahilipot%20Hub!5e0!3m2!1sen!2ske!4v1710069999999"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
          <p className="mb-0">© Swahilipot Hub Foundation. 2025. Mombasa, Kenya.</p>
          <div>
            <Link href="#" className="text-white me-3"><i className="bi bi-facebook"></i></Link>
            <Link href="#" className="text-white me-3"><i className="bi bi-twitter"></i></Link>
            <Link href="#" className="text-white"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

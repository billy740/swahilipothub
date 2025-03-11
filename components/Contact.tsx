import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="container py-5">
      <h2 className="fw-bold">Contact Us</h2>
      <p className="text-muted">Discuss your interests with us.</p>
      
      <div className="mt-4">
        <h5 className="fw-bold">Contact Partnerships</h5>
        <p><FaMapMarkerAlt className="text-success me-2" /> Mombasa, Kenya</p>
        <p><FaMapMarkerAlt className="text-success me-2" /> Swahilipot Hub Foundation, Swahili Cultural Center</p>
        <p><FaPhoneAlt className="text-success me-2" /> +254 11 4635505</p>
      </div>
      
      <div className="mt-4">
        <h5 className="fw-bold">Contact Partnerships by Emails</h5>
        <p>If you wish to write us an email instead please use <a href="mailto:partnership@swahilipothub.co.ke" className="text-primary">partnership@swahilipothub.co.ke</a></p>
      </div>
    </section>
  );
};

export default Contact;
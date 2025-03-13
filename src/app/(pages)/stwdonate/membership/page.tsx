"use client";
import { useState } from "react";

export default function SwahiliTechWomen() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subCounty: "",
    educationLevel: "",
    interest: "",
    membershipType: "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for joining Swahili Tech Women!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-10 bg-white rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-6">
          Join Swahili Tech Woman
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Join us and help us solve challenges women go through using technology.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name Here..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+254 700 000 000"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Sub County Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Sub County (Residential)</label>
            <select
              name="subCounty"
              value={formData.subCounty}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            >
              <option value="">Select Sub County</option>
              <option value="Mvita">Mvita</option>
              <option value="Nyali">Nyali</option>
              <option value="Changamwe">Changamwe</option>
              <option value="Likoni">Likoni</option>
              <option value="Kisauni">Kisauni</option>
              <option value="Jomvu">Jomvu</option>
              <option value="Outside Mombasa"> Outside Mombasa</option>
            </select>
          </div>

          {/* Education Level Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Level of Education</label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            >
              <option value="">Select Education Level</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Diploma">Diploma</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Not applicable">Not applicable</option>
            </select>
          </div>

          {/* Interest Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Interest</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            >
              <option value="">Select Interest</option>
              <option value="Software Development">Software Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Data Science">Data Science</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Networking">Networking</option>
              <option value="Digital Literacy">Digital literacy</option>
            </select>
          </div>

          {/* Membership Type Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Membership Type</label>
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            >
              <option value="">Select Membership Type</option>
              <option value="Benefiting">Benefiting</option>
              <option value="Paying">Paying</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Mentor">Mentor</option>
            </select>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="text-gray-600">
              I agree to the terms and conditions of Swahilipot Hub Foundation & Swahili Tech Women
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-pink-700 hover:bg-pink-800 rounded-lg text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

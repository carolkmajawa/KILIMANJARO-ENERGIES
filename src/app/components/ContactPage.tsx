"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullname: '', phone: '', message: '' });
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">CONTACT US</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">2369 Kilimanjaro Road, Thyolo, Malawi</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-orange-500 mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+265 994 635 211</p>
                  <p className="text-gray-600">+265 894 342 866</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="text-orange-500 mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">energies@kilimanjaro.co.mw</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-orange-500 mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Opening Hours</h3>
                  <p className="text-gray-600">24/7 - Always Open</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-orange-100 rounded-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Follow us on social media!</span><br />
                Stay updated with our latest offers and services.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullname" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={200}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Type your message here (max 200 characters)"
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/200 characters
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
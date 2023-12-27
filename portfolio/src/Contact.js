import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div id="contact" className="container mx-auto mt-8 w-8/12 ">
      <div className="flex items-center justify-center mb-8 pt-16">
        <h1 className="text-4xl font-bold text-pink-700 mr-4 ">Contact Me :)</h1>
        {/* Social Icons */}
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:your-email@example.com" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
            required
          />
        </div>
        <div className="col-span-2 mb-4">
          <label htmlFor="message" className="block text-lg text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 resize-none"
            rows="4"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-lg font-semibold inline-block mb-8"
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
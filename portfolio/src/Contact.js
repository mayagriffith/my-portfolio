import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      emailjs.sendForm('service_hvwuezd', 'template_okc8agi', formRef.current, 'QGR3eTTWnziBwvq5Y')
        .then((result) => {
            window.location.reload()
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div id="contact" className="container mx-auto mt-8 w-8/12 ">
      <div className="flex items-center justify-center mb-8 pt-16">
        <h1 className="text-4xl font-bold text-pink-700 mr-4 ">Contact Me :)</h1>
        {/* Social Icons */}
        <a href="https://github.com/mayagriffith" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/maya-griffith/" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:mayaegriffith@gmail.com" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.instagram.com/mayagriffith/" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-500 mx-2">
          <FaInstagram size={24} />
        </a>
      </div>
        {/* Other content */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name input */}
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-lg text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4"
              required
            />
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          </div>

          {/* Email input */}
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-lg text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4"
              required
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>

          {/* Message input */}
          <div className="col-span-2 mb-4">
            <label htmlFor="message" className="block text-lg text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 resize-none"
              rows="4"
              required
            />
            {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-lg font-semibold inline-block mb-8 justify-center w-1/2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
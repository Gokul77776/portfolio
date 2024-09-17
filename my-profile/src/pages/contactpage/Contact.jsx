import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact/submit',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
      setSuccessMessage(data.message);  
    } catch (err) {
      setError(err.message);
    }
  };
   

  return (
    <div className={`flex flex-col md:flex-row justify-center items-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="md:w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded">
        <h1 className="text-4xl font-bold text-white mb-4">Send us a message</h1>
        {error && <p className="text-red-500">{error}</p>}
        {isSubmitted ? (
          <p className="text-green-500">{successMessage}</p>
        ) : (
        <form className="space-y-4" onSubmit={handleSubmit} >  
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-white"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-white"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
               
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-white"
            ></textarea>
          </div>
          <button type="submit" className={`bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-700 transition-colors duration-300`}>
            Send Message
          </button>
          
         
        </form>
  )}
      </div>
      <div className="md:w-1/2 p-8 mx-5">
        <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact us</h1>
        <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>We're open for any suggestion or just to have a chat</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>#2nd cross akkipet, Bangalore, Karnataka</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>9743328473</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>gokuldj07@gmail.com</p>
          </div>
          <div className='flex space-x-10'>
            <a href="https://github.com/Gokul77776" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <FaGithub size={40} style={{ color: darkMode ? 'white' : 'black' }} />
            </a>
            <a href="https://www.instagram.com/gokulyajv" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <FaInstagram size={40} style={{ color: '#0077b5' }} />
            </a>
            <a href="https://wa.me/9743328473" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <FaWhatsapp size={40} style={{ color: '#35c137' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

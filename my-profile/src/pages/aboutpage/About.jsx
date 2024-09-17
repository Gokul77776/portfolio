import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6" >
      <div className="md:w-1/2  flex justify-center items-center p-2">
        <div className="space-y-4">
          <img src="public/myimg.jpg" alt="Placeholder" className="w-96 h-1/4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-start p-4 transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
        I'm Gokul C, web developer in creating dynamic and responsive websites. With a deep understanding of front-end technologies like HTML, CSS, and JavaScript, I'm also proficient in back-end development, using languages such as  Node.js to create robust and scalable applications. 
        </p>
         
        <p className="text-gray-600 mb-4">
         I bulit more than three small project using reactJs you can see it in my github profile
        </p>
        <a href="https://github.com/Gokul77776" target="_blank" rel="noopener noreferrer" className=" inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
          View My GitHub
        </a>
      </div>
      
    </div>
  );
};

export default AboutPage;

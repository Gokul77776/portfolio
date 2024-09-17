import React from 'react';
import HomepageCard from '../homepage/HomeCard';
import Type from '../homepage/Type';  

const Home = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen  bg-gray-100" >
     
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center ">
          <HomepageCard 
            title= <Type/>
            description="
A mern stack web developer proficient in both frontend and backend technologies, specializing in creating seamless, scalable web applications" 
            imageUrl="https://media.istockphoto.com/id/1432156040/vector/vector-flat-illustration-of-web-ui-ux-design-web-development-concept-team-designers-creating.jpg?s=612x612&w=0&k=20&c=XEMYf3ZGy5QncMGeuMMcgKcOUIE1bxl2xWPrw6owLpc=" 
          />
    
        </div>
      </div>
    
  );
};

export default Home;

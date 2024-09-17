import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = ({ isActive }) => 
    isActive ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-400';

  return (
    <nav className="bg-gray-800 p-4">
       
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl"><i>Profile</i></h1>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClasses}  >Home</NavLink>
          <NavLink to="/about" className={linkClasses}  >About</NavLink>
          <NavLink to="/contact" className={linkClasses} >Contact Us</NavLink>
          
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="text-white hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="text-white hover:text-gray-400" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

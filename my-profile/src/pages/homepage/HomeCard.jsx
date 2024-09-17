import React from 'react';

const HomepageCard = ({ title, description, imageUrl }) => {
  return (
    <div className=" h-96 rounded overflow-hidden shadow-lg bg-white m-4 flex ">
      <div className="w-3/4 p-8 ">
        <div className="font-bold text-xl mt-16">{title}</div>
        <div className='my-11 font-serif  text-xs'> <p className="text-gray-700 text-base">{description}</p></div>
       
      </div>
      <div className="w-5/6">
        <img className="w-full h-full object-cover " src={imageUrl} alt="img" />
      </div>
    </div>
  );
};

export default HomepageCard;

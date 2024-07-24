// eslint-disable-next-line no-unused-vars
import React from 'react';


const ProductCard = (prop) => {
  return (
    <div className="bg-white border-2 border-black p-5 m-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">{prop.title}</h2>
      <div className="box-img bg-cover w-full h-64" style={{ backgroundImage: `url(${prop.imageUrl})` }}></div>
      <p className="text-blue-600 mt-4">See more</p>
    </div>
  );
};

export default ProductCard;



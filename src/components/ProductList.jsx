// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductCard from './ProductCard';


const products = [
  { title: 'Clothes', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box1_image.jpg?updatedAt=1716885740530' },
  { title: 'Health & Personal Care', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box2_image.jpg?updatedAt=1716885740689' },
  { title: 'Furniture', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box3_image.jpg?updatedAt=1716885740444' },
  { title: 'Electronics', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box4_image.jpg?updatedAt=1716885740438' },
  { title: 'Beauty picks', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box5_image.jpg?updatedAt=1716885740535' },
  { title: 'Pet care', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box6_image.jpg?updatedAt=1716885740539' },
  { title: 'New Arrival in Toys', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box7_image.jpg?updatedAt=1716885740441' },
  { title: 'Discover Fashion Trends', imageUrl: 'https://ik.imagekit.io/nknso76xld/images/box8_image.jpg?updatedAt=1716885740693' },
];

const ProductList = () => {
  return (
    <div className="bg-red-700 flex flex-wrap justify-evenly">
      {products.map((product, index) => (
        <ProductCard key={index} title={product.title} imageUrl={product.imageUrl} />
      ))}
    </div>
  );
};

export default ProductList;



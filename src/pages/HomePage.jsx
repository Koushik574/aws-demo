// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="hero-section bg-cover h-80 flex justify-center items-end" style={{ backgroundImage: 'url(https://ik.imagekit.io/nknso76xld/images/hero_image.jpg?updatedAt=1716885740695)' }}>
        <div className="hero-msg bg-white text-black h-10 flex items-center justify-center text-sm w-4/5 mb-6">
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#" className="text-blue-700">Click here to go to amazon.in</a></p>
        </div>
      </div>
      <ProductList />
      <Footer />
    </div>
  );
};

export default HomePage;

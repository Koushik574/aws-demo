// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-4 w-full">
      <div className="foot-panel1 bg-gray-700 text-white h-12 flex justify-center items-center text-sm">
        Back to Top
      </div>
      <div className="foot-panel2 bg-gray-800 text-white h-auto flex flex-col md:flex-row justify-evenly">
        <ul className="mt-5 w-full md:w-auto px-4">
          <p className="font-bold">Get to Know Us</p>
          <a href="#" className="block text-gray-300 mt-2">About Us</a>
          <a href="#" className="block text-gray-300 mt-2">Careers</a>
          <a href="#" className="block text-gray-300 mt-2">Press Releases</a>
          <a href="#" className="block text-gray-300 mt-2">Amazon Science</a>
        </ul>
        <ul className="mt-5 w-full md:w-auto px-4">
          <p className="font-bold">Connect with Us</p>
          <a href="#" className="block text-gray-300 mt-2">Facebook</a>
          <a href="#" className="block text-gray-300 mt-2">Twitter</a>
          <a href="#" className="block text-gray-300 mt-2">Instagram</a>
        </ul>
        <ul className="mt-5 w-full md:w-auto px-4">
          <p className="font-bold">Make Money with Us</p>
          <a href="#" className="block text-gray-300 mt-2">Sell on Amazon</a>
          <a href="#" className="block text-gray-300 mt-2">Sell under Amazon</a>
          <a href="#" className="block text-gray-300 mt-2">Accelerator</a>
          <a href="#" className="block text-gray-300 mt-2">Protect and Build Your Brand</a>
          <a href="#" className="block text-gray-300 mt-2">Amazon Global Selling</a>
          <a href="#" className="block text-gray-300 mt-2">Become an Affiliate</a>
          <a href="#" className="block text-gray-300 mt-2">Fulfilment by Amazon</a>
          <a href="#" className="block text-gray-300 mt-2">Advertise Your Products</a>
          <a href="#" className="block text-gray-300 mt-2">Amazon Pay on Merchants</a>
        </ul>
        <ul className="mt-5 w-full md:w-auto px-4">
          <p className="font-bold">Let Us Help You</p>
          <a href="#" className="block text-gray-300 mt-2">COVID-19 and Amazon</a>
          <a href="#" className="block text-gray-300 mt-2">Your Account</a>
          <a href="#" className="block text-gray-300 mt-2">Returns Centre</a>
          <a href="#" className="block text-gray-300 mt-2">100% Purchase Protection</a>
          <a href="#" className="block text-gray-300 mt-2">Amazon App Download</a>
          <a href="#" className="block text-gray-300 mt-2">Help</a>
        </ul>
      </div>
      <div className="foot-panel3 bg-gray-800 text-white border-t border-white h-16 flex justify-center items-center">
        <div className="logo bg-cover h-12 w-24" style={{ backgroundImage: 'url(./assets/images/amazon_logo.png)' }}></div>
      </div>
      <div className="foot-panel4 bg-gray-900 text-white h-20 text-xs text-center">
        <div className="pages py-4">
          <a href="#" className="inline-block mx-2">Conditions of Use</a>
          <a href="#" className="inline-block mx-2">Privacy Notice</a>
          <a href="#" className="inline-block mx-2">Your Ads Privacy Choices</a>
        </div>
        <div className="copyright pt-1">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;

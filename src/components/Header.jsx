// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white w-full">
      <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto">
        <div className="logo bg-cover h-12 w-24" style={{ backgroundImage: 'url(https://ik.imagekit.io/nknso76xld/images/amazon_logo.png?updatedAt=1716885740717)' }}></div>
        <div className="flex items-center border p-2 hover:border-white">
          <p className="text-gray-300 text-sm">Deliver to</p>
          <div className="flex items-center ml-2">
            <i className="fa-solid fa-location-dot"></i>
            <p className="ml-1">India</p>
          </div>
        </div>
        <div className="flex items-center bg-pink-300 rounded-md w-80 h-10">
          <select className="bg-gray-100 text-center rounded-l-md border-none w-12">
            <option>All</option>
          </select>
          <input className="w-full text-base border-none" placeholder="Search Amazon" />
          <button className="flex items-center justify-center bg-yellow-400 text-gray-900 h-full w-12 rounded-r-md">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="flex flex-col items-center border p-2 hover:border-white">
          <p className="text-xs">Hello, sign in</p>
          <p className="text-sm font-bold">Account & Lists</p>
        </div>
        <div className="flex flex-col items-center border p-2 hover:border-white">
          <p className="text-xs">Returns</p>
          <p className="text-sm font-bold">& Orders</p>
        </div>
        <div className="flex items-center border p-2 hover:border-white">
          <i className="fa-solid fa-cart-shopping text-2xl"></i>
          <span className="ml-1 text-sm font-bold">Cart</span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-800 h-10 max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <i className="fa-solid fa-bars"></i>
          <span className="ml-2">All</span>
        </div>
        <div className="flex items-center text-sm w-7/12">
          <p className="ml-4">Today Deals</p>
          <p className="ml-4">Customer Service</p>
          <p className="ml-4">Registry</p>
          <p className="ml-4">Gift Cards</p>
          <p className="ml-4">Sell</p>
        </div>
        <div className="text-base font-bold">
          Shop in Electronics
        </div>
      </div>
    </header>
  );
};

export default Header;



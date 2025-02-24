/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="container mx-auto  px-30 flex justify-between">
        <div className="p-10 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">E-Mart</h1>
          <div className="flex space-x-4">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
              className="bg-gray-100 px-5 py-3 rounded-lg outline-none"
            />
            <button className="bg-pink-500 px-5 py-3 rounded-lg">
              Sign Up
            </button>
          </div>
          <p className="text-[#8A8FB9]">Contact Info</p>
          <p className="text-[#8A8FB9]">Grand Road,Baripada,odisha,India</p>
        </div>
        <div className="p-10 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Categories</h1>
            <ul className="text-[#8A8FB9] space-y-4">
                <li>Laptos & computers</li>
                <li>Camera & Photography</li>
                <li>Smartphones and Tablets</li>
                <li>Video games & Consoles</li>
                <li>Waterproof Headphones</li>
            </ul>
        </div>
        <div className="p-10 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Customer Care</h1>
            <ul className="text-[#8A8FB9] space-y-4">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
            </ul>
        </div>
        <div className="p-10 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Pages</h1>
            <ul className="text-[#8A8FB9] space-y-4">
                <li>Blog</li>
                <li>Browse the shop</li>
                <li>Category</li>
                <li>Prebuild pages</li>
                <li>Waterproof Headphones</li>
            </ul>
        </div>
       

      </div>
      <div className="flex justify-evenly bg-[#E7E4F8]">
        <h1>@emart-All Rights Reserved</h1>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a href="tel:+1234567890">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

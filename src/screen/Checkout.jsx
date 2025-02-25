/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import headphone from "../assets/products/headphone.png";

const Checkout = () => {
  return (
    <div className="w-full h-full  py-10">
      <div className="container mx-auto rounded-lg">
        <div className="flex justify-between mx-30 gap-5">
          <div className=" w-3/4 space-y-20 p-6">
            {/* contact information */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-semibold text-gray-800">
                  Contact Information
                </h1>
                <Link to="/login" className="text-blue-500 hover:underline">
                  Already have an account? Login
                </Link>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                />
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                />
                <input
                  type="tel"
                  placeholder="Enter Alternative Mobile Number"
                  className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                />
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="offers" className="mr-2" />
                <label htmlFor="offers" className="text-gray-700">
                  Keep me updated on exclusive offers
                </label>
              </div>
            </div>

            {/* shipping information */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-semibold text-gray-800">
                  Shipping Address
                </h1>
              </div>

              <div className="space-y-4">
                {/* First Name & Last Name Side by Side */}
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                />
                <input
                  type="text"
                  placeholder="Enter Apartment, Suite, etc. (optional)"
                  className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                />
                <input
                  type="text"
                  placeholder="Enter City"
                  className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                />

                {/* Pin Code & State Side by Side */}
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter Pin Code"
                    className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter State"
                    className="w-full p-3 border-b border-gray-300  outline-none focus:border-blue-400 focus:border-b-2"
                  />
                </div>
              </div>
              <button className="w-full mt-7 bg-[#19D16F] py-2.5 rounded-lg cursor-pointer text-white font-semibold hover:scale-105  transition-transform duration-300">
                  Place Order
                </button>
            </div>
          </div>

          <div className="w-1/4 space-y-6">
            {/* Cart Items Section */}
            <div className="bg-gray-200 p-4 rounded-lg h-[500px] overflow-y-auto">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Your Cart
              </h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-md"
                  >
                    {/* Product Image */}
                    <img
                      src={headphone}
                      alt="Product"
                      className="w-16 h-16 object-cover rounded"
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700">
                        Product Name
                      </p>
                      <p className="text-gray-500 text-xs">$100</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2">
                      <button className="bg-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-400 transition">
                        -
                      </button>
                      <span className="text-sm font-semibold">1</span>
                      <button className="bg-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-400 transition">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="bg-[#E8E6F1] p-6 rounded-lg shadow-md text-[#0D134E] space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Order Summary
              </h2>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-medium">Subtotal</span>
                <span>$800</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-medium">Shipping</span>
                <span>$100</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold border-b border-gray-300 pb-2">
                <span>Total</span>
                <span>$900</span>
              </div>
              <p className="text-sm text-gray-600">
                Shipping & taxes calculated at checkout
              </p>
              <Link to="/checkout">
                <button className="w-full bg-[#FB2E86] py-2.5 rounded-lg cursor-pointer text-white font-semibold hover:scale-105 transition-transform duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

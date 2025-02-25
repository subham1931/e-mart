/* eslint-disable no-unused-vars */
import React from "react";
import { FaTag } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import Description from "./Description";
import Product from "../component/Product";
import chair1 from "../assets/products/chair1.png";
import chair2 from "../assets/products/chair2.png";
import chair3 from "../assets/products/chair3.png";
import chair4 from "../assets/products/chair4.png";
import Brand from "./Brand";

const ProductDetails = () => {
  const products = [
    { id: 1, name: "Realme Watch", price: "1000", image: chair1 },
    { id: 2, name: "Headphone", price: "2000", image: chair2 },
    { id: 3, name: "Pro headphone", price: "3000", image: chair3 },
    { id: 4, name: "Drone", price: "4000", image: chair4 },
  ];
  return (
    <div className="w-full h-full my-5">
      <div className="container mx-auto px-30 flex flex-col justify-between gap-10 ">
        {/* section1 */}
        <div className="grid grid-cols-1 md:grid-cols-2  p-4 rounded-lg ">
          <div className="relative flex justify-center bg-[#E7E4F8] rounded-lg">
            <button className="absolute top-4 left-4 bg-white px-3 py-3 rounded-full shadow-md">
              <FaRegHeart className="text-red-500 text-lg hover:scale-105 transition-transform duration-300" />
            </button>
            <img
              src={chair1}
              alt="product"
              className="w-[375px] h-[400px] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>

          <div className="p-4 space-y-3">
            <p className="text-[#0D134E] text-2xl font-semibold">
              Playwood Arm Chair
            </p>
            <div className="flex my-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 18.897l-7.417 4.626L6 15.27 0 9.423l8.332-1.268z" />
                </svg>
              ))}
              <p>(22)</p>
            </div>

            <div className="flex gap-4">
              <p className="text-xl font-bold text-[#0D134E]">$200</p>
              <p className="text-xl font-bold text-[#FB2E86] line-through">
                $200
              </p>
            </div>

            <p className="text-gray-700">Color: Blue</p>
            <p className="text-gray-700 my-2">
              Description: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quaerat, cumque.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <p className="flex items-center gap-2">Tags :</p>
              <div className="flex space-x-2 mt-2">
                <span className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <FaTag className="text-gray-500" /> Furniture
                </span>
                <span className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <FaTag className="text-gray-500" /> Chair
                </span>
                <span className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <FaTag className="text-gray-500" /> Arm Chair
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <p>Share</p>
              <div className="flex space-x-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-600 rounded-lg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                </svg>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                Add to Cart
              </button>
              <button className="bg-[#FB2E86] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* section2 */}
        <div className="mt-10 space-y-10">
          <nav>
            <div className="flex justify-start gap-10 items-center text-xl font-semibold text-[#0D134E] ">
              <button className="cursor-pointer ">Description</button>
              <button className="cursor-pointer ">Addtional Info</button>
              <button className="cursor-pointer ">reviews</button>
            </div>
          </nav>

          <section>
            <Description />
          </section>
        </div>

        {/* section3 */}
        <div className="mt-10 space-y-10">
          <h2 className="text-2xl font-semibold text-[#0D134E]">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>

        {/* section4 */}
        <div className="mt-10">
          <Brand />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types';
import watch from "../assets/products/watch.png";

const Product = ({image,name,price}) => {
  return (
    <div className="bg-[#F6F7FB] w-full max-w-xs mx-auto rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex justify-center">
        <img
          src={image}
          alt="product"
          className="w-[178px] h-[178px] object-contain"
        />
      </div>
      <div className="px-5 py-5 bg-white">
        <h1 className="text-center text-lg font-semibold text-[#F701A8]">
          {name}
        </h1>
        {/* <hr className="text-gray-900" /> */}
        <div className="flex justify-center items-center space-x-2 mt-2">
          <p className="text-lg font-bold">{price}</p>
          <p className="text-sm text-red-500 border border-red-500 px-2 py-1 rounded-lg">
            35% off
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <h1 className="text-sm text-gray-600">Rating: 4.1</h1>
        </div>
        <div>
            <div className="bg-red-500 w-1"></div>
            <div className="bg-red-200 w-1"></div>
            <div className="bg-red-800 w-1"></div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-[#f701a98b]">
            Add to Cart
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
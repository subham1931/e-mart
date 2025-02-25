/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Chair1 from "../assets/products/Chair1.png";

const Cart = () => {
  return (
    <div className="w-full h-full my-10">
      <div className="container mx-auto px-30 flex h-full justify-center items-center">
        <div className="space-y-4 w-3/4">
          <table className="w-full border-collapse  ">
            <thead>
              <tr className="bg-gray-200 text-[#1D3178]">
                <th className="p-3 text-left pr-26">Product</th>
                <th className="p-3 text-left pr-26">Price</th>
                <th className="p-3 text-left pr-26">Quantity</th>
                <th className="p-3 text-left pr-26">Total</th>
                <th className="p-3 text-left pr-26">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr className="text-gray-700">
                <td className="p-3 flex justify-center items-center pr-6">
                  <img
                    src={Chair1}
                    alt="product"
                    className="w-[93px] h-[87px] bg-amber-100"
                  />
                  <p>Cantilever chair</p>
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <input
                    type="number"
                    className="w-16 border p-1"
                    defaultValue={1}
                  />
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="p-3 flex justify-center items-center pr-6">
                  <img
                    src={Chair1}
                    alt="product"
                    className="w-[93px] h-[87px] bg-amber-100"
                  />
                  <p>Cantilever chair</p>
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <input
                    type="number"
                    className="w-16 border p-1"
                    defaultValue={1}
                  />
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="p-3 flex justify-center items-center pr-6">
                  <img
                    src={Chair1}
                    alt="product"
                    className="w-[93px] h-[87px] bg-amber-100"
                  />
                  <p>Cantilever chair</p>
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <input
                    type="number"
                    className="w-16 border p-1"
                    defaultValue={1}
                  />
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="p-3 flex justify-center items-center pr-6">
                  <img
                    src={Chair1}
                    alt="product"
                    className="w-[93px] h-[87px] bg-amber-100"
                  />
                  <p>Cantilever chair</p>
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <input
                    type="number"
                    className="w-16 border p-1"
                    defaultValue={1}
                  />
                </td>
                <td className="p-3 pr-6 ">$200</td>
                <td className="p-3 pr-6 ">
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center">
            <button className="bg-[#FB2E86] px-4 py-2 rounded-lg text-white textlg">
              Update Cart
            </button>
            <button className="bg-[#FB2E86] px-4 py-2 rounded-lg text-white textlg">
              Clear Cart
            </button>
          </div>
        </div>
        <div className=" ml-10 ">
          <div className="w-[371px] h-full  mx-auto">
            <h1 className="text-center text-2xl font-bold text-[#0D134E] mb-4">
              Cart Total
            </h1>
            <div className="bg-[#E8E6F1] p-6 rounded-lg shadow-md text-[#0D134E] flex flex-col gap-5">
              <div className="flex justify-between items-center border-b border-gray-400 pb-2 mb-2">
                <span className="font-medium">Subtotal</span>
                <span>$800</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-400 pb-2 mb-2">
                <span className="font-medium">Shipping</span>
                <span>$100</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold border-b border-gray-400 pb-2 mb-2">
                <span>Total</span>
                <span>$900</span>
              </div>
              <div className="space-y-2">
                <p>Shipping & taxes Calculated at checkout</p>
                <Link to="/checkout">
                  <button
                    className="w-full bg-[#19D16F] py-2.5 rounded-lg cursor-pointer text-white"
                    
                  >
                    Proceed To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleRemove = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <tr key={cartItem.id} className="text-gray-700">
        <td className="p-3 flex justify-center items-center pr-6">
          <img
            src={cartItem.images[0]}
            alt="product"
            className="w-[93px] h-[87px] bg-amber-100"
          />
          <p>{cartItem.title}</p>
        </td>
        <td className="p-3 pr-6 ">${cartItem.price}</td>
        <td className="p-3 pr-6 ">
          <div className="flex items-center">
            <button
              onClick={() => handleRemove(cartItem)}
              className="px-2 py-1 bg-gray-200 rounded-l-lg"
            >
              -
            </button>
            <input
              type="number"
              className="w-16 border p-1 text-center"
              value={cartItem.qty}
              readOnly
            />
            <button
              onClick={() => handleAdd(cartItem)}
              className="px-2 py-1 bg-gray-200 rounded-r-lg"
            >
              +
            </button>
          </div>
        </td>
        <td className="p-3 pr-6 ">${cartItem.price * cartItem.qty}</td>
        <td className="p-3 pr-6 ">
          <button
            onClick={() => handleRemove(cartItem)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </td>
      </tr>
    );
  };

  const emptyCart = () => {
    return (
      <div className="text-center text-lg font-semibold">
        Your Cart is Empty
      </div>
    );
  };

  const cartTotal = () => {
    const subtotal = state.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shipping = 100; // Example shipping cost
    const total = subtotal + shipping;

    return (
      <div className="ml-10">
        <div className="w-[371px] h-full mx-auto">
          <h1 className="text-center text-2xl font-bold text-[#0D134E] mb-4">
            Cart Total
          </h1>
          <div className="bg-[#E8E6F1] p-6 rounded-lg shadow-md text-[#0D134E] flex flex-col gap-5">
            <div className="flex justify-between items-center border-b border-gray-400 pb-2 mb-2">
              <span className="font-medium">Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-400 pb-2 mb-2">
              <span className="font-medium">Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold border-b border-gray-400 pb-2 mb-2">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="space-y-2">
              <p>Shipping & taxes Calculated at checkout</p>
              <Link to="/checkout">
                <button className="w-full bg-[#19D16F] py-2.5 rounded-lg cursor-pointer text-white">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full my-10">
      <div className="container mx-auto px-30 flex h-full justify-center items-center">
        <div className="space-y-4 w-3/4">
          <table className="w-full border-collapse">
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
              {state.length === 0 ? emptyCart() : state.map(cartItems)}
            </tbody>
          </table>

          <div className="flex justify-between items-center">
            <button className="bg-[#FB2E86] px-4 py-2 rounded-lg text-white text-lg">
              Update Cart
            </button>
            <button className="bg-[#FB2E86] px-4 py-2 rounded-lg text-white text-lg">
              Clear Cart
            </button>
          </div>
        </div>
        {state.length !== 0 && cartTotal()}
      </div>
    </div>
  );
};

export default Cart;
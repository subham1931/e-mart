/* eslint-disable no-unused-vars */
import React from "react";
import discount1 from "../assets/products/discount1.png";

const DiscountedItem = () => {
return (
    <div className="w-full h-full py-10">
        <div className="">
            <h1 className="py-10 text-4xl font-bold text-[#151875] text-center">Discounted Item</h1>
            <div className="flex justify-center items-center bg-[#F6F7FB]">
                <div className="space-y-5 p-10">
                    <h1 className="text-3xl font-bold text-[#151875]">20% Discount Of All Products</h1>
                    <p className="text-[#FB2E86] text-xl font-semibold">Eams Sofa Compact</p>
                    <p className="text-[#B7BACB]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
                        maxime?
                    </p>
                    <ul className="text-[#B7BACB]">
                        <li>✔ Lorem ipsum dolor sit amet.</li>
                        <li>✔ Lorem ipsum dolor sit amet.</li>
                        <li>✔ Lorem ipsum dolor sit amet.</li>
                        <li>✔ Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <button className="bg-[#FB2E86] px-8 py-4 rounded-lg">Shop Now</button>
                </div>
                <div className="flex justify-center items-center">
                    <img src={discount1} alt="discount1" className="w-[600px] h-[507px]"/>
                </div>
            </div>
        </div>
    </div>
);
};

export default DiscountedItem;

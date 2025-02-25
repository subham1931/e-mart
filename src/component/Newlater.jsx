/* eslint-disable no-unused-vars */
import React from "react";
import newslater from "../assets/products/newslater.png";

const Newlater = () => {
  return (
    <div className="w-full flex justify-center items-center my-10">
      <img src={newslater} alt="newslater" />
      <section className="absolute w-120  text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#151875]">Get Latest Update By Subscribe Our Newslater</h1>
      <button className=" bg-[#FB2E86] px-8 py-4 rounded-lg">Subscribe</button>
      </section>
    </div>
  );
};

export default Newlater;

/* eslint-disable no-unused-vars */
import React from "react";
import Product from "../component/Product";
import product1 from "../assets/products/watch.png";
import headphone from "../assets/products/headphone.png";
import headphone2 from "../assets/products/headphone2.png";
import drone from "../assets/products/drone.png";

const LatestProduct = () => {
  const products = [
    { id: 1, name: "Realme Watch", price: "1000", image: product1 },
    { id: 2, name: "Headphone", price: "2000", image: headphone },
    { id: 3, name: "Pro headphone", price: "3000", image: headphone2 },
    { id: 4, name: "Drone", price: "4000", image: drone },
    { id: 5, name: "Realme Watch", price: "1000", image: product1 },
    { id: 6, name: "Headphone", price: "2000", image: headphone },
    { id: 7, name: "Pro headphone", price: "3000", image: headphone2 },
    { id: 8, name: "Drone", price: "4000", image: drone },
  ];

  return (
    <div className="w-full h-full py-10 flex justify-center ">
      <div className="mx-auto w-10/12">
        <h1 className="py-10 text-center text-4xl font-bold text-[#1A0B5B]">
          Latest Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default LatestProduct;

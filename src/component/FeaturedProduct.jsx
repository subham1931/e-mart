/* eslint-disable no-unused-vars */
import React from "react";
import Product from "../component/Product";
import chair1 from "../assets/products/chair1.png";
import chair2 from "../assets/products/chair2.png";
import chair3 from "../assets/products/chair3.png";
import chair4 from "../assets/products/chair4.png";


const FeaturedProduct = () => {
const products = [
    { id: 1, name: "Realme Watch", price: "1000", image: chair1 },
        { id: 2, name: "Headphone", price: "2000",image:chair2 },
        { id: 3, name: "Pro headphone", price: "3000",image:chair3 },
        { id: 4, name: "Drone", price: "4000",image:chair4 },
];

return (
    <div className="w-full h-full py-10 flex justify-center ">
        <div className="mx-auto w-10/12">
            <h1 className="py-10 text-center text-4xl font-bold text-[#1A0B5B]">
                Featured Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Product key={product.id} name={product.name} image={product.image} price={product.price} />
                ))}
            </div>
        </div>
    </div>
);
};

export default FeaturedProduct;
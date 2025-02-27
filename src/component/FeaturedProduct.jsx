/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Product from "../component/Product";
import productsApi from "../utils/ProductsApi";
import fetchAllProducts from "../api/ProductsApi";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products")
        if (!res.ok) {
          throw new Error("Failed to fetch products");
      }
      const data = await res.json();
        setProducts(data.products);
        console.log(data.products.map(product => product.id));
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="w-full h-full py-10 flex justify-center">
      <div className="mx-auto w-10/12">
        <h1 className="py-10 text-center text-4xl font-bold text-[#1A0B5B]">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.title}
              image={product.thumbnail}
              price={product.price}
              addToCart={() => console.log("featureProduct addToCart", product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

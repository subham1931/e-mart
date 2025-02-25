/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./screen/Layout";
import Home from "./screen/Home";
import Category from "./screen/Category";
import Cart from "./screen/Cart";
import ProductDetails from "./component/ProductDetails";
import Checkout from "./screen/Checkout";
// import Login from "./screen/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

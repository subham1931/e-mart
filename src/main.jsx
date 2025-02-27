import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";
import Layout from "./Layout";
import "./index.css";
// import App from "./App.jsx";
import { Home, Category, Checkout, Cart,ProductDetails } from "./screen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
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
    </Provider>
    <Toaster />
  </BrowserRouter>
);

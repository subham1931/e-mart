/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const state = useSelector((state) => state.handleCart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getActiveClass = (path) => {
    return location.pathname === path
      ? "text-[#FB2E86]"
      : "hover:text-gray-400";
  };

  return (
    <nav className="bg-white px-8 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <div
              className="text-lg font-bold"
              style={{ fontFamily: "Josefin Sans" }}
            >
              E-Mart
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-[500px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{ fontFamily: "Josefin Sans" }}
          />
          <button
            className="ml-2 px-4 py-2 bg-[#FB2E86] text-white rounded-md hover:scale-105 transition-transform duration-300 focus:outline-none"
            style={{ fontFamily: "Josefin Sans" }}
          >
            Search
          </button>
        </div>
        <div
          className="hidden md:flex space-x-4"
          style={{ fontFamily: "Josefin Sans" }}
        >
          <NavLink to="/" className={getActiveClass("/")}>
            Home
          </NavLink>
          <NavLink to="/category" className={getActiveClass("/category")}>
            Category
          </NavLink>
          <NavLink to="/cart" className={getActiveClass("/cart")}>
            Cart
          </NavLink>
          <NavLink to="/login" className={getActiveClass("/login")}>
            Login
          </NavLink>
          <NavLink to="/cart" className={getActiveClass("/cart")}>
            <FontAwesomeIcon icon={faCartShopping} className="mr-1" /> Cart (
            {state.length})
          </NavLink>
        </div>
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div
            className={`absolute right-0 mt-2 w-48 bg-white shadow-md ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <NavLink
              to="/"
              className={`block py-2 px-4 ${getActiveClass("/")}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className={`block py-2 px-4 ${getActiveClass("/category")}`}
            >
              Category
            </NavLink>
            <NavLink
              to="/cart"
              className={`block py-2 px-4 ${getActiveClass("/cart")}`}
            >
              Cart
            </NavLink>
            <NavLink
              to="/login"
              className={`block py-2 px-4 ${getActiveClass("/login")}`}
            >
              Login
            </NavLink>
            <NavLink
              to="/cart"
              className={`block py-2 px-4 ${getActiveClass("/cart")}`}
            >
              <p>Cart</p>
              <FontAwesomeIcon icon={faCartShopping} className="mr-1" /> (
              {state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

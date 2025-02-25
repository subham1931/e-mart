/* eslint-disable no-unused-vars */
import React from "react";
import Advertisement from "../component/Advertisement";
import FeaturedProduct from "../component/FeaturedProduct";
import LatestProduct from "../component/LatestProduct";
import Offer from "../component/Offer";
import DiscountedItem from "../component/DiscountedItem";
import Newlater from "../component/Newlater";
import Brand from "../component/Brand";

const Home = () => {
  return (
    <div className="">
      <Advertisement />
      <FeaturedProduct />
      <LatestProduct />
      <Offer />
      <DiscountedItem />
      <Newlater />
      <Brand />
    </div>
  );
};

export default Home;

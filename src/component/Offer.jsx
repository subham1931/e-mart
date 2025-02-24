/* eslint-disable no-unused-vars */
import React from "react";
import OfferCard from "./OfferCard";
import truck from "../assets/images/delivery-truck.png";
import support from '../assets/images/support.png'
import trust from '../assets/images/trust.png'

const Offer = () => {
  const products = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cumque.",
      icon: truck,
    },
    {
      id: 2,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cumque.",
      icon: support,
    },
    {
      id: 3,
      title: "Trusted",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cumque.",
      icon: trust,
    },
  ];
  return (
    <div className="w-full h-full py-10 flex justify-center ">
      <div className="mx-auto w-10/12">
        <h1 className="py-10 text-center text-4xl font-bold text-[#1A0B5B]">
          What E-Mart Offers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((offer) => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              icon={offer.icon}
              desc={offer.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;

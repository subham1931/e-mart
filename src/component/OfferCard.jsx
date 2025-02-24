/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import truck from '../assets/images/delivery-truck.png'

const OfferCard = ({icon, title, desc}) => {
  return (
    <div className=' border-gray-300 flex  flex-col justify-center items-center'>
        <img src={icon} alt='img' className='w-20 h-20'/>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <div className='w-[50%]'>
        <p className='text-center text-gray-400'>{desc}</p>
        </div>
    </div>
  )
}

OfferCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string
};

export default OfferCard
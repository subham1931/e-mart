/* eslint-disable no-unused-vars */
import React from 'react'
import Advertisement from '../component/Advertisement'
import FeaturedProduct from '../component/FeaturedProduct'
import LatestProduct from '../component/LatestProduct'
import Offer from '../component/Offer'
const Home = () => {
  return (
    <div className=''>
        <Advertisement />
        <FeaturedProduct />
        <LatestProduct />
        <Offer />
    </div>
  )
}

export default Home
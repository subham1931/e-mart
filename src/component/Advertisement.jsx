/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import banner1 from '../assets/banner/banner1.jpg';
// import banner2 from '../assets/banner/banner2.jpg';
// import banner3 from '../assets/banner/banner3.jpg';
import promotional from '../assets/banner/promotional.png';

const banners = [promotional,promotional,promotional];

const Advertisement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    //     }, 5000); // Auto-slide every 5 seconds
    //     return () => clearInterval(interval);
    // }, []);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg ">
            <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {banners.map((banner, index) => (
                    <img key={index} src={banner} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                    <span key={index} onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-[#FB2E86]' : 'bg-gray-400'}`}></span>
                ))}
            </div>
        </div>
    );
};

export default Advertisement;
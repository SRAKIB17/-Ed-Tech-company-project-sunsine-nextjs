/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselN = () => {
    return (
        <div className='p-4 rounded-md'>
            <Carousel autoPlay='true' interval={2000} emulateTouch="true" infiniteLoop="true">
                <div className='h-40 sm:h-48 md:h-56 lg:h-64 rounded-md'>
                    <img src="image2.jpg" className='h-full w-full rounded-md'/>
                </div>
                <div className='h-40 sm:h-48 md:h-56 lg:h-64 rounded-md'>
                    <img src="image3.jpg" className='h-full w-full rounded-md'/>
                </div>
                <div className='h-40 sm:h-48 md:h-56 lg:h-64 rounded-md'>
                    <img src="image4.jpg" className='h-full w-full rounded-md'/>
                </div>
                <div className='h-40 sm:h-48 md:h-56 lg:h-64 rounded-md'>
                    <img src="image5.jpg" className='h-full w-full rounded-md'/>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselN;
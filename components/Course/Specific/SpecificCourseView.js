/* eslint-disable @next/next/no-img-element */
import React from 'react';
import timeSince from '../../hooks/timeSince';
import Rating from '../Rating';

const SpecificCourseView = ({ course }) => {
    const { des, short_des, name, rating, thumbnail, time, price, content_publisher, discount_price, content_userID } = course;

    const getTimeSince = timeSince(time)
    return (
        <div>
            <figure className=''>
                <img
                    src={thumbnail} alt="Shoes"
                    className='sm:max-w-sm md:max-w-md rounded-md lg:max-w-lg h-auto w-full servicesComponent'
                />
            </figure>
            {/* *******CARD BODY ********* */}
            <div className='p-4 pt-6'>
                <h2 className="font-bold relative">
                    <p className='text-[21px]'>
                        {name}
                    </p>
                    {
                        (course?.new === 'true') &&
                        <div className="badge badge-secondary font-extralight absolute -top-4 right-0">
                            NEW
                        </div>
                    }
                </h2>
                <div className='text-[16px] text-gray-500 flex-col flex'>
                    <span>
                        Last Update: {getTimeSince}
                    </span>
                    <span className='flex items-center'>
                        Content Publisher:
                        <p className='pl-2 text-primary'>
                            {content_publisher}
                        </p>
                    </span>
                    <div>
                        <Rating rating={rating} />
                    </div>
                </div>
                <div className='text-xl flex gap-3 font-bold'>
                    {
                        discount_price &&
                        <span>
                            ${discount_price}
                        </span>
                    }
                    {
                        price &&
                        <span
                            className={
                                ((discount_price && price)) ? 'del_discount_price font-extralight text-gray-500 ' : ' '
                            }
                        >
                            ${price}
                        </span>
                    }
                </div>
            </div>

        </div>
    );
};

export default SpecificCourseView;
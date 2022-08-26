/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Cart from '../LogoSvg/Cart';
import Love_favorite_fitness_heart_favourite_hearth_like_valentine from '../LogoSvg/Love_favorite_fitness_heart_favourite_hearth_like_valentine';
import Rating from './Rating';
import styles from './course.module.css'
import timeSince from '../hooks/timeSince';
import CourseDescription from './CourseDescription';

const Course = ({ props }) => {
    const { des, short_des, name, rating, thumbnail, time, price, content_publisher, discount_price } = props;
    const getTimeSince = timeSince(time);
    return (
        <div>
            <div className="card bg-base-100 servicesComponent h-full">
                <div className='card-body p-0 relative'>
                    <div className={styles.cartCourseBody + ' relative'}>
                        <div>
                            <figure>
                                <img src={thumbnail} alt="Shoes" className='w-full h-auto' />
                            </figure>
                            {/* *******CARD BODY ********* */}
                            <div className='p-4 pt-6'>
                                <h2 className="text-[18px] font-bold relative">
                                    <p>
                                        {name}
                                    </p>
                                    {
                                        (props?.new === 'true') &&
                                        <div className="badge badge-secondary font-extralight absolute -top-4 right-0">
                                            NEW
                                        </div>
                                    }
                                </h2>
                                <span className='text-sm text-gray-500'>
                                    Last Update: {getTimeSince}
                                </span>
                                <div>
                                    <h1 className='text-sm text-gray-500'>
                                        Content Publisher: {content_publisher}
                                    </h1>
                                </div>
                                <div>
                                    <Rating rating={rating} />
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
                        {/* ***********DESCRIPTION*********** */}
                        <CourseDescription course={props} />
                    </div>
                    <div className='h-[60px]'></div>
                    <div className=' absolute bottom-0 flex justify-between gap-1 p-4 w-full'>
                        <button className='btn btn-info text-white btn-sm flex gap-1'>
                            <Cart size='20' color='currentColor' /> Add to Cart
                        </button>
                        <button className='btn btn-info text-white btn-sm flex gap-1'>
                            <Love_favorite_fitness_heart_favourite_hearth_like_valentine size='20' color='currentColor' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
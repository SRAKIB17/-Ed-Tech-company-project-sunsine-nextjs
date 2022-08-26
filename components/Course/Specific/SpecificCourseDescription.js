import React, { useState } from 'react';
import timeSince from '../../hooks/timeSince';
import Cart from '../../LogoSvg/Cart';
import Love_favorite_fitness_heart_favourite_hearth_like_valentine from '../../LogoSvg/Love_favorite_fitness_heart_favourite_hearth_like_valentine';
import { useRouter } from 'next/router';
import VideoDemo from './VideoDemo';

const SpecificCourseDescription = ({ course }) => {
    const { des, short_des, name, rating, thumbnail, time, price, content_publisher, discount_price, publisher_id, category, duration } = course;
    const categoryArr = category?.split(',');
    const getTimeSince = timeSince(time);
    const badge = [' btn-primary', ' btn-secondary', ' btn-accent', ' btn-info', ' btn-warning', ' btn-accent', ' btn-success'];

    const router = useRouter();
    const navigate = (path) => {
        router.replace(path)
    }

    const [demo, setDemo] = useState(null)
    const showVideoDemoHandle = (course) => {
        const getDemoInfo = {
            name: course?.name,
            demo: course?.demoVideo
        }
        setDemo(getDemoInfo)
    }
    return (
        <div>
            <div className='p-4 text-sm text-gray-700'>
                <div>
                    <h1 className='flex items-center gap-1'>
                        <span className='text-xl font-bold'>Category: </span>

                        <span className='flex flex-wrap gap-2 p-2'>
                            {
                                categoryArr?.map(cat =>
                                    <div
                                        onClick={() => navigate(`/courses/?cat=${cat}`)}
                                        key={cat}
                                        className={"btn btn-xs btn-outline cursor-pointer hover:text-white " +
                                            badge[Math.floor(Math.random() * badge.length)]
                                        }
                                    >
                                        {cat}
                                    </div>
                                )
                            }
                        </span>
                    </h1>
                    <h1 className='text-xl font-bold text-orange-500'>
                        Duration: {duration}
                    </h1>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-justify text-xl'>
                    {short_des}
                </p>
            </div>
            <div className='p-4 pl-5'>
                <div
                    dangerouslySetInnerHTML={{ __html: des }}
                    className="whitespace-pre-line"
                >
                </div>
            </div>
            <div className='flex justify-center gap-1 p-4 w-full'>
                <button className='btn btn-info text-white btn-sm flex gap-1'>
                    <Cart size='20' color='currentColor' />
                    Add to Cart
                </button>
                <button className='btn btn-info text-white btn-sm flex gap-1'>
                    <Love_favorite_fitness_heart_favourite_hearth_like_valentine size='20' color='currentColor' />
                </button>

                <label
                    htmlFor="demoVideo"
                    className="btn modal-button btn-sm btn-success text-white"
                    onClick={() => showVideoDemoHandle(course)}
                >
                    View Demo Video
                </label>
            </div>
            {/* <div className='p-5'>
                
            </div> */}
            {
                demo &&
                <VideoDemo demo={demo} setDemo={setDemo} />
            }

        </div>
    );
};

export default SpecificCourseDescription;
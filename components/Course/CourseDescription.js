/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import timeSince from '../hooks/timeSince';
import styles from './course.module.css'
const CourseDescription = ({ course }) => {
    const { des, short_des, name, rating, course_id, thumbnail, time, price, content_publisher, discount_price, duration, category } = course

    const getTimeSince = timeSince(time);
    const badge = [' btn-primary', ' btn-secondary', ' btn-accent', ' btn-info', ' btn-warning', ' btn-accent', ' btn-success'];

    const categoryArr = category?.split(',');
    const scrollTopDescriptionHandle = (e) => {
        //     const height = e.target.scrollHeight
        //     console.log(e.target.scrollTo(0,0))
        //   document.body.scrollTo(0,0)
    }
    const router = useRouter();

    const navigate = (path) => {
        router.replace(path)
    }

    return (
        <div
            className={styles.description + ' absolute top-0 bg-base-100 h-full w-full overflow-auto ' + styles.descriptionOverScrollbar}
        >
            <figure className=''>
                <img src={thumbnail} alt="Shoes" className='w-full h-auto' />
            </figure>
            <div className='p-4 text-sm text-gray-700'>
                <div className='flex flex-wrap gap-2 p-2'>
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
                </div>
                <div className='p-5'>
                    <button
                        onClick={() => navigate('/courses/view/' + course_id)}
                        className='btn btn-success text-white btn-sm w-full'
                    >
                        View Demo & Details
                    </button>
                </div>
                <h1>
                    Last Update: {getTimeSince}
                </h1>

                <h1>
                    Content Publisher: {content_publisher}
                </h1>
                <h1>
                    Duration: {duration}
                </h1>
            </div>
            <div className='p-4'>
                <p className='text-justify'>
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


        </div>
    );
};

export default CourseDescription;
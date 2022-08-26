import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import Service from './Service';
import { useQuery } from 'react-query';
import Pagination from '../hooks/Pagination';
import Loading from '../Loading/Loading';
import Course from './Course';

const Courses = () => {
    const router = useRouter()
    const { cat, page, showP } = router?.query || ' '
    const [getPage, setPage] = useState(1);
    const [show, setShow] = useState(6);

    const [lastPage, setLastPage] = useState(2);

    const { data, isLoading } = useQuery(['courses', cat, page, showP, show, getPage], () => axios.get(`/api/courses?cat=${cat}&show=${show}&page=${getPage}`))
    const count = data?.data?.count

    useEffect(() => {
        if (page) {
            setPage(eval(page))
        }
    }, [page])
    useEffect(() => {
        if (showP) {
            setPage(eval(showP))
        }
    }, [showP])

    useEffect(() => {
        const divided = Math.ceil(count / show)
        setLastPage(divided);
    }, [count, show])

    const courses = data?.data?.result
    const pageHandle = (jump) => {
        router.query.page = jump;
        setPage(eval(jump))
        router.push(router)
    }

    const categoryHandle = (catValue) => {
        router.query.cat = catValue;
        router.query.page = 1;
        router.push(router)
    }
    return (
        <div>
            <div>
                <h1 className='text-[25px] sm:text-3xl font-extrabold text-center'>
                    Courses to get you started
                </h1>
                <h6 className='text-lg font-bold text-center'>
                    Course Complete and get professional certificate
                </h6>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center p-4 gap-2'>
                <div >
                    <select
                        name=""
                        id=""
                        value={cat}
                        className='select-sm select select-info bg-blue-100'
                        onChange={(e) => categoryHandle(e.target.value)}
                    >
                        <option value="" disabled>Category</option>
                        <option value="design">Design</option>
                        <option value="programming">Programming</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="development">Web Development</option>
                        {/* <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option> */}
                    </select>
                </div>
                <div >
                    <select
                        name=""
                        id=""
                        value={show}
                        className='select-sm select select-info bg-blue-100'
                        onChange={(e) => {
                            const showing = e.target.value
                            router.query.showP = showing;
                            router.query.page = 1;
                            router.push(router)
                            setShow(eval(showing))
                        }
                        }
                    >
                        <option value="" disabled>Show Per Page</option>
                        <option value="1">1</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </div>

                <div>
                    <form action="" onSubmit={(e) => {
                        e.preventDefault()
                        pageHandle(e.target.pageJump.value)
                    }}
                        className="flex gap-1 items-center"
                    >
                        <input
                            type="number"
                            min='1'
                            name='pageJump'
                            max={lastPage}
                            className="input input-sm input-info w-16"
                            defaultValue={getPage}
                        />
                        <button className='btn btn-sm btn-info text-white'>
                            Jump
                        </button>
                    </form>
                </div>
                <div>
                    <form onSubmit={() => router.replace('/courses')}>
                        <input type="submit" value="reset" className='btn btn-sm font-extralight btn-warning text-white' />
                    </form>
                </div>
            </div>

            <div>
                <Pagination
                    lastPage={lastPage}
                    page={getPage}
                    pageHandle={pageHandle}
                />
            </div>
            <div
                className='m-4 md:mr-4  md:ml-4 xl:mr-36 xl:ml-36'>
                {
                    isLoading ?
                        <div className='relative h-56'>
                            <Loading />
                        </div>
                        :
                        <div className='grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-5'>
                            {
                                courses?.map((course, index) =>
                                    // <Service props={service} key={index} />
                                    <Course key={index} props={course} />
                                )
                            }
                        </div>
                }
            </div>

            <div>
                <Pagination
                    lastPage={lastPage}
                    page={getPage}
                    pageHandle={pageHandle}
                />
            </div>

        </div >
    );
};

export default Courses;

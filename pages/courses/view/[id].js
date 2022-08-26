/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header/Header';
import { useQuery } from 'react-query';
import axios from 'axios';
import Love_favorite_fitness_heart_favourite_hearth_like_valentine from '../../../components/LogoSvg/Love_favorite_fitness_heart_favourite_hearth_like_valentine';
import Cart from '../../../components/LogoSvg/Cart';
import Rating from '../../../components/Course/Rating';
import timeSince from '../../../components/hooks/timeSince';
import SpecificCourseDescription from '../../../components/Course/Specific/SpecificCourseDescription';
import SpecificCourseView from '../../../components/Course/Specific/SpecificCourseView';
import Footer from '../../../components/Footer/Footer';
import Loading from '../../../components/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    const { data, isLoading } = useQuery(['course', id], () => axios.get('/api/courses/' + id))
    const course = data?.data || {}



    const [user5, loading5, error5] = useAuthState(auth);
    if (loading5) {
        return <Loading />
    }

    if (!user5 && id) {
        const url = '/login?return_=' + '/view/' + id
        router.replace(url)
    }
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='min-h-screen'>
                {
                    isLoading ?
                        <div className='relative h-56'>
                            <Loading />
                        </div>
                        :
                        <div className='pt-4 sm:pt-8'>
                            <div>
                                <div className=" bg-base-100  h-full">
                                    <div className=''>
                                        <div className='flex lg:flex-row flex-col md:pl-20 md:pr-20 p-5'>
                                            <div className='w-full lg:w-[50%]'>
                                                <SpecificCourseView course={course} />
                                            </div>
                                            {/* ***********DESCRIPTION*********** */}
                                            {/* <CourseDescription course={props} /> */}
                                            <div className='w-full lg:w-[50%]'>
                                                <SpecificCourseDescription course={course} />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Index;
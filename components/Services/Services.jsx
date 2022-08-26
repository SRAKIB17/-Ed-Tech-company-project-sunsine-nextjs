import axios from 'axios';
import React, { useState } from 'react';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
const Services = () => {
    const { data, isLoading } = useQuery('apiServices', () => axios.get('/api/services'))
    const services = data?.data

    return (
        <div>
            <div>
                <h1 className='text-[25px] sm:text-3xl font-extrabold text-center'>
                    Digital marketing services that help you grow.
                </h1>
                <h6 className='text-lg font-bold text-center'>
                    Award-winning website design & creative digital agency services
                </h6>
            </div>
            <div className='m-4 lg:mr-10 lg:ml-10 xl:mr-52 xl:ml-40'>

                {
                    isLoading ?
                        <div className='relative h-56'>
                            <Loading />
                        </div>
                        :
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5'>
                            {
                                services?.map((service, index) =>
                                    <Service props={service} key={index} />
                                )
                            }
                        </div>
                }
            </div>
        </div >
    );
};

export default Services;
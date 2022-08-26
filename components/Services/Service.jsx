/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Arrow_right from '../LogoSvg/Arrow_right';

const Service = ({ props }) => {
    const { title, des, bg, icon, url } = props;
    const [imgShow, setImgShow] = useState(null)
    return (
        <div
            className=' bg-base-100 rounded-md servicesComponent overflow-hidden'
        >
            <div className='h-64 w-auto'>

                <div className='w-full h-full overflow-hidden servicesImg relative' >
                    <img src={bg} alt="" className='w-full h-full absolute' />
                    <div className='z-10 relative top-[45%] left-[45%] mr-[50px]'>
                        <button className='btn btn-warning btn-circle'>
                            <Arrow_right color='red' size='30'/>
                        </button>
                    </div>
                </div>

                <div className='p-4 servicesDes'>
                    <div className='flex gap-3 items-center'>
                        <span>
                            <img src={icon} alt="" className='h-20 w-20' />
                        </span>
                        <h1 className='font-bold text-xl'>
                            {title}
                        </h1>
                    </div>
                    <div>
                        <p className='p-2 text-justify'>
                            {des}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
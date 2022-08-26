import React from 'react';


const Loading = () => {
    return (
        <div>
            <div className='absolute flex justify-center items-center w-full z-10 mt-10'>
                <div className=' w-40 h-40 rounded-full border-b-4 animate-spin border-pink-600  '>

                </div>
            </div>
        </div>
    );
};

export default Loading;

import React from 'react';

const Google = ({ color = 'currentColor',strokeWidth='0', strokeColor='', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 64 64">
            <path d="M61.5,29.2H32.8v8.5h20.6c-1.1,11.8-10.7,16.9-20,16.9c-11.8,0-22.3-9.2-22.3-22.5c0-12.8,10-22.5,22.3-22.5
	c9.4,0,15.1,6.1,15.1,6.1l5.8-6.1c0,0-7.8-8.5-21.3-8.5C15.2,1,1.6,15.9,1.6,32c0,15.6,12.8,31,31.7,31C50,63,62,51.7,62,34.8
	C62.1,31.3,61.5,29.2,61.5,29.2L61.5,29.2z"/>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Google;
    
    
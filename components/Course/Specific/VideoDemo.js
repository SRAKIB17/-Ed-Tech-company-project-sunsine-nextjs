import React from 'react';

const VideoDemo = ({ demo, setDemo }) => {

    const title = demo?.name;
    const demoUrl = demo?.demo
    return (
        <div>

            <input type="checkbox" id="demoVideo" className="modal-toggle" />
            <label htmlFor="demoVideo" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <button
                        onClick={() => setDemo(null)}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </button>

                    <h3 className="text-lg font-bold pb-4">
                        {title}
                    </h3>
                    <div>
                        <video controls autoPlay className='w-full h-64'>
                            <source src={demoUrl ? '' : '/demoVideo.ogg'} />
                        </video>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default VideoDemo;
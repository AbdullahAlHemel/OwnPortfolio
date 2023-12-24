import React from 'react';

const WhatIDo = () => {
    return (
        <div>
            <h2 className='uppercase text-center font-semibold text-2xl mt-5'>Skills</h2>

           <h2 className='text-center mt-8 text-xl border font-bold text-[#00b5ff]'>Font-End</h2>
           <div className='grid md:grid-cols-2 p-10 gap-7'>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>JavaScript</h2><progress className="progress progress-info  w-100 h-3 mt-2.5 ml-5" value="50" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>React</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="75" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>CSS</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="85" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Html</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="80" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Tailwind</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="80" max="100"></progress></h2>
            </div>
           <h2 className='text-center mt-8 text-xl border font-bold text-[#ff00d3]'>Back-End</h2>
           <div className='grid md:grid-cols-2 p-10 gap-7'>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>MongoDB</h2><progress className="progress progress-secondary  w-100 h-3 mt-2.5 ml-5" value="65" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Firebase</h2><progress className="progress progress-secondary  w-100 h-3 mt-2.5 ml-5" value="50" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>React-Router</h2><progress className="progress progress-secondary w-100 h-3 mt-2.5 ml-5" value="60" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Express</h2><progress className="progress progress-secondary w-100 h-3 mt-2.5 ml-5" value="60" max="100"></progress></h2>
            </div>
            <h2 className='text-center mt-8 text-xl border font-bold text-[#ff5200]'>Tools</h2>


        </div>

    );
};

export default WhatIDo;